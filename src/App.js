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




const App = () => {

    return (
        <div className='app-wrapper'>
            <Header/>
            <Navbar/>
            <div className='app-wrapper-content'>
                <Routes>
                    <Route path="dialogs" element={<DialogsContainer />}/>
                    <Route path="Profile"  element={<ProfileContainer />}/>
                    <Route path="Users/profile"  element={<ProfileContainer />}/>
                    <Route path="News" element={<News/>}/>
                    <Route path="Music" element={<Music/>}/>
                    <Route path="Settings" element={<Settings/>}/>
                    <Route path="Users" element={<UsersContainer/>}/>
                </Routes>
            </div>
        </div>

    )

}

export default App;
