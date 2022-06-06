import Fuse from "fuse.js";
import { Dialog, Combobox, Transition } from "@headlessui/react";
import { useState, Fragment, useEffect } from "react";
import { CommandGroup } from "./CommandGroup";

export const CommandPalette = ({ commands }) => {
   const [isOpen, setIsOpen] = useState(false);
   const [query, setQuery] = useState("");

   const fuse = new Fuse(commands, { includeScore: true, keys: ["name"] });

   const filteredCommands =
      query === ""
         ? commands
         : fuse.search(query).map((res) => ({ ...res.item }));

   useEffect(() => {
      const onKeydown = (e) => {
         if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
            e.preventDefault();
            setIsOpen(true);
         }
      };

      window.addEventListener("keydown", onKeydown);

      return () => {
         window.removeEventListener("keydown", onKeydown);
      };
   }, []);

   useEffect(() => {
      if (!isOpen) {
         setQuery("");
      }
   }, [isOpen]);

   return (
      <Transition.Root show={isOpen}>
         <Dialog
            open={isOpen}
            onClose={setIsOpen}
            className="fixed inset-0 p-4 pt-[15vh] overflow-y-auto"
         >
            <Dialog.Overlay className="fixed inset-0 backdrop-blur-[1px]" />
            <Transition.Child
               as={Fragment}
               enter="transition-opacity duration-100"
               enterFrom="opacity-0"
               enterTo="opacity-100"
               leave="transition-opacity duration-100"
               leaveFrom="opacity-100"
               leaveTo="opacity-0"
               // afterLeave={() => {console.log("leaving...")}}
            >
               <Combobox
                  as="div"
                  className="bg-accent-dark max-w-2xl mx-auto rounded-lg shadow-2xl relative flex flex-col"
                  onChange={(command) => {
                     // we have access to the selected command
                     // a redirect can happen here or any action can be executed
                     setIsOpen(false)
                  }}
               >
                  <div className="mx-4 mt-4 px-2 h-[25px] text-xs text-slate-100 bg-primary/30 rounded self-start flex items-center flex-shrink-0">
                     Issue
                  </div>
                  <div className="flex items-center text-lg font-medium border-b border-slate-500">
                     <Combobox.Input
                        className="p-5 text-white placeholder-gray-200 w-full bg-transparent border-0 outline-none"
                        placeholder="Type a command or search..."
                        onChange={(e) => setQuery(e.target.value)}
                     />
                  </div>

                  <Combobox.Options
                     className="max-h-72 overflow-y-auto flex flex-col"
                     static
                  >
                     <CommandGroup commands={filteredCommands} group="Issue"/>
                     <CommandGroup commands={filteredCommands} group="Project"/>
                     <CommandGroup commands={filteredCommands} group="Views"/>
                     <CommandGroup commands={filteredCommands} group="Team"/>
                     <CommandGroup commands={filteredCommands} group="Templates"/>
                     <CommandGroup commands={filteredCommands} group="Navigation"/>
                     <CommandGroup commands={filteredCommands} group="Settings"/>
                     <CommandGroup commands={filteredCommands} group="Account"/>
                  </Combobox.Options>
               </Combobox>
            </Transition.Child>
         </Dialog>
      </Transition.Root>
   );
};
