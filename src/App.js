import './App.css';
import Header from './Components/Header/Header';
import Navbar from './Components/Navbar/Navbar';
import Profile from './Components/Profile/Profile';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Dialogs from "./Components/Dialogs/Dialogs";
import News from "./Components/News/News";
import Music from "./Components/Music/Music";
import Settings from "./Components/Settings/Settings";


const App = () => {
    return (<BrowserRouter>
            <div className='app-wraper'>
                <Header/>
                <Navbar/>
                <div className='app-wraper-content'>
                    <Routes>
                        <Route path="profile" element={<Profile/>}/>
                        <Route path="Dialogs" element={<Dialogs/>}/>
                        <Route path="News" element={<News/>}/>
                        <Route path="Music" element={<Music/>}/>
                        <Route path="Settings" element={<Settings/>}/>

                    </Routes>

                </div>

            </div>
        </BrowserRouter>
    );

}

export default App;
