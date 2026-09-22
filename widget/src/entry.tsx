import { createRoot } from 'react-dom/client';
import { Widget } from './Widget';

// Global initialization function
(function() {
  if (typeof window === 'undefined') return;

  // Prevent multiple initializations
  if ((window as any).NomosEruditWidget) return;

  // Create widget container
  const containerId = 'nomos-erudit-widget-root';
  let container = document.getElementById(containerId);
  
  if (!container) {
    container = document.createElement('div');
    container.id = containerId;
    document.body.appendChild(container);
  }

  // Create shadow root for style isolation
  const shadowRoot = container.attachShadow({ mode: 'open' });
  
  // Create mount point inside shadow DOM
  const mountPoint = document.createElement('div');
  mountPoint.id = 'widget-mount';
  shadowRoot.appendChild(mountPoint);

  // Mount React app
  const root = createRoot(mountPoint);
  root.render(<Widget />);

  // Expose widget API
  (window as any).NomosEruditWidget = {
    version: '0.1.0',
    open: () => {
      const event = new CustomEvent('erudit-widget-open');
      window.dispatchEvent(event);
    },
    close: () => {
      const event = new CustomEvent('erudit-widget-close');
      window.dispatchEvent(event);
    }
  };
})();
