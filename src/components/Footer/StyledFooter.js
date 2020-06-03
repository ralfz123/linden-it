import styled from 'styled-components'

const StyledFooter = styled.footer`
	position: fixed;
	left: 0;
	right: 0;
	bottom: 0;
	background-color: var(--color-gray-light);
	padding-left: max(0px, env(safe-area-inset-left));
	padding-right: max(0px, env(safe-area-inset-right));
	padding-bottom: max(0px, env(safe-area-inset-bottom));
`
export default StyledFooter