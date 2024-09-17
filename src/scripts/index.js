import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.scss';
import './views/components/MyNavbar';
import './views/components/MyFooter';
import './views/components/LoadingIndicator';
import App from './views/app';

const app = new App({
  button: document.querySelector('.hamburger-menu'),
  drawer: document.querySelector('nav .menu'),
  content: document.getElementById('content'),
  loadingIndicator: document.getElementById('loading-indicator')
});

window.addEventListener('hashchange', () => {
  app.showLoadingIndicator();
  setTimeout(() => {
    app.renderPage();
    app.hideLoadingIndicator();
  }, 500);
});

window.addEventListener('load', () => {
  app.renderPage();
});
