import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { BadgeCheck, ZoomIn, X, Calendar, Search } from 'lucide-react';
import { aboutSkills } from '../data';

export default function About() {
  const [isZoomed, setIsZoomed] = useState(false);
  const resumeUrl = "https://lh3.googleusercontent.com/aida-public/AB6AXuC0qUvr98aiTty7unBHPZYAx-D4Gv1pdLf8V-b-6hts3SpxWN_R0zxwAomrUhd1MKcEIF_FRHDXS4TNB-oEFvD_X69JUhqsj96m6AO223EJiPR8uWs9ItH30sRj2p8qZ19YkFxVawgy_ipSgPmmmboI0vzw6PFVJ5cQ-jAMeUtNBrTfrJ6y_6-JcptsZPCDXy7Crl-fSA7hnNlFFAlTL_rMlstSoxj_ZTNXawbHUSL6T688jNy9BkwXDSu-VOKYSaxNPgXO-spgEaR_";

  return (
    <section id="about" className="py-24 md:py-32 px-6 md:px-12 bg-[#0A0A0A] relative border-b border-white/5 scroll-mt-20">
      <div className="max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Side: Professional Profile copy */}
          <div className="lg:col-span-6 space-y-8">
            <div className="space-y-4">
              <span className="text-xs font-mono uppercase tracking-widest text-[#22C55E] font-semibold">About Me</span>
              <h2 className="font-headline text-3xl sm:text-4xl lg:text-[40px] font-bold text-white leading-tight">
                Digital Practical Education Expert
              </h2>
            </div>
            
            <p className="text-[#c4c7c9] font-body text-base sm:text-lg leading-relaxed">
              전직 쇼호스트 출신의 라이브 커머스 전문가로서, 단순한 지식 전달을 넘어 실전 경험을 바탕으로 한 임팩트 있는 교육을 제공합니다. 중소기업부터 시니어 교육까지, 디지털 격차를 해소하고 실질적인 성과를 만드는 디지털 훈련 전문가입니다.
            </p>

            {/* List of Affiliations */}
            <div className="space-y-3.5 pt-2">
              {aboutSkills.map((skill, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-center gap-4 p-4 glass-card rounded-xl group"
                >
                  <div className="h-10 w-10 rounded-lg bg-[#22C55E]/10 flex items-center justify-center border border-[#22C55E]/20 text-[#22C55E] group-hover:bg-[#22C55E]/20 group-hover:border-[#22C55E]/40 transition-all">
                    <BadgeCheck className="h-5 w-5" />
                  </div>
                  <span className="text-white font-medium font-body text-base sm:text-lg">
                    {skill}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Side: Interactive Portfolio Graphic */}
          <div className="lg:col-span-6 relative flex flex-col items-center">
            <div className="absolute -inset-4 bg-gradient-to-tr from-[#22C55E]/5 to-orange-500/5 blur-3xl rounded-full opacity-40"></div>
            
            <div className="relative group w-full max-w-[480px]">
              {/* Card Canvas Frame */}
              <div 
                onClick={() => setIsZoomed(true)}
                className="cursor-zoom-in relative z-10 w-full overflow-hidden rounded-2xl glass-panel border border-white/10 shadow-2xl transition-all duration-300 group-hover:border-white/20 p-2"
              >
                <img 
                  src={resumeUrl} 
                  alt="상세 이력 카드" 
                  className="w-full h-auto rounded-xl object-contain transition-transform duration-500 group-hover:scale-[1.02]"
                  referrerPolicy="no-referrer"
                />
                
                {/* Visual Hover Instructions */}
                <div className="absolute inset-0 bg-[#0A0A0A]/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center rounded-xl z-20">
                  <div className="flex items-center gap-2 px-4 py-2 bg-black/85 border border-white/20 rounded-full text-sm font-medium text-white shadow-lg">
                    <Search className="h-4 w-4 text-[#22C55E]" />
                    <span>클릭하여 이력 확대보기</span>
                  </div>
                </div>
              </div>

              {/* Layered Floating Stats Badge */}
              <div className="absolute bottom-6 -left-6 z-20 glass-panel border border-white/10 p-5 rounded-2xl shadow-xl hidden md:flex items-center gap-4 bg-[#0e0e0e]/90 hover:border-white/20 transition-all">
                <div className="h-12 w-12 rounded-xl bg-[#22C55E]/10 flex items-center justify-center text-[#22C55E] border border-[#22C55E]/20">
                  <Calendar className="h-6 w-6" />
                </div>
                <div>
                  <div className="text-3xl font-bold font-headline text-[#22C55E] tracking-tight">500+</div>
                  <div className="text-[10px] text-[#c4c7c9] tracking-widest font-mono font-medium uppercase mt-0.5">CUMULATIVE SESSIONS</div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Full zoom overlay Modal */}
      <AnimatePresence>
        {isZoomed && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 backdrop-blur-md z-50 flex items-center justify-center p-4 md:p-8"
            onClick={() => setIsZoomed(false)}
          >
            <button 
              className="absolute top-6 right-6 h-12 w-12 rounded-full bg-white/5 border border-white/10 hover:bg-white/15 text-white flex items-center justify-center transition-all focus:outline-none"
              onClick={() => setIsZoomed(false)}
            >
              <X className="h-5 w-5" />
            </button>
            <motion.div 
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              transition={{ type: 'spring', damping: 25 }}
              className="max-w-4xl max-h-[90vh] overflow-y-auto w-full glass-panel border border-white/15 p-1 rounded-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <img 
                src={resumeUrl} 
                alt="상세 이력 이혜인 프로필" 
                className="w-full h-auto object-contain rounded-xl"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
