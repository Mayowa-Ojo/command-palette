import React from "react";
import clsx from "clsx";

export const DrawerDisclosure = ({ team }) => {
   const [open, setOpen] = React.useState(false);

   return (
      <div className="h-auto overflow-visible">
         <div className="mb-2">
            <button
               className="group peer w-full px-1.5 mt-2 flex items-center overflow-hidden relative rounded hover:bg-accent"
               onClick={() => setOpen(!open)}
            >
               <div className="flex items-center h-7 w-full space-x-2">
                  <svg
                     width="16"
                     height="16"
                     viewBox="0 0 16 16"
                     fill="#00b2bf"
                     className="bg-accent p-[3px] rounded"
                  >
                     <path d="M1 3C1 1.89543 1.89543 1 3 1H9C10.1046 1 11 1.89543 11 3V3.5H6C4.61929 3.5 3.5 4.61929 3.5 6V11H3C1.89543 11 1 10.1046 1 9V3Z"></path>
                     <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M7 5C5.89543 5 5 5.89543 5 7V13C5 14.1046 5.89543 15 7 15H13C14.1046 15 15 14.1046 15 13V7C15 5.89543 14.1046 5 13 5H7ZM10 10C10.9665 10 11.5 9.2165 11.5 8.25C11.5 7.2835 10.9665 6.5 10 6.5C9.0335 6.5 8.5 7.2835 8.5 8.25C8.5 9.2165 9.0335 10 10 10ZM7 12.5616C7 11.5144 7.9841 10.746 9 11C9.47572 11.7136 10.5243 11.7136 11 11C12.0159 10.746 13 11.5144 13 12.5616V13.0101C13 13.2806 12.7806 13.5 12.5101 13.5H7.48995C7.21936 13.5 7 13.2806 7 13.0101V12.5616Z"
                     ></path>
                  </svg>
                  <span className="text-[13px] font-medium text-gray-50">
                     {team.name}
                  </span>
                  <svg
                     width="6"
                     height="7"
                     viewBox="0 0 6 7"
                     fill="#c4c8ce"
                     className="ml-2 rotate-90"
                  >
                     <path d="M5.25 3.20126C5.58333 3.39371 5.58333 3.87484 5.25 4.06729L0.749999 6.66537C0.416666 6.85782 -2.38418e-07 6.61725 -2.38418e-07 6.23235L-2.38418e-07 1.0362C-2.38418e-07 0.651301 0.416666 0.410738 0.75 0.603188L5.25 3.20126Z"></path>
                  </svg>
               </div>
               <div className="flex items-center opacity-0 group-hover:opacity-90">
                  <svg
                     width="14"
                     height="14"
                     viewBox="0 0 14 14"
                     fill="#c4c8ce"
                  >
                     <path d="M10 7C10 7.825 10.675 8.5 11.5 8.5C12.325 8.5 13 7.825 13 7C13 6.175 12.325 5.5 11.5 5.5C10.675 5.5 10 6.175 10 7ZM8.5 7C8.5 6.175 7.825 5.5 7 5.5C6.175 5.5 5.5 6.175 5.5 7C5.5 7.825 6.175 8.5 7 8.5C7.825 8.5 8.5 7.825 8.5 7ZM4 7C4 6.175 3.325 5.5 2.5 5.5C1.675 5.5 1 6.175 1 7C1 7.825 1.675 8.5 2.5 8.5C3.325 8.5 4 7.825 4 7Z"></path>
                  </svg>
               </div>
            </button>
            <div
               className={clsx(
                  "transition-[max-height] duration-300 ease-in-out",
                  open
                     ? "max-h-[500px] overflow-visible"
                     : "max-h-0 overflow-hidden"
               )}
            >
               <div className="rounded m-[1px] hover:bg-accent">
                  <a href="">
                     <span className="flex items-center h-7 pl-4 pr-0.5 text-gray-50 font-medium text-[13px]">
                        <svg
                           width="16"
                           height="16"
                           viewBox="0 0 16 16"
                           fill="#c4c8ce"
                           className="sc-izAYdv kBUTAF"
                        >
                           <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M12.5 11.2204C13.3829 10.8346 13.9999 9.95362 13.9999 8.92853V4.5C13.9999 3.11929 12.8806 2 11.4999 2H7.07132C6.04623 2 5.16524 2.61697 4.77942 3.49983L10 3.49983C11.3807 3.49983 12.5 4.61912 12.5 5.99983V11.2204ZM4.5 13.9998C3.11929 13.9998 2 12.8805 2 11.4998V7.07126C2 5.69055 3.11929 4.57126 4.5 4.57126L8.92853 4.57126C10.3092 4.57126 11.4285 5.69055 11.4285 7.07126V11.4998C11.4285 12.8805 10.3092 13.9998 8.92853 13.9998H4.5ZM8 9.49979C8 10.3282 7.32843 10.9998 6.5 10.9998C5.67157 10.9998 5 10.3282 5 9.49979C5 8.67136 5.67157 7.99979 6.5 7.99979C7.32843 7.99979 8 8.67136 8 9.49979ZM9.5 9.49979C9.5 11.1566 8.15685 12.4998 6.5 12.4998C4.84315 12.4998 3.5 11.1566 3.5 9.49979C3.5 7.84293 4.84315 6.49979 6.5 6.49979C8.15685 6.49979 9.5 7.84293 9.5 9.49979Z"
                           ></path>
                        </svg>
                        <div className="flex flex-auto items-center justify-between ml-2.5">
                           <span>Issues</span>
                        </div>
                     </span>
                  </a>
               </div>
               <div className="relative ml-6 pl-1.5 border-l border-gray-600">
                  <div className="rounded m-[1px] bg-accent">
                     <a href="" className="flex pl-1">
                        <span className="flex items-center flex-grow h-[27px] pl-1.5 pr-[2px] text-left font-medium text-xs text-gray-50">
                           Active
                        </span>
                     </a>
                  </div>
                  <div className="rounded m-[1px] hover:bg-accent">
                     <a href="" className="flex pl-1">
                        <span className="flex items-center flex-grow h-[27px] pl-1.5 pr-[2px] text-left font-medium text-xs text-gray-50">
                           Backlog
                        </span>
                     </a>
                  </div>
                  <div className="rounded m-[1px] hover:bg-accent">
                     <a href="" className="flex pl-1">
                        <span className="flex items-center flex-grow h-[27px] pl-1.5 pr-[2px] text-left font-medium text-xs text-gray-50">
                           Board
                        </span>
                     </a>
                  </div>
               </div>
               <div className="rounded m-[1px] hover:bg-accent">
                  <a href="">
                     <span className="flex items-center h-7 pl-4 pr-0.5 text-gray-50 font-medium text-[13px]">
                        <svg
                           width="16"
                           height="16"
                           viewBox="-3 -3 16 16"
                           stroke="none"
                           fill="#c4c8ce"
                           className="sc-brycaw gshCqY"
                        >
                           <path d="M3.45455 0H0.545455C0.244208 0 0 0.244208 0 0.545455V3.45455C0 3.75579 0.244208 4 0.545455 4H3.45455C3.75579 4 4 3.75579 4 3.45455V0.545455C4 0.244208 3.75579 0 3.45455 0Z"></path>
                           <path d="M9.95479 0H7.0457C6.74445 0 6.50024 0.244208 6.50024 0.545455V3.45455C6.50024 3.75579 6.74445 4 7.0457 4H9.95479C10.256 4 10.5002 3.75579 10.5002 3.45455V0.545455C10.5002 0.244208 10.256 0 9.95479 0Z"></path>
                           <path d="M3.45455 6.50024H0.545455C0.244208 6.50024 0 6.74445 0 7.0457V9.95479C0 10.256 0.244208 10.5002 0.545455 10.5002H3.45455C3.75579 10.5002 4 10.256 4 9.95479V7.0457C4 6.74445 3.75579 6.50024 3.45455 6.50024Z"></path>
                           <path d="M9.95479 6.50024H7.0457C6.74445 6.50024 6.50024 6.74445 6.50024 7.0457V9.95479C6.50024 10.256 6.74445 10.5002 7.0457 10.5002H9.95479C10.256 10.5002 10.5002 10.256 10.5002 9.95479V7.0457C10.5002 6.74445 10.256 6.50024 9.95479 6.50024Z"></path>
                        </svg>
                        <div className="flex flex-auto items-center justify-between ml-2.5">
                           <span>Projects</span>
                        </div>
                     </span>
                  </a>
               </div>
            </div>
         </div>
      </div>
   );
};
