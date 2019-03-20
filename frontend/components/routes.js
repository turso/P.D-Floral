import Home from './views/Home';
import About from './views/About';
import Contact from './views/Contact';
import Photos from './views/Photos';

const routes = [
  {
    title: 'Home',
    path: '/',
    exact: true,
    component: Home
  },
  {
    title: 'Contact',
    path: '/contact',
    component: Contact
  },
  {
    title: 'About',
    path: '/about',
    component: About
  },
  {
    title: 'Photos',
    path: '/photos',
    component: Photos
  }
];

export default routes;
