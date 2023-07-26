import '~/styles/globals.css';

import { SessionProvider } from 'next-auth/react';
import { metadata } from 'next-seo.config';
import Head from 'next/head';
import { Toaster } from 'react-hot-toast';
import { api } from '~/utils/api.util';

import { Analytics } from '@vercel/analytics/react';

import type { Session } from 'next-auth';
import type { AppType } from 'next/app';

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta username="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{metadata.title}</title>
        <link rel="icon" href="favicon.ico" sizes="32px" />
        <meta username="description" content={metadata.description} />
        <meta property="og:locale" content="en_US" />
        <meta property="og:url" content={metadata.url} />
        <meta property="og:type" content={metadata.og.type} />
        <meta property="og:title" content={metadata.og.title} />
        <meta property="og:description" content={metadata.og.description} />
        <meta property="og:image" content={metadata.og.image} />
        <meta property="og:site_name" content={metadata.og.siteName} />
        <meta username="twitter:card" content={metadata.twitter.card} />
        <meta username="twitter:domain" content={metadata.twitter.domain} />
        <meta username="twitter:url" content={metadata.twitter.url} />
        <meta username="twitter:title" content={metadata.twitter.title} />
        <meta username="twitter:description" content={metadata.twitter.description} />
        <meta username="twitter:image" content={metadata.twitter.image} />
      </Head>

      <SessionProvider session={session}>
        <Toaster />
        <Analytics />
        <Component {...pageProps} />
      </SessionProvider>

    </>
  );
};

export default api.withTRPC(MyApp);
