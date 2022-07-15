import type { NextComponentType } from 'next';
import {
  Container,
  SearchBar
} from './styles';

export const Navbar: NextComponentType = () => {
  return (
    <Container>
      <SearchBar />
    </Container>
  )
}