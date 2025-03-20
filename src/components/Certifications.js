import React from 'react';
import SectionTitle from './SectionTitle';

const Certifications = () => {
    const certs = [
      { name: "Infosys Certified Generative AI developer", issuer: "Infosys limited", year: "2023" },
      { name: "Infosys Certified Python programmer", issuer: "Infosys limited", year: "2023" },
      { name: "Infosys Certified SQL developer", issuer: "Infosys", year: "2022" },
      { name: "Infosys Certified Node developer", issuer: "Infosys limited", year: "2022" },
      { name: "Infosys Certified Spark developer", issuer: "Infosys limited", year: "2022" },
      { name: "Infosys Certified Python associate", issuer: "Infosys limited", year: "2022" },
      { name: "Infosys Certified Open chain practitioner", issuer: "Infosys limited", year: "2022" },
      { name: "React developer", issuer: "Coursera Hongkong University", year: "2021" },
      { name: "Bootstrap4", issuer: "Coursera Hongkong University", year: "2021" }
    ];
  
    return (
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionTitle title="Certifications" />
          
          <div className="grid md:grid-cols-3 gap-4">
            {certs.map((cert, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow-md">
                <h3 className="font-semibold text-blue-600">{cert.name}</h3>
                <p className="text-gray-700">{cert.issuer} - {cert.year}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-8 bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-blue-600 mb-4">Awards</h3>
            <div className="border-l-4 border-blue-500 pl-4 py-2">
              <h4 className="font-semibold">INSTA AWARD | INFOSYS | NOV 2023</h4>
              <p className="text-gray-700 mt-1">
                "THANK YOU ZAKI FOR BEING A VALUABLE TEAM MEMBER AS WELL AS BEING FLEXIBLE AS PART OF FACETS MODERNIZATION PROJECT"
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  };

  export default Certifications;