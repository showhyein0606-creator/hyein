import React from 'react';
import { motion } from 'motion/react';
import { Youtube, BookOpen, Globe, Instagram, ExternalLink } from 'lucide-react';
import { channels } from '../data';
import { Channel } from '../types';

const iconMap = {
  play_circle: Youtube,
  description: BookOpen,
  language: Globe,
  share: Instagram,
};

export default function ChannelSection() {
  return (
    <section id="channel" className="py-24 md:py-32 px-6 md:px-12 bg-[#0A0A0A] relative border-b border-white/5 scroll-mt-20">
      <div className="max-w-[1440px] mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 md:mb-20 gap-4">
          <div className="max-w-xl space-y-4 text-left">
            <span className="text-xs font-mono uppercase tracking-widest text-[#22C55E] font-semibold">Social Presence</span>
            <h2 className="font-headline text-3xl sm:text-4xl lg:text-[40px] font-bold text-white tracking-tight animate-pulse-subtle">
              Connected Channels
            </h2>
            <p className="text-[#c4c7c9] font-body text-base leading-relaxed">
              다양한 플랫폼에서 실시간으로 소통하고 최신 AI 트렌드를 공유하고 있습니다.
            </p>
          </div>
        </div>

        {/* Channels Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {channels.map((channel: Channel, index: number) => {
            const IconComponent = iconMap[channel.iconName] || Globe;
            
            return (
              <motion.a 
                key={channel.id}
                href={channel.url}
                target={channel.url.startsWith('http') ? '_blank' : '_self'}
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="group relative glass-card p-6 rounded-2xl flex items-center justify-between overflow-hidden border border-white/5 bg-[#0e0e0e]/50 focus:outline-none"
              >
                <div className="flex items-center gap-4">
                  {/* Icon Wrapper */}
                  <div 
                    className="w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                    style={{ backgroundColor: channel.backgroundColor, color: channel.textColor }}
                  >
                    <IconComponent className="w-5 h-5" />
                  </div>
                  
                  {/* Text */}
                  <div className="text-left">
                    <h3 className="text-white font-bold font-body text-base group-hover:text-[#22C55E] transition-colors">
                      {channel.name}
                    </h3>
                    <p className="text-[#c4c7c9] font-body text-xs mt-0.5">
                      {channel.handle}
                    </p>
                  </div>
                </div>

                {/* External link Indicator */}
                <div className="text-neutral-500 group-hover:text-white transition-colors">
                  <ExternalLink className="w-4 h-4 opacity-40 group-hover:opacity-100 transition-opacity" />
                </div>
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
