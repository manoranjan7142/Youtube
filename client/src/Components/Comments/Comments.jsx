import React, { useState } from 'react'
import './comments.css'
import DisplayComments from './DisplayComments';
import { useDispatch, useSelector } from 'react-redux';
import { postComment } from '../../actions/comments';
function Comments({videoId}) {
  const [commentText, setCommentText]= useState(" ");


  const CurrentUser = useSelector((state) => state?.currentUserReducer);
  const commentsList = useSelector(s=>s.commentReducer)
//   const commentList=[
//   {
//     _id:"1",
//     commentBody:"hello",
//     userCommented: "xyz",
//   },
//   {
//     _id:"2",
//   commentBody:"hiii bro",
//     userCommented: "xyz",
//   },
// ];

  const dispatch=useDispatch()
  const handelOnSubmit=(e)=>{
  e.preventDefault();
    if(CurrentUser){
      if(!commentText){
        alert("Please Type your comment !")
      }else{
        dispatch(postComment({
          videoId:videoId,
          userId:CurrentUser?.result._id,
          commentBody:commentText,
          userCommented:CurrentUser?.result.name,

        })
        );
        setCommentText("");
      }
    }else{
      alert("Please login to post your comment")
    }
  };
  return (
    <>
      <form className='comments_sub_form_comments' 
      action=""
      onSubmit={handelOnSubmit}
      >
        <input 
        type="text" 
        onChange={(e)=>setCommentText(e.target.value)}
        className='comment_ibox' 
        value={commentText}
        placeholder='add comment....' />
        <input type="submit" value="add" className='comment_add_btn_comments'/>
      </form>
      <div className="display_comment_container">
        {
          commentsList?.data?.filter(q=>videoId === q?.videoId).reverse().map(m=>{
            return(
              <DisplayComments
                cId={m._id}
                userId={m.userId}
                commentOn={m.commentOn}
                commentBody={m.commentBody}
                usercommented={m.userCommented}
              />
            )
          })
        }
        
      </div>
    </>
  )
}

export default Comments
