import React from "react";

function Divider() {
  return <div className="border-solid border-my-teal border-b-2 my-2 w-full" />;
}

export default function ResumePage() {
  return (
    <div className="flex items-center flex-col w-full">
      <h2 className="font-bold text-xl">RESUME</h2>
      <div className="flex flex-col items-center md:max-w-3xl">
        <h3 className="font-bold text-lg">Professional Experience</h3>
        <Divider />
        <div>
          <div className="flex justify-between">
            <div>
              <h4 className="font-bold">Front End Developer</h4>
              <h4 className="font-bold">eForms</h4>
            </div>
            <h5>February 2023 - June 2023</h5>
          </div>
          <ul className="list-disc list-inside">
            <li className="mb-2">
              Developed an invoicing app using JavaScript, React, and Redux,
              integrating Jira ticket management and following Agile development
              methodology
            </li>
            <li>
              Collaborated closely with design teams utilizing Figma and
              Material UI to ensure a seamless user experience
            </li>
            <li>
              Strong focus on quality assurance; created and maintained test
              cases and actively participated in code reviews for fellow
              developers
            </li>
          </ul>
        </div>
        <div>
          <h4>Office Administrator</h4>
          <h4>Real Estate in the Pointes</h4>
          <h5>August 2019 - February 2023</h5>
          <ul>
            <li>
              Resolved software and social media issues, ensuring seamless agent
              operations
            </li>
            <li>
              Efficiently handled a high volume of calls, emails, and scheduling
              tasks for 32 agents
            </li>
            <li>
              Strategically developed and distributed captivating property
              flyers and advertising materials
            </li>
            <li>
              Successfully managed office&apos;s social media accounts,
              resulting in a significant increase in Instagram following
            </li>
          </ul>
        </div>
        <p></p>
      </div>
      <div>
        <h3>Skills</h3>
      </div>
      <div>
        <h3>Education</h3>
      </div>
    </div>
  );
}
