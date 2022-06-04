import { Drawer } from "./components/Drawer";
import { AllIssues } from "./components/Workspace";
import { issues, teams } from "./data/seed.json";

const App = () => {
   return (
      <div className="flex w-full bg-primary h-screen max-h-screen min-h-screen overflow-hidden">
         <Drawer teams={teams} />
         <AllIssues issues={issues} />
      </div>
   );
};

export default App;
