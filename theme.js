(() => {
  const key = 'boltovka-theme';
  const current = localStorage.getItem(key) || 'dark';
  document.documentElement.dataset.theme = current;
  document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.theme-toggle').forEach((button) => {
      const render = () => {
        const light = document.documentElement.dataset.theme === 'light';
        button.textContent = light ? '◐' : '☼';
        button.setAttribute('aria-label', light ? 'Включить тёмную тему' : 'Включить светлую тему');
      };
      render();
      button.addEventListener('click', () => {
        document.documentElement.dataset.theme = document.documentElement.dataset.theme === 'light' ? 'dark' : 'light';
        localStorage.setItem(key, document.documentElement.dataset.theme);
        render();
      });
    });
  });
})();
