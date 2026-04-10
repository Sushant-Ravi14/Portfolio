import { useEffect, useState } from 'react';
import { Command } from 'cmdk';
import { FaUser, FaBriefcase, FaCode, FaEnvelope, FaDownload, FaExternalLinkAlt } from 'react-icons/fa';
import resumePdf from "../assets/sushant_ravi_resume.pdf";

export default function CommandPalette() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const down = (e) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener('keydown', down);
    return () => document.removeEventListener('keydown', down);
  }, []);

  const handleSelect = (action) => {
    setOpen(false);
    action();
  };

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <Command.Dialog
      open={open}
      onOpenChange={setOpen}
      label="Global Command Menu"
      className="fixed inset-0 z-[100] flex items-start justify-center pt-[15vh] sm:pt-[20vh] bg-black/60 backdrop-blur-sm"
    >
      <div className="w-full max-w-xl mx-4 overflow-hidden bg-[#0f0f0f] border border-white/10 rounded-xl shadow-2xl glass-effect">
        <Command.Input
          placeholder="Type a command or search..."
          className="w-full px-5 py-4 text-base bg-transparent border-b border-white/10 outline-none text-gray-100 placeholder:text-gray-500 font-sans"
        />
        <Command.List className="max-h-[300px] overflow-y-auto p-2">
          <Command.Empty className="p-4 text-sm text-center text-gray-500">No results found.</Command.Empty>

          <Command.Group heading="Navigation" className="px-2 py-2 text-xs font-medium text-gray-500">
            <Command.Item
              onSelect={() => handleSelect(() => scrollTo('about'))}
              className="flex items-center px-3 py-3 mt-1 text-sm text-gray-200 cursor-pointer rounded-lg hover:bg-white/10 data-[selected=true]:bg-white/10 transition-colors"
            >
              <FaUser className="w-4 h-4 mr-3 text-gray-400" />
              About Me
            </Command.Item>
            <Command.Item
              onSelect={() => handleSelect(() => scrollTo('projects'))}
              className="flex items-center px-3 py-3 mt-1 text-sm text-gray-200 cursor-pointer rounded-lg hover:bg-white/10 data-[selected=true]:bg-white/10 transition-colors"
            >
              <FaBriefcase className="w-4 h-4 mr-3 text-gray-400" />
              Projects
            </Command.Item>
            <Command.Item
              onSelect={() => handleSelect(() => scrollTo('skills'))}
              className="flex items-center px-3 py-3 mt-1 text-sm text-gray-200 cursor-pointer rounded-lg hover:bg-white/10 data-[selected=true]:bg-white/10 transition-colors"
            >
              <FaCode className="w-4 h-4 mr-3 text-gray-400" />
              Skills
            </Command.Item>
            <Command.Item
              onSelect={() => handleSelect(() => scrollTo('contact'))}
              className="flex items-center px-3 py-3 mt-1 text-sm text-gray-200 cursor-pointer rounded-lg hover:bg-white/10 data-[selected=true]:bg-white/10 transition-colors"
            >
              <FaEnvelope className="w-4 h-4 mr-3 text-gray-400" />
              Contact
            </Command.Item>
          </Command.Group>

          <Command.Group heading="Actions" className="px-2 py-2 text-xs font-medium text-gray-500">
            <Command.Item
              onSelect={() =>
                handleSelect(() => {
                  const link = document.createElement('a');
                  link.href = resumePdf;
                  link.download = 'Sushant_Ravi_Resume.pdf';
                  link.click();
                })
              }
              className="flex items-center px-3 py-3 mt-1 text-sm text-gray-200 cursor-pointer rounded-lg hover:bg-white/10 data-[selected=true]:bg-white/10 transition-colors"
            >
              <FaDownload className="w-4 h-4 mr-3 text-gray-400" />
              Download Resume
            </Command.Item>
            <Command.Item
              onSelect={() =>
                handleSelect(() => {
                  navigator.clipboard.writeText(window.location.href);
                  alert('Copied portfolio link to clipboard!');
                })
              }
              className="flex items-center px-3 py-3 mt-1 text-sm text-gray-200 cursor-pointer rounded-lg hover:bg-white/10 data-[selected=true]:bg-white/10 transition-colors"
            >
              <FaExternalLinkAlt className="w-4 h-4 mr-3 text-gray-400" />
              Copy Portfolio Link
            </Command.Item>
          </Command.Group>
        </Command.List>
      </div>
    </Command.Dialog>
  );
}
