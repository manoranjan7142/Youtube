import React from 'react'
// import vid from '../../Components/Video/vid.mp4'
import ShowVideo from '../ShowVideo/ShowVideo';
import { useSelector } from 'react-redux';
function ShowVideoList({videoId}) {
  const vids=useSelector(s=>s.videoReducer)
   console.log(vids.data)

  //date - 26-01-2024  comment vids ,use selector, 4,6,7 uncomment 10-upto
    // const vids = [
    //     {
    //       _id: 1,
    //       video_src: vid,
    //       Chanel: "",
    //       title: "video 1",
    //       uploder: "abc",
    //       description: "description of  video 1",
    //     },
    //     {
    //       _id: 2,
    //       video_src: vid,
    //       Chanel: "cdd",
    //       title: "video 2",
    //       description: "description of  video 2",
    //     },
    //     {
    //       _id: 3,
    //       video_src: vid,
    //       Chanel: "add",
    //       title: "video 3",
    //       description: "description of  video 3",
    //     },
    //     {
    //       _id: 4,
    //       video_src: vid,
    //       Chanel: "add",
    //       title: "video 3",
    //       description: "description of  video 3",
    //     },
    //   ];
  return (
    <div className='Container_ShowVideoGrid'>
        {
            vids?.data?.filter(q=>q._id===videoId).map(vi=>
                {
                    return (
                        <div key={vi._id} className="video_box_app">
                            <ShowVideo  vid={vi}/>
                            
                        </div>
                    )
                })
        }
    </div>
  )
}

export default ShowVideoList
