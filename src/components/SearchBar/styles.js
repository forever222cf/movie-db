import styled from 'styled-components';
import { color } from './../../styles/colorSchema';

export const StyledSearchBar = styled.div`
`;

export const StyledInput = styled.input`
  width: 100%;
  border: 0;
  font-size: 1.25rem;
  color: ${color.WHITE};
  padding: 0.25rem 0.5rem;
  border-radius: 0;
  background-color: ${color.TRANSPARENT};
  border-bottom: 2px solid ${color.BLACK_6};

  :focus {
    outline: 0;
    border-bottom-color: ${color.WHITE};
  }

  ::-webkit-input-placeholder { /* Chrome/Opera/Safari */
    color: ${color.WHITE_07};
  }
  ::-moz-placeholder { /* Firefox 19+ */
    color: ${color.WHITE_07};
  }
  :-ms-input-placeholder { /* IE 10+ */
    color: ${color.WHITE_07};
  }
  :-moz-placeholder { /* Firefox 18- */
    color: ${color.WHITE_07};
  }
`;