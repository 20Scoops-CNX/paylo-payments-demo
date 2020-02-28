import React from 'react';
import {
  Wrapper,
  Title,
  RoomDetail,
  PriceDetail,
  RoomName,
  BookingDetailSummary,
  CheckIn,
  CheckOut,
  Total,
  UserDetails,
  Avatar,
  Name,
  Lastname,
  Email,
  TotalPrice,
  WrapperCheckout,
  PayloCheckout,
  PersonalTitle
} from './index.view';
import roomImage from 'assets/RoomImage.jpg';
import imageProfile from 'assets/ImageProfile.png';
import checkoutButton from 'assets/CheckoutButton.png';
import { ReactComponent as User } from 'assets/User.svg';

const Roomd = () => {
  const handleCheckout = () => {
    fetch('http://localhost:8080/booking/hotel', {
      method: 'post',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: 'Markus',
        email: 'markusmuller@gmail.com',
        price: 100
      })
    })
      .then(function(response) {
        return response.json();
      })
      .then(function(data) {
        window.location.assign(data.redirect_url);
      });
  };

  return (
    <Wrapper>
      <Wrapper.TopContent>
        <Title>Check Out</Title>
      </Wrapper.TopContent>
      <Wrapper.BottomContent>
        <RoomDetail>
          <img src={roomImage} alt="room" />
          <RoomName>
            Moxy double sleeper, Guest room, 2 Twin/Single bed(s)
          </RoomName>
          <BookingDetailSummary>
            <CheckIn>
              <span>Check IN</span>
              Fri, Sep 25, 2020
            </CheckIn>
            <CheckOut>
              <span>Check OUT</span>
              Wed 30, Sep 30, 2020
            </CheckOut>
            <Total>
              <span>Total for Stay</span>
              560.00 EUR x 6
            </Total>
          </BookingDetailSummary>
          <p>
            <strong>3360.00 EUR Total for stay in hotel’s currency</strong>
            <br /> Estimted government taxes and fees - Included
          </p>
        </RoomDetail>

        <PriceDetail>
          <PersonalTitle>
            <User /> Personal Information
          </PersonalTitle>
          <UserDetails>
            <Avatar src={imageProfile} alt="profile" />
            <Name>
              <span>Name</span>
              Markus
            </Name>
            <Lastname>
              <span>Lastname</span>
              Müller
            </Lastname>
            <Email>
              <span>Email Address</span>
              markusmuller@gmail.com
            </Email>
          </UserDetails>

          <TotalPrice>
            <div>Total Price</div>
            3360.00 EUR
          </TotalPrice>

          <WrapperCheckout>
            <PayloCheckout onClick={handleCheckout}>
              <img src={checkoutButton} alt="checkout button" />
            </PayloCheckout>
          </WrapperCheckout>
        </PriceDetail>
      </Wrapper.BottomContent>
    </Wrapper>
  );
};
export default Roomd;
