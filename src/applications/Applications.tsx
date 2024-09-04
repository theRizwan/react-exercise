import React from 'react';

interface Application {
  id: number;
  name: string;
  spend: number;
}

interface ApplicationsProps {
  filteredApps: Application[];
}

const Applications: React.FC<ApplicationsProps> = ({ filteredApps }) => {
  return (
    <div className="applications">
      <div className="applications-grid">
        {filteredApps.map(app => (
          <div className="application-card" key={app.id}>
            <h3>{app.name}</h3>
            <p>Total spend: ${app.spend}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Applications;
