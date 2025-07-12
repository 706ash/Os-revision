import React from 'react';
import { Heart } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-t border-gray-200 dark:border-gray-700 mt-12">
      <div className="max-w-4xl mx-auto px-6 py-4">
        <div className="flex items-center justify-center space-x-2 text-gray-600 dark:text-gray-400">
          <span className="text-sm">Made with</span>
          <Heart size={16} className="text-red-500 animate-pulse" />
          <span className="text-sm">by</span>
          <span className="text-sm font-semibold text-gray-900 dark:text-white">Ash</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;