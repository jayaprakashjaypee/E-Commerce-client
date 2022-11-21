import styled from "styled-components";
import Navbar from "../components/Navbar";
import { mobile } from "../responsive";

const Container = styled.div`
  width: 100vw;
  height: 90vh;
  background-color: #ff000094;
  /* background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.pexels.com/photos/6984661/pexels-photo-6984661.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
      center;
  background-size: cover; */
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 40%;
  padding: 20px;
  border-radius: 2rem;
  border: 3px solid #05fc9d;
  background-color: #0000005e;
  ${mobile({ width: "75%" })}
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 700;
`;

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  color: black;
  font-weight: 500;
  font-size: large;
  margin: 20px 10px 0px 0px;
  padding: 10px;
`;

const Agreement = styled.span`
  font-size: 12px;
  margin: 20px 0px;
  color: white;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  font-size: 1rem;
  font-weight: 900;
  padding: 15px 20px;
  border-radius: 1rem;
  background-color: #05fc9d;
  color: #fc0404;
  cursor: pointer;
`;

const Register = () => {
  return (
    <>
      <Navbar />
      <Container>
        <Wrapper>
          <Title>CREATE AN ACCOUNT</Title>
          <Form>
            <Input placeholder="name" />
            <Input placeholder="last name" />
            <Input placeholder="username" />
            <Input placeholder="email" />
            <Input placeholder="password" />
            <Input placeholder="confirm password" />
            <Agreement>
              By creating an account, I consent to the processing of my personal
              data in accordance with the <b>PRIVACY POLICY</b>
            </Agreement>
            <Button>CREATE</Button>
          </Form>
        </Wrapper>
      </Container>
    </>
  );
};

export default Register;
