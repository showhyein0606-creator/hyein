import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, BookOpen } from 'lucide-react';

export default function Hero() {
  const instructorUrl = "https://lh3.googleusercontent.com/aida-public/AB6AXuA76m_S2NGSaHM2kFmvaxuPhpwbDI7vnzs2d952eYgZ4qBsq06gx31ocP1AVYzua_BZPxyTMcmdN6-1Z5SxwjRQThyZGj5StIEigoMHu4_EZQI-ySMz4LsZjGE9EuqaRB7ffPsNVOzoEU9Hf4rMS7WdWksKJ2eV4Hg9uzDrpMSRjHD_KERdn09g9R9uzDrpMSRjHD_KERdn09g9R9uu7WSq1VfsOrjtRsmC7XjbtKYur8uRsgO_LFTXgjJXkSideT6WX6R0OYhKGcmtXHbU2FUS5iJ__22LKpsX4DY";

  return (
    <section className="relative min-h-screen flex items-center pt-32 pb-24 hero-mesh overflow-hidden px-6 md:px-12 bg-[#0A0A0A]">
      <div className="max-w-[1440px] mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        
        {/* Left Side: Copywriting */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-7 z-10 space-y-6 text-left"
        >
          {/* Badge */}
          <div className="inline-block relative">
            <span className="relative z-10 px-4 py-1.5 text-xs tracking-widest font-mono text-[#22C55E] bg-[#22C55E]/10 border border-[#22C55E]/30 rounded-full font-semibold uppercase">
              AI & Digital Expert
            </span>
            <div className="absolute inset-0 bg-[#22C55E]/10 filter blur-md rounded-full"></div>
          </div>

          {/* Title */}
          <h1 className="font-headline text-4xl sm:text-5xl md:text-6xl lg:text-[62px] font-bold text-white leading-[1.15] tracking-tight">
            AI 실무 교육의 <br />
            새로운 기준, <span className="text-[#22C55E]">이혜인</span>
          </h1>

          {/* Subtitle */}
          <p className="text-[#c4c7c9] font-body text-base sm:text-lg md:text-xl font-normal leading-relaxed max-w-[600px]">
            현장에 바로 적용되는 디지털 실무 교육으로 학습자의 실행력과 성과를 함께 높이는 실전형 강사입니다.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4">
            <a 
              href="#contact" 
              className="group bg-white hover:bg-neutral-200 text-[#0A0A0A] font-bold px-8 py-4 rounded-xl flex items-center justify-center gap-2 transition-all hover:translate-y-[-2px] shadow-lg text-base"
            >
              강의 문의하기
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="#courses" 
              className="glass-card px-8 py-4 rounded-xl font-bold text-white flex items-center justify-center gap-2 text-base"
            >
              <BookOpen className="h-5 w-5 text-[#22C55E]" />
              커리큘럼 보기
            </a>
          </div>
        </motion.div>

        {/* Right Side: Visual Graphic */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-5 relative flex justify-center lg:justify-end"
        >
          {/* Subtle Ambient Glow behind profile */}
          <div className="absolute -inset-4 bg-gradient-to-tr from-[#22C55E]/15 to-blue-500/15 blur-3xl rounded-full opacity-60"></div>
          
          {/* Main Card Wrapper */}
          <div className="relative z-10 w-full max-w-[420px] aspect-[3/4] rounded-2xl overflow-hidden glass-panel border border-white/10 shadow-2xl p-2.5">
            <img 
              src={instructorUrl} 
              alt="이혜인 강사 프로필" 
              className="w-full h-full object-cover object-center rounded-xl"
              referrerPolicy="no-referrer"
            />
          </div>
        </motion.div>
        
      </div>
    </section>
  );
}
