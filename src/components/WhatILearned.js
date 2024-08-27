import React from 'react';

const stuffImWorkingOn = [
  { id: 1, date: "August 19, 2024", type: 'Cooking', whatItIs: 'Made 4 batches of butter toffee before I got it right.' },
  { id: 2, date: "August 19, 2024", type: 'Development', whatItIs: 'Updated CSS to make this site prettier.' },
  { id:3, date: "August 21, 2024", type: 'Cooking', whatItIs: 'Started to dry brine a top sirloin for the pellet cooker.' },
  { id:3, date: "August 23, 2024", type: 'Development', whatItIs: 'Continued tweaking CSS. Added sortability to recipies.' },
  { id:4, date: "August 26, 2024", type: 'Cooking', whatItIs: 'Turned my top sirloin leftovers into tacos with a spicy avocado crema. Added sortability to recipies.' },
  // ... add more entries here
];

function WhatILearned() {
  return (
    <section id="whatilearned" className="section what-i-learned-container">
      <h2>What I worked on today</h2>
      <table className="scrollable-table learned-table">
        <thead>
          <tr>
            <th>Date</th>
            <th>Topic</th>
            <th>What I did</th>
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
