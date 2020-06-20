import styled from 'styled-components';
import { colors, sizes } from '../../GlobalStyle.js';

const StyledPanel = styled.div`
	margin: 0 0 0 16px;
	padding-left: ${sizes.paddingLeft};

	.panel-header,
	.panel-content,
	.panel-footer {
		border-left: 1px solid ${colors.grayLight};
	}

	.panel-header {
		background-color: ${(props) =>
			props.active ? colors.grayLight : colors.light};
		padding: 20px;
		position: relative;
		border-top: 1px solid ${colors.grayLight};
	}
	.panel-content {
		padding: ${(props) => (props.active ? '20px' : 0)};
		overflow: ${(props) => (props.active ? 'auto' : 'hidden')};
		background-color: ${(props) =>
			props.active ? colors.grayLight : colors.light};
		border: 0 1px 0 solid ${colors.grayLight};
		/* height: ${(props) => (props.active ? 'auto' : 0)}; */
		will-change: height;
		transition: height 0.4s cubic-bezier(0.65, 0.05, 0.36, 1);
		opacity: ${(props) => (props.active ? 1 : 0)};
		visibility: ${(props) => (props.active ? 'auto' : 'hidden')};
		display: ${(props) => (props.active ? 'block' : 'none')};
	}
	.panel-footer {
		
			
		padding: 0 20px 0px 20px;
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

export const StyledAccordion = styled.div`


`;

export default StyledPanel;
