import React, { useState } from 'react';

function LevelSelector() {
  const [level, setlevel] = useState(''); 

  const levelClick = (event) => {
    const level = event.target.value;
    setlevel(level);
    // add API call
  };

  return (
    <div className="level">
      <h2>Level</h2>
      <div className="box">
        <div className="string">
          <p>Easy</p>
          <p>Medium</p>
          <p>Hard</p>
        </div>
        <div className="icon">
          <form action="/">
            <input
              type="radio"
              id="easy"
              name="level"
              value="easy"
              checked={level === 'easy'}
              onChange={levelClick}
            />
            <input
              type="radio"
              id="medium"
              name="level"
              value="medium"
              checked={level === 'medium'}
              onChange={levelClick}
            />
            <input
              type="radio"
              id="hard"
              name="level"
              value="hard"
              checked={level === 'hard'}
              onChange={levelClick}
            />
          </form>
        </div>
      </div>
    </div>
  );
}

export default LevelSelector;
