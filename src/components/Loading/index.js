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
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 999;
  .spinner {
    height: 50px;
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
      <div className="spinner">
        <div className="rect1"></div>
        <div className="rect2"></div>
        <div className="rect3"></div>
        <div className="rect4"></div>
        <div className="rect5"></div>
      </div>
    </Wrapper>
  );
};

export default Loading;
