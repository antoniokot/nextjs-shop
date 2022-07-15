import styled, { css } from 'styled-components';

export const Container = styled.nav`
  width: 100%;
  height: 4.5vh;

  display: flex;
  flex-direction: row;
  justify-content: space-around;

  background-color: var(--secondary);
`;

export const SearchBar = styled.input`
  height: 80%;

  background-color: var(--white);
  appearance: none;
  border: none;
  outline: none;
`;