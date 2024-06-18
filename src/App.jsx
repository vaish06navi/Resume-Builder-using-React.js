import React from 'react';
import Resume from './components/Resume';

const resumeData = {
  name: "John Doe",
  title: "Full Stack Developer",
  skills: ["JavaScript", "React", "Node.js"],
  education: [
    {
      institution: "University of Example",
      degree: "B.S. in Computer Science",
      year: "2020"
    },
    {
      institution: "Example College",
      degree: "A.S. in Information Technology",
      year: "2018"
    }
  ],
  experience: [
    {
      company: "Example Corp",
      position: "Software Engineer",
      year: "2021 - Present"
    },
    {
      company: "Tech Solutions",
      position: "Junior Developer",
      year: "2020 - 2021"
    },
    {
      company: "Web Works",
      position: "Intern",
      year: "2019 - 2020"
    }
  ]
};

const App = () => {
  return (
    <div className="App">
      <Resume data={resumeData} />
    </div>
  );
};

export default App;
