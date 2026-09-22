import { useEffect, useRef, useState } from 'react';
import type { Message } from '../types';
import { eruditAvatar } from '../assets/images/placeholders';

interface ChatScreenProps {
  messages: Message[];
  isTyping: boolean;
  onSendMessage: (text: string) => void;
  onClose: () => void;
  onClearSession: () => void;
  onBack: () => void;
}

export function ChatScreen({ messages, isTyping, onSendMessage, onClose, onClearSession, onBack }: ChatScreenProps) {
  const [inputValue, setInputValue] = useState('');
  const [showMenu, setShowMenu] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputValue.trim() && !isTyping) {
      onSendMessage(inputValue.trim());
      setInputValue('');
      inputRef.current?.focus();
    }
  };

  const formatTime = (date: Date) => {
    return new Date(date).toLocaleTimeString('ru-RU', { 
      hour: '2-digit', 
      minute: '2-digit' 
    });
  };

  return (
    <div className="chat-screen">
      <div className="chat-header">
        <button className="icon-button back-button" onClick={onBack} aria-label="Назад">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M19 12H5M12 19l-7-7 7-7"/>
          </svg>
        </button>
        <div className="header-logo">
          <svg width="32" height="32" viewBox="0 0 40 40" fill="none">
            <path d="M20 6L8 11V16C8 24 12 31 20 32C28 31 32 24 32 16V11L20 6Z" fill="white"/>
            <text x="20" y="24" fontSize="16" fontWeight="bold" fill="#003D7A" textAnchor="middle">Н</text>
          </svg>
          <div className="header-logo-text">
            <div className="logo-text">НОМОС</div>
            <div className="logo-subtext">ВОРОНЕЖСКИЙ КОЛЛЕДЖ</div>
          </div>
        </div>
        <div className="header-actions">
          <button className="icon-button" onClick={() => setShowMenu(!showMenu)} aria-label="Меню">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
              <line x1="5" y1="12" x2="19" y2="12"/>
            </svg>
          </button>
          <button className="icon-button" onClick={onClose} aria-label="Закрыть">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
              <line x1="18" y1="6" x2="6" y2="18"/>
              <line x1="6" y1="6" x2="18" y2="18"/>
            </svg>
          </button>
        </div>

        {showMenu && (
          <div className="dropdown-menu">
            <button onClick={onClearSession}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="3 6 5 6 21 6"/>
                <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/>
              </svg>
              Начать новый разговор
            </button>
          </div>
        )}
      </div>

      <div className="chat-messages">
        {messages.map((message) => (
          <div key={message.id} className={`message message-${message.type}`}>
            {message.type === 'bot' && (
              <div className="message-avatar">
                <img src={eruditAvatar} alt="Эрудит" />
              </div>
            )}
            <div className="message-content">
              <div className="message-text">{message.text}</div>
              <div className="message-time">{formatTime(message.timestamp)}</div>
            </div>
          </div>
        ))}

        {isTyping && (
          <div className="message message-bot">
            <div className="message-avatar">
              <img src={eruditAvatar} alt="Эрудит" />
            </div>
            <div className="message-content">
              <div className="typing-indicator">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      <div className="chat-footer">
        <div className="disclaimer">
          Ответы предоставляет ИИ на основе информации с сайта колледжа.
        </div>
        <form className="chat-input" onSubmit={handleSubmit}>
          <button type="button" className="attach-button" aria-label="Прикрепить файл">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48"/>
            </svg>
          </button>
          <input
            ref={inputRef}
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Напишите ваш вопрос..."
            disabled={isTyping}
          />
          <button 
            type="submit" 
            className="send-button"
            disabled={!inputValue.trim() || isTyping}
            aria-label="Отправить сообщение"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z"/>
            </svg>
          </button>
        </form>
      </div>
    </div>
  );
}
