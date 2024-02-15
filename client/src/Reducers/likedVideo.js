const likedVideoReducer =(state={data:null},action)=>{
    switch(action.type){
        case 'POST_LIKED_VIDEO':
            return{...state,data: action?.data};
        case 'FETCH_ALL_LIKED_VIDEOS':
                return {...state,data:action.payload};
        default:
            return state;
    }
}

export default likedVideoReducer