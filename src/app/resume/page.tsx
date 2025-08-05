import React from "react";
import { education, skills, workExperience } from "../config/resumeDetails";

function Divider() {
  return <div className="border-solid border-my-teal border-b-2 my-2 w-full" />;
}

export default function ResumePage() {
  return (
    <div className="flex items-center flex-col w-full fade-in">
      <h2 className="font-bold text-3xl mb-2">RESUME</h2>
      <div className="flex flex-col items-center md:max-w-3xl lg:max-w-5xl">
        <h3 className="font-bold text-xl mt-4">Professional Experience</h3>
        <Divider />
        {workExperience.map((job) => (
          <div
            key={job.title}
            className="w-full mt-4 bg-my-teal-light rounded-lg p-2 px-4 mx-4"
          >
            <div className="flex flex-col md:flex-row md:justify-between">
              <div>
                <h4 className="font-bold text-xl border-b-2 border-b-black pr-4">
                  {job.title}
                </h4>
                <h4 className="font-bold opacity-60 uppercase">
                  {job.employer}
                </h4>
              </div>
              <h5 className="italic">{job.dates}</h5>
            </div>
            <ul className="list-disc list-inside">
              {job.description.map((detail, index) => (
                <li className="my-2" key={index}>
                  {detail}
                </li>
              ))}
            </ul>
          </div>
        ))}

        <h3 className="font-bold text-xl  mt-4">Skills</h3>
        <Divider />

        <section className="flex w-full flex-wrap">
          {skills.map((skill) => (
            <h5
              key={skill}
              className="font-bold  min-w-1/2 md:min-w-1/4 flex-wrap text-center pb-2"
            >
              {skill}
            </h5>
          ))}
        </section>

        <h3 className="font-bold text-xl mt-4">Education</h3>
        <Divider />

        <section className="flex w-full flex-col">
          {education.map((school) => (
            <div
              key={school.name}
              className="flex flex-col sm:flex-row sm:justify-between   pb-4"
            >
              <div>
                <h5 className="font-bold">{school.name}</h5>
                <p className="font-bold">{school.program}</p>
                <p>{school.location}</p>
              </div>
              <p>{school.dates}</p>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
}
