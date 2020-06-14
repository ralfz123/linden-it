import React from "react";
import styled from "styled-components";

const StyledMain = styled.main`
	height: 100%;
	padding-bottom: calc(50px + env(save-area-inset-bottom, 25px));
`;
export const Content = ({children}) => {
	
		return (
			<StyledMain>
				{children}
			</StyledMain>
		)
	
}

export default Content