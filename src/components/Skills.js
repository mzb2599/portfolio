import React from 'react';
import SectionTitle from './SectionTitle';

const Skills = () => {
    const skillCategories = [
      {
        title: "Frontend",
        skills: ["React.js", "HTML", "CSS", "Semantic UI", "React Test Library", "Bootstrap"]
      },
      {
        title: "Backend",
        skills: ["Node.js", "Express.js", "Python", "Flask", "PostgreSQL", "MongoDB", "ETL processes"]
      },
      {
        title: "Cloud & DevOps",
        skills: ["Microsoft Azure", "Github CI/CD", "Informatica Powercenter"]
      },
      {
        title: "Other Skills",
        skills: ["Prompt engineering", "AI/ML", "Leadership", "Team player"]
      }
    ];
  
    return (
      <section className="py-12">
        <div className="container mx-auto px-4">
          <SectionTitle title="Technical Skills" />
          
          <div className="grid md:grid-cols-2 gap-6">
            {skillCategories.map((category, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-blue-600 mb-4">{category.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, idx) => (
                    <span 
                      key={idx} 
                      className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };

export default Skills;