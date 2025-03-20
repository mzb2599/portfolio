import React from 'react';
import SectionTitle from './SectionTitle';

const Experience = () => (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <SectionTitle title="Professional Experience" />
        
        <div className="space-y-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex flex-wrap justify-between mb-2">
              <h3 className="text-xl font-semibold">Specialist Programmer</h3>
              <span className="text-gray-600">June 2022 - Present</span>
            </div>
            <p className="text-gray-700 mb-2">Infosys, India</p>
            <p className="font-medium mb-2">Client: Microsoft | Project: React development & feature updates</p>
            <ul className="list-disc pl-5 text-gray-700 space-y-2">
              <li>Led cloud migration project from Oracle to Microsoft Azure SQL Server, resulting in a 25% improvement in database performance and enhanced scalability.</li>
              <li>Saved significant client costs using Informatica PowerCenter for efficient data migration.</li>
              <li>Conducted rigorous unit testing, reducing post-migration errors by 30%.</li>
              <li>Developed React applications with dynamic visualizations using storybook framework.</li>
              <li>Utilized Azure pipelines and GitHub for seamless code management and development.</li>
            </ul>
            
            <div className="mt-4">
              <p className="font-medium mb-2">Project: Customer Insights Dashboard | July 2024 - Present</p>
              <ul className="list-disc pl-5 text-gray-700 space-y-2">
                <li>Developed comprehensive dashboard to manage customer and order data efficiently.</li>
                <li>Implemented CRUD operations, filtering, and customer locking based on credit limits.</li>
                <li>Created reporting features with email notification integration.</li>
                <li>Enhanced UI with dashboards for sales and expenditure analysis.</li>
              </ul>
            </div>
          </div>
  
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex flex-wrap justify-between mb-2">
              <h3 className="text-xl font-semibold">Software Developer Intern</h3>
              <span className="text-gray-600">August 2021 - April 2022</span>
            </div>
            <p className="text-gray-700 mb-2">Algorisys Technologies, India</p>
            <p className="font-medium mb-2">Client: Carefirst USA | Project: Cloud migration</p>
            <ul className="list-disc pl-5 text-gray-700 space-y-2">
              <li>Collaborated on developing a Content Management System using React, Semantic UI, Node.js, and PostgreSQL.</li>
              <li>Implemented testing strategies using Jest and React Test Library, reducing bugs by 20%.</li>
              <li>Created interactive and responsive user interfaces, enhancing overall user experience.</li>
              <li>Maintained and updated React-based website, improving performance and user engagement.</li>
              <li>Optimized website for search engines, increasing organic traffic by 15%.</li>
            </ul>
          </div>
  
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex flex-wrap justify-between mb-2">
              <h3 className="text-xl font-semibold">Web Developer Intern</h3>
              <span className="text-gray-600">February 2021 - April 2021</span>
            </div>
            <p className="text-gray-700 mb-2">QDS Pro, India</p>
            <ul className="list-disc pl-5 text-gray-700 space-y-2">
              <li>Acquired proficiency in the MERN stack.</li>
              <li>Participated in designing pages for an e-commerce website.</li>
              <li>Implemented modern web development practices, improving UI and website speed.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );

export default Experience;