import React from 'react';

const Footer = () => (
    <footer className="bg-gray-800 text-white py-6 text-center">
      <div className="container mx-auto px-4">
        <p>© {new Date().getFullYear()} Mohammed Zaki Bhojani. All Rights Reserved.</p>
        <div className="mt-2 flex justify-center gap-4">
          <a href="mailto:mohammedzakibhojani@gmail.com" className="text-blue-300 hover:text-blue-100">Email</a>
          <a href="https://www.linkedin.com/in/mzakibhojani" target="_blank" rel="noopener noreferrer" className="text-blue-300 hover:text-blue-100">LinkedIn</a>
          <a href="https://github.com/mzb2599" target="_blank" rel="noopener noreferrer" className="text-blue-300 hover:text-blue-100">GitHub</a>
        </div>
      </div>
    </footer>
  );

export default Footer;