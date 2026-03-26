/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useRef, useEffect } from 'react';
import { 
  ArrowLeft, 
  MoreHorizontal, 
  Zap, 
  Camera, 
  Keyboard, 
  PlusCircle, 
  RefreshCw
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Message, DiscoveryCard } from './types';
import { INITIAL_MESSAGES, DISCOVERY_CARDS } from './constants';

export default function App() {
  const [messages, setMessages] = useState<Message[]>(INITIAL_MESSAGES.slice(0, 1));
  const [step, setStep] = useState(0);
  const [isDiscoveryVisible, setIsDiscoveryVisible] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleScanReceipt = () => {
    setStep(1);
    const receiptMsg = INITIAL_MESSAGES[1];
    const scanningMsg = INITIAL_MESSAGES[2];
    setMessages(prev => [...prev, receiptMsg, scanningMsg]);
    
    setTimeout(() => {
      const resultMsg = INITIAL_MESSAGES[3];
      const lockMsg = INITIAL_MESSAGES[4];
      setMessages(prev => [...prev, resultMsg, lockMsg]);
      setStep(2);
    }, 1500);
  };

  const handleShowDiscovery = () => {
    setIsDiscoveryVisible(true);
    const newMessage: Message = {
      id: Date.now().toString(),
      type: 'ai',
      senderName: 'AI AGENT PORTAL',
      content: '行动开始！老板，虽然我还摸不准您的品味，但我懂怎么找“羊毛”。这几位周边的打工人手里都有高价值的情报，问问他们！',
      timestamp: new Date(),
    };
    setMessages(prev => [...prev, newMessage]);
    setStep(3);
  };

  return (
    <div className="flex flex-col min-h-screen bg-background-light dark:bg-background-dark max-w-md mx-auto shadow-2xl relative overflow-hidden">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 flex items-center bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md px-4 py-3 justify-between border-b border-slate-100 dark:border-slate-800">
        <button className="text-slate-900 dark:text-slate-100 flex size-10 items-center justify-center rounded-full hover:bg-primary/10 transition-colors">
          <ArrowLeft size={24} />
        </button>
        <h2 className="text-slate-900 dark:text-slate-100 text-lg font-bold leading-tight tracking-tight flex-1 text-center">
          到店对话
        </h2>
        <div className="flex w-10 items-center justify-end">
          <button className="flex size-10 cursor-pointer items-center justify-center rounded-full bg-transparent text-slate-900 dark:text-slate-100">
            <MoreHorizontal size={24} />
          </button>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-1 flex flex-col overflow-hidden">
        <div ref={scrollRef} className="flex-1 overflow-y-auto hide-scrollbar pb-32">
          {/* Hero Section */}
          <div className="px-4 py-4">
            <div className="relative overflow-hidden rounded-xl aspect-[16/10] group">
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105" 
                style={{ 
                  backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDr-ZvEIFXjiLGS1X1t8dJrMhSJ_ORzDFEM5-Y8y9jlInWENHta7nwgP0E6NhhxLJLzYpxfr9J68JD9IZvMRHqlehgixOkqf90Cglr_x1xKFSlfjyc7_V1-rpNKpYGFzJ99oFvNXbBT17MV7uXavtBgq3SCbaEGm4dDM04N2JQwzl-5PkJ1n8Z26goZ_0NrB8JIw8FRkd0JjOaW427sCLXlGnHsGXUnmFx4H-TRakv5q2bvPoSBrwPdgfKR89L_pSWJznWCLBM5UcVd")',
                  referrerPolicy: 'no-referrer'
                } as any}
              >
                <div className="absolute inset-0 aesthetic-overlay" />
              </div>
              <div className="absolute bottom-0 left-0 p-5 w-full">
                <div className="flex items-center gap-2 mb-1">
                  <span className="bg-primary text-white text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider">
                    Arrival
                  </span>
                  <p className="text-white/80 text-xs font-medium">距离 5m</p>
                </div>
                <h1 className="text-white text-2xl font-bold leading-tight">
                  您已到达 · Manner Coffee
                </h1>
              </div>
            </div>
          </div>

          {/* Status Bar */}
          <div className="px-4 py-2">
            <div className="flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-2xl px-4 py-3">
              <Zap className="text-primary" size={20} />
              <p className="text-slate-900 dark:text-slate-100 text-sm font-semibold">
                大家在这里常感到：<span className="text-primary">深度充电</span>
              </p>
            </div>
          </div>

          {/* Chat Messages */}
          <div className="p-4 space-y-8">
            {messages.map((msg, idx) => (
              <motion.div 
                key={msg.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className={`flex gap-3 ${msg.type === 'user' ? 'flex-col items-end' : ''}`}
              >
                {msg.type === 'ai' && (
                  <div className="relative shrink-0">
                    <div className="bg-primary/20 rounded-full p-1 border-2 border-primary">
                      <div 
                        className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10" 
                        style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDgaKnDKYXts34kswXm7WxUa2uu4Z9cRHpobb0y2OMta69p0RRglxS-cKJvsBCrancTMZGiR3SoX4ck77XnANrIbk5zoCN3YjOCPffEQ6BlYiMUYNHDKrOe93ifp9DosKVxAp_oz0y6nw6IzO8SwnZ0cStNNdy88uevkM8YN4-Xuj4-EYkIso5MGimJBJRtb4UwyymWYGsn9bQEcoz664A8CScMcNOS82wi1kNPQyAH-Rom-t1Pvalmxl8_N6-XmQSjOFAFSbkbxNXT")' }}
                      />
                    </div>
                  </div>
                )}

                <div className={`flex flex-1 flex-col gap-2 ${msg.type === 'user' ? 'max-w-[75%]' : ''}`}>
                  {msg.type === 'ai' && (
                    <p className="text-slate-500 dark:text-slate-400 text-[10px] font-bold uppercase tracking-widest">
                      {msg.senderName}
                    </p>
                  )}
                  
                  <div className={`relative p-4 shadow-soft border ${
                    msg.type === 'ai' 
                      ? 'bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 rounded-2xl rounded-tl-none' 
                      : 'bg-white dark:bg-slate-700 border-slate-200 dark:border-slate-600 rounded-2xl rounded-tr-none p-2'
                  }`}>
                    {msg.imageUrl ? (
                      <img 
                        src={msg.imageUrl} 
                        alt="Receipt" 
                        className="w-full h-auto rounded-xl"
                        referrerPolicy="no-referrer"
                      />
                    ) : (
                      <p className="text-[15px] text-slate-800 dark:text-slate-200 leading-relaxed font-medium">
                        {msg.content.includes('✧45') ? (
                          <>
                            老板，收据已分析完成。您本次消费了 ￥45，为您赚取了{' '}
                            <span className="text-primary font-bold">✧45</span> 奖励。
                          </>
                        ) : msg.content.includes('锁定一个店') ? (
                          <>
                            但我现在是个零体验的打工人，没办法为您赚零花钱…{' '}
                            <span className="font-bold">因为超市没有『空间情报』。</span>
                            只要你让我拿着这笔积分去附近
                            <span className="text-primary font-bold">锁定一个店</span>
                            ，我马上就能开始接单！
                          </>
                        ) : msg.content.includes('问问他们') ? (
                          <>
                            行动开始！老板，虽然我还摸不准您的品味，但我懂怎么找“羊毛”。这几位周边的打工人手里都有高价值的情报，{' '}
                            <span className="text-primary font-bold">问问他们！</span>
                          </>
                        ) : (
                          msg.content
                        )}
                      </p>
                    )}
                  </div>

                  {/* Contextual Buttons for specific AI message */}
                  {msg.id === '5' && !isDiscoveryVisible && (
                    <div className="mt-3 space-y-3">
                      <button 
                        onClick={handleShowDiscovery}
                        className="w-full bg-primary text-white font-bold py-3 px-6 rounded-xl shadow-amber-glow active:scale-[0.98] transition-transform"
                      >
                        看看附近有什么店
                      </button>
                      <button className="w-full bg-white text-primary border-2 border-primary font-bold py-3 px-6 rounded-xl active:bg-primary/5 transition-colors">
                        我的积分能用在哪？
                      </button>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}

            {/* Discovery Section */}
            <AnimatePresence>
              {isDiscoveryVisible && (
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="pt-4"
                >
                  <div className="flex items-center justify-between mb-4 pl-1">
                    <p className="text-sm text-stone-400 font-semibold tracking-wider uppercase">
                      4 个私人视角为你精选
                    </p>
                    <button className="text-[12px] text-stone-400 font-medium flex items-center gap-1 hover:text-primary transition-colors pr-2">
                      <RefreshCw size={14} />
                      换一批
                    </button>
                  </div>

                  <div className="flex overflow-x-auto hide-scrollbar gap-5 pb-8 snap-x snap-mandatory -mx-4 px-4">
                    {DISCOVERY_CARDS.map((card) => (
                      <div 
                        key={card.id}
                        className="snap-center shrink-0 w-[300px] aspect-square flex flex-col bg-stone-100 rounded-xl shadow-xl overflow-hidden relative group"
                      >
                        <img 
                          src={card.venueImage} 
                          alt={card.venueName} 
                          className="absolute inset-0 w-full h-full object-cover"
                          referrerPolicy="no-referrer"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                        
                        {/* Author Info */}
                        <div className="absolute top-5 left-5 right-5 flex items-center gap-3 z-20">
                          <div className="size-10 rounded-full overflow-hidden border-2 border-white/80 shadow-md shrink-0">
                            <img src={card.authorAvatar} alt={card.authorName} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                          </div>
                          <div className="flex flex-col items-start">
                            <span className="text-white text-base font-bold font-serif">{card.authorName}</span>
                            <span className="bg-[#2D1D09]/60 backdrop-blur-md border border-white/10 text-white text-[10px] px-2.5 py-0.5 rounded-full font-bold mt-0.5">
                              {card.tag}
                            </span>
                          </div>
                        </div>

                        {/* Quote */}
                        <div className="absolute inset-x-0 bottom-24 px-8 z-10 flex flex-col items-center">
                          <span className="text-3xl text-lumen-amber/60 font-serif mb-[-8px]">“</span>
                          <p className="text-[17px] text-white font-serif italic text-center leading-relaxed font-medium">
                            {card.quote}
                          </p>
                          <span className="text-3xl text-lumen-amber/60 font-serif mt-[-4px]">”</span>
                        </div>

                        {/* Venue Info & CTA */}
                        <div className="absolute bottom-5 left-5 right-5 flex items-center gap-2.5 z-30">
                          <div className="flex flex-1 items-center gap-2.5 bg-[#FFF9F2]/95 backdrop-blur-md px-3.5 py-2 rounded-full shadow-lg min-w-0 border border-amber-100/50">
                            <div className="size-7 rounded-full bg-stone-100 overflow-hidden shrink-0">
                              <img src={card.venueImage} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                            </div>
                            <div className="flex flex-col min-w-0">
                              <span className="text-[12px] font-bold text-stone-800 truncate leading-none">{card.venueName}</span>
                              <span className="text-[9px] text-lumen-amber font-bold tracking-tight">{card.distance}</span>
                            </div>
                          </div>
                          <button className="bg-primary px-5 py-2.5 rounded-full shadow-amber-glow active:scale-95 transition-all shrink-0">
                            <span className="text-[13px] font-bold text-white tracking-wide">问问TA</span>
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </main>

      {/* Bottom Input Bar */}
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-xl border-t border-slate-100 dark:border-slate-800 z-50">
        <div className="max-w-lg mx-auto flex flex-col gap-4">
          {step === 0 && (
            <motion.button 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              onClick={handleScanReceipt}
              className="w-full flex items-center justify-center gap-3 bg-primary text-white p-6 rounded-3xl shadow-xl shadow-primary/25 active:scale-[0.98] transition-all duration-200"
            >
              <Camera size={24} />
              <span className="font-bold text-lg">扫描小票，提取情报</span>
            </motion.button>
          )}
          
          {step > 0 && (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white dark:bg-slate-800 rounded-full shadow-pill border border-amber-100/50 dark:border-slate-700 flex items-center px-4 py-2 gap-3 h-16"
            >
              <button className="p-2 text-stone-600 dark:text-stone-400 active:scale-90 transition-transform">
                <Camera size={28} />
              </button>
              <div className="flex-1 flex justify-center">
                <span className="text-stone-800 dark:text-stone-200 font-bold text-[16px] tracking-wide">
                  按住说话
                </span>
              </div>
              <div className="flex items-center gap-2">
                <button className="p-2 text-stone-600 dark:text-stone-400 active:scale-90 transition-transform">
                  <Keyboard size={28} />
                </button>
                <button className="p-2 text-lumen-amber active:scale-90 transition-transform">
                  <PlusCircle size={32} fill="currentColor" className="text-primary" />
                </button>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
}
