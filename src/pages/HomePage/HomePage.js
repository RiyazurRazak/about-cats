import React, { useContext, useEffect } from "react";
import { userContext } from "../../App";
import { useNavigate } from "react-router-dom";

function Home() {
  const { user } = useContext(userContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (user === null) {
      navigate("/login");
    }
  }, [user]);

  return <div>{user?.email}</div>;
}

export default Home;
