import { Button } from "@mui/material";
import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import {
  getloggedinError,
  getloggedinLoading,
  getloggedinSuccess,
  logOut,
} from "../redux/actions";
import "../Styles/profile.css";

export const Profile = () => {

  const token_local = localStorage.getItem("token");
  const { user } = useSelector((state) => state.loggedinuser);
  const { token } = useSelector((state) => state.login);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getloggedinLoading());
    axios({
      method: "get",
      url: "http://localhost:7000/getuser",
      headers: {
        authtoken: token_local,
      },
    })
      .then((res) => {
        dispatch(getloggedinSuccess(res.data));
      })
      .catch((err) => {
        dispatch(getloggedinError());
      });
  }, []);
  if(!token_local&&!token){
        return <Navigate to="/" /> 
      }
 let handleLogout=()=>{
        localStorage.removeItem("token");
        dispatch(logOut());
 }
  return (
    <>
      <div className="profile_maindiv">
        {user ? (
          <div className="profile_content">
            <img
              src={user.profile_picture}
              alt=""
              className="profile_image"
            ></img>
            <div className="profile_details">
              <p className="deails">Name: {user.name}</p>
              <p className="deails">
                Email: {user.isEmailVerified?(<span className="deails">{user.email}</span>):(<span className="deails_unverified">{user.email}</span>)}
              </p>
              <p className="deails">
                Number: {user.isMobileVerified?(<span className="deails">{user.mobile_number}</span>):(<span className="deails_unverified">{user.mobile_number}</span>)}
              </p>
            </div>
            {!user.isEmailVerified ? (
              <>
                <Button>Verify Email</Button>
              </>
            ) : (
              <></>
            )}
            {!user.isMobileVerified ? (
              <>
                <Button>Verify Phone</Button>
                <Button
                onClick={handleLogout}
                >Logout</Button>
              </>
            ) : (
              <><Button
              onClick={handleLogout}
              >Logout</Button></>
            )}
          </div>
        ) : (
          <></>
        )}
        
      </div>
    </>
  );
};
