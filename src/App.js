import './App.css';
import Header from './Components/Header/Header';
import Navbar from './Components/Navbar/Navbar';
import {Route, Routes} from "react-router-dom";
import News from "./Components/News/News";
import Music from "./Components/Music/Music";
import Settings from "./Components/Settings/Settings";
import DialogsContainer from "./Components/Dialogs/DialogsContainer";
import UsersContainer from "./Components/Users/UsersConteiner";
import ProfileContainer from "./Components/Profile/ProfileContainer";
import HeaderContainer from "./Components/Header/HeaderContainer";




const App = () => {

    return (
        <div className='app-wrapper'>
            <HeaderContainer/>
            <Navbar/>
            <div className='app-wrapper-content'>
                <Routes>
                    <Route path="dialogs" element={<DialogsContainer />}/>
                    <Route path="profile/:userId"  element={<ProfileContainer />}/>
                    <Route path="profile/" element={<ProfileContainer />}/>
                    <Route path="pews" element={<News/>}/>
                    <Route path="music" element={<Music/>}/>
                    <Route path="settings" element={<Settings/>}/>
                    <Route path="users" element={<UsersContainer/>}/>
                </Routes>
            </div>
        </div>

    )

}

export default App;
