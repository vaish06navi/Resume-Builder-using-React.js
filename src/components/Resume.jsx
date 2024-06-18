import React from 'react';
import Skills from './Skills';
import Education from './Education';
import Experience from './Experience';

const Resume = ({ data }) => {
  return (
    <div className="resume">
      <h1>{data.name}</h1>
      <h2>{data.title}</h2>
      <section>
        <Skills skills={data.skills} />
      </section>
      <section>
        <Education education={data.education} />
      </section>
      <section>
        <Experience experience={data.experience} />
      </section>
    </div>
  );
};

export default Resume;
