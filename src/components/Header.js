import React from 'react';

const Header = () => (
    <header className="bg-blue-600 text-white py-12 text-center">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-2">Mohammed Zaki Bhojani</h1>
        <p className="text-xl">Full Stack Developer</p>
        <div className="mt-4 flex justify-center gap-4">
          <a href="mailto:mohammedzakibhojani@gmail.com" className="text-white hover:text-blue-200">
            mohammedzakibhojani@gmail.com
          </a>
          <span>|</span>
          <a href="tel:+918879116493" className="text-white hover:text-blue-200">
            +91 8879116493
          </a>
        </div>
        <div className="mt-2 flex justify-center gap-4">
          <a href="https://www.linkedin.com/in/mzakibhojani" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-200">
            LinkedIn
          </a>
          <span>|</span>
          <a href="https://github.com/mzb2599" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-200">
            GitHub
          </a>
          <span>|</span>
          <a href="https://medium.com/@mzaki2599" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-200">
            Medium
          </a>
        </div>
      </div>
    </header>
  );

export default Header;