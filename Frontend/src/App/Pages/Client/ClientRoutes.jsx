import axios from "axios";
import  { useEffect, useState } from "react";
import {Outlet } from "react-router-dom";
import Redirecting from "../../../Logic/utils/Redirecting";
import { _useauth } from "../../../Logic/context/Authcontext";
import Layout from "../../components/Layout/layout";

const ClientRoutes = () => {
  const [auth] = _useauth();
  const [loading, setLoading] = useState(true);

  const fetchingCurrectUser = async () => {
    // setLoading(false);
    try {
      const res = await axios.get("auth/current-client");
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
    <Layout title={'Client'}>
      <Outlet />
    </Layout>
  );
};

export default ClientRoutes;
