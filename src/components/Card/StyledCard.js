import styled from 'styled-components';
import { colors } from '../../GlobalStyle.js';

const StyledCard = styled.div`
	box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.25);
	border-radius: 5px;
	margin: 10px 20px 25px 20px;

	.card-header {
		background-color: ${colors.grayLight};
		padding: 20px;
		position: relative;
	}
	.card-content {
		padding: 20px;
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
export default StyledCard;
