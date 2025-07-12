import React from 'react';
import { Image, ExternalLink } from 'lucide-react';

interface ImageDiagramProps {
  src: string;
  alt: string;
  caption?: string;
  width?: string;
  height?: string;
  className?: string;
}

const ImageDiagram: React.FC<ImageDiagramProps> = ({
  src,
  alt,
  caption,
  width = "100%",
  height = "auto",
  className = ""
}) => {
  const handleImageClick = () => {
    window.open(src, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className={`my-6 ${className}`}>
      <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 overflow-hidden shadow-sm">
        <div className="p-4">
          <div className="flex items-center space-x-2 mb-3">
            <Image size={16} className="text-blue-600 dark:text-blue-400" />
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Diagram</span>
          </div>
          
          <div className="relative cursor-pointer group" onClick={handleImageClick}>
            <img
              src={src}
              alt={alt}
              style={{ width, height }}
              className="w-full h-auto rounded-md border border-gray-100 dark:border-gray-600 transition-opacity group-hover:opacity-90"
              loading="lazy"
            />
            
            {/* Click overlay */}
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-0 group-hover:bg-opacity-20 rounded-md transition-all duration-200">
              <div className="text-center text-gray-500 dark:text-gray-400">
                <ExternalLink size={24} className="mx-auto mb-2 opacity-0 group-hover:opacity-100 transition-opacity text-white" />
                <p className="text-sm opacity-0 group-hover:opacity-100 transition-opacity text-white font-medium">Click to view full size</p>
              </div>
            </div>
          </div>
          
          {caption && (
            <p className="mt-3 text-sm text-gray-600 dark:text-gray-400 italic text-center">
              {caption}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ImageDiagram;