import { createBrowserRouter } from 'react-router';

export const router = createBrowserRouter([
  {
    path: '/',
    lazy: async () => {
      const { default: Root } = await import('./Root');
      return { Component: Root };
    },
    children: [
      {
        index: true,
        lazy: async () => {
          const { default: Home } = await import('./pages/Home');
          return { Component: Home };
        },
      },
      {
        path: 'blog',
        lazy: async () => {
          const { default: Blog } = await import('./pages/Blog');
          return { Component: Blog };
        },
      },
      {
        path: 'blog/:id',
        lazy: async () => {
          const { default: BlogPost } = await import('./pages/BlogPost');
          return { Component: BlogPost };
        },
      },
      {
        path: 'reservation',
        lazy: async () => {
          const { default: Reservation } = await import('./pages/Reservation');
          return { Component: Reservation };
        },
      },
    ],
  },
]);