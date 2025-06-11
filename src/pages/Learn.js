
import React, { useState } from 'react';

function Learn() {
  const [points, setPoints] = useState(['']);
  const [date] = useState(new Date().toLocaleDateString());

  const addPoint = () => {
    setPoints([...points, '']);
  };

  const handleChange = (value, index) => {
    const newPoints = [...points];
    newPoints[index] = value;
    setPoints(newPoints);
  };

  return (
    <div className="page">
      <h2>What Did You Learn Today?</h2>
      <p className="date">Date: {date}</p>
      {points.map((point, idx) => (
        <textarea
          key={idx}
          value={point}
          onChange={(e) => handleChange(e.target.value, idx)}
          placeholder={`Point ${idx + 1}...`}
        />
      ))}
      <button onClick={addPoint} className="add-btn">+ Add More</button>
      <button className="publish-btn">Publish Learnings</button>
    </div>
  );
}

export default Learn;
