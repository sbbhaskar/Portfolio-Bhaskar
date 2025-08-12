import React from "react";
import { motion } from "framer-motion";

const projects = [
  {
    id: 1,
    title: "smartbiz-crm-frontend",
    desc: "MERN Stack CRM with full authentication, task mgmt, and multi-user support.",
    live: "https://smartbiz-crm-frontend.vercel.app/",
    code: "https://github.com/sbbhaskar/smartbiz-crm-frontend",
  },
  {
    id: 2,
    title: "smartbiz-crm-backend",
    desc: "MERN Stack CRM with full authentication, task mgmt, and multi-user support.",
    live: "https://smartbiz-crm-backend.onrender.com/",
    code: "https://github.com/sbbhaskar/smartbiz-crm-backend",
  },
  {
    id: 3,
    title: "ReactJS-Tailwindcss-Projects",
    desc: "Frontend developed using React + Tailwindcss - Ai Writing UI, Dashboard UI, Destination Finder, Ecommerce UI, Landing Page UI, Motion Effects, Multi-Step Form",
    live: "https://github.com/sbbhaskar",
    code: "https://github.com/sbbhaskar/ReactJS-Tailwindcss-Projects",
  },
  {
    id: 4,
    title: "Simple Blog (MERN)",
    desc: "Create, edit, delete blogs with Node.js, React, and MongoDB.",
    live: "https://github.com/sbbhaskar",
    code: "https://github.com/sbbhaskar/Simple-Blog",
  },
  {
    id: 5,
    title: "html-css-only",
    desc: "Developed frontend using plain HTML + CSS",
    live: "https://github.com/sbbhaskar",
    code: "https://github.com/sbbhaskar/html-css-only",
  },
  {
    id: 6,
    title: "js-projects-master",
    desc: "25 real-world JavaScript projects using HTML, CSS, and Vanilla JS",
    live: "https://github.com/sbbhaskar",
    code: "https://github.com/sbbhaskar/js-projects-master",
  },
  {
    id: 7,
    title: "realtime-chat-app",
    desc: "Real-time chat app for all domains",
    live: "https://realtime-chat-app-eight-delta.vercel.app/",
    code: "https://github.com/sbbhaskar/realtime-chat-app",
  },
  {
    id: 8,
    title: "Redux-and-API-design---TeamHub",
    desc: "Created enterprise level app using Redux",
    live: "https://github.com/sbbhaskar",
    code: "https://github.com/sbbhaskar/Redux-and-API-design---TeamHub",
  },
  {
    id: 9,
    title: "mini-task-collaboration-app",
    desc: "Professional Mini Task App",
    live: "https://github.com/sbbhaskar",
    code: "https://github.com/sbbhaskar/mini-task-collaboration-app",
  },
  {
    id: 10,
    title: "NodeJS-with-Tailwindcss",
    desc: "Check out Server Side Rendering",
    live: "https://node-js-with-tailwindcss.vercel.app/",
    code: "https://github.com/sbbhaskar/NodeJS-with-Tailwindcss",
  },
  {
    id: 11,
    title: "Sample-Website-Bhaskar",
    desc: "Check out Server Side Rendering",
    live: "https://sample-website-bhaskar.vercel.app/",
    code: "https://github.com/sbbhaskar/Sample-Website-Bhaskar",
  },
  {
    id: 12,
    title: "TODO API",
    desc: "Generic TODO app for everyone",
    live: "https://github.com/sbbhaskar",
    code: "https://github.com/sbbhaskar/todo.api",
  },
  {
    id: 13,
    title: "Ecommerce Site",
    desc: "Prototype Ecoomerce App",
    live: "https://github.com/sbbhaskar",
    code: "https://github.com/sbbhaskar/ecommerce-front-back-code",
  },
  {
    id: 14,
    title: "NEWS CMS Frontend",
    desc: "Prototype NewsCMS App",
    live: "https://github.com/sbbhaskar?tab=repositories",
    code: "https://github.com/sbbhaskar/NEWS-CMS-Frontend",
  },
  {
    id: 15,
    title: "NEWS CMS Backend",
    desc: "Prototype NewsCMS App",
    live: "https://github.com/sbbhaskar?tab=repositories",
    code: "https://github.com/sbbhaskar/NEWS-CMS-Backend",
  },
];

function Projects() {
  return (
    <section id="projects" className="py-20 px-6 bg-gray-100 dark:bg-gray-800">
      <h2 className="text-3xl font-bold text-center mb-12">🚀 Projects</h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {projects.map((proj, index) => (
          <motion.div
            key={proj.id}
            className="bg-gradient-to-br from-gray-300 via-gray-100 to-gray-400 dark:from-gray-700 dark:via-gray-800 dark:to-gray-900 rounded-lg p-6 shadow-xl border border-gray-400 dark:border-gray-600 hover:scale-[1.02] transition-all"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.2 }}
          >
            <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
              {proj.title}
            </h3>
            <p className="text-sm mb-4 text-gray-700 dark:text-gray-300">
              {proj.desc}
            </p>
            <div className="flex gap-3">
              <a
                href={proj.live}
                target="_blank"
                className="px-4 py-2 bg-black text-white rounded hover:bg-green-400 hover:text-black transition text-sm font-semibold"
              >
                Live
              </a>
              <a
                href={proj.code}
                target="_blank"
                className="px-4 py-2 border border-gray-800 dark:border-gray-200 text-gray-900 dark:text-gray-200 rounded hover:bg-gray-900 hover:text-white transition text-sm font-semibold"
              >
                Code
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
