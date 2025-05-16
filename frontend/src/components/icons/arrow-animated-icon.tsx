import type { SVGProps } from 'react';

export function ArrowAnimatedIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg 
        width="35" 
        height="35" 
        viewBox="0 0 35 35" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <g clipPath="url(#clip0_506_8687)">
        <path d="M9.23421 25.317L25.108 9.44324" stroke="currentColor" strokeWidth="2.02166" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M9.57797 9.44324H25.108V24.9732" stroke="currentColor" strokeWidth="2.02166" strokeLinecap="round" strokeLinejoin="round"/>
        </g>
        <defs>
        <clipPath id="clip0_506_8687">
        <rect width="34.3682" height="34.3682" fill="white" transform="translate(0.272308 0.272461)"/>
        </clipPath>
        </defs>
    </svg>
  );
}
