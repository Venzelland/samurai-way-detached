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
import {addMessage, AppPropsType} from "./redux/state";



const App = ( state: AppPropsType) => {

    return (
        <div className='app-wrapper'>
            <Header/>
            <Navbar/>
            <div className="app-wrapper-content">
                <Route
                    path={"/dialogs"}
                    render={() => <Dialogs state={state.state.dialogsPage} addMessage={addMessage} />}/>
                <Route
                    path={"/profile"}
                    render={() => <Profile state={state.state} addPost={state.addPost}/>}/>
                <Route
                    path={"/news"}
                    render={() => <News/>}/>
                <Route
                    path={"/music"}
                    render={() => <Music/>}/>
                <Route
                    path={"/settings"}
                    render={() => <Settings/>}/>
            </div>
        </div>
    );
}
export default App;
