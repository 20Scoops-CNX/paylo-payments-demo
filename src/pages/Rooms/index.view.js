import styled from 'styled-components';
import media from 'styled-media-query';
import roomImage from 'assets/RoomImage.jpg';
import roomImage1 from 'assets/RoomImage1.jpg';
import roomImage2 from 'assets/RoomImage2.jpg';
import roomImage3 from 'assets/RoomImage3.jpg';
import { ReactComponent as CalendarSvg } from 'assets/calendar.svg';
import { ReactComponent as ClockSvg } from 'assets/clock.svg';

const Wrapper = styled.div`
  max-width: 1344px;
  margin: 0 auto;
  padding: 0px 48px;

  ${media.lessThan('large')`
    max-width: 656px;
  `}

  ${media.lessThan('medium')`
    padding: 0px;
  `}
`;
Wrapper.TopContent = styled.div`
  display: flex;
  height: 104px;
  align-items: flex-end;
  ${media.lessThan('large')`
    align-items: start;
    flex-direction: column-reverse;
    padding-top: 56px;
    height: auto;
  `}
`;
Wrapper.BottomContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 32px;
  grid-row-gap: 32px;
  padding: 32px 0;

  ${media.lessThan('large')`
    display: block;
  `}
`;
const Title = styled.h1`
  ${({ theme: { fonts } }) => fonts.loraFont()};
  font-weight: normal;
  font-size: 48px;
  line-height: 48px;
  margin: 0;
  padding: 0;

  ${media.lessThan('large')`
    align-self: flex-end;
  `}

  ${media.lessThan('medium')`
    align-self: flex-start;
    padding: 0 0 24px 16px;
  `}
`;
const BookBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex: 1;
`;
BookBox.FirstBox = styled.div`
  margin-top: auto;
  ${media.lessThan('large')`
    flex-basis: 100%;
    margin-bottom: 26px;
  `}
  ${media.lessThan('medium')`
    padding-left: 16px;
  `}
`;
const DateAvaliable = styled.button`
  align-self: flex-end;
  background: #8995a0;
  border: 0;
  border-radius: 2px;
  font-weight: bold;
  font-size: 16px;
  line-height: 24px;
  display: flex;
  align-items: center;
  color: #fff;
  padding: 2px 10px;
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
  ${media.lessThan('large')`
    margin: 5px 30px 0 0;
  `}
`;
const StayDates = styled.div`
  line-height: 24px;
  display: flex;
  ${media.lessThan('medium')`
    flex-basis: 100%;
    padding: 0 20px;
  `}

  span {
    font-weight: 500;
    font-size: 14px;
    line-height: 12px;
  }
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

  > span {
    font-weight: 500;
    font-size: 14px;
    line-height: 12px;
  }

  ${media.lessThan('medium')`
    padding: 14px 0 0 50px;
    &:before {
      width: 0;
    }
  `}
`;
const Card = styled.div`
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  flex-direction: column;
  height: 346px;
  overflow: hidden;
  position: relative;

  &:nth-of-type(1) > div:first-child {
    background-image: url(${`${roomImage}`});
  }
  &:nth-of-type(2) > div:first-child {
    background-image: url(${`${roomImage1}`});
  }
  &:nth-of-type(3) > div:first-child {
    background-image: url(${`${roomImage2}`});
  }
  &:nth-of-type(4) > div:first-child {
    background-image: url(${`${roomImage3}`});
  }

  &:hover > div:last-child {
    transform: translateY(0);
  }
  ${media.lessThan('medium')`
    margin-bottom: 0;
  `}
`;
const SoftColor = styled.span`
  color: #8995a0;
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
  ${media.lessThan('medium')`
    font-weight: 500;
    font-size: 14px;
    line-height: 18px;
    width: 90px;
    box-sizing: border-box;
    padding: 36px 0;
    text-align: center;
  `}
`;
Card.Img = styled.div`
  background: #fff;
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
  transition: all 0.3s ease;
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
    ${media.lessThan('medium')`
      font-weight: 600;
      font-size: 14px;
      line-height: 16px;
    `}
  }
`;
const DescriptionTotal = styled.div`
  display: flex;
  justify-content: space-between;
  ${media.lessThan('medium')`
    flex-direction: column;
    font-weight: normal;
    font-size: 14px;
    line-height: 16px;
  `}
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
  CalendarIcon,
  SoftColor
};
