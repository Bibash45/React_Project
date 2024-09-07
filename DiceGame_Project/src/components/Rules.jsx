import React from "react";
import styled from "styled-components";
const Rules = () => {
  return (
    <RulesContainer>
      <h2>How to play dice game ?</h2>
      <ul>
      <li>Click on dice image</li>
      <li>after click on dice if selected number is equal to dice number you will get same point as dice</li>
      <li>if you get wrong guess then 2 point will be deducted</li>
      </ul>  
    </RulesContainer>
  );
};

export default Rules;
const RulesContainer = styled.div`
background-color: #FBF1F1;
padding: 30px;
text-align: justify;
h2{
    font-size: 24px;
}
ul{
    margin-top: 24px;
}
`;
