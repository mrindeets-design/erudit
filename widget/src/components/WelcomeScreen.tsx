import type { Category } from '../types';
import { 
  eruditImage, 
  collegeBuilding,
  admissionIcon,
  specialtiesIcon,
  scheduleIcon,
  documentsIcon,
  studentLifeIcon,
  dormitoryIcon
} from '../assets/images/placeholders';

interface WelcomeScreenProps {
  onCategoryClick: (category: string) => void;
  onClose: () => void;
}

const categories: Category[] = [
  { id: 'admission', label: 'Поступление', icon: admissionIcon },
  { id: 'specialties', label: 'Специальности', icon: specialtiesIcon },
  { id: 'schedule', label: 'Расписание', icon: scheduleIcon },
  { id: 'documents', label: 'Документы', icon: documentsIcon },
  { id: 'student-life', label: 'Студенческая\nжизнь', icon: studentLifeIcon },
  { id: 'dormitory', label: 'Общежитие', icon: dormitoryIcon }
];

export function WelcomeScreen({ onCategoryClick, onClose }: WelcomeScreenProps) {
  return (
    <div className="welcome-screen">
      <div className="welcome-header">
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
        <button className="close-button" onClick={onClose} aria-label="Закрыть">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
            <line x1="18" y1="6" x2="6" y2="18"/>
            <line x1="6" y1="6" x2="18" y2="18"/>
          </svg>
        </button>
      </div>

      <div className="welcome-content">
        <div className="welcome-hero">
          <div className="hero-text">
            <h1>Привет!<br/>Я Эрудит</h1>
            <p>Ваш ИИ-помощник<br/>в мире знаний</p>
          </div>
          <div className="hero-character">
            <img src={eruditImage} alt="Эрудит" />
          </div>
        </div>

        <div className="categories-grid">
          {categories.map(cat => (
            <button key={cat.id} className="category-button" onClick={() => onCategoryClick(cat.id)}>
              <img src={cat.icon} alt="" className="category-icon" />
              <span className="category-label">{cat.label}</span>
            </button>
          ))}
        </div>

        <div className="quick-input">
          <div className="input-wrapper">
            <button type="button" className="attach-button" aria-label="Прикрепить файл">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48"/>
              </svg>
            </button>
            <input type="text" placeholder="Напишите ваш вопрос..." />
            <button type="button" className="send-button" aria-label="Отправить">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z"/>
              </svg>
            </button>
          </div>
        </div>

        <div className="quick-questions">
          <button className="quick-question" onClick={() => onCategoryClick('admission')}>
            Как поступить?
          </button>
          <button className="quick-question" onClick={() => onCategoryClick('documents')}>
            Нужные документы
          </button>
          <button className="quick-question" onClick={() => onCategoryClick('cost')}>
            Стоимость обучения
          </button>
        </div>

        <div className="welcome-footer">
          <div className="footer-text">Больше чем ответы</div>
          <img src={collegeBuilding} alt="Воронежский колледж НОМОС" className="footer-image" />
        </div>
      </div>
    </div>
  );
}
