import { configureStore } from "@reduxjs/toolkit";
import {
  allUsersReducer,
  postOfFollowingReducer,
  userProfileReducer,
  userReducer,
} from "./Reducers/User";
import { likeReducer, myPostsReducer, userPostsReducer } from "./Reducers/Post";

const store = configureStore({
  reducer: {
    user: userReducer, //user is a state having userReducer as reducer,and variables loading,user,error,isAuthenticated etc as defined in userReducer
    postOfFollowing: postOfFollowingReducer,
    allUsers: allUsersReducer,
    like: likeReducer, //this state contains (lot)unrelated vars too
    myPosts: myPostsReducer,
    userProfile: userProfileReducer,
    userPosts: userPostsReducer,
  },
});

export default store;
