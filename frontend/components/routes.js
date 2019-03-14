import Home from './views/Home';
import About from './views/About';
import Blogs from './views/Blogs';

const routes = [
  {
    title: 'Home',
    path: '/',
    exact: true,
    component: Home
  },
  {
    title: 'Blogs',
    path: '/blogs',
    component: Blogs
  },
  {
    title: 'About',
    path: '/about',
    component: About
  }
];

export default routes;
