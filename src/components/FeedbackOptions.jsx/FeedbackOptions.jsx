import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  padding: 10px 20px;
  margin: 5px;
`;

const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <div>
    {options.map(option => (
      <Button key={option} onClick={() => onLeaveFeedback(option)}>
        {option}
      </Button>
    ))}
  </div>
);

export default FeedbackOptions;
