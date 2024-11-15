import React from 'react';
import '../styles/Challenges.css';
import Navigation from './Navigation';

function Challenges() {
  const challenges = ["Тиждень без пластику", "День без машини", "Зменшене використання води"];

  return (
    <>
      <Navigation />
      <section id="challenges" className="challenges-section">
        <h2>Eco завдання</h2>
        <ul>
          {challenges.map((challenge, index) => (
            <li key={index} className='challenge'>{challenge}</li>
          ))}
        </ul>
      </section>
    </>
  );
}

export default Challenges;
