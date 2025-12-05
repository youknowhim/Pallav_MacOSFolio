import { useState } from 'react';
import { Mail, Linkedin, Github, Send, MessageCircle, User } from 'lucide-react';
import { resumeData } from '@/data/portfolioData';

export function ContactApp() {
  const [message, setMessage] = useState('');

  const contacts = [
    {
      icon: Mail,
      label: 'Email',
      value: resumeData.email,
      href: `mailto:${resumeData.email}`,
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'Connect with me',
      href: resumeData.linkedin,
      color: 'from-blue-600 to-blue-700'
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'View my code',
      href: resumeData.github,
      color: 'from-gray-700 to-gray-900'
    }
  ];

  const chatMessages = [
    { sender: 'bot', message: "Hi there! 👋 I'm Pallav's virtual assistant." },
    { sender: 'bot', message: "Feel free to reach out using any of the methods below. I usually respond within 24 hours!" },
    { sender: 'bot', message: "Looking forward to connecting with you! 🚀" }
  ];

  return (
    <div className="h-full flex flex-col">
      {/* Chat Header */}
      <div className="px-4 py-3 border-b border-border/50 flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center">
          <User className="w-5 h-5 text-white" />
        </div>
        <div>
          <h3 className="font-medium">{resumeData.name}</h3>
          <p className="text-xs text-green-500 flex items-center gap-1">
            <span className="w-2 h-2 rounded-full bg-green-500" />
            Available for opportunities
          </p>
        </div>
      </div>

      {/* Chat Messages */}
      <div className="flex-1 overflow-y-auto scrollbar-macos p-4 space-y-4">
        {chatMessages.map((msg, index) => (
          <div
            key={index}
            className="flex items-start gap-3 animate-fade-in"
            style={{ animationDelay: `${index * 200}ms` }}
          >
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center flex-shrink-0">
              <MessageCircle className="w-4 h-4 text-white" />
            </div>
            <div className="glass-panel rounded-2xl rounded-tl-sm px-4 py-2.5 max-w-[80%]">
              <p className="text-sm">{msg.message}</p>
            </div>
          </div>
        ))}

        {/* Contact Cards */}
        <div className="space-y-3 pt-4">
          <p className="text-xs text-muted-foreground text-center">Quick Links</p>
          {contacts.map((contact, index) => {
            const Icon = contact.icon;
            return (
              <a
                key={contact.label}
                href={contact.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 glass-panel rounded-xl p-4 hover:scale-[1.02] transition-transform animate-fade-in"
                style={{ animationDelay: `${(index + 3) * 150}ms` }}
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${contact.color} flex items-center justify-center`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <p className="font-medium">{contact.label}</p>
                  <p className="text-sm text-muted-foreground">{contact.value}</p>
                </div>
                <Send className="w-4 h-4 text-muted-foreground" />
              </a>
            );
          })}
        </div>
      </div>

      {/* Message Input */}
      <div className="p-4 border-t border-border/50">
        <div className="flex items-center gap-2">
          <input
            type="text"
            placeholder="Type a message..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="flex-1 bg-muted/50 rounded-full px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-primary/20 transition-shadow"
          />
          <a
            href={`mailto:${resumeData.email}?subject=Hello from Portfolio&body=${encodeURIComponent(message)}`}
            className="w-10 h-10 rounded-full bg-primary flex items-center justify-center hover:opacity-90 transition-opacity"
          >
            <Send className="w-4 h-4 text-primary-foreground" />
          </a>
        </div>
      </div>
    </div>
  );
}
