import React from 'react';
import { StyledCard, StyledThumbnailWrapper, StyledThumbnail, StyledTitle } from './styles';

export default function Card({ movieTitle, movieThumbnail }) {
  return (
    <StyledCard>
      <StyledThumbnailWrapper>
        <StyledThumbnail src={movieThumbnail} alt={movieTitle} />
      </StyledThumbnailWrapper>
      <StyledTitle>{movieTitle}</StyledTitle>
    </StyledCard>
  );
}
