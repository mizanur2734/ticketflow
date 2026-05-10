import React from "react";
import { useState } from "react";
import { use } from "react";
import { toast } from 'react-toastify';

const TaskBoard = ({ ticketData, setInProgress, setResolved }) => {
  const tickets = use(ticketData);
  const [tasks, setTasks] = useState([]);
  const [resolvedTasks, setResolvedTasks] = useState([]);

  //  add task
  const handleAddTask = (ticket) => {
    const exits = tasks.find((task) => task.id === ticket.id);
    if (exits) {
      toast("Task already exists");
      return;
    }
    setTasks([...tasks, ticket]);
    setInProgress((prev) => prev + 1);
  };

  // complete task
  const handleComplete = (id) => {
    const completedTask = tasks.find((task) => task.id === id);

    const remainingTasks = tasks.filter((task) => task.id !== id);
    setTasks(remainingTasks);

    setResolvedTasks((prev) => [...prev, completedTask]);

    setResolved((prev) => prev + 1);  
    setInProgress((prev) => prev - 1);
    toast("Task Completed");
  };
  return (
    <div className="bg-gray-100 pt-14 grid grid-cols-1 md:grid-cols-4 gap-6">
      {/* LEFT SIDE - Customer Tickets */}
      <div className="md:col-span-3">
        <h2 className="text-xl font-bold mb-4">Customer Tickets</h2>
        <div className="grid md:grid-cols-2 gap-4">
          {/* Ticket Card */}
          {tickets.map((ticket) => (
            <div
              key={ticket.id}
              onClick={() => handleAddTask(ticket)}
              className="bg-white p-4 rounded-xl shadow"
            >
              <div className="flex justify-between items-center mb-2">
                <h3 className="font-bold">{ticket.title}</h3>
                <span className="text-xs bg-green-100 text-green-600 px-3 py-1 rounded-full">
                  {ticket.status}
                </span>
              </div>

              <p className="text-sm text-gray-500 mb-3">{ticket.description}</p>

              <div className="flex text-xs text-gray-400 mb-2">
                <span>
                  #{ticket.id} • {ticket.priority}
                </span>
                <span className="ml-10">{ticket.customer}</span>
                <span className="ml-2">📅 {ticket.createdAt}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* RIGHT SIDE - TASK STATUS */}
      <div className=" p-4 rounded-xl h-fit">
        <h2 className="text-lg font-bold mb-4">Task Status</h2>
        {tasks.length === 0 ? (
          <p className="text-gray-500">No task added</p>
        ) : (
          tasks.map((task) => (
            <div key={task.id} className="bg-white p-3 shadow rounded-lg mb-3">
              <p className="font-semibold mb-2">
                Payment Failed - Card Declined
              </p>
              <button
                onClick={() => handleComplete(task.id)}
                className="w-full bg-green-500 text-white py-2 rounded-lg"
              >
                Complete
              </button>
            </div>
          ))
        )}
        <h3 className="font-semibold mt-5 mb-2">Resolved Task</h3>

        {resolvedTasks.length === 0 ? (
          <p className="text-gray-500">No resolved task</p>
        ) : (
          resolvedTasks.map((task) => (
            <div
              key={task.id}
              className="bg-blue-100 p-3 rounded-lg text-sm mb-2"
            >
              {task.title}
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default TaskBoard;
