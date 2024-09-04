import { useState } from 'react';
import './App.css';
import Filters from './navigation/Filters';
import Applications from './applications/Applications';
import Navigation, { NavigationItem } from './navigation/Navigation';

const applications = [
  { id: 1, name: 'Application 1', spend: 29822 },
  { id: 2, name: 'Application 2', spend: 38285 },
  { id: 3, name: 'Application 3', spend: 29071 },
  { id: 4, name: 'Application 4', spend: 26191 },
  { id: 5, name: 'Application 5', spend: 59416 },
  { id: 6, name: 'Application 6', spend: 63950 },
  { id: 7, name: 'Application 7', spend: 50599 },
  { id: 8, name: 'Application 8', spend: 56205 },
];



const App: React.FC = () => {
  const [minSpend, setMinSpend] = useState<number>(26191);
  const [maxSpend, setMaxSpend] = useState<number>(63950);
  const filteredApps = applications.filter(app => app.spend >= minSpend && app.spend <= maxSpend);
  const navigationItems: NavigationItem[] = [
    { name: 'Business Capability 1' },
    { name: 'Business Capability 2' },
    {
      name: 'Business Capability 3',
      subItems: [
        { name: 'Business Capability 3.0' },
        {
          name: 'Business Capability 3.1',
          subItems: [
            { name: 'Business Capability 3.1.0' },
            { name: 'Business Capability 3.1.1' },
          ],
        },
        { name: 'Business Capability 3.2' },
        { name: 'Business Capability 3.3' },
      ],
    },
  ];

  return (
    <div className="app-container">
      <div className="navigation-container">
      <Navigation items={navigationItems} />
        
    <Filters
      minSpend={minSpend}
      maxSpend={maxSpend}
      setMinSpend={setMinSpend}
      setMaxSpend={setMaxSpend}
    />
      </div>

      <Applications filteredApps={filteredApps} />

    </div>
  );
};

export default App;