import styled from "styled-components";
import { mobile } from "../responsive";
import Navbar from "../components/Navbar";

const Container = styled.div`
  width: 100vw;
  height: 90vh;
  background-color: #ff0000b3;
  /* background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.pexels.com/photos/6984650/pexels-photo-6984650.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
      center;
  background-size: cover; */
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 25%;
  padding: 20px;
  border-radius: 1.5rem;
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
  flex-direction: column;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  color: black;
  font-weight: 500;
  font-size: large;
  margin: 10px 0;
  padding: 10px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  font-size: 1rem;
  font-weight: 900;
  border-radius: 1rem;
  background-color: #05fc9d;
  color: #fc0202;
  cursor: pointer;
  margin-bottom: 10px;
`;

const Link = styled.a`
  margin: 5px 0px;
  font-size: 12px;
  color: white;
  text-decoration: underline;
  cursor: pointer;
`;

const Login = () => {
  return (
    <>
      <Navbar />
      <Container>
        <Wrapper>
          <Title>SIGN IN</Title>
          <Form>
            <Input placeholder="username" />
            <Input placeholder="password" />
            <Button>LOGIN</Button>
            <Link>DO NOT YOU REMEMBER THE PASSWORD?</Link>
            <Link>CREATE A NEW ACCOUNT</Link>
          </Form>
        </Wrapper>
      </Container>
    </>
  );
};

export default Login;
