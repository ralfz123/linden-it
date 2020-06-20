import styled from 'styled-components';
import { colors } from '../../GlobalStyle.js';

const StyledHeader = styled.header`
	background-color: ${colors.primary};
	color: ${colors.light};
	height: 100%;
	top: 0;
	position: sticky;
	flex-direction: column;
	.header-toolbar {
		min-height: 44px;
		position: relative;
		display: flex;
		align-items: center;
	}
	.title-large {
		min-height: 52px;
		display: flex;
		align-items: center;
		position: relative;
	}
`;
export default StyledHeader;
