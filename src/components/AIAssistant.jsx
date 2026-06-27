import React, { useState, useRef, useEffect } from 'react';
import { Bot, X, Send, Loader2 } from 'lucide-react';

export default function AIAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [messages, setMessages] = useState([
    { text: "Hallo! Yusri's AI Assistant is here🤖", sender: 'bot' },
    { text: "Is there anything you'd like to know about Yusri's projects or skills?", sender: 'bot' }
  ]);
  
  const messagesEndRef = useRef(null);

  // Auto scroll ke pesan terbawah
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;
    
    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { text: userMessage, sender: 'user' }]);
    setIsLoading(true);
    
    try {
      // Memanggil Vercel Serverless Function yang sudah kita buat
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: userMessage })
      });
      
      const data = await response.json();
      
      setMessages(prev => [...prev, { 
        text: data.reply || data.message, 
        sender: 'bot' 
      }]);
    } catch (error) {
      setMessages(prev => [...prev, { 
        text: "Sorry, I encountered an error. Please try again later.", 
        sender: 'bot' 
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-[200]">
      {/* Pop-up Chat Window */}
      {isOpen && (
        <div className="mb-4 w-80 sm:w-96 bg-[#110e23] border border-white/10 rounded-2xl shadow-2xl flex flex-col overflow-hidden">
          
          {/* Header */}
          <div className="bg-white/5 p-4 flex justify-between items-center border-b border-white/10">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-purple-600 rounded-full">
                <Bot className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="font-bold text-white text-sm">AI Assistant</h3>
                <p className="text-xs text-green-400 flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-green-400"></span> Online
                </p>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-gray-400 hover:text-white transition-colors">
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Area Pesan Chat */}
          <div className="p-4 h-80 overflow-y-auto flex flex-col gap-3">
            {messages.map((msg, idx) => (
              <div key={idx} className={`max-w-[85%] p-3 rounded-2xl text-sm leading-relaxed ${
                msg.sender === 'user' 
                ? 'bg-purple-600 text-white self-end rounded-br-none' 
                : 'bg-white/10 text-gray-200 border border-white/10 self-start rounded-tl-none'
              }`}>
                {msg.text}
              </div>
            ))}
            
            {/* Indikator Loading */}
            {isLoading && (
              <div className="bg-white/10 text-gray-200 border border-white/10 self-start rounded-2xl rounded-tl-none p-3 max-w-[85%]">
                <Loader2 className="w-4 h-4 animate-spin" />
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Area Input Text */}
          <div className="p-4 border-t border-white/10 flex gap-2 items-center bg-black/20">
            <input 
              type="text" 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Ask something..." 
              className="flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white outline-none focus:border-purple-500 transition-all"
            />
            <button 
              onClick={handleSend}
              disabled={isLoading || !input.trim()}
              className="p-2.5 bg-purple-600 hover:bg-purple-500 disabled:opacity-50 disabled:cursor-not-allowed text-white rounded-xl transition-all"
            >
              <Send className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* Tombol Floating */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className={`w-14 h-14 rounded-full flex items-center justify-center transition-all duration-300 shadow-xl absolute bottom-0 right-0 ${
          isOpen ? 'scale-0 opacity-0 pointer-events-none' : 'scale-100 opacity-100 bg-purple-600 hover:bg-purple-500 text-white shadow-[0_0_20px_rgba(147,51,234,0.4)]'
        }`}
      >
        <Bot className="w-7 h-7" />
      </button>
    </div>
  );
}