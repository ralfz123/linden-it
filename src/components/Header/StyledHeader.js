import styled from 'styled-components';
import { colors } from '../../GlobalStyle.js';

const StyledHeader = styled.header`
	background-color: ${colors.primary};
	color: ${colors.light};

	.header-toolbar {
		min-height: 50px;
		position: sticky;
	}
`;
export default StyledHeader;
