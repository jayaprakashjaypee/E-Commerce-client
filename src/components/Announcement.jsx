import styled from "styled-components";

const Container = styled.div`
  height: 30px;
  background-color: #ff000096;
  color: #1f1313;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: bold;
  position: sticky;
  top: 0;
  z-index: 100;
`;

const Announcement = () => {
  return <Container>Super Deal! Free Shipping on Orders Above $50</Container>;
};

export default Announcement;
