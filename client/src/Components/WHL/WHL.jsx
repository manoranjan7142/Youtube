import React from 'react'
import LeftSidebar from '../LeftSidebar/LeftSidebar'
import WHLVideoList from './WHLVideoList';
import './WHLcss.css'
// import {useDispatch, useSelector} from "react-redux";
import {useDispatch, useSelector} from "react-redux";
import { clearHistory } from '../../actions/History';

// import {clearHistory} from "../../acti"
function WHL({page, videoList}) {
     const CurrentUser =useSelector ((state)=>state?.currentUserReducer);
    const dispatch=useDispatch()
     const handleClearHistory=()=>{
      if(CurrentUser){
        dispatch(clearHistory({
          userId:CurrentUser?.result._id
        }))
      }
     }

  return (
    <div className="container_Pages_App">
      <LeftSidebar />
      <div className="container2_Pages_App">
        <p className="conatiner_whl">
          <div className="box_WHL leftside_whl">
            <b>Your {page} Shown Here </b>
            {
               page==="History"&&
            <div className="clear_History_btn" onClick={()=>handleClearHistory()}>Clear History</div>
            // onClick={()=>handleClearHistory()}
            }
          </div>
          <div className="rightSide_whl">
            <h1>{page}</h1>
            <div className="whl_list">
              <WHLVideoList page={page} 
              videoList={videoList}
              CurrentUser={CurrentUser?.result._id}
              />
            </div>
          </div>
        </p>
      </div>
    </div>
  );
}

export default WHL
