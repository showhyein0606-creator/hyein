import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Send, CheckCircle2, RefreshCw, AlertTriangle } from 'lucide-react';
import { ContactForm } from '../types';

export default function Contact() {
  const [formData, setFormData] = useState<ContactForm>({
    fullName: '',
    email: '',
    inquiryType: '기업 강의 요청',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.email || !formData.message) {
      return;
    }

    setIsSubmitting(true);
    setErrorMsg(null);
    
    try {
      const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          service_id: 'service_g0lubic',
          template_id: 'template_jky7zuf',
          user_id: 'y-tKM1GlkCW0qk-cS',
          template_params: {
            fullName: formData.fullName,
            email: formData.email,
            inquiryType: formData.inquiryType,
            message: formData.message,
            from_name: formData.fullName,
            reply_to: formData.email,
            inquiry_type: formData.inquiryType,
            to_email: 's071215@gmail.com',
          }
        }),
      });

      if (response.ok) {
        setIsSubmitted(true);
      } else {
        const errorText = await response.text();
        console.error('EmailJS error:', errorText);
        setErrorMsg('이메일 발송에 실패했습니다. 다시 시도해 주시거나 s071215@gmail.com으로 직접 문의해 주세요.');
      }
    } catch (err: any) {
      console.error('Network error while using EmailJS:', err);
      setErrorMsg('네트워크 오류가 발생했습니다. 연결을 확인하고 다시 시도해 주세요.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setFormData({
      fullName: '',
      email: '',
      inquiryType: '기업 강의 요청',
      message: '',
    });
    setErrorMsg(null);
    setIsSubmitted(false);
  };

  return (
    <section id="contact" className="py-24 md:py-32 px-6 md:px-12 bg-[#0e0e0e] relative scroll-mt-20">
      {/* Background abstract overlay logic */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A] to-[#0e0e0e] pointer-events-none"></div>

      <div className="max-w-[1440px] mx-auto relative z-10">
        <div className="max-w-3xl mx-auto glass-panel p-8 sm:p-12 md:p-16 rounded-[2.5rem] border border-white/5 bg-[#0A0A0A]/80 shadow-[0_24px_80px_rgba(0,0,0,0.8)]">
          
          <AnimatePresence mode="wait">
            {!isSubmitted ? (
              <motion.div 
                key="form-container"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4 }}
              >
                {/* Heading */}
                <div className="text-center mb-12 space-y-3">
                  <h2 className="font-headline text-3xl sm:text-4xl font-bold text-white tracking-tight">
                    Start Your AI Journey
                  </h2>
                  <p className="text-[#c4c7c9] font-body text-sm sm:text-base leading-relaxed">
                    강의 요청 및 협업 제안을 남겨주시면 24시간 내에 답변 드립니다.
                  </p>
                </div>

                {/* Form Elements */}
                <form onSubmit={handleSubmit} className="space-y-6 text-left">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Full Name */}
                    <div className="space-y-2">
                      <label className="block text-[11px] font-mono uppercase tracking-widest text-[#c4c7c9] font-medium">
                        Full Name <span className="text-[#22C55E]">*</span>
                      </label>
                      <input 
                        type="text" 
                        required
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        placeholder="성함을 입력하세요"
                        className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-white text-sm placeholder-white/30 hover:border-white/20 focus:border-[#22C55E] focus:ring-1 focus:ring-[#22C55E]/30 transition-all outline-none"
                      />
                    </div>

                    {/* Email */}
                    <div className="space-y-2">
                      <label className="block text-[11px] font-mono uppercase tracking-widest text-[#c4c7c9] font-medium">
                        Email Address <span className="text-[#22C55E]">*</span>
                      </label>
                      <input 
                        type="email" 
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="이메일 주소를 입력하세요"
                        className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-white text-sm placeholder-white/30 hover:border-white/20 focus:border-[#22C55E] focus:ring-1 focus:ring-[#22C55E]/30 transition-all outline-none"
                      />
                    </div>
                  </div>

                  {/* Inquiry Type */}
                  <div className="space-y-2">
                    <label className="block text-[11px] font-mono uppercase tracking-widest text-[#c4c7c9] font-medium">
                      Inquiry Type <span className="text-[#22C55E]">*</span>
                    </label>
                    <div className="relative">
                      <select 
                        value={formData.inquiryType}
                        onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
                        className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-white text-sm hover:border-white/20 focus:border-[#22C55E] cursor-pointer transition-all outline-none appearance-none"
                      >
                        <option value="기업 강의 요청" className="bg-[#0A0A0A] text-white">기업 강의 요청</option>
                        <option value="1:1 멘토링" className="bg-[#0A0A0A] text-white">1:1 멘토링</option>
                        <option value="협업 제안" className="bg-[#0A0A0A] text-white">협업 제안</option>
                        <option value="기타 문의" className="bg-[#0A0A0A] text-white">기타 문의</option>
                      </select>
                      <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-neutral-400">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                    </div>
                  </div>

                  {/* Message */}
                  <div className="space-y-2">
                    <label className="block text-[11px] font-mono uppercase tracking-widest text-[#c4c7c9] font-medium">
                      Message <span className="text-[#22C55E]">*</span>
                    </label>
                    <textarea 
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="문의 내용을 상세히 적어주세요"
                      className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-white text-sm placeholder-white/30 hover:border-white/20 focus:border-[#22C55E] focus:ring-1 focus:ring-[#22C55E]/30 transition-all outline-none resize-none"
                    />
                  </div>

                  {errorMsg && (
                    <div className="flex items-start gap-2.5 p-4 bg-[#EF4444]/15 border border-[#EF4444]/30 rounded-xl text-xs sm:text-sm text-[#EF4444]/90">
                      <AlertTriangle className="h-4.5 w-4.5 shrink-0 mt-0.5" />
                      <span>{errorMsg}</span>
                    </div>
                  )}

                  {/* Submit Button */}
                  <button 
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[#22C55E] text-black hover:bg-[#22c55e]/95 active:scale-[0.99] transition-all font-bold py-4.5 rounded-xl text-md flex items-center justify-center gap-2 shadow-lg shadow-[#22C55E]/10 mt-4 disabled:opacity-50 cursor-pointer"
                  >
                    {isSubmitting ? (
                      <>
                        <RefreshCw className="h-5 w-5 animate-spin" />
                        <span>전송 중...</span>
                      </>
                    ) : (
                      <>
                        <Send className="h-5 w-5" />
                        <span>문의 보내기</span>
                      </>
                    )}
                  </button>
                </form>
              </motion.div>
            ) : (
              <motion.div 
                key="success-container"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="text-center py-8 space-y-6 flex flex-col items-center"
              >
                <div className="h-16 w-16 rounded-full bg-[#22C55E]/10 border border-[#22C55E]/30 text-[#22C55E] flex items-center justify-center filter drop-shadow-[0_0_15px_rgba(34,197,94,0.2)]">
                  <CheckCircle2 className="h-10 w-10 text-[#22C55E]" />
                </div>
                
                <div className="space-y-3">
                  <h3 className="font-headline text-2xl font-bold text-white tracking-tight">
                    요청이 전송되었습니다!
                  </h3>
                  <p className="text-[#c4c7c9] font-body text-base max-w-md mx-auto leading-relaxed">
                    소중한 제안을 보내주셔서 감사합니다. <br />
                    작성하신 <strong>{formData.email}</strong> 주소로 24시간 이내에 정기 회신을 드리겠습니다.
                  </p>
                </div>

                <button 
                  onClick={handleReset}
                  className="px-6 py-2.5 rounded-full border border-white/10 hover:border-white/20 bg-white/5 hover:bg-white/10 text-white font-medium text-sm transition-all flex items-center gap-2 focus:outline-none"
                >
                  새로운 문의 작성
                </button>
              </motion.div>
            )}
          </AnimatePresence>

        </div>
      </div>
    </section>
  );
}
