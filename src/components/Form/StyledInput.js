import styled from "styled-components";
import {colors} from "../../GlobalStyle.js"


const StyledInput = styled.input`
  /* position: fixed; */
  /* position: -webkit-sticky;*/
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

export default StyledInput;
