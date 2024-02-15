
import React from 'react';

import ShowVideoList from '../ShowVideoList/ShowVideoList';

function WHLVideoList({page,CurrentUser, videoList}) {
  // console.log(videoList)
  // console.log(CurrentUser)
  
  return (
    <>
    { CurrentUser?(<>
      {
        videoList?.data?.filter(q=>q?.Viewer === CurrentUser).reverse().map(m=>{
          return (
            <>
              <ShowVideoList videoId={m?.videoId} key={m?._Id}/>
            </>
          )

        })
      } 
        </>) :(<> 
          <h2 style={{color:"white"}}>Plz Login To Watch Your {page}</h2>
        </>)
      
    }
    </>
  )
}

export default WHLVideoList