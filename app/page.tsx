
export default function Home() {
  return (
    <div className="flex justify-center">
      <div className="flex flex-col w-[800px] bg-blue-100 ">
        <div className="p-4">
          <p className="flex font-bold text-xl justify-center pb-4">Tasks List</p>
          <p>Aqui você pode adicionar, remover ou marcar as tarefas como concluídas.</p>

        </div>
        <div className="p-4">
          <button className="flex w-24 justify-center border bg-blue-200 hover:bg-blue-300 border-slate-400">Add Task</button>
        </div>
        
      </div>
    </div>
  );
}
