import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import {Outlet } from "react-router-dom";
import Redirecting from "../../../Logic/utils/Redirecting";
import { Authcontext } from "../../../Logic/context/Authcontext";
import Layout from "../../components/Layout/layout";

const AgentRoutes = () => {
  const [auth] = useContext(Authcontext);
  const [loading, setLoading] = useState(true);
  const fetchingCurrectUser = async () => {
    try {
      const res = await axios.get("auth/current-agent");
      res.ok?setLoading(true):setLoading(false);
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
    <Layout title={'Agent'}>
      <Outlet />
    </Layout>
  );
};

export default AgentRoutes;
