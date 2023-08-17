import axios from "axios";
import { env } from "~/env.mjs";
import { createReportSchema, resolveReportSchema } from "~/schemas/user.schema";

import { TRPCError } from "@trpc/server";

import { createTRPCRouter, protectedProcedure } from "../trpc";

export const reportRouter = createTRPCRouter({
  report: protectedProcedure
    .input(createReportSchema)
    .mutation(async ({ ctx, input }) => {
      const { id, reason, type } = input;

      if (type === "USER") {
        const report = await ctx.prisma.user.update({
          where: { id },
          data: {
            reports: {
              create: {
                reason,
                type,
                creator: {
                  connect: {
                    id: ctx.session.user.id,
                  },
                },
              },
            },
          },
        });

        await axios.post(env.DISCORD_WEBHOOK_URL ?? "", {
          username: "Reports Bot",
          avatar_url: "",
          content: `New report from [${
            ctx.session.user.username
          }](https://outfits.bio/${encodeURI(ctx.session.user.username)})`,
          embeds: [
            {
              title: "Report",
              description: `**Type:** ${type}\n**Reason:** ${reason}\n**Offender:** [${
                report.username
              }](https://outfits.bio/${encodeURI(report.username ?? "")})`,
              color: 0xff0000,
            },
          ],
        });
      } else if (type === "POST") {
        await ctx.prisma.post.update({
          where: { id },
          data: {
            reports: {
              create: {
                reason,
                type,
                creator: {
                  connect: {
                    id: ctx.session.user.id,
                  },
                },
              },
            },
          },
        });
      }

      return true;
    }),

  resolve: protectedProcedure
    .input(resolveReportSchema)
    .mutation(async ({ ctx, input }) => {
      const { id } = input;

      const currentUser = await ctx.prisma.user.findUnique({
        where: { id: ctx.session.user.id },
        select: { admin: true },
      });

      if (!currentUser?.admin)
        throw new TRPCError({
          code: "FORBIDDEN",
          message: "You are not an admin.",
        });

      await ctx.prisma.report.update({
        where: { id },
        data: {
          resolved: true,
        },
      });

      return true;
    }),
});