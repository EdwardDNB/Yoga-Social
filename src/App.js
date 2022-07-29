import './App.css';
import Header from './Components/Header/Header';
import Navbar from './Components/Navbar/Navbar';
import Profile from './Components/Profile/Profile';
import Dialogs from "./Components/Dialogs/Dialogs";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import News from "./Components/News/News";
import Music from "./Components/Music/Music";
import Settings from "./Components/Settings/Settings";


const App = (props) => {

    return (<BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Routes>
                        <Route path="dialogs" element={<Dialogs MessageData={props.MessageData} DialogsData={props.DialogsData}/>}/>
                        <Route path="Profile" element={<Profile PostData={props.PostData}/>}/>
                        <Route path="News" element={<News/>}/>
                        <Route path="Music" element={<Music/>}/>
                        <Route path="Settings" element={<Settings/>}/>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    )

}

export default App;
