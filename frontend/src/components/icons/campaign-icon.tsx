import type { SVGProps } from 'react';

export function CampaignIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg 
      width="24" 
      height="24" 
      viewBox="0 0 24 24" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M4 6V4C4 2.89543 4.89543 2 6 2H18C19.1046 2 20 2.89543 20 4V6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M4 12V6H20V12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M4 12H2L2 18C2 19.1046 2.89543 20 4 20H20C21.1046 20 22 19.1046 22 18V12H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M12 12L12 22M12 22L10 20M12 22L14 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
