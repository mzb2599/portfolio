import React from 'react';
import SectionTitle from './SectionTitle';

const Education = () => (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <SectionTitle title="Education" />
        
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex flex-wrap justify-between mb-2">
            <h3 className="text-xl font-semibold">Bachelor of Computer Engineering</h3>
            <span className="text-gray-600">2018-2022</span>
          </div>
          <p className="text-gray-700 mb-2">University of Mumbai</p>
          <p className="font-medium">C.G.P.A: 9.02</p>
          
          <div className="mt-4">
            <h4 className="font-medium mb-2">Extra-curricular Activities:</h4>
            <ul className="list-disc pl-5 text-gray-700">
              <li>Web developer | CSI - MHSSCE | 2020-2022</li>
              <li>Committee Member | Programmers Club | 2020-2022</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );

export default Education;