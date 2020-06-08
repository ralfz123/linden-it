import styled from "styled-components";
import {colors} from "../../GlobalStyle.js"

export const StyledBaseTextInput = styled.input`
  left: 0;
  right: 0;
  width: 100%;
  background-color: ${colors.light};
  border: 1px solid ${colors.grayLightTwo};
  color: ${colors.gray};
  box-sizing: border-box;
  border-radius: 5px;
  padding: 10px;
  line-height: 1.5em;
  align-items: center;
`;

export const StyledBaseNumberInput = styled.input`
  width: 100%;
`


