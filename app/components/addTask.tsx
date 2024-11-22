
import { useState } from 'react';

type Task = {
    onAddTask: (task: {
        name: string;
        description: string;
        priority: string;
        completed: boolean;
    }) => void;
};

export default function AddTask({ onAddTask }: Task) {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [priority, setPriority] = useState('low');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (name && description) {
            onAddTask({ name, description, priority, completed: false });
            setName('');
            setDescription('');
        }
    }

    return(
        <div className="flex-col p-4">
            <p className="flex font-bold text-xl justify-center pb-4">Add Task</p>
            <form className='flex flex-col' onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="border border-slate-400 p-2"
                />
                <textarea
                    placeholder="Description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    className="border border-slate-400 p-2 mt-2"
                />
                <select
                    value={priority}
                    onChange={(e) => setPriority(e.target.value)}
                    className="border border-slate-400 p-2 mt-2"
                >
                    <option value="low">Low</option>
                    <option value="medium">Medium</option>
                    <option value="high">High</option>
                </select>
                <button
                    type="submit"
                    className="border border-slate-400 p-2 mt-2"
                >
                    Add Task
                </button>
            </form>
        </div>
    )
}