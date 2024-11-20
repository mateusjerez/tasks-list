export default function AddTask() {
    return (
        <div className="size-full fixed top-0 left-0 bg-black/10">
            <div className="flex-col my-10">
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
                            <button className="w-24 border bg-blue-200 hover:bg-blue-300 border-slate-400">Add</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}