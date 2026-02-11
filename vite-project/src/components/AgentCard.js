// Individual agent card component
import React from 'react';

const statusClasses = {
  running: 'bg-green-500 text-white',
  idle: 'bg-gray-500 text-white',
  error: 'bg-red-500 text-white'
};

const AgentCard = ({ agent }) => {
  return (
    <div className="bg-white rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow duration-200 hover:cursor-pointer">
      <h3 className="text-xl font-semibold mb-2">{agent.name}</h3>
      <div className="text-sm">
        <p>Status: <span className={`inline-block px-2 py-1 text-xs rounded-full ${statusClasses[agent.status]}`}>{agent.status}</span></p>
      </div>
    </div>
  );
};

export default AgentCard;
