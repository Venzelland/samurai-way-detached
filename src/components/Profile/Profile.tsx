import React from 'react';
import MyPosts from "./Myposts/Myposts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {AppPropsType} from "../../redux/state";


const Profile = (props: AppPropsType) => {
    return <div>
        <ProfileInfo/>
        <MyPosts posts={props.state.profilePage.posts} addPost={props.addPost}/>
    </div>
}

export default Profile
