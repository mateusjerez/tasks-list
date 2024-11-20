"use client";

import { useState } from "react";

export default function Home() {
  const [addTaskVisible, setAddTaskVisible] = useState(false);

  const setAddTaskVisibleTrue = () => {
    setAddTaskVisible(true);
  };

  const setAddTaskVisibleFalse = () => {
    setAddTaskVisible(false);
  };

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
            <div className="size-full fixed top-0 left-0 bg-black/10">
              <div className="flex-col size-[400px] relative my-10 mx-auto">
                <button className="absolute top-3 right-4"
                onClick={setAddTaskVisibleFalse}>
                  X
                </button>
                <div className="flex justify-center">
                  <div className="w-[400px] bg-white p-4">
                    <p className="font-bold text-xl">Add Task</p>
                    <div className="flex flex-col">
                      <label className="p-2">Task Name</label>
                      <input className="p-2 border border-gray-300" />
                    </div>
                    <div className="flex flex-col">
                      <label className="p-2">Task Description</label>
                      <input className="p-2 border border-gray-300" />
                    </div>
                    <div className="flex flex-col">
                      <label className="p-2">Task Priority</label>
                      <select className="p-2 border border-gray-300">
                        <option>Low</option>
                        <option>Medium</option>
                        <option>High</option>
                      </select>
                    </div>
                    <div className="flex justify-center mt-4">
                      <button className="w-24 border bg-blue-200 hover:bg-blue-300 border-slate-400">
                        Add
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
