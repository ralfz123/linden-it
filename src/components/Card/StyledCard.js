import styled from 'styled-components';
import { colors, sizes } from '../../GlobalStyle.js';

const StyledCard = styled.div`
	box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.25);
	border-radius: 5px;
	margin: 10px 20px 25px 20px;
	
	.card-header {
		background-color: ${colors.grayLight};
		padding: 20px;
		position: relative;

		.card-header-content {

			display:flex;
			align-items:flex-end;
			justify-content: space-between;

			p {
				padding-bottom:0;
			}
		}
	}
	.card-content {
		padding: 20px;

		.card-content-item {
			img {
				float: right;
				
				width: 100px;
				
			}
		}

		.card-content-item > p ~ p {
			padding: 0;
		}
	}
	.card-footer {
		padding: 0 20px 20px 20px;
		margin: 0 auto;
		text-align: center;
	}

	h2 {
		color: ${colors.primary};
		margin: 0;
		padding-top: 45px;
	}
`;

export const CardWrapper = styled.div`
			/* padding-left: ${sizes.paddingLeft};
			padding-right: ${sizes.paddingRight}; */
		`;

export default StyledCard;
