import React from 'react';

interface FiltersProps {
  minSpend: number;
  maxSpend: number;
  setMinSpend: (value: number) => void;
  setMaxSpend: (value: number) => void;
}

const Filters: React.FC<FiltersProps> = ({ minSpend, maxSpend, setMinSpend, setMaxSpend }) => {
  return (
    <div className="filters">
      <div style={{ display: 'flex', justifyContent: 'space-between', flexDirection: 'column',}}>
      <h2>Filters</h2>
        <label style={{ color: '#636363' }}>Spending</label>
        <input
            type="range"
            min="26191"
            max="63950"
            value={maxSpend}
            onChange={e => setMaxSpend(Number(e.target.value))}
        />
        <div style={{ display: 'flex', justifyContent: 'space-between'}}>
            <p>${maxSpend}</p>
            <p>${minSpend}</p>
        </div>
      </div>
    </div>
  );
};

export default Filters;
