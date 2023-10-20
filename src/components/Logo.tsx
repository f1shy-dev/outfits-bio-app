import { cva } from 'class-variance-authority';
import type { VariantProps } from 'class-variance-authority';
import { forwardRef } from 'react';
import { cn } from '~/utils/cn.util';

const variants = cva('', {
    variants: {
        size: {
            sm: 'w-6 h-6',
            md: 'w-8 h-8',
            lg: 'w-10 h-10',
        },
        variant: {
            white: 'fill-white dark:fill-white',
            black: 'fill-black dark:fill-black',
            auto: 'fill-black dark:fill-white'
        }
    },
    defaultVariants: {
        size: 'md',
        variant: 'auto'
    }
});

export interface LogoProps
    extends React.ButtonHTMLAttributes<SVGSVGElement>,
    VariantProps<typeof variants> {
}

export const Logo = forwardRef<SVGSVGElement, LogoProps>(({ className, size, variant, ...props }, ref) => {
    return <svg ref={ref} className={cn(variants({ size, className, variant }))} {...props} viewBox="0 0 500 400" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M361.421 0.52398C370.696 -1.0992 379.475 1.0785 386.151 6.64401H386.144C392.718 12.1286 396.338 20.1558 396.338 29.2516V123.496C396.338 132.26 389.478 140.321 380.72 141.856L355.821 146.218C351.098 147.043 346.403 145.853 342.918 142.952C339.468 140.078 337.495 135.756 337.495 131.083V112.107C337.495 111.309 336.494 110.944 335.977 111.56L160.639 318.631C157.264 322.506 152.657 324.616 148.029 324.616C146.26 324.616 144.491 324.305 142.789 323.676C137.182 321.593 133.698 316.488 133.698 310.34V267.1C133.698 257.429 137.72 247.482 144.736 239.786L290.336 73.2425C290.86 72.6339 290.329 71.7006 289.533 71.8426L251.983 78.4226C247.274 79.2476 242.565 78.0575 239.08 75.1495C235.63 72.2755 233.657 67.9542 233.657 63.2812V38.5367C233.657 29.7722 240.516 21.7112 249.274 20.176L361.421 0.52398ZM378.019 169.617C382.735 168.785 387.437 169.982 390.922 172.884V172.911C394.372 175.785 396.345 180.106 396.345 184.779V209.524C396.345 218.288 389.486 226.349 380.728 227.884L360.278 231.468C356.44 232.145 353.079 236.026 353.079 239.786V283.662C353.079 304.613 344.933 325.679 330.132 342.977C315.352 360.249 295.644 371.786 274.624 375.472L141.735 398.756C136.972 399.587 132.269 400 127.669 400C111.255 400 96.121 394.752 84.0625 384.696C68.9213 372.063 60.5783 353.412 60.5783 332.178V288.302C60.5783 287.416 60.381 286.192 59.4419 285.407C58.6525 284.751 57.4616 284.515 56.087 284.758L42.6811 287.105C31.3167 289.093 20.5716 286.449 12.426 279.652C4.40966 272.971 0 263.158 0 252.027V174.838C0 145.096 11.5958 115.158 32.6505 90.5487C53.6781 65.9664 81.7079 49.5469 111.575 44.3126L187.635 30.9834C192.351 30.1515 197.053 31.3485 200.537 34.2497C203.987 37.1239 205.961 41.4452 205.961 46.1181V70.8627C205.961 79.627 199.101 87.6881 190.343 89.2231L116.121 102.228C84.5456 107.759 58.8498 137.752 58.8498 169.083V220.378C58.8498 223.069 61.2997 225.112 63.9673 224.645L92.8001 219.593C99.7276 218.376 106.58 220.094 111.616 224.287C116.577 228.425 119.421 234.708 119.421 241.524V315.582C119.421 323.183 122.293 329.756 127.506 334.105C132.875 338.582 140.177 340.286 148.077 338.9L262.865 318.788C280.163 315.751 294.229 299.352 294.229 282.222V216.408C294.229 198.406 308.377 181.817 326.444 178.652L378.019 169.617Z" />
    </svg>
});

Logo.displayName = 'Logo';