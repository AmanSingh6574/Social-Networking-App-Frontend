

const BASE_URL = "https://social-networking-app-backend.onrender.com/api/v1"

export const userendpoints = {
    SIGNUP_API : BASE_URL + "/auth/signup" , 
    LOGIN_API : BASE_URL + "/auth/login" , 
    USER_PROFILE_API : BASE_URL + "/profile/getuserProfile" ,
    USER_UPDATE_API : BASE_URL + "/profile/profileUpdate"
}

export const postendpoint = {
    POST_API : BASE_URL + "/social/post" ,
    GET_ALL_POST_API : BASE_URL + "/social/allpost" ,
    GET_VOTE_API : BASE_URL + "/social/vote" 
    ,DELETE_POST_API : BASE_URL + "/social/delete/"
}