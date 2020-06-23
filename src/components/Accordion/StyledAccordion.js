import styled from 'styled-components';
import { colors, sizes, addAlpha } from '../../GlobalStyle.js';
import { motion } from 'framer-motion';

// Accordion Panel component styling
const StyledPanel = styled(motion.div)`
	margin: 0 -16px 0 32px;
	/* padding-left: ${sizes.paddingLeft}; */
	box-sizing:border-box;
	background-color: ${(props) =>
		props.active ? addAlpha(colors.grayLight, 0.6) : colors.light};
		border-left: 2px solid ${colors.grayLight};


	.toggle-icon {

		position:absolute;
		right:20px;
		top:20px;
		height:30px;
		width:30px;
		color:${colors.gray};
		font-size:30px;
		cursor:pointer;
		  
	}
	.toggle-icon.open {
 /* transform: rotate(90deg); */
	}

	.panel-header,
	.panel-content{
		
	}

	.panel-header {
		padding: 20px 20px 10px 20px;
		
		position: relative;
		border-top: 1px solid ${colors.grayLight};
		height:100%;

		.chapter-title {
				font-weight: 300;
				font-size:  16px;
				transition: font-weight .1s;
				
				
		}
		.chapter-title.active {
				color: ${colors.primary};
				font-weight: 600;
				font-size: 18px;
				}
	}
	.panel-content {
	
		padding: 0 20px 20px 20px;
	
		
		border: 0 1px 0 solid ${colors.grayLight};
	

		.chapter-description {
			padding-top: 0;
font-style:normal;
font-size: 16px;
color:${colors.gray};
		}
		ul {
			color: ${colors.gray};
			margin-top:8px ;
			padding-left: 0;
			margin-left: none;
			display:flex;
			flex-direction:column;
			justify-content:;

			li {
				font-size:24px;
				height:35px;
				list-style-type:none;
				display:flex;
				align-items:center;
				span {
					padding-left: .5em;
					font-size:16px;
				}
			}
		}



	}
	.panel-footer {
		
			
		padding: 0 20px 0px 20px;
		margin: 0 auto;
		text-align: center;
		
	}

	h2 {
		color: ${colors.primary};
		margin: 0;
		padding-top: 45px;
	}
`;

// Accordion component styling
export const StyledAccordion = styled(motion.div)`
	height: 100%;
`;

export default StyledPanel;
