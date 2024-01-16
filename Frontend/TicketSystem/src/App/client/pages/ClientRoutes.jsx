import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import {Outlet } from "react-router-dom";
import Redirecting from "../../../Logic/utils/Redirecting";
import { Authcontext } from "../../context/Authcontext";
import ClientLayout from "../layout";

const ClientRoutes = () => {
  const [auth] = useContext(Authcontext);
  const [loading, setLoading] = useState(true);

  const fetchingCurrectUser = async () => {
    setLoading(false);
    try {
      const res = await axios.get("auth/current-agent");

    } catch(error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (auth?.token) {
      fetchingCurrectUser();
    }
  }, [auth && auth?.token]);

  return loading ? (
    <Redirecting />
  ) : (
    <ClientLayout>
      <Outlet />
    </ClientLayout>
  );
};

export default ClientRoutes;
