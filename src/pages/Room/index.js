import React from 'react';
import {
  Wrapper,
  Title,
  BookBox,
  StayDates,
  Total,
  Card,
  DateAvaliable,
  Button,
  DescriptionTotal
} from './index.view';

const Roomd = () => {
  return (
    <Wrapper>
      <Wrapper.TopContent>
        <BookBox>
          <DateAvaliable>Only date available</DateAvaliable>
          <StayDates>
            <span>Stay Dates</span>
            <div>Fri, Sep 25, 2020 - Wed 30, Sep 30, 2020</div>
          </StayDates>
          <Total>
            <span>Total for Stay</span>
            <div>560,00 EUR x 6</div>
          </Total>
        </BookBox>
        <Title>Rooms</Title>
      </Wrapper.TopContent>
      <Wrapper.BottomContent>
        {[...Array(4)].map((v, i) => (
          <Card key={i}>
            <Card.Img />
            <Card.Content>
              <Card.Description>
                <h3>Moxy double sleeper, Guest room, 2 Twin/Single bed(s)</h3>
                <DescriptionTotal>
                  <span>560,00 EUR / Night</span>
                  <span>x6 3360,00 EUR</span>
                </DescriptionTotal>
              </Card.Description>
              <Button>Choose Room</Button>
            </Card.Content>
          </Card>
        ))}
      </Wrapper.BottomContent>
    </Wrapper>
  );
};
export default Roomd;
