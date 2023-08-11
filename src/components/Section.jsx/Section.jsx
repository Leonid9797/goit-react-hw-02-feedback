import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  margin: 20px;
`;

const Section = ({ title, children }) => (
  <Wrapper>
    <h2>{title}</h2>
    {children}
  </Wrapper>
);

export default Section;
