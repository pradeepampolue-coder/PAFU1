
import React, { useState } from 'react';
import { User, AppView } from '../types';

interface DashboardProps {
  currentUser: User;
  otherUser: User;
  onNavigate: (view: AppView) => void;
  onSync: (data: string) => void;
  dataToSync: string;
}

const Dashboard: React.FC<DashboardProps> = ({ currentUser, otherUser, onNavigate, onSync, dataToSync }) => {
  const [showSync, setShowSync] = useState(false);
  const [syncInput, setSyncInput] = useState('');

  return (
    <div className="p-6 space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <header className="flex justify-between items-start">
        <div>
          <h2 className="text-slate-400 text-sm font-light mb-1">Welcome, {currentUser.name}</h2>
          <h1 className="text-3xl font-serif font-bold text-rose-500">Sanctuary</h1>
        </div>
        <div className="flex flex-col items-end">
          <div className="flex items-center gap-2 mb-1">
            <span className={`w-2 h-2 rounded-full ${otherUser.isOnline ? 'bg-green-500' : 'bg-slate-600'} shadow-[0_0_8px_rgba(34,197,94,0.4)]`}></span>
            <span className="text-xs font-medium text-slate-300 uppercase tracking-wider">
              {otherUser.name}
            </span>
          </div>
          <span className="text-[10px] text-slate-500">Local Only Session</span>
        </div>
      </header>

      <section className="relative h-48 bg-slate-900 rounded-3xl overflow-hidden border border-slate-800 shadow-xl group">
        <img 
          src="https://images.unsplash.com/photo-1516589174184-c6852661446c?auto=format&fit=crop&q=80&w=800" 
          alt="Shared memory" 
          className="absolute inset-0 w-full h-full object-cover opacity-40 transition-transform duration-1000 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent"></div>
        <div className="absolute bottom-6 left-6">
          <h3 className="text-xl font-serif font-bold text-white mb-1">Our Space</h3>
          <p className="text-slate-300 text-xs italic">"Private. Secure. Just the two of us."</p>
        </div>
      </section>

      <div className="grid grid-cols-2 gap-4">
        <button 
          onClick={() => onNavigate('chat')}
          className="bg-slate-900 border border-slate-800 p-5 rounded-3xl flex flex-col items-center gap-3 transition-all hover:bg-slate-800 hover:scale-[1.02] active:scale-95 group"
        >
          <div className="w-12 h-12 bg-rose-500/10 rounded-2xl flex items-center justify-center group-hover:bg-rose-500/20">
            <svg className="w-6 h-6 text-rose-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/></svg>
          </div>
          <span className="text-sm font-semibold tracking-wide">Private Chat</span>
        </button>

        <button 
          onClick={() => onNavigate('location')}
          className="bg-slate-900 border border-slate-800 p-5 rounded-3xl flex flex-col items-center gap-3 transition-all hover:bg-slate-800 hover:scale-[1.02] active:scale-95 group"
        >
          <div className="w-12 h-12 bg-blue-500/10 rounded-2xl flex items-center justify-center group-hover:bg-blue-500/20">
            <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
          </div>
          <span className="text-sm font-semibold tracking-wide">Live GPS</span>
        </button>

        <button 
          onClick={() => onNavigate('vault')}
          className="bg-slate-900 border border-slate-800 p-5 rounded-3xl flex flex-col items-center gap-3 transition-all hover:bg-slate-800 hover:scale-[1.02] active:scale-95 group"
        >
          <div className="w-12 h-12 bg-purple-500/10 rounded-2xl flex items-center justify-center group-hover:bg-purple-500/20">
            <svg className="w-6 h-6 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 00-2 2zm10-10V7a4 4 0 00-8 0v4h8z"/></svg>
          </div>
          <span className="text-sm font-semibold tracking-wide">Secret Vault</span>
        </button>

        <button 
          onClick={() => onNavigate('calling')}
          className="bg-slate-900 border border-slate-800 p-5 rounded-3xl flex flex-col items-center gap-3 transition-all hover:bg-slate-800 hover:scale-[1.02] active:scale-95 group"
        >
          <div className="w-12 h-12 bg-green-500/10 rounded-2xl flex items-center justify-center group-hover:bg-green-500/20">
            <svg className="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 00-2 2z"/></svg>
          </div>
          <span className="text-sm font-semibold tracking-wide">Video Call</span>
        </button>
      </div>

      {/* Sync Tool for Cross-Device Support */}
      <section className="bg-slate-900 border border-slate-800 p-6 rounded-3xl">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xs font-bold text-slate-500 uppercase tracking-widest">Device Synchronization</h3>
          <button 
            onClick={() => setShowSync(!showSync)} 
            className="text-[10px] text-rose-500 font-bold uppercase hover:underline"
          >
            {showSync ? 'Hide Tool' : 'How to Sync Phone & Laptop?'}
          </button>
        </div>
        
        {showSync ? (
          <div className="space-y-4 animate-in slide-in-from-top duration-300">
            <p className="text-[10px] text-slate-400 leading-relaxed">
              Because this app is 100% private, your data lives ONLY on this device. 
              To move your chat history to your phone, copy the code below and paste it into the "Import" box on your phone.
            </p>
            <div className="space-y-2">
               <label className="text-[9px] text-slate-500 font-bold uppercase tracking-tighter">Your Current Sync Token</label>
               <div className="flex gap-2">
                 <input 
                   readOnly 
                   value={dataToSync} 
                   className="flex-1 bg-slate-950 border border-slate-800 rounded-lg p-2 text-[8px] font-mono text-slate-500 overflow-hidden text-ellipsis whitespace-nowrap"
                 />
                 <button 
                  onClick={() => { navigator.clipboard.writeText(dataToSync); alert("Token copied!"); }}
                  className="px-3 bg-slate-800 rounded-lg text-[10px] hover:bg-slate-700"
                 >
                   Copy
                 </button>
               </div>
            </div>
            <div className="pt-2 border-t border-slate-800/50">
               <label className="text-[9px] text-slate-500 font-bold uppercase tracking-tighter">Paste Sync Token from other device</label>
               <div className="flex gap-2 mt-1">
                 <input 
                   value={syncInput} 
                   onChange={(e) => setSyncInput(e.target.value)}
                   placeholder="Paste token here..."
                   className="flex-1 bg-slate-950 border border-slate-800 rounded-lg p-2 text-[10px] text-rose-300"
                 />
                 <button 
                  onClick={() => onSync(syncInput)}
                  className="px-3 bg-rose-600 rounded-lg text-[10px] font-bold text-white shadow-lg shadow-rose-950/20"
                 >
                   Sync
                 </button>
               </div>
            </div>
          </div>
        ) : (
          <p className="text-[10px] text-slate-500 italic">
            This app is decentralized. Use the Sync Tool to move history between devices.
          </p>
        )}
      </section>

      <footer className="bg-slate-900/40 p-5 rounded-3xl border border-slate-800/50">
        <h4 className="text-xs font-semibold text-slate-500 uppercase tracking-widest mb-3">Privacy Guard</h4>
        <ul className="space-y-2">
          <li className="flex items-center gap-3 text-[10px] text-slate-400">
            <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
            Data stored locally & encrypted
          </li>
          <li className="flex items-center gap-3 text-[10px] text-slate-400">
            <div className="w-1.5 h-1.5 rounded-full bg-slate-600"></div>
            No external database connected
          </li>
        </ul>
      </footer>
    </div>
  );
};

export default Dashboard;
