import './App.css';
import Navbar from './Components/Navbar/Navbar';
import {Route, Routes} from "react-router-dom";
import News from "./Components/News/News";
import Music from "./Components/Music/Music";
import Settings from "./Components/Settings/Settings";
import DialogsContainer from "./Components/Dialogs/DialogsContainer";
import UsersContainer from "./Components/Users/UsersConteiner";
import ProfileContainer from "./Components/Profile/ProfileContainer";
import HeaderContainer from "./Components/Header/HeaderContainer";
import Login from "./Components/Login/Login";
import React from "react";
import {connect} from "react-redux";
import {compose} from "redux";
import {setInitial} from "./Components/Redux/appReduser";
import Preloader from "./Common/Loader";


class App extends React.Component {
    componentDidMount() {
        this.props.setInitial()
    }

    render() {
        if (!this.props.app) return <Preloader/>
        else return (
            <div className='app-wrapper'>
                <HeaderContainer/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Routes>
                        <Route path="dialogs" element={<DialogsContainer/>}/>
                        <Route path="profile/:userId" element={<ProfileContainer/>}/>
                        <Route path="profile/" element={<ProfileContainer/>}/>
                        <Route path="pews" element={<News/>}/>
                        <Route path="music" element={<Music/>}/>
                        <Route path="settings" element={<Settings/>}/>
                        <Route path="users" element={<UsersContainer/>}/>
                        <Route path="login" element={<Login/>}/>
                    </Routes>
                </div>
            </div>

        )

    }
}

let msp = (state) => ({app: state.app.initial})
export default compose(
    connect(msp, {setInitial})
)
(App)

