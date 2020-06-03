import styled, { css } from "styled-components";

const StyledInput = styled.input`
  /* position: fixed; */
  /* position: -webkit-sticky;*/
  left: 0;
  right: 0;
  width: 30rem;
  background-color: var(--color-light);
  border: 1px solid var(--color-gray-light-light);
  box-sizing: border-box;
  border-radius: 5px;
  padding: 10px;
  margin-bottom: 30px;
  line-height: 1.5em;

  .header-toolbar {
    min-height: 50px;
  }
`;

export default StyledInput;
