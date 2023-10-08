import { NavLink } from 'react-router-dom';
import styled from '@emotion/styled';

export const Aside = styled.aside`
  padding: 20px;

  background-color: lightblue;
  width: 120px;
  height: 100hv;
`;

export const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const Link = styled(NavLink)`
  padding: 6px;
  text-decoration: none;
  color: black;

  &.active {
    color: white;
    background-color: blue;
  }
`;
