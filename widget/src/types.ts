export type WidgetState = 'collapsed' | 'welcome' | 'chat';

export interface Message {
  id: string;
  type: 'user' | 'bot';
  text: string;
  timestamp: Date;
}

export interface Category {
  id: string;
  label: string;
  icon: string; // Path to image asset
}
