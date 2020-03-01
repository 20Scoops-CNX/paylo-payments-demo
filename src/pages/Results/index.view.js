import styled from 'styled-components';
import { Link } from 'react-router-dom';
import check from 'assets/Check.png';
import cross from 'assets/Cross.png';
import media from 'styled-media-query';
import patternSuccess from 'assets/patternSuccess.svg';

const convertHex = (hex, opacity = 1) => {
  const newHex = hex.replace('#', '');
  const rgb = {
    r: parseInt(newHex.substring(0, 2), 16),
    g: parseInt(newHex.substring(2, 4), 16),
    b: parseInt(newHex.substring(4, 6), 16)
  };
  return `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${opacity})`;
};

const Header = styled.header`
  align-items: start;
  display: flex;
  justify-content: center;
  background: ${convertHex('#f0c281', 0.3)};
  background-image: url(${`${patternSuccess}`});
  background-repeat: no-repeat;
  background-position: left top;
  padding-top: 10px;
  height: 273px;
  ${media.lessThan('medium')`
    background-image: none;
    height: 245px;
  `}
`;
Header.Logo = styled.div`
  padding: 0 64px;
`;
const Content = styled.main`
  background: #fff;
  max-width: 600px;
  margin: 0 auto;
  text-align: center;
  margin-top: -160px;
`;
const WrapperImage = styled.div`
  position: relative;
  > img {
    width: 100%;
  }
  &::before {
    ${({ error }) =>
      error
        ? `
      background-image: url(${`${cross}`});
    `
        : `
      background-image: url(${`${check}`});
    `}

    background-repeat: no-repeat;
    background-position: center;
    content: '';
    position: absolute;
    bottom: -50px;
    left: 50%;
    width: 100px;
    height: 100px;
    margin-left: -50px;
  }
`;
const BackLink = styled(Link)`
  background: #c71e35;
  font-weight: 500;
  font-size: 18px;
  line-height: 24px;
  padding: 17px 26px;
  color: #fff;
  text-decoration: none;
  margin-top: 32px;
  display: inline-block;
`;
const Title = styled.h2`
  ${({ theme: { fonts } }) => fonts.loraFont()};
  font-weight: normal;
  font-size: 40px;
  line-height: 48px;
  margin-top: 45px;
`;
const Description = styled.p`
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0.03em;
  text-align: left;
  ${media.lessThan('large')`
    padding: 0 16px;
  `}
`;
const ClickHere = styled.span`
  color: #c71e35;
  font-weight: bold;
`;
export {
  Header,
  Content,
  WrapperImage,
  BackLink,
  Title,
  Description,
  ClickHere
};
