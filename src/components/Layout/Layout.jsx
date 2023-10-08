import { Outlet } from 'react-router-dom';

import { Container } from '../Container/Container';
import { Sidebar } from '../Sidebar/Sidebar';

export const Layout = () => {
  return (
    <Container>
      <Sidebar>Sidebar</Sidebar>
      <Outlet />
    </Container>
  );
};
