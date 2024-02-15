import React, { useState } from 'react'
import './comments.css'
import { useDispatch, useSelector } from 'react-redux';
import { deleteComment, editComment } from '../../actions/comments';
import moment from 'moment';
function DisplayComments({cId, commentBody,userId,commentOn, userCommented}) {
    const [Edit, setEdit]= useState(false);
    const [cmtBdy, setcmtBdy]= useState(" ");
    const [cmtId, setcmtId]= useState(" ");
  const CurrentUser = useSelector((state) => state?.currentUserReducer);

    const handleEdit=(ctId,ctBdy)=>{
        setEdit(true);
        setcmtId(ctId);
        setcmtBdy(ctBdy);
    }

    const dispatch=useDispatch();
    const handelOnSubmit =(e)=>{
        e.preventDefault();
        if(!cmtBdy){
            alert("Type your Comment .. ")
        }else{
            dispatch(editComment({
                id:cmtId,
                commentBody:cmtBdy
            }))
            setcmtBdy("")
        }
        setEdit(false);
    };
    const handleDel=(id)=>{
         dispatch(deleteComment(id))
    }  
  return (
   <>
   {
    Edit ? (
    <>
        <form className='comments_sub_form_comments' 
        action=""
        onSubmit={handelOnSubmit}
        >
            <input 
            type="text" 
            onChange={(e) =>setcmtBdy(e.target.value)}
            className='comment_ibox' 
            placeholder='Edit comment....'
            value={cmtBdy} 
            />
            <input 
            type="submit" 
            value="Change" 
            className='comment_add_btn_comments'/>
        </form> 
    </>
    ):(
        <p className='comment_body'>{commentBody}</p>
    )}
    
        <p className='usercommented'>{userCommented} commented {moment(commentOn).fromNow()}</p>
        {
            CurrentUser?.result._id === userId &&(
                <p className='EditDel_DisplayCommendt'>
                <i onClick={()=>handleEdit(cId,commentBody)}>Edit</i>
                <i onClick={()=>handleDel(cId)}>Delete</i> 
            </p>
            )
        }
       
   </>
  );
}

export default DisplayComments
