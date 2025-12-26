
import React, { useState, useEffect } from 'react';

interface CallingProps {
  isIncoming: boolean;
  onClose: () => void;
  callerName: string;
}

const Calling: React.FC<CallingProps> = ({ isIncoming, onClose, callerName }) => {
  const [status, setStatus] = useState<'ringing' | 'connected'>('ringing');
  const [timer, setTimer] = useState(0);

  useEffect(() => {
    let interval: number;
    if (status === 'connected') {
      interval = window.setInterval(() => setTimer(t => t + 1), 1000);
    }
    return () => clearInterval(interval);
  }, [status]);

  const formatTime = (s: number) => {
    const mins = Math.floor(s / 60);
    const secs = s % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const handleAccept = () => setStatus('connected');

  return (
    <div className="fixed inset-0 z-[100] bg-slate-950 flex flex-col items-center justify-between p-12 text-center animate-in fade-in duration-300">
      <div className="mt-20">
        <div className="relative mb-8">
          <div className={`w-32 h-32 bg-slate-900 rounded-full flex items-center justify-center border border-slate-800 ${status === 'ringing' ? 'animate-pulse' : ''}`}>
            <svg className="w-16 h-16 text-rose-500 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/></svg>
          </div>
          {status === 'ringing' && (
            <div className="absolute inset-0 rounded-full border-4 border-rose-500/20 animate-ping"></div>
          )}
        </div>
        
        <h2 className="text-3xl font-serif font-bold text-white mb-2">{callerName}</h2>
        <p className="text-rose-500 uppercase tracking-[0.3em] text-[10px] font-bold">
          {status === 'ringing' ? (isIncoming ? 'Incoming Call...' : 'Calling...') : `Connected • ${formatTime(timer)}`}
        </p>
      </div>

      <div className="mb-20 w-full max-w-sm flex items-center justify-around">
        {status === 'ringing' && isIncoming ? (
          <>
            <button 
              onClick={onClose}
              className="w-16 h-16 bg-rose-600 rounded-full flex items-center justify-center text-white shadow-xl shadow-rose-900/40"
            >
              <svg className="w-8 h-8 rotate-[135deg]" fill="currentColor" viewBox="0 0 24 24"><path d="M20 15.5c-1.2 0-2.4-.2-3.6-.6-.3-.1-.7 0-1 .2l-2.2 2.2c-2.8-1.4-5.1-3.8-6.6-6.6l2.2-2.2c.3-.3.4-.7.2-1-.3-1.1-.5-2.3-.5-3.5 0-.6-.4-1-1-1H4c-.6 0-1 .4-1 1 0 9.4 7.6 17 17 17 .6 0 1-.4 1-1v-3.5c0-.6-.4-1-1-1z"/></svg>
            </button>
            <button 
              onClick={handleAccept}
              className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center text-white shadow-xl shadow-green-900/40"
            >
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M20 15.5c-1.2 0-2.4-.2-3.6-.6-.3-.1-.7 0-1 .2l-2.2 2.2c-2.8-1.4-5.1-3.8-6.6-6.6l2.2-2.2c.3-.3.4-.7.2-1-.3-1.1-.5-2.3-.5-3.5 0-.6-.4-1-1-1H4c-.6 0-1 .4-1 1 0 9.4 7.6 17 17 17 .6 0 1-.4 1-1v-3.5c0-.6-.4-1-1-1z"/></svg>
            </button>
          </>
        ) : (
          <button 
            onClick={onClose}
            className="w-16 h-16 bg-rose-600 rounded-full flex items-center justify-center text-white shadow-xl shadow-rose-900/40"
          >
            <svg className="w-8 h-8 rotate-[135deg]" fill="currentColor" viewBox="0 0 24 24"><path d="M20 15.5c-1.2 0-2.4-.2-3.6-.6-.3-.1-.7 0-1 .2l-2.2 2.2c-2.8-1.4-5.1-3.8-6.6-6.6l2.2-2.2c.3-.3.4-.7.2-1-.3-1.1-.5-2.3-.5-3.5 0-.6-.4-1-1-1H4c-.6 0-1 .4-1 1 0 9.4 7.6 17 17 17 .6 0 1-.4 1-1v-3.5c0-.6-.4-1-1-1z"/></svg>
          </button>
        )}
      </div>

      <div className="absolute bottom-10 text-[10px] text-slate-600 uppercase tracking-widest font-medium px-8 text-center">
        This connection is peer-to-peer and fully encrypted. No recording is active.
      </div>
    </div>
  );
};

export default Calling;
