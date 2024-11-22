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
  const [doneTasks, setDoneTasks] = useState<Task[]>([]);

  const handleAddTask = (task: Task) => {
    if (!task.name || !task.description || !task.priority) {
      setAddTaskVisibleFalse();
      return;
    }
    setTasks((prevTasks) => [...prevTasks, task])
    setAddTaskVisibleFalse();
  }

  const handleDoneTask = (index: number) => {
    const task = tasks[index];
    setTasks((prevTasks) => prevTasks.filter((_, i) => i !== index));
    setDoneTasks((prevDoneTasks) => [...prevDoneTasks, task]);
  }

  const handleRemoveTask= (index: number) => {
    setTasks((prevTasks) => prevTasks.filter((_, i) => i !== index));
  }

  const handleDefaultList = () => {
    setTasks([]);
    setDoneTasks([]);
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
        <div className="pb-4">
          {tasks.map((task, index) => (
            <div
              key={index}
              className="flex w-[550px] justify-between px-4"
            >
              <div className="flex">
                <p className="font-bold">{task.name}</p>
                <p className="px-4">{task.description}</p>
                <p>{task.priority}</p>
              </div>
              <div>
                <button
                  className="border mx-2 px-2 bg-green-200 hover:bg-green-300 border-slate-400"
                  onClick={() => handleDoneTask(index)}
                >
                  Done
                </button>
                <button
                  className="border px-2 bg-red-200 hover:bg-red-300 border-slate-400"
                  onClick={() => handleRemoveTask(index)}
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="border-t border-slate-400">
          {doneTasks.length > 0 && (
          <p className="flex font-bold text-xl justify-center py-4">
            Done Tasks
          </p>)}
          {doneTasks.map((task, index) => (
            <div
              key={index}
              className="flex w-[500px] justify-between px-4"
            >
              <div className="flex">
                <p className="font-bold">{task.name}</p>
                <p className="px-4">{task.description}</p>
                <p>{task.priority}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-between p-4">
          <button
            className="flex w-24 mt-16 justify-center border bg-blue-200 hover:bg-blue-300 border-slate-400"
            onClick={setAddTaskVisibleTrue}
          >
            Add Task
          </button>
          <button
            className="flex w-24 mt-16 justify-center border bg-red-200 hover:bg-red-300 border-slate-400"
            onClick={handleDefaultList}
          >
            Zerar Lista
          </button>
        </div>

        {addTaskVisible && (
          <div>
            <AddTask onAddTask={handleAddTask} />
          </div>
        )}
      </div>
    </div>
  );
}
