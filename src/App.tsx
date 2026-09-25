import "./App.css";
import { Header } from "./components/header/Header";
import {CreateTask} from "./components/Popup/CreateTask";
import { Task } from "./components/tasks/Task";

function App() {
  return (
    <main className="bg-amber-200 min-h-dvh flex justify-center items-center">
      <section className=" h-150 w-180 flex flex-col rounded-8 gap-2">
        <Header/>
        <Task/>
        <CreateTask/>
      </section>

      
      
    </main>
  );
}

export default App;
