import React from 'react';
import { Logo } from './Logo';

interface FooterProps {
  onLogoClick?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onLogoClick }) => {
  return (
    <footer className="bg-slate-900 text-white py-12 border-t border-slate-800">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="hover:opacity-90 transition-opacity cursor-pointer" onClick={onLogoClick}>
            <Logo variant="dark" />
          </div>
          <div className="text-slate-400 text-sm">
            &copy; {new Date().getFullYear()} Lemon Fresh Marketing. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};