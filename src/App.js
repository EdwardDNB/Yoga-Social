import './App.css';
import Header from './Components/Header/Header';
import Navbar from './Components/Navbar/Navbar';
import Profile from './Components/Profile/Profile';
import {Route, Routes} from 'react-router-dom';
import News from './Components/News/News';
import Music from './Components/Music/Music';
import Settings from './Components/Settings/Settings';
import DialogsContainer from './Components/Dialogs/DialogsContainer';
import UsersContainer from './Components/Users/UsersContainer';
import ProfileContainer from './Components/Profile/ProfileContainer';

const App = () => {
  return (
    <div className="app-wrapper">
      <Header />
      <Navbar />
      <div className="app-wrapper-content">
        <Routes>
          <Route path="Profile" element={<ProfileContainer />} />
          <Route path="Dialogs" element={<DialogsContainer />} />
          <Route path="News" element={<News />} />
          <Route path="Music" element={<Music />} />
          <Route path="Settings" element={<Settings />} />
          <Route path="Users" element={<UsersContainer />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
