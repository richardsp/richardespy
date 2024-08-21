import React from 'react';

const stuffImWorkingOn = [
  { id: 1, date: "August, 19, 2024", type: 'Cooking', whatItIs: 'I made 4 batches of butter toffee before I got it right.' },
  { id: 2, date: "August, 19, 2024", type: 'Development', whatItIs: 'I updated CSS to make this site prettier.' },
  // ... add more entries here
];

function WhatILearned() {
  return (
    <section id="whatilearned" className="section">
      <h2>What I learned today</h2>
      <p>This is what I'm working on.</p>
      <table className="scrollable-table">
        <thead>
          <tr>
            <th>Date</th>
            <th>Type</th>
            <th>What It Is</th>
          </tr>
        </thead>
        <tbody>
          {stuffImWorkingOn.map((workingOn) => (
            <tr key={workingOn.id}>
              <td>{workingOn.date}</td>
              <td>{workingOn.type}</td>
              <td>{workingOn.whatItIs}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}

export default WhatILearned;
