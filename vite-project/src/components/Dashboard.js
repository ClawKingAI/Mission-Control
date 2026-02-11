// Dashboard component showing agent status cards
import React from 'react';
import ResponsiveGrid from './ResponsiveGrid';
import AgentCard from './AgentCard';

const Dashboard = () => {
  const agents = [ // Placeholder data
    { id: 1, name: 'Coder', status: 'running' },
    { id: 2, name: 'Reasoner', status: 'idle' },
    { id: 3, name: 'General', status: 'running' }
  ];

  return (
    <ResponsiveGrid>
      {agents.map(agent => (
        <AgentCard key={agent.id} agent={agent} />
      ))}
    </ResponsiveGrid>
  );
};

export default Dashboard;
