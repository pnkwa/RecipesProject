import React, { useState } from "react";

function LevelSelector() {
  const [level, setlevel] = useState("");

  const levelClick = (event) => {
    const level = event.target.value;
    setlevel(level);
    // add API call
  };

  return (
    <div className="level">
      <h2>Level</h2>
      <div className="box">
        <div className="icon">
          <form action="/">
            <input
              type="radio"
              id="easy"
              name="level"
              value="easy"
              checked={level === "easy"}
              onChange={levelClick}
            />
            <label htmlFor="easy">Easy</label>
            <br />

            <input
              type="radio"
              id="medium"
              name="level"
              value="medium"
              checked={level === "medium"}
              onChange={levelClick}
            />
            <label htmlFor="medium">Medium</label>
            <br />

            <input
              type="radio"
              id="hard"
              name="level"
              value="hard"
              checked={level === "hard"}
              onChange={levelClick}
            />
            <label htmlFor="hard">Hard</label>
            <br />
          </form>
        </div>
      </div>
    </div>
  );
}

export default LevelSelector;
