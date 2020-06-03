import styled from 'styled-components'

const StyledHeader = styled.header `
	position: fixed;
	/* position: -webkit-sticky;*/
	left: 0;
	right: 0;
	top: 0;
	width: 100vw;
	background-color: var(--color-primary);
	color: var(--color-light);
.header-toolbar {
    min-height: 50px;
}
`
export default StyledHeader