import React from 'react';
import PropTypes from 'prop-types';
import Drawer from 'react-drag-drawer';
import styled from 'styled-components';
// export default function BottomDrawer(duration, closeBottomDrawer, isNOTVisible, children) {
// 	const [isVisible, setIsVisible] = React.useState(true);
// 	const {openDrawer} = React.useCallback(() => setIsVisible(true), []);
// 	const { closeDrawer } = React.useCallback(() => setIsVisible(true), []);
// 	const toggle = () => {
// 		let { toggle } = this.state;

// 		this.setState({ toggle: !toggle });
// 	};
// 	return (
// 		<>
// 			<center>
// 				<button className='open-btn' onClick={openDrawer}>
// 					SHOW ME THE DIALOG!
// 				</button>
// 			</center>
// 			<StyledDrawer
// 				open={true}
// 				onRequestClose={toggle}
// 				dontApplyListeners={true}
// 			>
// 				{children}
// 			</StyledDrawer>
// 		</>
// 	);
// }


export const StyledDrawer = styled(Drawer)`
	
	
	color:red;
	
	.ClassName {
		border:5px solid black;
	}
	
`;
