import { createRouter, createHashHistory } from '@tanstack/react-router';
// Import the generated route tree
import { routeTree } from './routeTree.gen';

const hashHistory = createHashHistory();
export const router = createRouter({
  routeTree,
  history: hashHistory,
});
