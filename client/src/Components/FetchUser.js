import React, { useContext, useState, useEffect } from "react";
import axios from "axios";
import {AuthContext} from "../Providers/AuthProvider"

const FetchUser = (props) => {
  const { user, setUser, checked, setChecked} = useContext(AuthContext);

  useEffect(() => {
    checkUser();
  }, []);
  
  const checkUser = async () => {
    if (user || !localStorage.getItem("access-token")) {
      console.log('User found or no token')
      setChecked(true);
      return;
    }
    try {
      console.log('checkin token in local storage')
      const res = await axios.get("/api/auth/validate_token");
      setUser(res.data.data);
    } catch (err) {
      console.log(err);
      console.log("unable to validate token");
    } finally {
      setChecked(true);
    }
  };

   return checked ? props.children : null;
};

export default FetchUser;