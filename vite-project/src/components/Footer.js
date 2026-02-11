// Application footer
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-6 text-sm text-center mt-10">
      <p>© 2026 MissionControl. All rights reserved.</p>
      <div className="mt-2">
        <a href="/docs" className="text-gray-400 hover:text-white">Documentation</a> |
        <a href="/support" className="text-gray-400 hover:text-white">Support</a>
      </div>
    </footer>
  );
};

export default Footer;
