import React from 'react';
import { motion } from 'motion/react';
import { Youtube, Cpu, Megaphone, Share2, FileText } from 'lucide-react';
import { courses } from '../data';
import { Course } from '../types';

const iconMap = {
  smart_display: Youtube,
  psychology_alt: Cpu,
  campaign: Megaphone,
  rss_feed: Share2,
  article: FileText,
};

export default function Courses() {
  return (
    <section id="courses" className="py-24 md:py-32 px-6 md:px-12 bg-[#0e0e0e] relative border-b border-white/5 scroll-mt-20">
      <div className="max-w-[1440px] mx-auto">
        
        {/* Section Title */}
        <div className="text-center max-w-2xl mx-auto mb-16 md:mb-20 space-y-4">
          <span className="text-xs font-mono uppercase tracking-widest text-[#22C55E] font-semibold">Educational Programs</span>
          <h2 className="font-headline text-3xl sm:text-4xl lg:text-[40px] font-bold text-white tracking-tight">
            Core Curriculums
          </h2>
          <p className="text-[#c4c7c9] font-body text-base leading-relaxed">
            미래 경쟁력을 확보하기 위한 AI와 디지털 실무 교육의 정수를 담았습니다.
          </p>
        </div>

        {/* 3-Column Bento/Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {courses.map((course: Course, index: number) => {
            const IconComponent = iconMap[course.iconName] || Youtube;
            const isAlternateAccent = course.accentColor === 'blue';
            const accentHex = isAlternateAccent ? 'group-hover:border-blue-500/30' : 'group-hover:border-[#22C55E]/30';
            const iconBgHex = isAlternateAccent ? 'bg-blue-500/10 text-blue-400' : 'bg-[#22C55E]/10 text-[#22C55E]';

            return (
              <motion.div 
                key={course.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: 'easeOut' }}
                className={`group glass-card p-8 rounded-2xl flex flex-col justify-between h-full border border-white/5 hover:border-transparent ${accentHex}`}
              >
                <div>
                  {/* Icon */}
                  <div className={`h-12 w-12 rounded-xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110 duration-300 ${iconBgHex}`}>
                    <IconComponent className="h-6 w-6" />
                  </div>

                  {/* Title & Description */}
                  <h3 className="font-headline text-xl md:text-2xl font-bold text-white mb-3 tracking-tight group-hover:text-[#22C55E] transition-colors">
                    {course.title}
                  </h3>
                  <p className="text-[#c4c7c9] font-body text-sm leading-relaxed mb-6">
                    {course.description}
                  </p>
                </div>

                {/* Tag Pills */}
                <div className="flex gap-2 flex-wrap mt-auto">
                  {course.tags.map((tag) => (
                    <span 
                      key={tag}
                      className="px-3 py-1 rounded-full bg-white/5 text-[11px] font-mono font-medium tracking-wide text-[#c4c7c9] border border-white/10 group-hover:border-white/20 transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
