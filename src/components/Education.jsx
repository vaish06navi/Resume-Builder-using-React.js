import React from 'react';

const Education = ({ education }) => {
  return (
    <div className="education">
      <h3>Education</h3>
      <ul>
        {education.map((edu, index) => (
          <li key={index}>
            <strong>{edu.institution}</strong>
            <span>{edu.degree} ({edu.year})</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Education;
