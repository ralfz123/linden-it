import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledMain = styled.main`
	height: 100%;
	padding-bottom: 50px;
`;
export const Content = ({children}) => {
	
	return (
		<StyledMain>
			{children}
		</StyledMain>
	);
	
};

Content.propTypes = {
	children: PropTypes.object
};

export default Content;