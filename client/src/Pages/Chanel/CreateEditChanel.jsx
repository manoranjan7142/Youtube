import React, { useState } from 'react'
import './CreateEditChanel.css'
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../actions/auth';
import { updateChanelData } from '../../api';

  function CreateEditChanel({setEditCreateChanelBtn}) {

    // const CurrentUser ={
    //     result:{
    //     email: "xyz@email.com",
    //     joinedOn: "2222-07-15T09:57:23.489Z",
    //   },
    // };
    const CurrentUser=useSelector(state=>state.currentUserReducer)
    const [name, setName] = useState(CurrentUser?.result.name);
    const [desc, setDesc] = useState(CurrentUser?.result.desc);
    const dispatch =useDispatch();
    const handleSubmit=( ) =>{
      if(!name){
        alert("Please enter your name");
      }else if(!desc){
        alert("please enter Discription");
      }else{
        dispatch(updateChanelData(CurrentUser?.result._id,{
          name:name,
          desc:desc,
        }));
        setEditCreateChanelBtn(false);
        setTimeout(()=>{
          dispatch(login({email:CurrentUser?.result.email}))
        }, 5000);
      }
    }

  return (
    <div className="container_CreateEditChanel">
      <input
        onClick={() => setEditCreateChanelBtn(false)}
        type="submit"
        name="text"
        value={"X"}
        className="ibtn_x"
      />
      <div className="container2_CreateEditChanel">
        <h1>
          {CurrentUser?.result.name ? <>Edit</> : <>Create </>}
          Your Chanel
        </h1>
        <input
          type="text"
          placeholder="Enter Your/Chanel Name"
          className="ibox"
          name="text"
          value={name}
          onChange={(e)=>setName(e.target.value)}
        />
        <textarea
          type="text"
          rows={15}
          placeholder={"Enter Chanel Description"}
          className={"ibox"}
          value={desc}
          onChange={(e)=>setDesc(e.target.value)}
        />
        <input
          type="submit"
          value={"Submit"}
          onClick={handleSubmit}
          className="ibtn"
        />
      </div>
    </div>
  )
}

export default CreateEditChanel
