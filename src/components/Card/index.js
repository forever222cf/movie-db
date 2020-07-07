import React from 'react';
import { StyledCard, StyledThumbnailWrapper, StyledThumbnail, StyledTitle } from './styles';

export default function Card({ movieTitle, movieThumbnail, handleClickCard }) {
  return (
    <StyledCard onClick={handleClickCard}>
      <StyledThumbnailWrapper>
        <StyledThumbnail src={movieThumbnail} alt={movieTitle} />
      </StyledThumbnailWrapper>
      <StyledTitle>{movieTitle}</StyledTitle>
    </StyledCard>
  );
}
