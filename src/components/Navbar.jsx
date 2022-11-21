import { Badge } from "@material-ui/core";
import { Search, ShoppingCart } from "@mui/icons-material";
import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
  height: 60px;
  background-color: #05fc9d;
  position: sticky;
  top: 0;
  z-index: 100;
  ${mobile({ height: "50px" })}
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ padding: "5px 0", paddingRight: "10px" })}
`;
const Left = styled.div`
  /* flex: 1; */
`;

const Logo = styled.img`
  width: 100px;
  object-fit: contain;
  margin: 0 20px;
  margin-top: 10px;
  ${mobile({ width: "60px", height: "24px", margin: "7px", marginTop: "14px" })}
`;

const Center = styled.div`
  flex: 2;
  display: flex;
  align-items: center;
  border-radius: 24px;
`;

const Input = styled.input`
  font-size: large;
  height: 12px;
  padding: 10px;
  border: none;
  width: 100%;
  ${mobile({ width: "100%" })}
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({ flex: 2, justifyContent: "center" })}
`;

const MenuItem = styled.div`
  font-size: 16px;
  font-weight: 900;
  cursor: pointer;
  margin-left: 25px;
  color: red;
  ${mobile({ fontSize: "12px", marginLeft: "10px" })}
`;

const Navbar = () => {
  const quantity = useSelector((state) => state.cart.quantity);

  console.log(quantity);

  return (
    <Container>
      <Wrapper>
        <Left>
          <Link to="/">
            <Logo src="https://www.pinterest.com/pin/523332419199813568/" />
          </Link>
        </Left>
        <Center>
          <Input placeholder="Search" />
          <Link to="/products/category">
            <Search
              style={{
                padding: "3px",
                height: "26px",
                backgroundColor: "#fd0707 ",
                color: "white",
              }}
            />
          </Link>
        </Center>
        <Right>
          <Link to="/register">
            <MenuItem>REGISTER</MenuItem>
          </Link>
          <Link to="/login">
            <MenuItem>SIGN IN</MenuItem>
          </Link>
          <Link to="/cart">
            <MenuItem>
              <Badge badgeContent={quantity} color="secondary">
                <ShoppingCart
                  style={{ color: "rgb(1, 51, 32)", height: "32px" }}
                />
              </Badge>
            </MenuItem>
          </Link>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
