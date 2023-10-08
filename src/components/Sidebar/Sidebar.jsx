import { Aside, Nav, Link } from './Sidebar.styled';

export const Sidebar = () => {
  return (
    <Aside>
      <Nav>
        <Link to="/" end>
          Home
        </Link>
        <Link to="/Catalog">Catalog</Link>
        <Link to="/Favorites">Faforites</Link>
      </Nav>
    </Aside>
  );
};
