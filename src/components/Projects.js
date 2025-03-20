import React from 'react';
import SectionTitle from './SectionTitle';

const Projects = () => {
    const projects = [
      {
        title: "Customer Insights Dashboard",
        period: "July 2024 - Present",
        description: "Comprehensive dashboard to manage customer and order data efficiently.",
        points: [
          "Implemented CRUD operations, filtering, and customer locking based on credit limits.",
          "Created reporting features with email notification integration.",
          "Enhanced UI with dashboards for sales and expenditure analysis."
        ]
      },
      {
        title: "Facemask Detector (Pandemic usecase)",
        description: "Real-time face mask detection system using the Mobilenet V2 model.",
        points: [
          "Pre-processed dataset achieving 95% accuracy in face mask detection.",
          "Added email automation feature for facemask violation alerts.",
          "Implemented public health and safety protocols."
        ]
      },
      {
        title: "Python Search Assistant",
        description: "Python script with default and voice typing features.",
        points: [
          "Integrated Wolfram Alpha and Wikipedia APIs for informative summaries.",
          "Enabled quick searches with voice commands and text input.",
          "Reduced search time by 30%."
        ]
      },
      {
        title: "Chat Application using React.js",
        description: "Real-time chat application using React.js, chatengine.io, and Firebase.",
        points: [
          "Enabled seamless communication between users.",
          "Implemented Firebase authentication.",
          "Increased user engagement by 40%."
        ]
      }
    ];
  
    return (
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionTitle title="Projects" />
          
          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-semibold text-blue-600">{project.title}</h3>
                  {project.period && <span className="text-sm text-gray-500">{project.period}</span>}
                </div>
                <p className="text-gray-700 mb-3">{project.description}</p>
                <ul className="list-disc pl-5 text-gray-700 space-y-1">
                  {project.points.map((point, idx) => (
                    <li key={idx}>{point}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };

export default Projects;