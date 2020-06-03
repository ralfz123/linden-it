import styled, { css } from 'styled-components';

const StyledInput = styled.input `
	position: fixed;
	/* position: -webkit-sticky;*/
	left: 0;
	right: 0;
	margin-top: 200px;
	width: 1000px;
    border-radius: 100px;
	background-color: var(--color-primary);
	color: var(--color-light);
.header-toolbar {
    min-height: 50px;
}
`  
export default StyledInput;