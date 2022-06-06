import React from "react";
import clsx from "clsx";
import { Combobox } from "@headlessui/react";
import { PlusIcon, ArrowSmRightIcon } from "@heroicons/react/solid";
import {
   CogIcon,
   UserCircleIcon,
   FastForwardIcon,
} from "@heroicons/react/outline";
import { ProjectIcon } from "../icons/ProjectIcon";
import { ViewsIcon } from "../icons/ViewsIcon";
import { TemplatesIcon } from "../icons/TemplatesIcon";
import { TeamIcon } from "../icons/TeamIcon";

export const CommandGroup = ({ commands, group }) => {
   return (
      <React.Fragment>
         {/* only show the header when there are commands belonging to this group */}
         {commands.filter((command) => command.group === group).length >= 1 && (
            <div className="flex items-center h-6 flex-shrink-0 bg-accent/50">
               <span className="text-xs text-slate-100 px-3.5">{group}</span>
            </div>
         )}
         {commands
            .filter((command) => command.group === group)
            .map((command, idx) => (
               <Combobox.Option key={idx} value={command}>
                  {({ active }) => (
                     <div
                        className={clsx(
                           "w-full h-[46px] text-white flex items-center hover:bg-primary/40 cursor-default transition-colors duration-100 ease-in",
                           active ? "bg-primary/40" : ""
                        )}
                     >
                        <div className="px-3.5 flex items-center w-full">
                           <div className="mr-3 flex items-center justify-center w-4">
                              {mapCommandGroupToIcon(
                                 command.group.toLowerCase()
                              )}
                           </div>
                           <span className="text-sm text-left flex flex-auto">
                              {command.name}
                           </span>
                           <span className="text-[10px]">{command.shortcut}</span>
                        </div>
                     </div>
                  )}
               </Combobox.Option>
            ))}
      </React.Fragment>
   );
};

// prettier-ignore
const mapCommandGroupToIcon = (group) => {
   switch (group) {
      case "issue":
         return <PlusIcon className="w-4 h-4 text-white"/>;
      case "project":
         return <ProjectIcon/>
      case "views":
         return <ViewsIcon/>
      case "team":
         return <TeamIcon/>
      case "templates":
         return <TemplatesIcon/>
      case "navigation":
         return <ArrowSmRightIcon className="w-4 h-4 text-white"/>
      case "settings":
         return <CogIcon className="w-4 h-4 text-white"/>
      case "account":
         return <UserCircleIcon className="w-4 h-4 text-white"/>
      default:
         return <FastForwardIcon className="w-4 h-4 text-white"/>
   }
};
