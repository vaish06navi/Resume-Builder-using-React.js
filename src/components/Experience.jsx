import React from 'react';

const Experience = ({ experience }) => {
  return (
    <div className="experience">
      <h3>Experience</h3>
      <ul>
        {experience.map((exp, index) => (
          <li key={index}>
            <strong>{exp.company}</strong>
            <span>{exp.position} ({exp.year})</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Experience;

