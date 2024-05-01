import React from 'react';
import s from './Myposts.module.css';
import Post from "./Post/Post";
import {PostType} from "../../../redux/state";

type MyPostsPropsType = {
    posts: Array<PostType>;
    addPost?: (postMessage: string) => void;
}

const MyPosts = (props: MyPostsPropsType) => {


    let postsElements = props.posts.map(p => <Post message={p.message} like={p.likesCount}/>)

    let newPostElement = React.createRef<HTMLTextAreaElement>();

    const addPost = () => {
        if (newPostElement.current) {
            if (props.addPost) {
                props.addPost(newPostElement.current.value);
            }
            newPostElement.current.value = '';
        }
    };

    return <div className={s.posts}>
        <div>
            <h3>My post</h3>
        </div>
        <div>
            <textarea ref={newPostElement}></textarea>
        </div>
        <div>
            <button onClick={addPost}>add post</button>
        </div>
        <div className={s.posts}>
            {postsElements}
        </div>
    </div>
}

export default MyPosts

