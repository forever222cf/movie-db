import styled from 'styled-components';
import { color } from '../../styles/colorSchema';

export const StyledCard = styled.div`
  padding: 1rem;
  cursor: pointer;
  text-align: center;
  color: ${color.WHITE};
  transition: all 0.3s ease;
  &:hover {
    color: ${color.LIGHT_BLUE}
  }
`;

export const StyledThumbnailWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 25rem;
`;

export const StyledThumbnail = styled.img`
  max-height: 100%;
  border-radius: 0.5rem;
`;

export const StyledTitle = styled.div`
  margin-top: 1rem;
  font-weight: 700;
  font-size: 2rem;
`;
