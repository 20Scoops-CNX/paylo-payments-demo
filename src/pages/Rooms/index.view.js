import styled from 'styled-components';
import roomImage from 'assets/RoomImage.jpg';
import { ReactComponent as CalendarSvg } from 'assets/calendar.svg';
import { ReactComponent as ClockSvg } from 'assets/clock.svg';

const Wrapper = styled.div`
  max-width: 1344px;
  margin: 0 auto;
  padding: 0px 48px;
`;
Wrapper.TopContent = styled.div`
  display: flex;
  height: 104px;
  align-items: flex-end;
`;
Wrapper.BottomContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 32px;
  grid-row-gap: 32px;
  padding: 32px 0;
`;
const Title = styled.h1`
  ${({ theme: { fonts } }) => fonts.loraFont()};
  font-weight: normal;
  font-size: 48px;
  line-height: 48px;
  margin: 0;
  padding: 0;
`;
const BookBox = styled.div`
  display: flex;
  flex: 1;
`;
const DateAvaliable = styled.button`
  align-self: flex-end;
  background: #8995a0;
  font-weight: bold;
  font-size: 16px;
  line-height: 24px;
  display: flex;
  align-items: center;
  color: #ffffff;
`;
const ClockIcon = styled(ClockSvg)`
  height: 20px;
  width: 20px;
  margin-right: 6px;
`;
const CalendarIcon = styled(CalendarSvg)`
  height: 20px;
  width: 20px;
  margin: 22px 36px 0px 52px;
`;
const StayDates = styled.div`
  line-height: 24px;
`;
const Total = styled.div`
  height: 50px;
  margin-left: 18px;
  padding-left: 19px;
  line-height: 24px;
  position: relative;
  &:before {
    content: '';
    left: 0;
    width: 1px;
    height: 100%;
    position: absolute;
    display: block;
    background: linear-gradient(
      90deg,
      #bc945d 0.01%,
      #957040 27.85%,
      #c79b60 42.6%,
      #eebc79 55.84%,
      #fdc983 62.75%,
      #ebba78 70.85%,
      #be935b 86.93%,
      #957040 100%
    );
  }
`;
const Card = styled.div`
  background: red;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  flex-direction: column;
  height: 346px;
  overflow: hidden;
  position: relative;
  &:hover > div:last-child {
    transform: translateY(0);
  }
`;

const Button = styled.a`
  background: ${({ theme: { color } }) => color.red};
  color: #fff;
  font-weight: 500;
  font-size: 18px;
  line-height: 24px;
  padding: 50px 26px;
  text-decoration: none;
  text-transform: uppercase;
  cursor: pointer;
`;
Card.Img = styled.div`
  background: #fff;
  background-image: url(${`${roomImage}`});
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  height: calc(100vh - 80px);
  height: 100%;
`;
Card.Content = styled.div`
  background: #dbe1e6;
  display: flex;
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  transform: translateY(124px);
  transition: all 0.5s ease;
`;
Card.Description = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 16px 24px;
  h3 {
    font-size: 18px;
    flex: 1;
    line-height: 24px;
    letter-spacing: 0.03em;
    padding: 0;
    margin: 0;
  }
`;
const DescriptionTotal = styled.div`
  display: flex;
  justify-content: space-between;
`;
export {
  Wrapper,
  Title,
  BookBox,
  StayDates,
  Total,
  Card,
  DateAvaliable,
  Button,
  DescriptionTotal,
  ClockIcon,
  CalendarIcon
};
