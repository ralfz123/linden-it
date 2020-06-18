import styled from 'styled-components';
import { colors, sizes } from '../../GlobalStyle.js';

const StyledAccordion = styled.div`
	margin: 0 0 0 20px;
	padding-left: ${sizes.paddingLeft};

	.accordion-header,
	.accordion-content,
	.accordion-footer {
		border-left: 1px solid ${colors.grayLight};
	}

	.accordion-header {
		background-color: ${(props) =>
			props.active ? colors.grayLight : colors.light};
		padding: 20px;
		position: relative;
		border: 1px 0 0 solid ${colors.grayLight};
	}
	.accordion-content {
		padding: 20px;
		border: 0 1px 0 solid ${colors.grayLight};
	}
	.accordion-footer {
		padding: 0 20px 20px 20px;
		margin: 0 auto;
		text-align: center;
		border-bottom: 1px solid ${colors.grayLight};
	}

	h2 {
		color: ${colors.primary};
		margin: 0;
		padding-top: 45px;
	}
`;

export const StyledAccordionWrapper = styled.div`


`;

export default StyledAccordion;
