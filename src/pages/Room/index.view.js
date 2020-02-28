import styled from 'styled-components';
const convertHex = (hex, opacity = 1) => {
  const newHex = hex.replace('#', '');
  const rgb = {
    r: parseInt(newHex.substring(0, 2), 16),
    g: parseInt(newHex.substring(2, 4), 16),
    b: parseInt(newHex.substring(4, 6), 16)
  };
  return `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${opacity})`;
};

const Wrapper = styled.div`
  max-width: 1344px;
  margin: 0 auto;
`;
Wrapper.TopContent = styled.div`
  display: flex;
`;
Wrapper.BottomContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 32px;
  padding: 32px 0;
`;
const Title = styled.h1`
  ${({ theme: { fonts } }) => fonts.loraFont()};
  font-weight: normal;
  font-size: 48px;
  line-height: 48px;
  margin: 56px 0 0 0;
  padding: 0;
`;
const RoomDetail = styled.div``;

const RoomName = styled.h2`
  font-weight: normal;
  font-size: 24px;
  line-height: 32px;
`;
const PriceDetail = styled.div``;
const CheckIn = styled.div``;
const CheckOut = styled.div``;
const Total = styled.div``;
const BookingDetailSummary = styled.div`
  display: flex;
  font-size: 14px;
  line-height: 12px;
  padding: 40px 0;
  ${`${CheckIn}, ${CheckOut}, ${Total}`} {
    > span {
      display: block;
      font-weight: 500;
      padding: 8px 0;
    }
    flex: 1;
  }
`;
const Avatar = styled.img`
  margin-right: 15px;
`;
const Name = styled.div``;
const Lastname = styled.div``;
const Email = styled.div``;
const UserDetails = styled.div`
  display: flex;
  font-size: 16px;
  line-height: 24px;
  padding: 40px 0;
  ${`${Name}, ${Lastname}, ${Email}`} {
    > span {
      display: block;
      font-weight: 500;
      font-size: 14px;
      line-height: 12px;
      padding: 3px 0 10px 0;
    }
    flex: 1;
  }
  ${Email} {
    flex: 3;
  }
`;
const TotalPrice = styled.div`
  color: #000000;
  background: ${convertHex('#dbe1e6', 0.2)};
  font-weight: normal;
  font-size: 36px;
  line-height: 50px;
  text-align: center;
  padding: 24px;
  > div {
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 12px;
  }
`;
const WrapperCheckout = styled.div`
  background: ${convertHex('#dbe1e6', 0.2)};
  text-align: center;
  padding: 40px;
  margin-top: 40px;
`;
const PayloCheckout = styled.button`
  background: transparent;
  border: 0;
`;
const PersonalTitle = styled.h5`
  display: flex;
  align-content: center;
  margin: 0;
  padding: 0;
  svg {
    margin-right: 10px;
  }
`;
export {
  Wrapper,
  Title,
  RoomDetail,
  RoomName,
  PriceDetail,
  BookingDetailSummary,
  CheckIn,
  CheckOut,
  Total,
  UserDetails,
  Avatar,
  Name,
  Lastname,
  Email,
  WrapperCheckout,
  TotalPrice,
  PayloCheckout,
  PersonalTitle
};
