import { useState, useEffect } from 'react';
import { AvatarButton } from './components/AvatarButton';
import { WelcomeScreen } from './components/WelcomeScreen';
import { ChatScreen } from './components/ChatScreen';
import { styles } from './styles';
import type { WidgetState, Message } from './types';

export function Widget() {
  const [state, setState] = useState<WidgetState>('collapsed');
  const [messages, setMessages] = useState<Message[]>([]);
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem('erudit-messages');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        setMessages(parsed);
        // Не открываем чат автоматически, пользователь сам выберет
      } catch (e) {}
    }
  }, []);

  useEffect(() => {
    if (messages.length > 0) {
      localStorage.setItem('erudit-messages', JSON.stringify(messages));
    }
  }, [messages]);

  const handleAvatarClick = () => {
    setState(messages.length > 0 ? 'chat' : 'welcome');
  };

  const handleCategoryClick = (category: string) => {
    setState('chat');
    const welcomeMsg: Message = {
      id: Date.now().toString(),
      type: 'bot',
      text: 'Здравствуйте! Я Эрудит — ваш ИИ-помощник колледжа НОМОС.',
      timestamp: new Date()
    };
    setMessages([welcomeMsg]);
  };

  const handleSendMessage = (text: string) => {
    const userMsg: Message = {
      id: Date.now().toString(),
      type: 'user',
      text,
      timestamp: new Date()
    };
    setMessages(prev => [...prev, userMsg]);
    setIsTyping(true);

    setTimeout(() => {
      const botMsg: Message = {
        id: (Date.now() + 1).toString(),
        type: 'bot',
        text: getMockResponse(text),
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botMsg]);
      setIsTyping(false);
    }, 1500);
  };

  const handleClose = () => setState('collapsed');
  const handleBack = () => setState('welcome');
  const handleClearSession = () => {
    setMessages([]);
    localStorage.removeItem('erudit-messages');
    setState('welcome');
  };

  return (
    <>
      <style>{styles}</style>
      <div className="erudit-widget">
        {state === 'collapsed' && <AvatarButton onClick={handleAvatarClick} />}
        {state === 'welcome' && (
          <WelcomeScreen onCategoryClick={handleCategoryClick} onClose={handleClose} />
        )}
        {state === 'chat' && (
          <ChatScreen
            messages={messages}
            isTyping={isTyping}
            onSendMessage={handleSendMessage}
            onClose={handleClose}
            onClearSession={handleClearSession}
            onBack={handleBack}
          />
        )}
      </div>
    </>
  );
}

function getMockResponse(text: string): string {
  const lower = text.toLowerCase();
  if (lower.includes('поступ') || lower.includes('документ')) {
    return 'Для поступления необходимы: аттестат, паспорт, СНИЛС, фотографии 3×4, медсправка.';
  }
  if (lower.includes('специальност')) {
    return 'В колледже НОМОС есть специальности по IT, экономике, праву и управлению.';
  }
  return 'Спасибо за вопрос! Я постараюсь найти информацию по этой теме.';
}
