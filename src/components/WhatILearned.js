import React from 'react';

const stuffImWorkingOn = [
  { id: 1, date: new Date ("2024-08-19"), type: 'Cooking', whatItIs: 'Made 4 batches of butter toffee before I got it right.' },
  { id: 2, date: new Date ("2024-08-19"), type: 'Development', whatItIs: 'Updated CSS to make this site prettier.' },
  { id:3, date: new Date ("2024-08-21"), type: 'Cooking', whatItIs: 'Started to dry brine a top sirloin for the pellet cooker.' },
  { id:4, date: new Date ("2024-08-23"), type: 'Development', whatItIs: 'Continued tweaking CSS. Added sortability to recipies.' },
  { id:5, date: new Date ("2024-08-26"), type: 'Cooking', whatItIs: 'Turned my top sirloin leftovers into tacos with a spicy avocado crema. Added sortability to recipies.' },
  { id:6, date: new Date ("2024-08-26"), type: 'Development', whatItIs: 'Fixed some responsive display errors. Sorted tables correctly.' },
  // ... add more entries here
];

function WhatILearned() {
  const sortedStuffImWorkingOn = stuffImWorkingOn.sort((a, b) => b.date - a.date);

  return (
    <section id="whatilearned" className="section what-i-learned-container">
      <h2>What I Worked On Today</h2>
      <table className="scrollable-table learned-table">
        <thead>
          <tr>
            <th>Date</th>
            <th>Topic</th>
            <th>What I did</th>
          </tr>
        </thead>
        <tbody>
          {sortedStuffImWorkingOn.map((workingOn) => (
            <tr key={workingOn.id}>
              <td>{workingOn.date.toLocaleDateString()}</td> {/* Formats the date */}
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
