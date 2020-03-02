import React from 'react';
import { useLocation } from 'react-router-dom';
import {
  Header,
  Content,
  BackLink,
  WrapperImage,
  Title,
  Description,
  ClickHere
} from './index.view';
import { ReactComponent as HotelLogo } from 'assets/Logo.svg';
import roomImage from 'assets/RoomImage.jpg';
const { Logo } = Header;

const useQuery = () => {
  return new URLSearchParams(useLocation().search);
};
const Results = () => {
  const query = useQuery();
  const trasId = query.get('transaction_id');
  return (
    <div>
      <Header error={!trasId}>
        <Logo error={!trasId}>
          <HotelLogo />
        </Logo>
      </Header>
      <Content>
        <WrapperImage error={!trasId}>
          <img src={roomImage} alt="room" />
        </WrapperImage>
        <Title>{!trasId ? 'Something went wrong' : 'Success'}</Title>
        <div>
          {!trasId ? (
            <Description>
              Sorry, something went wrong. We're working on it and we'll get it
              fixed as soon as we can. We apologise for the delay and any
              convenience this situation may have caused. Thank you again for
              choosing Roompalace, and we hope to be your choice for the future
              online reservations.
            </Description>
          ) : (
            <>
              <Description>
                Check your email for a booking confirmation. We'll see you soon!
                You can check in on arrival from 1:00 PM on Friday, September
                25, 2020.
              </Description>
              <Description>
                Booking Ref. R-BE-19283102
                <br />
                To print your booking <ClickHere>click here</ClickHere>
              </Description>
            </>
          )}
        </div>

        <BackLink to="/">BACK TO HOME</BackLink>
      </Content>
    </div>
  );
};
export default Results;
