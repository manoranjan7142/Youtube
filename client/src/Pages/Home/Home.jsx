import React from 'react'
import './Home.css'
import LeftSidebar from '../../Components/LeftSidebar/LeftSidebar'
import ShowVideoGrid from '../../Components/ShowVideoGrid/ShowVideoGrid'
// import vid from '../../Components/Video/vid.mp4'
import { useSelector } from 'react-redux'
function Home() {

  const vids=useSelector(state=>state.videoReducer)?.data?.filter(q=>q).reverse();
  console.log(vids);
 // const videosfile=useSelector(state=>state.videoReducer);
  // console.log(videosfile)
  // const vids = [
  //   {
  //     _id: 1,
  //     video_src: vid,
  //     Chanel: "",
  //     title: "video 1",
  //     uploder: "abc",
  //     description: "description of  video 1",
  //   },
  //   {
  //     _id: 2,
  //     video_src: vid,
  //     Chanel: "cdd",
  //     title: "video 2",
  //     description: "description of  video 2",
  //   },
  //   {
  //     _id: 3,
  //     video_src: vid,
  //     Chanel: "add",
  //     title: "video 3",
  //     description: "description of  video 3",
  //   },
  //   {
  //     _id: 4,
  //     video_src: vid,
  //     Chanel: "add",
  //     title: "video 3",
  //     description: "description of  video 3",
  //   },
  // ];
  const NavList=[
    "All",
    "Python",
    "Java",
    "C++",
    "Science",
    "Animation",
    "Gaming",
    "Comedy",
    "NewMovie",
    "News",
    "NewRelease",
    "Hacking",
    "Cloud",
    "MongoDB"

  ];

  const redirectToLink = () => {
    window.open('https://manoj-treasures.company.site/', '_blank');
  };
  return (
    <div className='container_Pages_App'>
        <LeftSidebar/>
      <div className="container2_Pages_App">
      <div className="navigation_Home">
      
          {
            NavList.map(m=>{
              return(
              <p key={m} className='btn_nav_home'>
                {m}
              </p>)
            })
          }
          <input type="button" className='view_product_btn' value="Shop Now"  onClick={redirectToLink} />
        </div>
        {/* <h6 className='developed_by'>It was Develop by Manoj</h6> */}
        <ShowVideoGrid vids={vids}/>
        <div >
        <input type="button" className='developed_by' value="Developed By: Manoranjan Dalai"/>
        <br />
        
        </div>
      </div>
      
    </div>
    
  )
}

export default Home
