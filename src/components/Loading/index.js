import React from 'react';
import styled, { keyframes } from 'styled-components';
import { convertHex } from 'utils';

const skStretchdelay = keyframes`
   0%, 40%, 100% { 
    transform: scaleY(0.4);
  }  20% { 
    transform: scaleY(1.0);
  }
`;

const Wrapper = styled.div`
  background: ${convertHex('#ffffff', 0.7)};
  position: fixed;
  height: 100vh;
  width: 100vw;
  top: 0;
  left: 0;
  .spinner {
    height: 60px;
    text-align: center;
    font-size: 10px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .spinner > div {
    background-color: #ddae6f;
    height: 100%;
    width: 6px;
    display: inline-block;
    animation: ${skStretchdelay} 1.2s infinite ease-in-out;
    margin: 2px;
  }

  .spinner .rect2 {
    animation-delay: -1.1s;
  }

  .spinner .rect3 {
    animation-delay: -1s;
  }

  .spinner .rect4 {
    animation-delay: -0.9s;
  }

  .spinner .rect5 {
    animation-delay: -0.8s;
  }
`;

const Loading = () => {
  return (
    <Wrapper>
      <div class="spinner">
        <div class="rect1"></div>
        <div class="rect2"></div>
        <div class="rect3"></div>
        <div class="rect4"></div>
        <div class="rect5"></div>
      </div>
    </Wrapper>
  );
};

export default Loading;
