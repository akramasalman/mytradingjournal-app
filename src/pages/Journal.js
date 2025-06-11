
import React, { useState } from 'react';

function Journal() {
  const [entry, setEntry] = useState('');
  const [date] = useState(new Date().toLocaleDateString());

  return (
    <div className="page">
      <h2>New Journal Entry</h2>
      <p className="date">Date: {date}</p>
      <textarea value={entry} onChange={(e) => setEntry(e.target.value)} placeholder="Write about your trading day..." />
      <div className="images">
        <input type="file" />
        <input type="file" />
      </div>
      <button className="publish-btn">Publish Entry</button>
    </div>
  );
}

export default Journal;
