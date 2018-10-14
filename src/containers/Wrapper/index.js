import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Box = styled.div`
  top: 40px;
  position: relative;
`;
const Wrapper = props => (
  <Box className="container">
    { props.children }
  </Box>
);

Wrapper.propTypes = {
  children: PropTypes.array.isRequired,
};

export default Wrapper;