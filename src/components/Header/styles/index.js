import styled from 'styled-components';
import { color } from '../../../styles/colorSchema';

export const StyledHeader = styled.header`
  padding: 0.5rem 4rem;
  display: grid;
  grid-template-columns: 3rem 1fr;
  align-items: center;
  background-color: ${color.BLACK_3}
`;

export const StyledLogoWrapper = styled.div`
  display: flex;
`;

export const StyledSearchBarWrapper = styled.div`
  margin-left: 2rem;
`;
