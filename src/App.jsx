import { Drawer } from "./components/Drawer";
import { AllIssues } from "./components/Workspace";
import { issues, teams, commands } from "./data/seed.json";
import { CommandPalette } from "./components/CommandPalette";

const App = () => {

   return (
      <div className="flex w-full bg-primary h-screen max-h-screen min-h-screen overflow-hidden">
         <Drawer teams={teams} />
         <AllIssues issues={issues} />
         <CommandPalette commands={commands}/>
      </div>
   );
};

export default App;
