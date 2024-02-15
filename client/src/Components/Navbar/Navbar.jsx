import React,{useEffect, useState} from "react";
import"./Navbar.css";
import logo from"./logo.ico";
import SearchBar from "./SearchBar/SearchBar";
import { RiVideoAddLine } from "react-icons/ri";
import { BiUserCircle } from "react-icons/bi";
import {GoogleLogin} from "react-google-login"
import {IoMdNotificationsOutline} from 'react-icons/io';
import { Link } from "react-router-dom";
import {gapi} from "gapi-script"
//import {useDispatch} from 'react-redux'
import {useDispatch, useSelector} from 'react-redux'

import { login } from "../../actions/auth";
import Auth from "../../Pages/Auth/Auth";

function Navbar({ toggleDrawer, setEditCreateChanelBtn}) {

  const [AuthBtn, setAuthBtn] = useState(false)
  //const CurrentUser=null;

  // const CurrentUser ={
  //   result:{
  //   email: "xyz@email.com",
  //   joinedOn: "2222-07-15T09:57:23.489Z",
  // },
  // };
 
  // current user declaration ..

  const CurrentUser = useSelector(state=>state.currentUserReducer)
  console.log(CurrentUser)

  // we will use google authentication for sign up purpose useing google Api
useEffect(() => {
  function start(){
    gapi.client.init({
      clientId: "720758151640-en355qjms4cqo430ubhrpvk4fhcfa7o0.apps.googleusercontent.com",
      scope: "email",
    });
  }
  gapi.load("client:auth2", start);
},
[]);
const dispatch=useDispatch();
  const onSuccess=(response)=>{
    const Email = response?.profileObj.email;
    console.log(Email);
    dispatch(login({email:Email}))
    //console.log(response);
  }

  const onFailure=(response)=>{
    console.log("Failed",response);
  }
  //date 6-02-2024 - handelVideoAddClick button on Navbar
  const handleVideoAddClick = () => {
    if(!CurrentUser){
      alert("Please Login To Upload Your Video")
    }else{
      
    }
  };
  const handlenotification =()=>{
    if(!CurrentUser){
      alert("Please Login To Watch Your Notification")
    }
  };
  return (
    <>
    <div className="Container_Navbar">
       <div className="Burger_Logo_Navbar">
            <div className="burger" onClick={() => toggleDrawer()}>
                <p></p>
                <p></p>
                <p></p>
            </div>
            <Link to={'/'} className="logo_div_Navbar">
                <img src={logo} alt="" />
                <p className="logo_title_navbar">YouTube</p>
            </Link>            
       </div>
       <SearchBar />
       <RiVideoAddLine size={22} className={"vid_bell_Navbar"} onClick={handleVideoAddClick}/>
       
        <div className="apps_Box">
          <p className="appBox"></p>
          <p className="appBox"></p>
          <p className="appBox"></p>
          <p className="appBox"></p>
          <p className="appBox"></p>
          <p className="appBox"></p>
          <p className="appBox"></p>
          <p className="appBox"></p>
          <p className="appBox"></p>

        </div>
       <IoMdNotificationsOutline size={22} className="vid_bell_Navbar"  onClick={handlenotification}/>
       <div className="Auth_cont_Navbar">
        {CurrentUser? (
          <>
          <div className="Chanel_logo_App" onClick={()=>setAuthBtn(true)}>
            <p className="fstChar_logo_App">
              {
                CurrentUser?.result.name?(
                  <>
                  {CurrentUser?.result.name.charAt(0).toUpperCase()}
                </>
                ) : (<>
                  {CurrentUser?.result.email.charAt(0).toUpperCase()}
                </>)
              }
            </p>
            
          </div>
          </>
        ) : (
         <>
         <GoogleLogin 
          clientId={
            "720758151640-en355qjms4cqo430ubhrpvk4fhcfa7o0.apps.googleusercontent.com"
          }
          onSuccess={onSuccess}
          onFailure={onFailure}
          render={(renderProps) => (
          <p onClick={renderProps.onClick} className="Auth_Btn">
          <BiUserCircle size={22} />
          <b>Sign in</b>
        </p>
        )}
         />
            
          </>
        )}  
       </div>
    </div>
    {
       AuthBtn &&
      <Auth 
      setEditCreateChanelBtn={setEditCreateChanelBtn}
      setAuthBtn={setAuthBtn}
      User={CurrentUser}/>
    }
   
    </>
  );
}

export default Navbar;
