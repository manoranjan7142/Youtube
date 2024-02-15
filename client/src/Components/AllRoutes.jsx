import React from 'react'
import Home from '../Pages/Home/Home'
import Library from "../Pages/Library/Library";
import YourVideo from "../Pages/YourVideo/YourVideo";
import WatchHistory from "../Pages/WatchHistory/WatchHistory";
import WatchLater from "../Pages/WatchLater/WatchLater";
import {
    Routes,
    Route,
    // Link
  } from "react-router-dom";
import LikedVideo from '../Pages/LikedVideo/LikedVideo';
import VideoPage from '../Pages/VideoPage/VideoPage';
import Chanel from '../Pages/Chanel/Chanel'
import Search from '../Pages/Search/Search';
function AllRoutes({setEditCreateChanelBtn, setVidUploadPage }) {
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/library' element={<Library />} />
      <Route path='/history' element={<WatchHistory />} />
      <Route path='/watchlater' element={<WatchLater />} /> 
      <Route path='/yourvideos' element={<YourVideo />} />
      <Route path='/likedVideo' element={<LikedVideo />} />
      <Route path='/videopage/:vid' element={<VideoPage />} />
      <Route path='/search/:searchQuery' element={<Search />}/>
      <Route path='/chanel/:Cid' element={<Chanel 
      setVidUploadPage={setVidUploadPage}
      setEditCreateChanelBtn={setEditCreateChanelBtn}/>} />
    </Routes>
  )
}

export default AllRoutes
