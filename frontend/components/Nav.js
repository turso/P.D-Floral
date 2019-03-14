import Link from 'next/link';
import NavStyles from './styles/NavStyles';

const Nav = () => (
  <NavStyles>
    <Link as={`/`} href="/index">
      <a>Home</a>
    </Link>
    <Link href="/about">
      <a>About</a>
    </Link>
    <Link href="/contact">
      <a>Contact</a>
    </Link>
    <Link href="/photos">
      <a>Photos</a>
    </Link>
  </NavStyles>
);

export default Nav;
