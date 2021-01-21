import createRouter from 'router5';
import browserPlugin from 'router5-plugin-browser';

export const pages = {
  DESKS: 'desks',
  COLUMNS: 'columns',
  CARD: 'card',
};

export const routes = [
  { name: pages.DESKS, path: '/' },
  { name: pages.COLUMNS, path: '/desk/:deskId' },
  { name: pages.CARD, path: './card/:cardId' },
];

export const initialize = () => {
  const router = createRouter(routes, { defaultRoute: pages.DESKS });

  router.usePlugin(browserPlugin());

  router.start();

  return router;
};