import React, { useState } from 'react';
import { Shield, Wifi, Battery, SmartphoneIcon, ShieldCheck, Zap, Layers } from 'lucide-react';

export const ReactNativeMobile: React.FC = () => {
  const [phoneScreen, setPhoneScreen] = useState<'dashboard' | 'settings'>('dashboard');

  return (
    <section id="mobile-engineering" className="py-24 relative overflow-hidden bg-black/10 border-t border-white/5">
      {/* Background glow */}
      <div className="absolute top-[20%] left-[-15%] w-[35vw] h-[35vw] bg-radial-gradient rounded-full blur-3xl pointer-events-none opacity-20" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Details & Tech */}
          <div className="lg:col-span-6 flex flex-col space-y-6">
            <div className="flex items-center gap-2">
              <span className="h-[1px] w-8 bg-indigo-500" />
              <span className="text-xs font-extrabold uppercase tracking-widest text-indigo-500 font-display">Mobile Development</span>
            </div>
            
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-white leading-tight">
              Cross-Platform Mobile Engineering
            </h2>

            <p className="text-slate-400 leading-relaxed text-base">
              Building production-ready cross-platform mobile applications with smooth user experiences and modern architecture.
            </p>

            {/* Core features list */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="flex gap-2.5 items-start">
                <ShieldCheck className="w-5 h-5 text-indigo-400 mt-0.5 shrink-0" />
                <div>
                  <h4 className="text-slate-200 font-semibold text-xs uppercase tracking-wider">Expo & Router</h4>
                  <p className="text-slate-400 text-xs mt-1">Leveraging modern file-based routing and fast updates.</p>
                </div>
              </div>
              <div className="flex gap-2.5 items-start">
                <Zap className="w-5 h-5 text-indigo-400 mt-0.5 shrink-0" />
                <div>
                  <h4 className="text-slate-200 font-semibold text-xs uppercase tracking-wider">Zustand State</h4>
                  <p className="text-slate-400 text-xs mt-1">High-performance, lightweight offline state management.</p>
                </div>
              </div>
              <div className="flex gap-2.5 items-start">
                <Layers className="w-5 h-5 text-indigo-400 mt-0.5 shrink-0" />
                <div>
                  <h4 className="text-slate-200 font-semibold text-xs uppercase tracking-wider">Native API Bridges</h4>
                  <p className="text-slate-400 text-xs mt-1">Writing tailored Native modules for hardware features.</p>
                </div>
              </div>
              <div className="flex gap-2.5 items-start">
                <SmartphoneIcon className="w-5 h-5 text-indigo-400 mt-0.5 shrink-0" />
                <div>
                  <h4 className="text-slate-200 font-semibold text-xs uppercase tracking-wider">Android & iOS</h4>
                  <p className="text-slate-400 text-xs mt-1">Pixel-perfect responsive design across both operating systems.</p>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-white/5">
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-500 block mb-3">Mobile Stack</span>
              <div className="flex flex-wrap gap-2">
                {['React Native', 'Expo', 'Expo Router', 'TypeScript', 'Zustand', 'React Navigation', 'Axios', 'NativeWind'].map((tech) => (
                  <span key={tech} className="text-xs bg-indigo-500/10 border border-indigo-500/20 px-3 py-1.5 rounded-lg text-indigo-300">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Smartphone Mockup */}
          <div className="lg:col-span-6 flex justify-center">
            
            {/* Phone container */}
            <div className="w-[280px] h-[560px] rounded-[42px] bg-slate-950 border-4 border-slate-800 shadow-2xl relative overflow-hidden flex flex-col p-2.5">
              
              {/* Camera Notch */}
              <div className="absolute top-4 left-1/2 -translate-x-1/2 w-32 h-6 bg-slate-950 rounded-full z-30 flex justify-between px-6 items-center">
                <div className="w-3 h-3 rounded-full bg-slate-900 border border-slate-800" />
                <div className="w-1.5 h-1.5 rounded-full bg-blue-900" />
              </div>

              {/* Status Bar */}
              <div className="h-6 flex justify-between items-center px-4 text-[10px] text-slate-400 z-20 font-sans mt-3">
                <span>07:43 AM</span>
                <div className="flex items-center gap-1.5">
                  <Wifi className="w-3 h-3" />
                  <Shield className="w-2.5 h-2.5 text-indigo-400" />
                  <Battery className="w-3 h-3" />
                </div>
              </div>

              {/* Simulated Screen Content Container */}
              <div className="flex-1 bg-slate-900 rounded-[30px] p-4 flex flex-col overflow-hidden relative z-10 border border-white/5 select-none font-sans">
                
                {phoneScreen === 'dashboard' ? (
                  // Dashboard Screen
                  <div className="flex flex-col h-full space-y-4">
                    {/* Header */}
                    <div className="flex justify-between items-center">
                      <div>
                        <span className="text-[10px] text-slate-500 block">Welcome back,</span>
                        <span className="text-xs font-bold text-white">Chief Engineer</span>
                      </div>
                      <div className="w-8 h-8 rounded-full bg-indigo-600/20 border border-indigo-500/30 flex items-center justify-center text-[10px] font-bold text-indigo-400">
                        CE
                      </div>
                    </div>

                    {/* Balance Card */}
                    <div className="p-3.5 rounded-xl bg-gradient-to-br from-indigo-600 to-indigo-800 text-white shadow-lg">
                      <span className="text-[9px] uppercase tracking-wider opacity-85">Database Rows Sync</span>
                      <div className="text-lg font-bold mt-0.5">2,841,902</div>
                      <div className="flex justify-between items-center mt-3 text-[9px] opacity-75">
                        <span>API Cluster Green</span>
                        <span>v1.2.4</span>
                      </div>
                    </div>

                    {/* Stats List */}
                    <div className="space-y-2 flex-1">
                      <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider block">Service Health</span>
                      
                      {[
                        { name: 'Identity API', speed: '24ms', active: true },
                        { name: 'Azure OpenAI Gateway', speed: '180ms', active: true },
                        { name: 'K8s Cluster Node', speed: '99.9%', active: true },
                      ].map((item, idx) => (
                        <div key={idx} className="p-2.5 rounded-lg bg-white/5 border border-white/5 flex justify-between items-center text-[11px]">
                          <span className="text-slate-300 font-medium">{item.name}</span>
                          <span className="text-emerald-400 font-semibold">{item.speed}</span>
                        </div>
                      ))}
                    </div>

                    {/* Toggle Button */}
                    <button 
                      onClick={() => setPhoneScreen('settings')}
                      className="w-full py-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-white font-semibold text-xs border border-white/5 transition-all text-center"
                    >
                      Device Metrics Config
                    </button>
                  </div>
                ) : (
                  // Config/Settings Screen
                  <div className="flex flex-col h-full space-y-4 justify-between">
                    <div className="space-y-4">
                      {/* Header */}
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-bold text-white">Configuration</span>
                      </div>

                      {/* Controls */}
                      <div className="space-y-3">
                        <div className="p-2.5 rounded-lg bg-white/5 border border-white/5 space-y-1.5">
                          <span className="text-[9px] text-slate-500 uppercase tracking-wider font-semibold block">Push Sync Gateway</span>
                          <div className="flex justify-between items-center text-xs">
                            <span className="text-slate-300">Zustand Persist</span>
                            <span className="text-indigo-400 font-bold">Enabled</span>
                          </div>
                        </div>
                        <div className="p-2.5 rounded-lg bg-white/5 border border-white/5 space-y-1.5">
                          <span className="text-[9px] text-slate-500 uppercase tracking-wider font-semibold block">Secure Auth Tunnel</span>
                          <div className="flex justify-between items-center text-xs">
                            <span className="text-slate-300">Biometrics/FaceID</span>
                            <span className="text-indigo-400 font-bold">Enforced</span>
                          </div>
                        </div>
                        <div className="p-2.5 rounded-lg bg-white/5 border border-white/5 space-y-1.5">
                          <span className="text-[9px] text-slate-500 uppercase tracking-wider font-semibold block">REST Cache Lifetime</span>
                          <div className="flex justify-between items-center text-xs">
                            <span className="text-slate-300">Memory TTL</span>
                            <span className="text-indigo-400 font-bold">15 Mins</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Back Button */}
                    <button 
                      onClick={() => setPhoneScreen('dashboard')}
                      className="w-full py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-xs transition-all text-center"
                    >
                      Back to Dashboard
                    </button>
                  </div>
                )}
                
              </div>

              {/* Bottom Speaker Bar */}
              <div className="h-5 flex items-center justify-center mt-1">
                <div className="w-24 h-1 bg-slate-800 rounded-full" />
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
