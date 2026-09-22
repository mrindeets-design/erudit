export const styles = `
* { box-sizing: border-box; margin: 0; padding: 0; }
:host {
  --primary-blue: #003D7A;
  --header-blue: #003D7A;
  --message-bg: #E8EFF7;
  --light-bg: #F5F8FA;
  --input-bg: #F0F4F8;
  --white: #FFFFFF;
  --text-dark: #2C3E50;
  --text-gray: #7A8A99;
  --text-light-gray: #A0AEC0;
  --hero-blue: #1E4B8C;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Helvetica Neue', Arial, sans-serif;
  font-size: 15px;
  color: var(--text-dark);
  line-height: 1.5;
}
.erudit-widget { position: fixed; z-index: 999999; }
.avatar-container { position: fixed; bottom: 24px; right: 24px; z-index: 999999; }
.avatar-button {
  position: relative;
  width: 64px;
  height: 64px;
  border: none;
  border-radius: 50%;
  background: var(--white);
  box-shadow: 0 8px 24px rgba(0, 59, 122, 0.2);
  cursor: pointer;
  transition: all 0.3s ease;
  padding: 0;
  overflow: hidden;
}
.avatar-button:hover { transform: scale(1.1); }
.avatar-image { 
  width: 100%; 
  height: 100%; 
  object-fit: cover;
  display: block;
}
.online-indicator {
  position: absolute;
  bottom: 4px;
  right: 4px;
  width: 16px;
  height: 16px;
  background: #4CAF50;
  border: 3px solid var(--white);
  border-radius: 50%;
}
.tooltip {
  position: absolute;
  bottom: 100%;
  right: 0;
  margin-bottom: 12px;
  pointer-events: none;
}
.tooltip-content {
  background: var(--primary-blue);
  color: var(--white);
  padding: 12px 16px;
  border-radius: 12px;
  font-size: 14px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}
.welcome-screen, .chat-screen {
  position: fixed;
  bottom: 24px;
  right: 24px;
  width: 420px;
  max-width: calc(100vw - 48px);
  max-height: calc(100vh - 48px);
  background: var(--white);
  border-radius: 20px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.12);
  display: flex;
  flex-direction: column;
  overflow: hidden;
}
.chat-screen { height: 640px; }
.welcome-header, .chat-header {
  background: var(--header-blue);
  color: var(--white);
  padding: 18px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 64px;
}
.back-button {
  margin-right: 8px;
}
.header-logo { 
  display: flex; 
  align-items: center; 
  gap: 12px; 
}
.header-logo svg {
  flex-shrink: 0;
}
.header-logo-text {
  display: flex;
  flex-direction: column;
  gap: 2px;
}
.logo-text { 
  font-size: 18px; 
  font-weight: 700; 
  letter-spacing: 0.5px;
  line-height: 1.2;
}
.logo-subtext { 
  font-size: 10px; 
  opacity: 0.85; 
  letter-spacing: 0.3px;
  line-height: 1.2;
}
.close-button, .icon-button {
  background: transparent;
  border: none;
  color: var(--white);
  cursor: pointer;
  padding: 6px;
  border-radius: 6px;
  transition: background 0.2s;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
}
.close-button:hover, .icon-button:hover { 
  background: rgba(255,255,255,0.15); 
}
.header-actions { 
  display: flex; 
  gap: 6px; 
  align-items: center;
}
.welcome-content { 
  flex: 1; 
  overflow-y: auto; 
  display: flex; 
  flex-direction: column;
}
.welcome-hero {
  background: linear-gradient(135deg, var(--hero-blue) 0%, #2563B8 100%);
  padding: 32px 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  position: relative;
  overflow: hidden;
}
.hero-text {
  flex: 1;
  color: var(--white);
  z-index: 1;
}
.hero-text h1 {
  font-size: 28px;
  font-weight: 700;
  line-height: 1.2;
  margin-bottom: 12px;
}
.hero-text p {
  font-size: 15px;
  line-height: 1.4;
  opacity: 0.95;
}
.hero-character {
  width: 180px;
  height: 180px;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
}
.hero-character img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  filter: drop-shadow(0 8px 16px rgba(0, 0, 0, 0.15));
}.categories-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 12px;
  padding: 24px 20px;
}
.category-button {
  background: var(--white);
  border: 1px solid #E0E7EF;
  border-radius: 12px;
  padding: 16px 12px;
  cursor: pointer;
  transition: all 0.2s;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  min-height: 100px;
}
.category-button:hover {
  background: var(--light-bg);
  border-color: var(--primary-blue);
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 61, 122, 0.1);
}
.category-icon {
  width: 48px;
  height: 48px;
  object-fit: contain;
  flex-shrink: 0;
}
.category-label {
  font-size: 13px;
  font-weight: 500;
  color: var(--text-dark);
  text-align: center;
  line-height: 1.3;
  white-space: pre-line;
}
.quick-input {
  padding: 0 20px 20px;
}
.input-wrapper {
  display: flex;
  align-items: center;
  gap: 12px;
  background: var(--input-bg);
  border: none;
  border-radius: 30px;
  padding: 8px 8px 8px 16px;
  min-height: 56px;
}
.input-wrapper input {
  flex: 1;
  border: none;
  background: transparent;
  outline: none;
  font-size: 15px;
  color: var(--text-dark);
  padding: 8px 4px;
}
.input-wrapper input::placeholder {
  color: var(--text-light-gray);
}
.attach-button, .send-button {
  background: transparent;
  border: none;
  color: var(--text-gray);
  cursor: pointer;
  padding: 10px;
  border-radius: 50%;
  transition: all 0.2s;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}
.send-button {
  background: var(--primary-blue);
  color: var(--white);
  width: 40px;
  height: 40px;
}
.send-button:hover {
  background: #002D5A;
}
.send-button:disabled {
  background: var(--text-light-gray);
  cursor: not-allowed;
}
.attach-button:hover {
  background: rgba(0, 0, 0, 0.05);
}
.quick-questions {
  display: flex;
  gap: 10px;
  padding: 0 20px 24px;
  flex-wrap: wrap;
}
.quick-question {
  background: var(--white);
  border: 1px solid #E0E7EF;
  border-radius: 20px;
  padding: 10px 18px;
  font-size: 14px;
  color: var(--text-dark);
  cursor: pointer;
  transition: all 0.2s;
  white-space: nowrap;
}
.quick-question:hover {
  background: var(--light-bg);
  border-color: var(--primary-blue);
}
.welcome-footer {
  margin-top: auto;
  padding: 20px;
  position: relative;
  background: linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(232,239,247,0.4) 100%);
}
.footer-text {
  font-family: 'Segoe Script', 'Brush Script MT', cursive;
  font-size: 24px;
  color: var(--primary-blue);
  text-align: left;
  padding: 0 0 16px 20px;
  font-weight: 600;
  line-height: 1.2;
}
.footer-image {
  width: 100%;
  height: auto;
  max-height: 200px;
  object-fit: cover;
  border-radius: 12px;
  opacity: 0.9;
}.chat-messages {
  flex: 1;
  overflow-y: auto;
  padding: 24px 20px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  background: var(--white);
}
.message {
  display: flex;
  gap: 12px;
  align-items: flex-start;
  animation: fadeIn 0.3s ease;
}
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}
.message-bot {
  flex-direction: row;
  max-width: 85%;
}
.message-user {
  flex-direction: row-reverse;
  margin-left: auto;
  max-width: 80%;
}
.message-avatar {
  width: 40px;
  height: 40px;
  min-width: 40px;
  border-radius: 50%;
  overflow: hidden;
  background: var(--white);
  border: 2px solid #E0E7EF;
  flex-shrink: 0;
}
.message-avatar img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.message-content { 
  display: flex; 
  flex-direction: column; 
  gap: 6px;
  flex: 1;
  min-width: 0;
}
.message-text {
  padding: 16px 20px;
  border-radius: 18px;
  font-size: 15px;
  line-height: 1.5;
  white-space: pre-wrap;
  word-wrap: break-word;
}
.message-bot .message-text { 
  background: var(--message-bg);
  color: var(--text-dark);
  border-top-left-radius: 4px;
}
.message-user .message-text { 
  background: var(--primary-blue); 
  color: var(--white);
  border-top-right-radius: 4px;
}
.message-time { 
  font-size: 11px; 
  color: var(--text-gray); 
  padding: 0 8px; 
}
.message-user .message-time {
  text-align: right;
}
.typing-indicator {
  display: flex;
  gap: 6px;
  padding: 16px 20px;
  background: var(--message-bg);
  border-radius: 18px;
  border-top-left-radius: 4px;
  width: fit-content;
}
.typing-indicator span {
  width: 8px;
  height: 8px;
  background: var(--primary-blue);
  border-radius: 50%;
  animation: typing 1.4s infinite;
}
.typing-indicator span:nth-child(2) { animation-delay: 0.2s; }
.typing-indicator span:nth-child(3) { animation-delay: 0.4s; }
@keyframes typing {
  0%, 60%, 100% { opacity: 0.3; transform: scale(0.8); }
  30% { opacity: 1; transform: scale(1); }
}
.chat-footer {
  background: var(--white);
  border-top: 1px solid #E8EFF7;
  padding: 16px 20px 20px;
}
.disclaimer {
  font-size: 11px;
  color: var(--text-gray);
  text-align: center;
  margin-bottom: 14px;
  line-height: 1.4;
}
.chat-input {
  display: flex;
  align-items: center;
  gap: 12px;
  background: var(--input-bg);
  border: none;
  border-radius: 30px;
  padding: 8px 8px 8px 16px;
  min-height: 56px;
}
.chat-input input {
  flex: 1;
  border: none;
  background: transparent;
  outline: none;
  font-size: 15px;
  color: var(--text-dark);
  padding: 8px 4px;
}
.chat-input input::placeholder {
  color: var(--text-light-gray);
}
.dropdown-menu {
  position: absolute;
  top: 100%;
  right: 20px;
  margin-top: 8px;
  background: var(--white);
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
  padding: 8px;
  min-width: 240px;
  z-index: 1000;
}
.dropdown-menu button {
  width: 100%;
  background: transparent;
  border: none;
  padding: 12px 14px;
  text-align: left;
  cursor: pointer;
  border-radius: 8px;
  color: var(--text-dark);
  font-size: 14px;
  display: flex;
  align-items: center;
  gap: 12px;
  transition: background 0.2s;
}
.dropdown-menu button:hover { 
  background: var(--light-bg); 
}
@media (max-width: 768px) {
  .avatar-button { width: 56px; height: 56px; }
  .tooltip { display: none; }
  .welcome-screen, .chat-screen {
    bottom: 0;
    right: 0;
    width: 100vw;
    height: 100vh;
    max-width: 100vw;
    max-height: 100vh;
    border-radius: 0;
  }
  .categories-grid { 
    grid-template-columns: repeat(2, 1fr); 
  }
  .hero-character {
    width: 140px;
    height: 140px;
  }
  .hero-text h1 {
    font-size: 24px;
  }
  .message-bot { 
    max-width: 90%; 
  }
  .message-user { 
    max-width: 85%; 
  }
  .chat-messages {
    padding: 20px 16px;
  }
  .message-avatar {
    width: 36px;
    height: 36px;
    min-width: 36px;
  }
}
`;