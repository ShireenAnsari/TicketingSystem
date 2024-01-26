import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Authcontext, _useauth } from "../context/Authcontext";
import Cookies from "js-cookie";
const Redirecting = () => {
  const [count, setCount] = useState(10);
const [auth,setauth]=_useauth();
  const router = useNavigate();

  useEffect(() => {
    const _interval = setInterval(() => {
      setCount(count - 1);
    }, 1000);

    if (count === 0) {router("/login");
    setauth({
      user: null,
      token: "",
    });
    Cookies.remove("auth");
  };

    return () => clearInterval(_interval);
  }, [count]);

  return <p>please wait for {count} sec</p>;
};

export default Redirecting;
