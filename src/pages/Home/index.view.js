import styled from 'styled-components';
import pattern from 'assets/Pattern.jpg';
import hotelImage from 'assets/HeroImage.jpg';

const Header = styled.header`
  align-items: center;
  display: flex;
  justify-content: space-between;
`;
Header.Logo = styled.div`
  padding: 0 64px;
`;
Header.BookButton = styled.a`
  background: ${({ theme: { color } }) => color.red};
  color: #fff;
  font-weight: 500;
  font-size: 18px;
  line-height: 24px;
  padding: 28px 46px;
  text-decoration: none;
  text-transform: uppercase;
`;
const Content = styled.main`
  background: #fff;
  background-image: url(${`${pattern}`});
  background-position: left 40px;
  background-repeat: no-repeat;
  display: flex;
  height: calc(100vh - 80px);
`;
const Title = styled.h1`
  ${({ theme: { fonts } }) => fonts.loraFont()};
  font-size: 48px;
  font-weight: normal;
  line-height: 64px;
  margin: 0;
  padding: 40px 0;
  position: relative;

  &::before {
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
    content: '';
    width: 150px;
    height: 1px;
    position: absolute;
    bottom: 0;
    left: 0;
  }
`;
const VericalText = styled.div`
  width: 10px;
  word-wrap: break-word;
  white-space: pre-wrap;
  text-transform: uppercase;
  font-size: 16px;
  line-height: 35px;
  text-align: center;
`;
const Description = styled.div`
  position: absolute;
  top: 0;
  right: calc(0px - -60px);
  ${VericalText} {
    margin-bottom: 30px;
  }
`;

const TextLeft = styled.div`
  width: 500px;
  position: relative;
  ${Title} {
    bottom: 64px;
    left: 64px;
    position: absolute;
  }
`;
const ImageRight = styled.div`
  flex: 1;
  background: #fff;
  background-image: url(${`${hotelImage}`});
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
`;

export {
  Header,
  Content,
  Title,
  TextLeft,
  ImageRight,
  VericalText,
  Description
};
