import React from 'react';
import SectionTitle from './SectionTitle';

const About = () => (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <SectionTitle title="About Me" />
        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-1 bg-gray-100 p-6 rounded-lg shadow-md text-center">
            <div className="w-32 h-32 mx-auto bg-blue-600 rounded-full mb-4 flex items-center justify-center">
              <span className="text-4xl text-white font-bold">MZ</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">Mohammed Zaki Bhojani</h3>
            <p className="text-gray-600 mb-4">Pune, Maharashtra, India</p>
            <div className="flex flex-col gap-2">
              <a href="mailto:mohammedzakibhojani@gmail.com" className="text-blue-600 hover:underline">
                Email
              </a>
              <a href="https://www.linkedin.com/in/mzakibhojani" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                LinkedIn
              </a>
              <a href="https://github.com/mzb2599" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                GitHub
              </a>
            </div>
          </div>
          <div className="md:col-span-2">
            <p className="mb-4 text-gray-700 leading-relaxed">
              Highly skilled and motivated Software Developer with expertise in cloud technologies, MERN Stack development, and
              Artificial Intelligence (AI). Proven track record of delivering innovative, efficient solutions to complex technical
              challenges, including AI-driven automation, prompt engineering, and dynamic web applications.
            </p>
            <p className="mb-4 text-gray-700 leading-relaxed">
              Strong ability to analyze, design, and implement software applications that align with business objectives. Committed to continuous
              learning and staying up-to-date with the latest industry trends, particularly in AI and machine learning.
            </p>
            <div className="mt-6">
              <h3 className="text-lg font-semibold mb-2">Career Highlights:</h3>
              <ul className="list-disc pl-5 text-gray-700 space-y-2">
                <li>Led cloud migration from Oracle to Microsoft Azure SQL Server, resulting in 25% improved performance</li>
                <li>Implemented testing strategies using Jest and React Test Library, reducing bugs by 20%</li>
                <li>Developed and maintained customer insights dashboard for efficient data management</li>
                <li>Specialized in React development with experience across the entire development lifecycle</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );

export default About;