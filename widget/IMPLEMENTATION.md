# 🎓 Erudit Widget — Финальная сборка

## ✅ Что реализовано

### Архитектура
- ✅ Shadow DOM изоляция стилей
- ✅ Один JS-файл на выходе (IIFE формат)
- ✅ React 19 + Vite 6 + TypeScript 5
- ✅ Без внешних зависимостей в runtime

### State 1: Collapsed Avatar
- ✅ Круглая аватарка 64×64px (56×56 на mobile)
- ✅ Персонаж Эрудит: кубический стиль, академическая шапочка, очки, наушники
- ✅ Зелёный индикатор онлайн с пульсацией
- ✅ Hover-эффект: scale(1.1)
- ✅ Фиксированная позиция: bottom-right (24px от краёв)

### State 2: Hover Tooltip
- ✅ Появляется при наведении на desktop
- ✅ Текст: "Здравствуйте! Я Эрудит 👋 Чем могу помочь?"
- ✅ Темно-синий фон, белый текст
- ✅ Анимация slide-in
- ✅ Скрывается на mobile (<768px)

### State 3: Welcome Screen
- ✅ Размер: 400×auto (fullscreen на mobile)
- ✅ Шапка с логотипом НОМОС и кнопкой закрытия
- ✅ Hero-блок с персонажем и приветствием
- ✅ Сетка категорий 3×2 (2×3 на mobile):
  - 🎓 Поступление
  - 🎯 Специальности
  - 📅 Расписание
  - 📄 Документы
  - 🎪 Студенческая жизнь
  - 🏠 Общежитие
- ✅ Поле быстрого ввода с кнопками
- ✅ Быстрые вопросы (chips)
- ✅ Анимация появления

### State 4: Chat Interface
- ✅ Размер: 400×600px (fullscreen на mobile)
- ✅ Шапка с меню и закрытием
- ✅ Область сообщений с автоскроллом
- ✅ Сообщения бота (слева, белый фон)
- ✅ Сообщения пользователя (справа, синий фон)
- ✅ Typing indicator (3 точки с анимацией)
- ✅ Поле ввода с кнопками прикрепления и отправки
- ✅ Disclaimer внизу
- ✅ Dropdown меню: "Начать новый разговор"

### Функциональность
- ✅ Mock AI-ответы с задержкой 1.5-2.5 сек
- ✅ Персистентность сессии в localStorage
- ✅ Восстановление чата после перезагрузки
- ✅ Очистка сессии через меню
- ✅ Программный API: open(), close()
- ✅ Адаптивный дизайн: desktop/tablet/mobile

### Дизайн
- ✅ Цвета: #003B7A (primary blue), #002856 (dark blue), #FF9800 (orange)
- ✅ Академический стиль без неона и дешёвого 3D
- ✅ Системные шрифты
- ✅ Плавные анимации
- ✅ Shadow elevations
- ✅ Accessibility: focus-visible, aria-labels

## 📦 Структура проекта

```
widget/
├── src/
│   ├── entry.tsx              # Shadow DOM + React mount
│   ├── Widget.tsx             # Main state machine
│   ├── types.ts               # TypeScript definitions
│   ├── styles.ts              # All CSS-in-JS
│   └── components/
│       ├── AvatarButton.tsx   # State 1 + 2
│       ├── WelcomeScreen.tsx  # State 3
│       └── ChatScreen.tsx     # State 4
├── index.html                 # Test page
├── package.json
├── vite.config.ts
├── tsconfig.json
├── .gitignore
└── README.md
```

## 🚀 Как запустить

### Локальная разработка

1. Установите зависимости:
```bash
cd widget
npm install
```

2. Запустите dev-сервер:
```bash
npm run dev
```

3. Откройте http://localhost:5173/ в браузере

### Production сборка

```bash
npm run build
```

Результат: `dist/erudit-widget.js` — один файл со всем кодом и стилями.

### Проверка типов

```bash
npm run typecheck
```

## 🌐 Интеграция на сайт

Добавьте перед `</body>`:

```html
<script src="https://your-cdn.com/erudit-widget.js"></script>
```

Программное управление:

```javascript
// Открыть виджет
window.NomosEruditWidget.open();

// Закрыть виджет
window.NomosEruditWidget.close();

// Проверить версию
console.log(window.NomosEruditWidget.version); // "0.1.0"
```

## 🎨 Персонализация

Для изменения цветов отредактируйте CSS-переменные в `src/styles.ts`:

```typescript
:host {
  --primary-blue: #003B7A;
  --dark-blue: #002856;
  --accent-orange: #FF9800;
  --light-bg: #F5F7FA;
  --white: #FFFFFF;
  --text-dark: #1A237E;
  --text-gray: #5F6368;
  --border-color: #E8EAF6;
}
```

## 🧪 Тестирование

Откройте `index.html` для интерактивного тестирования всех состояний:
- Кликните на аватарку для открытия
- Попробуйте категории в Welcome Screen
- Отправьте сообщения в чат
- Проверьте восстановление сессии (перезагрузите страницу)
- Тестируйте responsive на разных размерах экрана

## 📱 Responsive поведение

| Экран | Ширина | Поведение |
|-------|--------|-----------|
| Desktop | >1024px | Полный функционал, hover-эффекты |
| Tablet | 769-1024px | Адаптированные размеры |
| Mobile | <768px | Fullscreen режим, скрытие tooltip |

## 🔒 Безопасность

- Shadow DOM изоляция предотвращает конфликты стилей
- Нет eval() или опасных операций
- localStorage используется только для сессии
- Все данные остаются на клиенте

## 📋 Следующие шаги (для production)

1. **Backend интеграция**
   - Подключить API endpoint для chat
   - Реализовать streaming ответов
   - Добавить rate limiting

2. **Расширенные функции**
   - Загрузка файлов/изображений
   - История всех сессий
   - Экспорт диалога
   - Поиск по истории

3. **Оптимизация**
   - Code splitting для больших диалогов
   - Lazy loading компонентов
   - Service Worker для offline

4. **Аналитика**
   - Отслеживание использования категорий
   - Метрики качества ответов
   - A/B тестирование UI

5. **Accessibility**
   - Screen reader полная поддержка
   - Keyboard navigation
   - WCAG 2.1 AA compliance

## 🐛 Известные ограничения

- Mock AI: ответы не контекстуальные
- Нет истории сессий (только текущая)
- Файлы пока не поддерживаются
- Нет индикации ошибок сети

## 📄 Лицензия

Proprietary © 2026 Колледж НОМОС
