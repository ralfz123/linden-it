import styled from 'styled-components';
import { colors, sizes } from '../../GlobalStyle.js';

// Header component styling
const StyledHeader = styled.header`
	background-color: ${colors.primary};
	color: ${colors.light};
	/* padding-top:${sizes.paddingTop}; */
	top: 0;
	position: sticky;
	flex-direction: column;
	
	.header-toolbar {
		min-height: 44px;
		position: relative;
		display: flex;
		justify-content:space-between;
		align-items: center;

		.title {
			font-family:var(--font-family-heading);
			font-weight:600;
			font-size:21px;
		}
	}
	.title-large {
		min-height: 52px;
		display: flex;
		align-items: center;
		position: relative;
	}

	&.overlay-header {
		
		padding-top:0;
		position:relative;
		
		.header-toolbar{
			height:60px;
		}
	}
`;
export default StyledHeader;
