import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  {
    path: 'inchydration',
    renderMode: RenderMode.Prerender
  },
  {
    path: '**',
    renderMode: RenderMode.Prerender,
    getPrerenderParams: () => Promise.resolve([{"id" : "1"}, {"id": "10"}])
  }
];
