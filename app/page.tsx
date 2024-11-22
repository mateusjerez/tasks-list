"use client";

import { useState } from "react";
import AddTask from "../app/components/addTask";


type Task = {
  name: string;
  description: string;
  priority: string;
  completed: boolean;
}; 

export default function Home() {
  const [addTaskVisible, setAddTaskVisible] = useState(false);

  const [tasks, setTasks] = useState<Task[]>([]);

  const handleAddTask = (task: Task) => {
    setTasks((prevTasks) => [...prevTasks, task])
    setAddTaskVisibleFalse();
  }

  const setAddTaskVisibleTrue = () => setAddTaskVisible(true);
  const setAddTaskVisibleFalse = () => setAddTaskVisible(false);

  return (
    <div className="flex justify-center">
      <div className="flex flex-col w-[800px] bg-blue-100 ">
        <div className="p-4">
          <p className="flex font-bold text-xl justify-center pb-4">
            Tasks List
          </p>
          <p>
            Aqui você pode adicionar, remover ou marcar as tarefas como
            concluídas.
          </p>
        </div>
        <div>
          {tasks.map((task, index) => (
            <div
              key={index}
              className="flex w-[500px] justify-between border-b border-slate-400 p-4"
            >
              <div className="flex">
                <p className="font-bold">{task.name}</p>
                <p className="px-4">{task.description}</p>
                <p>{task.priority}</p>
              </div>
              <div>
                <button
                  className="border mx-2 px-2 bg-green-200 hover:bg-green-300 border-slate-400"
                >
                  Done
                </button>
                <button
                  className="border px-2 bg-red-200 hover:bg-red-300 border-slate-400"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="p-4">
          <button
            className="flex w-24 justify-center border bg-blue-200 hover:bg-blue-300 border-slate-400"
            onClick={setAddTaskVisibleTrue}
          >
            Add Task
          </button>
        </div>

        {addTaskVisible && (
          <div>
            <AddTask onAddTask={handleAddTask} />
            <button
              className="flex w-24 justify-center border bg-red-200 hover:bg-red-300 border-slate-400"
              onClick={setAddTaskVisibleFalse}
            >
              Cancel
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
