import { useState } from "react";
import clsx from "clsx";
import { IssueStatus } from "./Workspace";

export const IssuePreview = ({ issue }) => {
   const [checked, setChecked] = useState(false);

   return (
      <a href="" className="w-full h-11 block">
         <div
            className={clsx(
               "group flex items-center h-full pl-3 pr-7 hover:bg-primary-dark border-b border-[#2f3447] transition-colors duration-100 ease-in",
               { "bg-[rgba(125,87,193,0.15)]": checked }
            )}
         >
            <div className="flex items-center">
               <div className="relative -left-1 min-w-[14px] h-[22px] p-1 flex">
                  <input
                     type="checkbox"
                     checked={checked}
                     onChange={() => setChecked(!checked)}
                     className="relative appearance-none bg-transparent h-3.5 w-3.5 p-[2px] rounded-[3px] border border-gray-200 opacity-0 group-hover:opacity-100 checked:opacity-100 checked:border-none flex-shrink-0 cursor-pointer bg-no-repeat bg-[center] checked:bg-[#7d57c1] checked:bg-[url('data:image/svg+xml;utf8,%3Csvg%20width=%2210%22%20height=%229%22%20viewBox=%220%200%2010%208%22%20xmlns=%22http://www.w3.org/2000/svg%22%20fill=%22%23FFFFFF%22%3E%3Cpath%20d=%22M3.46975%205.70757L1.88358%204.1225C1.65832%203.8974%201.29423%203.8974%201.06897%204.1225C0.843675%204.34765%200.843675%204.7116%201.06897%204.93674L3.0648%206.93117C3.29006%207.15628%203.65414%207.15628%203.8794%206.93117L8.93103%201.88306C9.15633%201.65792%209.15633%201.29397%208.93103%201.06883C8.70578%200.843736%208.34172%200.843724%208.11646%201.06879C8.11645%201.0688%208.11643%201.06882%208.11642%201.06883L3.46975%205.70757Z%22%20stroke-width=%220.2%22%20/%3E%3C/svg%3E')]"
                  />
               </div>
            </div>
            <div
               role="button"
               className="ml-1 flex items-center flex-shrink-0 h-8"
            >
               <svg fill="#c4c8ce" width="16" height="16" viewBox="0 0 16 16">
                  <rect x="1" y="8" width="3" height="6" rx="1"></rect>
                  <rect x="6" y="5" width="3" height="9" rx="1"></rect>
                  <rect x="11" y="2" width="3" height="12" rx="1"></rect>
               </svg>
            </div>
            <span className="ml-2 text-xs text-gray-300 min-w-[46px]">
               {issue.issueId}
            </span>
            <div
               role="button"
               className="flex items-center flex-shrink-0 h-9 ml-4"
            >
               <PreviewIcon status={issue.status} />
            </div>
            <span className="ml-2 text-[13px] text-gray-100 font-medium">
               {issue.title}
            </span>
            <div className="flex justify-between items-center h-auto flex-auto">
               <div className="flex flex-auto"></div>
               <div className="cursor-pointer">
                  <div
                     role="button"
                     className={clsx(
                        "rounded-[48px] h-[27px] pl-2 pr-1.5 max-w-[112px] flex-shrink-0 flex items-center border",
                        checked
                           ? "border-[#7d57c14d] bg-[#7d57c126]"
                           : "border-accent bg-primary"
                     )}
                  >
                     <div className="w-[7px] h-[7px] flex-shrink-0 flex items-center justify-center bg-[#4ea7fc] rounded-full"></div>
                     <span className="mr-[1px] ml-1.5 text-xs text-left text-gray-200">
                        Improvement
                     </span>
                  </div>
               </div>
            </div>
            <div className="flex items-center flex-shrink-0 ml-2">
               <span className="ml-2 text-xs text-gray-300">Feb 10</span>
            </div>
            <div className="flex items-center flex-shrink-0 ml-2 h-9">
               <span className="relative inline-block w-[18px] h-[18px] flex-shrink-0 text-[9px] text-gray-100">
                  <div
                     className="w-full h-full rounded-full flex items-center justify-center flex-shrink-0 bg-[rgb(231,141,113)]"
                     style={{ textShadow: "rgb(0 0 0 / 40%) 0px 1px 2px" }}
                  >
                     MO
                  </div>
                  <span className="absolute w-2 h-2 rounded-full -bottom-[2px] -right-[2px] bg-[rgb(76,183,130)]"></span>
               </span>
            </div>
         </div>
      </a>
   );
};

const PreviewIcon = ({ status }) => {
   switch (status) {
      case IssueStatus.Todo:
         return (
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
               <rect
                  x="1"
                  y="1"
                  width="12"
                  height="12"
                  rx="6"
                  stroke="#e2e2e2"
                  strokeWidth="2"
                  fill="none"
               ></rect>
               <path
                  fill="#e2e2e2"
                  stroke="none"
                  d="M 3.5,3.5 L3.5,0 A3.5,3.5 0 0,1 3.5, 0 z"
                  transform="translate(3.5,3.5)"
               ></path>
            </svg>
         );
      case IssueStatus.InProgress:
         return (
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
               <rect
                  x="1"
                  y="1"
                  width="12"
                  height="12"
                  rx="6"
                  stroke="#f2c94c"
                  strokeWidth="2"
                  fill="none"
               ></rect>
               <path
                  fill="#f2c94c"
                  stroke="none"
                  d="M 3.5,3.5 L3.5,0 A3.5,3.5 0 0,1 3.5, 7 z"
                  transform="translate(3.5,3.5)"
               ></path>
            </svg>
         );
      case IssueStatus.Done:
         return (
            <svg width="14" height="14" viewBox="0 0 14 14">
               <path
                  fill="#5e6ad2"
                  stroke="#5e6ad2"
                  d="M9.54541 3.54541L9.89896 3.89896L9.54541 3.54541L5.5 7.59081L4.45459 6.54541C3.92739 6.0182 3.07261 6.0182 2.54541 6.54541C2.0182 7.07261 2.0182 7.92739 2.54541 8.45459L4.54541 10.4546C5.07261 10.9818 5.92739 10.9818 6.45459 10.4546L11.4546 5.45459C11.9818 4.92739 11.9818 4.07261 11.4546 3.54541L11.101 3.89896L11.4546 3.54541C10.9274 3.0182 10.0726 3.0182 9.54541 3.54541ZM0.5 7C0.5 3.41015 3.41015 0.5 7 0.5C10.5899 0.5 13.5 3.41015 13.5 7C13.5 10.5899 10.5899 13.5 7 13.5C3.41015 13.5 0.5 10.5899 0.5 7Z"
               ></path>
            </svg>
         );
      case IssueStatus.InReview:
         return (
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
               <rect
                  x="1"
                  y="1"
                  width="12"
                  height="12"
                  rx="6"
                  stroke="#0f783c"
                  strokeWidth="2"
                  fill="none"
               ></rect>
               <path
                  fill="#0f783c"
                  stroke="none"
                  d="M 3.5,3.5 L3.5,0 A3.5,3.5 0 1,1 0, 3.5 z"
                  transform="translate(3.5,3.5)"
               ></path>
            </svg>
         );
      case IssueStatus.Backlog:
         return (
            <svg width="14" height="14" viewBox="0 0 14 14">
               <path
                  d="M13.9408 7.91426L11.9576 7.65557C11.9855 7.4419 12 7.22314 12 7C12 6.77686 11.9855 6.5581 11.9576 6.34443L13.9408 6.08573C13.9799 6.38496 14 6.69013 14 7C14 7.30987 13.9799 7.61504 13.9408 7.91426ZM13.4688 4.32049C13.2328 3.7514 12.9239 3.22019 12.5538 2.73851L10.968 3.95716C11.2328 4.30185 11.4533 4.68119 11.6214 5.08659L13.4688 4.32049ZM11.2615 1.4462L10.0428 3.03204C9.69815 2.76716 9.31881 2.54673 8.91341 2.37862L9.67951 0.531163C10.2486 0.767153 10.7798 1.07605 11.2615 1.4462ZM7.91426 0.0591659L7.65557 2.04237C7.4419 2.01449 7.22314 2 7 2C6.77686 2 6.5581 2.01449 6.34443 2.04237L6.08574 0.059166C6.38496 0.0201343 6.69013 0 7 0C7.30987 0 7.61504 0.0201343 7.91426 0.0591659ZM4.32049 0.531164L5.08659 2.37862C4.68119 2.54673 4.30185 2.76716 3.95716 3.03204L2.73851 1.4462C3.22019 1.07605 3.7514 0.767153 4.32049 0.531164ZM1.4462 2.73851L3.03204 3.95716C2.76716 4.30185 2.54673 4.68119 2.37862 5.08659L0.531164 4.32049C0.767153 3.7514 1.07605 3.22019 1.4462 2.73851ZM0.0591659 6.08574C0.0201343 6.38496 0 6.69013 0 7C0 7.30987 0.0201343 7.61504 0.059166 7.91426L2.04237 7.65557C2.01449 7.4419 2 7.22314 2 7C2 6.77686 2.01449 6.5581 2.04237 6.34443L0.0591659 6.08574ZM0.531164 9.67951L2.37862 8.91341C2.54673 9.31881 2.76716 9.69815 3.03204 10.0428L1.4462 11.2615C1.07605 10.7798 0.767153 10.2486 0.531164 9.67951ZM2.73851 12.5538L3.95716 10.968C4.30185 11.2328 4.68119 11.4533 5.08659 11.6214L4.32049 13.4688C3.7514 13.2328 3.22019 12.9239 2.73851 12.5538ZM6.08574 13.9408L6.34443 11.9576C6.5581 11.9855 6.77686 12 7 12C7.22314 12 7.4419 11.9855 7.65557 11.9576L7.91427 13.9408C7.61504 13.9799 7.30987 14 7 14C6.69013 14 6.38496 13.9799 6.08574 13.9408ZM9.67951 13.4688L8.91341 11.6214C9.31881 11.4533 9.69815 11.2328 10.0428 10.968L11.2615 12.5538C10.7798 12.9239 10.2486 13.2328 9.67951 13.4688ZM12.5538 11.2615L10.968 10.0428C11.2328 9.69815 11.4533 9.31881 11.6214 8.91341L13.4688 9.67951C13.2328 10.2486 12.924 10.7798 12.5538 11.2615Z"
                  stroke="none"
                  fill="#bec2c8"
               ></path>
            </svg>
         );
      default:
         return (
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
               <rect
                  x="1"
                  y="1"
                  width="12"
                  height="12"
                  rx="6"
                  stroke="#e2e2e2"
                  strokeWidth="2"
                  fill="none"
               ></rect>
               <path
                  fill="#e2e2e2"
                  stroke="none"
                  d="M 3.5,3.5 L3.5,0 A3.5,3.5 0 0,1 3.5, 0 z"
                  transform="translate(3.5,3.5)"
               ></path>
            </svg>
         );
   }
};
