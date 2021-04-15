import React from "react";
import WorkCard from "./WorkCard";
import Fade from "react-reveal/Fade";

const WorkExperience = () => {
  const jobs = [
    {
      companyName: "Braindw",
      image:
        "https://resume-julianmendonca.vercel.app/static/media/braindw.84f0a9c7.png",
      duration: "2019 - actualidad",
      requirements: [
        "C# .Net",
        "MySQL",
        "React",
        "Git",
        "Node",
        "Javascript",
        "Cypress",
        "Elasticsearch",
      ],
      missions: [
        "Maintainence and expansion of API using C# .Net",
        "File management using AmazonS3",
        "Creation of new apps using React.js or vanilla JS",
        "Performace optimization to handle intensive traffic",
        "End-to-End tests creation and maintenance using Cypress",
        "Creation and maintenance of search engines with Elasticsearch",
      ],
      reward: "Gain experience in programming",
    },
  ];
  return (
    <div className="work-experience">
      <h1>
        <Fade left cascade>
          Work Experience
        </Fade>
      </h1>
      {jobs.map((job, i) => (
        <WorkCard
          key={i}
          companyName={job.companyName}
          image={job.image}
          duration={job.duration}
          requirements={job.requirements}
          missions={job.missions}
          reward={job.reward}
        ></WorkCard>
      ))}
    </div>
  );
};

export default WorkExperience;
