import React, { useEffect } from "react";
import { useState } from 'react';
import './LikeWatchLaterSaveBtns.css';
import {BsThreeDots} from 'react-icons/bs';
import {AiFillDislike, AiOutlineDislike, AiFillLike, AiOutlineLike} from 'react-icons/ai';
import {MdPlaylistAddCheck} from 'react-icons/md';
import { RiPlayListAddFill, RiShareForwardLine} from 'react-icons/ri';
import {RiHeartAddFill,} from 'react-icons/ri';
import { useDispatch, useSelector } from "react-redux";
import { likeVideo } from "../../actions/video";
import { addToLikedVideo, deletelikedVideo } from "../../actions/likedVideo";
import { addTowatchLater, deletewatchLater } from "../../actions/watchLater";
function LikeWatchLaterSaveBtns({vv, vid}) {
    const CurrentUser = useSelector((state)=> state?.currentUserReducer);
    const dispatch=useDispatch()
    const [SaveVideo, setSaveVideo] = useState(false);
    const [DislikeBtn, setDislikeBtn] = useState(false);
    const [LikeBtn, setLikeBtn]= useState(false)

    const likeVideoList = useSelector((state)=>state.likedVideoReducer);
    const watchLaterList= useSelector(state=>state.watchLaterReducer)
    // console.log(likeVideoList)
    console.log(watchLaterList)
    // useEffect(()=>{
    //   likeVideoList?.data.filter(q =>q?.videoId === vid && q?.Viewer === CurrentUser?.result._id)
    //   .map((m) => setLikeBtn(true))
    //   watchLaterList?.data.filter(q=>q?.videoId === vid && q?.Viewer === CurrentUser?.result._id)
    //     .map(m=>setSaveVideo(true))
    // },[CurrentUser?.result._id, likeVideoList?.data, vid, watchLaterList?.data]);
    useEffect(() => {
      if (Array.isArray(likeVideoList?.data)) {
        likeVideoList.data
          .filter(q => q?.videoId === vid && q?.Viewer === CurrentUser?.result._id)
          .map((m) => setLikeBtn(true));
      }
    
      if (Array.isArray(watchLaterList?.data)) {
        watchLaterList.data
          .filter(q => q?.videoId === vid && q?.Viewer === CurrentUser?.result._id)
          .map((m) => setSaveVideo(true));
      }
    }, [CurrentUser?.result._id, likeVideoList?.data, vid, watchLaterList?.data]);
    
    const togglelSavedVideo=()=>{
        if(CurrentUser){
          if(SaveVideo){
            setSaveVideo(false);
              dispatch(deletewatchLater({
                videoId: vid,
                Viewer:CurrentUser?.result._id,
            })
          );

          }else{
            setSaveVideo(true);
            dispatch(addTowatchLater({
              videoId: vid,
              Viewer: CurrentUser?.result._id,
            }))
          }
        }else{
          alert("please login to save the video")
        }
    }
    const toggleLikeBtn=(e,lk)=>{
      if(CurrentUser){
        if(LikeBtn){
          setLikeBtn(false);
          dispatch(
            likeVideo({
              id: vid,
              Like: lk - 1,  
            })
            );
            dispatch(deletelikedVideo({
              videoId: vid,
               Viewer:CurrentUser?.result._id,
          }))

        }else{
          setLikeBtn(true);
          dispatch(
              likeVideo({
                id: vid,
                Like: lk + 1,  
              })
            );
              dispatch(addToLikedVideo({
                videoId: vid,
                Viewer: CurrentUser?.result._id,
              })
            );
          //when we click like button set Dislike button automatically false 
          setDislikeBtn(false);
        }
      }else{
        alert("Please Login To Like This Video ")
      }
    };
    const toggleDislikeBtn=(e,lk)=>{
      if(CurrentUser){
        if(DislikeBtn){
          setDislikeBtn(false);
        }else{
          setDislikeBtn(true);
          if(LikeBtn){
            dispatch(
              likeVideo({
                id: vid,
                Like: lk - 1,  
              })
              );
          }
          //when we click dislike button set like button automatically false 
          setLikeBtn(false);
        }
      }else{
        alert("please login to give dislike")
      }
    }
  return (
    <div className='btns_cont_videoPage'>
      <div className='btn_VideoPage'>
            <BsThreeDots />
      </div>
      <div className="btn_VideoPage">
        <div className="like_videoPage" onClick={(e)=>toggleLikeBtn(e,vv.Like)}>
            {LikeBtn ?(
            <>
                <AiFillLike size={22} className="btns_videoPage"/>
            </>
            ):(
            <>
                <AiOutlineLike size={22} className="btns_videoPage"/>
            </>
            )}
            {/* Like actvation here passs the vv , vid  */}
            <b>{vv?.Like}</b>
        </div>
        <div className="like_videoPage" onClick={(e)=>toggleDislikeBtn(e,vv.Like)}>
            {DislikeBtn ?(
            <>
                <AiFillDislike size={22} className="btns_videoPage"/>
                
            </>
            ):(
            <>
                <AiOutlineDislike size={22} className="btns_videoPage"/>
                
            </>
            )}
            <b>DISLIKE</b>
        </div>
        <div className="like_videoPage" onClick={()=>togglelSavedVideo()}>
            {SaveVideo ?(
            <>
               <MdPlaylistAddCheck size={22} className="btns_videoPage"/>
                <b>Saved</b>
            </>
            ):(
            <>
               <RiPlayListAddFill size={22} className="btns_videoPage"/>
               <b>Save</b> 
            </>
            )}
        </div>
        <div className="like_videoPage">
            <>
                <RiHeartAddFill size={22} className="btns_videoPage"/>
                <b>Thanks</b>
            </>
        </div>
        <div className="like_videoPage">
            <>
                <RiShareForwardLine size={22} className="btns_videoPage"/>
                <b>Share</b>
            </>
        </div>
        
      </div>
    </div>
  )
}

export default LikeWatchLaterSaveBtns
