'use client';

import React, { useState, useEffect } from 'react';
import { User, Phone, Mail, Menu, X, Folder, PenTool, Image, Github, Instagram } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export function Navigation({ children }: { children: React.ReactNode }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [showNumber, setShowNumber] = useState(false);
  const phoneNumber = '737-363-3829';
  const pathname = usePathname();

  const getPageTitle = (path: string) => {
    switch (path) {
      case '/':
        return 'Home';
      case '/about':
        return 'About';
      case '/projects':
        return 'Projects';
      case '/blog':
        return 'Blog';
      case '/gallery':
        return 'Gallery';
      default:
        return 'Home';
    }
  };

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(/iPhone|iPad|iPod|Android/i.test(navigator.userAgent));
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handlePhoneClick = () => {
    if (isMobile) {
      window.location.href = `tel:${phoneNumber}`;
    } else {
      setShowNumber(!showNumber);
    }
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="min-h-screen relative">
      {/* Mobile Overlay */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={toggleSidebar}
        />
      )}

      {/* Sidebar */}
      <div className={`
        fixed top-0 left-0 h-full w-60 border-r border-zinc-800 p-6 bg-zinc-900 
        z-50 transition-transform duration-300 ease-in-out
        md:translate-x-0 md:z-30
        ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}
      `}>
        <div className="flex items-center justify-between mb-12">
          <Link href="/" className="flex items-center space-x-3 hover:text-zinc-300 transition-colors">
            <div className="w-10 h-10 bg-zinc-800 flex items-center justify-center">
              RA
            </div>
            <span className="font-medium">Ryan Alexander</span>
          </Link>
          <button 
            onClick={toggleSidebar}
            className="md:hidden"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
        
        <nav className="space-y-1">
          <Link href="/about">
            <div className="p-3 hover:bg-zinc-800 cursor-pointer flex items-center group">
              <User className="w-5 h-5 mr-3 text-zinc-400 group-hover:text-zinc-100" />
              <span className="group-hover:text-zinc-100">About</span>
            </div>
          </Link>
          <Link href="/projects">
            <div className="p-3 hover:bg-zinc-800 cursor-pointer flex items-center group">
              <Folder className="w-5 h-5 mr-3 text-zinc-400 group-hover:text-zinc-100" />
              <span className="group-hover:text-zinc-100">Projects</span>
            </div>
          </Link>
          <Link href="/blog">
            <div className="p-3 hover:bg-zinc-800 cursor-pointer flex items-center group">
              <PenTool className="w-5 h-5 mr-3 text-zinc-400 group-hover:text-zinc-100" />
              <span className="group-hover:text-zinc-100">Blog</span>
            </div>
          </Link>
          <Link href="/gallery">
            <div className="p-3 hover:bg-zinc-800 cursor-pointer flex items-center group">
              <Image className="w-5 h-5 mr-3 text-zinc-400 group-hover:text-zinc-100" />
              <span className="group-hover:text-zinc-100">Gallery</span>
            </div>
          </Link>
        </nav>
      </div>

      {/* Main Content */}
      <div className="md:ml-60 min-h-screen flex flex-col">
        {/* Fixed Top Bar */}
        <div className="fixed top-0 left-0 right-0 md:left-60 h-14 md:h-16 border-b border-zinc-800 flex items-center justify-between px-4 md:px-6 bg-zinc-900 z-30">
          <div className="flex items-center space-x-3">
            <button 
              onClick={toggleSidebar}
              className="md:hidden"
            >
              <Menu className="w-6 h-6" />
            </button>
            <div className="text-lg font-medium">{getPageTitle(pathname)}</div>
          </div>
          <div className="flex items-center space-x-4 md:space-x-6">
            <div className="relative">
              <Phone 
                className="w-5 h-5 cursor-pointer hover:text-zinc-300 transition-colors" 
                onClick={handlePhoneClick}
              />
              {showNumber && !isMobile && (
                <div className="absolute right-0 top-8 bg-zinc-800 text-zinc-100 py-2 px-4 rounded-lg shadow-lg whitespace-nowrap z-50">
                  {phoneNumber}
                </div>
              )}
            </div>
            <a href="mailto:mavens_berries7n@icloud.com">
              <Mail className="w-5 h-5 cursor-pointer hover:text-zinc-300 transition-colors" />
            </a>
            <a href="https://github.com/mechanist01" target="_blank" rel="noopener noreferrer">
              <Github className="w-5 h-5 cursor-pointer hover:text-zinc-300 transition-colors" />
            </a>
            <a href="https://www.instagram.com/ryanalexander.io/" target="_blank" rel="noopener noreferrer">
              <Instagram className="w-5 h-5 cursor-pointer hover:text-zinc-300 transition-colors" />
            </a>
          </div>
        </div>

        {/* Page Content with Top Padding */}
        <main className="flex-1 p-4 md:p-6 mt-14 md:mt-16">
          {children}
        </main>
      </div>
    </div>
  );
}