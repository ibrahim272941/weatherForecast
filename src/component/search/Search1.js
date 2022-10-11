import { useState } from 'react';
import './search.css';

const Search1 = ({ onSearchChange }) => {
  const [value, setvalue] = useState('');
  const handleChange = (e) => {
    setvalue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearchChange(value);
    setvalue('');
  };
  return (
    <div className="formSearch">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Suchen Sie nach einer Stadt"
          autoFocus
          value={value}
          onChange={handleChange}
        />
      </form>
    </div>
  );
};

export default Search1;
