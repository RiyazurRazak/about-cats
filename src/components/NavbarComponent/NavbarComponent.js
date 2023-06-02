import {
  Button,
  HStack,
  Heading,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
  Text,
} from "@chakra-ui/react";
import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { userContext } from "../../App";
import { removeUser } from "../../services/localService";

function Navbar() {
  const { user, setUser } = useContext(userContext);
  const navigate = useNavigate();
  const logoutHandller = () => {
    removeUser();
    setUser(null);
    navigate("/login");
  };
  return (
    <HStack p="16px 20px" bg="AppWorkspace" justifyContent="space-between">
      <Heading size="md">All About Cats</Heading>
      <HStack>
        <Link to="/">Home</Link>
        <Link to="/categories">Categories</Link>
        <Link to="/breeds">Breeds</Link>
        {user !== null && (
          <Popover>
            <PopoverTrigger>
              <Button variant="link">Logout</Button>
            </PopoverTrigger>
            <PopoverContent>
              <PopoverArrow />
              <PopoverCloseButton />
              <PopoverHeader>Are you sure want to logout</PopoverHeader>
              <PopoverBody>
                <Text mb="12px">You are logged in as : {user.email}</Text>
                <Button onClick={logoutHandller}>Logout Me</Button>
              </PopoverBody>
            </PopoverContent>
          </Popover>
        )}
      </HStack>
    </HStack>
  );
}

export default Navbar;
