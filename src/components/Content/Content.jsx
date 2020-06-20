import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const StyledMain = styled.main`
`;
export const Content = ({ children }) => {
  return <StyledMain>{children}</StyledMain>;
};

Content.propTypes = {
	children: PropTypes.any,
};

export default Content;
