import React from 'react';
import {
  Header,
  Content,
  BackLink,
  WrapperImage,
  Title,
  Description
} from './index.view';
import { ReactComponent as HotelLogo } from 'assets/Logo.svg';
import roomImage from 'assets/RoomImage.jpg';

const { Logo } = Header;
const Results = () => {
  return (
    <div>
      <Header>
        <Logo>
          <HotelLogo />
        </Logo>
      </Header>
      <Content>
        <WrapperImage>
          <img src={roomImage} alt="room" />
        </WrapperImage>

        <Title>Success</Title>

        <Description>
          Check your email for a booking confirmation. We'll see you soon! You
          can check in on arrival from 1:00 PM on Friday, September 25, 2020.
        </Description>

        <Description>
          Booking Ref. R-BE-19283102
          <br />
          To print your booking click here
        </Description>
        <BackLink>BACK TO Results</BackLink>
      </Content>
    </div>
  );
};
export default Results;
