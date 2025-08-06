import React from "react";

const companyData = [
  {
    name: "AparSoft Solutions",
    frontend: 50,
    backend: 50,
  },
  {
    name: "Mildain Solutions LLP",
    frontend: 70,
    backend: 30,
  },
  {
    name: "Aptron Solutions Pvt Ltd",
    frontend: 90,
    backend: 10,
  },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="px-4 py-12 bg-gradient-to-b from-slate-100 via-white to-slate-50 dark:from-gray-800 dark:via-gray-900 dark:to-black"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-10">
          Skills Overview
        </h2>

        {/* Company Skill Bars */}
        <div className="overflow-x-auto mb-10">
          <table className="min-w-full border border-gray-300 dark:border-gray-700 text-left text-sm">
            <thead>
              <tr className="bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200">
                <th className="p-3">Company</th>
                <th className="p-3">Frontend Skills</th>
                <th className="p-3">Backend Skills</th>
              </tr>
            </thead>
            <tbody>
              {companyData.map((company, index) => (
                <tr key={index} className="border-b dark:border-gray-600">
                  <td className="p-3 font-semibold text-gray-800 dark:text-white">
                    {company.name}
                  </td>
                  <td className="p-3">
                    <div className="w-full bg-gray-300 dark:bg-gray-700 rounded-md overflow-hidden">
                      <div
                        className="bg-blue-600 text-xs text-white text-center py-1"
                        style={{ width: `${company.frontend}%` }}
                      >
                        {company.frontend}%
                      </div>
                    </div>
                  </td>
                  <td className="p-3">
                    <div className="w-full bg-gray-300 dark:bg-gray-700 rounded-md overflow-hidden">
                      <div
                        className="bg-red-500 text-xs text-white text-center py-1"
                        style={{ width: `${company.backend}%` }}
                      >
                        {company.backend}%
                      </div>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Technical Skills */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <div>
            <h3 className="text-xl font-semibold mb-2 text-blue-800 dark:text-blue-400">
              Front-End Development
            </h3>
            <ul className="list-disc pl-6 text-gray-700 dark:text-gray-200">
              <li>HTML5 & CSS3 (7 yrs): Semantic, Flexbox, Grid, responsive</li>
              <li>JavaScript (ES6+) & React.js (7 yrs): Hooks, Redux, Router</li>
              <li>Tailwind CSS & Bootstrap (5 yrs): Utility-first, rapid UI</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2 text-blue-800 dark:text-blue-400">
              Back-End & Cloud
            </h3>
            <ul className="list-disc pl-6 text-gray-700 dark:text-gray-200">
              <li>Node.js & Express.js (1 yr): REST API, middleware</li>
              <li>MongoDB (1 yr): CRUD, schema, Atlas, Compass</li>
              <li>Git & GitHub (3 yrs): PRs, branching, reviews</li>
              <li>Deployments: Vercel, Netlify, Render, MongoDB Atlas</li>
            </ul>
          </div>
        </div>

        {/* Responsibilities */}
        <div className="mb-10">
          <h3 className="text-xl font-semibold mb-4 text-blue-800 dark:text-blue-400">
            Core Responsibilities
          </h3>
          <ul className="list-disc pl-6 text-gray-700 dark:text-gray-200 space-y-2">
            <li>
              <strong>Web App Development:</strong> Using React.js, Node.js for responsive UI and functional backend.
            </li>
            <li>
              <strong>Responsive Designs:</strong> Cross-browser/device optimized layouts with mobile-first approach.
            </li>
            <li>
              <strong>Performance Optimization:</strong> Identify bottlenecks, optimize code & speed for better UX.
            </li>
          </ul>
        </div>

        {/* Extended Responsibilities */}
        <div className="animate-fade-in-up">
          <h3 className="text-2xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-700 via-purple-600 to-pink-500">
            Primary Responsibilities Handled in Organizations
          </h3>
          <ul className="list-disc pl-6 text-gray-800 dark:text-gray-100 space-y-3 leading-relaxed">
            <li>Utilize React.js and Node.js to build and maintain responsive web applications.</li>
            <li>Ensure applications are optimized for various devices and browsers.</li>
            <li>Identify and address performance bottlenecks to enhance user experience.</li>
            <li>Design and develop web applications using the MERN stack.</li>
            <li>Create responsive web interfaces using React.js.</li>
            <li>Develop server-side logic and APIs using Node.js and Express.js.</li>
            <li>Ensure database operations are seamless and schemas are well designed using MongoDB.</li>
            <li>In-depth knowledge of MongoDB, Express.js, React, and Node.js.</li>
            <li>Strong proficiency in JavaScript, HTML, and CSS.</li>
            <li>Experience with version control systems, such as Git.</li>
            <li>Familiarity with front-end frameworks like Bootstrap, Material-UI, etc.</li>
            <li>Solid understanding of RESTful API design and integration.</li>
            <li>Knowledge of database design and management, including NoSQL databases.</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Skills;