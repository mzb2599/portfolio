const Navbar = ({ activeSection, setActiveSection }) => {
    const navItems = [
      { id: 'about', label: 'About' },
      { id: 'experience', label: 'Experience' },
      { id: 'skills', label: 'Skills' },
      { id: 'projects', label: 'Projects' },
      { id: 'education', label: 'Education' },
      { id: 'certifications', label: 'Certifications' },
    ];
  
    return (
      <nav className="bg-gray-800 sticky top-0 z-10">
        <div className="container mx-auto">
          <ul className="flex justify-center flex-wrap">
            {navItems.map((item) => (
              <li key={item.id} className="mx-1 md:mx-4">
                <button
                  onClick={() => setActiveSection(item.id)}
                  className={`px-3 py-4 font-medium transition-colors ${
                    activeSection === item.id ? 'text-blue-400' : 'text-white hover:text-blue-300'
                  }`}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    );
  };

export default Navbar;