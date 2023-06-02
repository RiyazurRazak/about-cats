import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Center,
  Heading,
  Input,
} from "@chakra-ui/react";
import React, { useContext, useEffect, useState } from "react";
import { addUser, getUser } from "../../services/localService";
import { useNavigate } from "react-router-dom";
import { userContext } from "../../App";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { setUser } = useContext(userContext);

  const loginHandller = () => {
    addUser(email, password);
    setUser({ email });
    navigate("/");
  };

  useEffect(() => {
    const user = getUser();
    if (user !== null) {
      setUser({ email: user });
      navigate("/");
    }

    // eslint-disable-next-line
  }, []);

  return (
    <Center flexDirection="column" h="100vh">
      <Card>
        <CardHeader>
          <Heading size="lg" textAlign="center">
            Login To Continue
          </Heading>
        </CardHeader>
        <CardBody>
          <Input
            type="email"
            placeholder="email address"
            mb="18px"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            type="password"
            placeholder="password"
            mb="18px"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button w="100%" onClick={loginHandller}>
            Login
          </Button>
        </CardBody>
      </Card>
    </Center>
  );
}

export default Login;
