
import React from 'react';
import { TikTokIcon } from './icons/TikTokIcon';
import { InstagramIcon } from './icons/InstagramIcon';
import { TelegramIcon } from './icons/TelegramIcon';

const socialLinks = [
  { name: 'TikTok', icon: TikTokIcon, href: 'https://tiktok.com/@f.yjs', user: 'f.yjs' },
  { name: 'Instagram', icon: InstagramIcon, href: 'https://instagram.com/mn_moh.n', user: 'mn_moh.n' },
  { name: 'Telegram', icon: TelegramIcon, href: 'https://t.me/d_3_x', user: 'd_3_x' },
];

const SocialLinks: React.FC = () => {
  return (
    <section className="flex flex-wrap items-center justify-center gap-6 md:gap-8">
      {socialLinks.map((link) => (
        <a
          key={link.name}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex flex-col items-center gap-2 text-cyan-300 transition-all duration-300 hover:text-cyan-100"
        >
          <div className="p-4 bg-cyan-900/30 rounded-full border-2 border-cyan-400/50 transition-all duration-300 group-hover:scale-110 group-hover:shadow-[0_0_20px_theme(colors.cyan.400)] group-hover:border-cyan-300">
            <link.icon className="w-8 h-8" />
          </div>
          <span className="text-sm font-bold tracking-wider opacity-0 group-hover:opacity-100 transition-opacity duration-300">{link.user}</span>
        </a>
      ))}
    </section>
  );
};

export default SocialLinks;
