import styled from 'styled-components';
import { Link } from 'react-router-dom';
import check from 'assets/Check.png';

const Header = styled.header`
  align-items: center;
  display: flex;
  justify-content: center;
`;
Header.Logo = styled.div`
  padding: 0 64px;
`;
const Content = styled.main`
  background: #fff;
  max-width: 600px;
  margin: 0 auto;
  text-align: center;
`;
const WrapperImage = styled.div`
  margin: 60px 0;
  position: relative;
  &::before {
    background-image: url(${`${check}`});
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
  font-weight: normal;
  font-size: 40px;
  line-height: 48px;
`;
const Description = styled.p`
  font-size: 16px;
  line-height: 24px;
  text-align: left;
`;
export { Header, Content, WrapperImage, BackLink, Title, Description };
