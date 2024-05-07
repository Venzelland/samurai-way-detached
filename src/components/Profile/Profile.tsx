import React from 'react';
import MyPosts from "./Myposts/Myposts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {addPost, ProfilePageType} from "../../redux/state";


const Profile = (props: ProfilePageType) => {
    return <div>
        <ProfileInfo/>
        <MyPosts posts={props.posts} addPost={addPost}/>
    </div>
}

export default Profile
