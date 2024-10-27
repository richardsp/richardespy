import React, { useState, useEffect } from 'react';
import axios from 'axios';

const GITHUB_API_URL = 'https://api.github.com/repos/richardsp/richardespy/commits';

function WhatILearned() {
  const [commits, setCommits] = useState([]);
  
  useEffect(() => {
    axios.get(GITHUB_API_URL)
      .then(response => {
        const processedCommits = response.data.map(commit => ({
          date: new Date(commit.commit.author.date),
          message: commit.commit.message,
          author: commit.commit.author.name,
        }));
        setCommits(processedCommits);
      })
      .catch(error => {
        console.error("Error fetching commits", error);
      });
  }, []);

  return (
    <section id="whatilearned" className="section what-i-learned-container">
      <h2>Things I've Learned Building This</h2>
      <table className="scrollable-table learned-table">
        <thead>
          <tr>
            <th>Date</th>
            <th>Author</th>
            <th>Commit Message</th>
          </tr>
        </thead>
        <tbody>
          {commits.map((commit, index) => (
            <tr key={index}>
              <td>{commit.date.toLocaleDateString()}</td>
              <td>{commit.author}</td>
              <td>{commit.message}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}

export default WhatILearned;
