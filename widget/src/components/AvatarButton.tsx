import { useState } from 'react';
import { eruditAvatar } from '../assets/images/placeholders';

interface AvatarButtonProps {
  onClick: () => void;
}

export function AvatarButton({ onClick }: AvatarButtonProps) {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div 
      className="avatar-container"
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
      onClick={onClick}
    >
      <button className="avatar-button" aria-label="Открыть чат с Эрудитом">
        <img 
          src={eruditAvatar} 
          alt="Эрудит" 
          className="avatar-image"
        />
        <div className="online-indicator" aria-label="Онлайн"></div>
      </button>
      
      {showTooltip && (
        <div className="tooltip">
          <div className="tooltip-content">
            Здравствуйте!<br/>
            Я Эрудит 👋<br/>
            Чем могу помочь?
          </div>
        </div>
      )}
    </div>
  );
}
