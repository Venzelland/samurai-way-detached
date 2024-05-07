import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {Route} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import {addMessage, addPost, AppPropsType, PostType} from "./redux/state";

type ProfilePagePropsType = {
    state: AppPropsType['state']['profilePage'];
    addPost: (postMessage: string) => void;
    posts: Array<PostType>;
}

const App = (props: AppPropsType) => {
    const profilePageProps: ProfilePagePropsType = {
        state: props.state.profilePage,
        addPost: addPost,
        posts: props.state.profilePage.posts
    };

    return (
        <div className='app-wrapper'>
            <Header/>
            <Navbar/>
            <div className="app-wrapper-content">
                <Route
                    path={"/dialogs"}
                    render={() => <Dialogs state={props.state.dialogsPage} addMessage={addMessage} />}/>
                <Route
                    path={"/profile"}
                    render={() => <Profile {...profilePageProps} />}/>
                <Route
                    path={"/news"}
                    render={() => <News/>}/>
                <Route
                    path={"/music"}
                    render={() => <Music/>}/>
                <Route
                    path={"/settings"}
                    render={() => <Settings/>}/>
                <Route
                    path={"/error"}
                    render={() => <div>404 NOT FOUND</div>}/>
            </div>
        </div>
    );
}

export default App;
