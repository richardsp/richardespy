import React from 'react';

const stuffImWorkingOn = [
    { id: 1, date: "August, 19, 2024", type: 'Cooking', whatItIs: 'Butter Toffee' },
    { id: 2, date: "August, 19, 2024", type: 'Development', whatItIs: 'Updated CSS to make this site prettier' }
    // Add more recipes here...
  ];


function WhatILearned() {
  return (
    <section id="whatilearned" className="section">
      <h2>What I learned today</h2>
      <p>This is what I'm working on.</p>
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
   </section>
  );
}

export default WhatILearned;


