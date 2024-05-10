import { Dashboard } from "./views/Dashboard.js";
import { Post } from "./views/Post";
import { Setting } from "./views/Setting";

const router = async () => {
  const routes = [
    {
      path: '/', view: () => {
        const dashboard = new Dashboard();
        return dashboard.getHTML();
      },
    },
    {
      path: '/posts', view: () => {
        const post = new Post();
        return post.getHTML();
      },
    },
    {
      path: '/settings', view: () => {
        const setting = new Setting();
        return setting.getHTML();
      },
    },
  ];

  let route = routes.find(r => r.path === location.pathname);

  if (!route) {
    route = router[0];
  }

  const app = document.querySelector('#app');
  app.innerHTML = route.view();
}

document.addEventListener('DOMContentLoaded', () => {
  router();
});


