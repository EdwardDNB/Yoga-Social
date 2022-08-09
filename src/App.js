import './App.css';
import Header from './Components/Header/Header';
import Navbar from './Components/Navbar/Navbar';
import Profile from './Components/Profile/Profile';
import Dialogs from "./Components/Dialogs/Dialogs";
import {Route, Routes} from "react-router-dom";
import News from "./Components/News/News";
import Music from "./Components/Music/Music";
import Settings from "./Components/Settings/Settings";




const App = (props) => {

    return (
        <div className='app-wrapper'>
            <Header/>
            <Navbar/>
            <div className='app-wrapper-content'>
                <Routes>
                    <Route path="dialogs" element={<Dialogs state={props.state.DialogsPage}/>}/>
                    <Route path="Profile" element={<Profile ProfilePage={props.state.ProfilePage} dispatch={props.dispatch}/>}/>
                    <Route path="News" element={<News/>}/>
                    <Route path="Music" element={<Music/>}/>
                    <Route path="Settings" element={<Settings/>}/>
                </Routes>
            </div>
        </div>

    )

}

export default App;
