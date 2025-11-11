import React from 'react';
import { Menu } from 'lucide-react';
import { Button } from './ui/button';

interface MobileHeaderProps {
  onMenuClick: () => void;
}

const MobileHeader: React.FC<MobileHeaderProps> = ({ onMenuClick }) => {
  return (
    <header className="md:hidden fixed top-0 left-0 right-0 h-16 bg-white border-b border-gray-200 z-50 flex items-center px-4 animate-fade-in">
      <Button
        variant="ghost"
        size="icon"
        onClick={onMenuClick}
        className="mr-3 hover:bg-gray-100 transition-colors"
      >
        <Menu className="h-6 w-6" />
      </Button>
      <div>
        <h1 className="text-lg font-bold text-gray-800">Finsera</h1>
        <p className="text-xs text-gray-600">Finance Nusantara</p>
      </div>
    </header>
  );
};

export default MobileHeader;
