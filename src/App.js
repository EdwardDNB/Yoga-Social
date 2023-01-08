import './App.css';
import Navbar from './Components/Navbar/Navbar';
import {Route, Routes} from 'react-router-dom';
import News from './Components/News/News';
import Music from './Components/Music/Music';
import Settings from './Components/Settings/Settings';
import DialogsContainer from './Components/Dialogs/DialogsContainer';
import UsersContainer from './Components/Users/UsersContainer';
import ProfileContainer from './Components/Profile/ProfileContainer';
import HeaderContainer from './Components/Header/HeaderContainer';
import Login from './Components/Login/Login';

const App = () => {
  return (
    <div className="app-wrapper">
      <HeaderContainer />
      <Navbar />
      <div className="app-wrapper-content">
        <Routes>
          <Route path="profile/" element={<ProfileContainer />} />
          <Route path="/Users/profile/:userId" element={<ProfileContainer />} />
          <Route path="Dialogs" element={<DialogsContainer />} />
          <Route path="News" element={<News />} />
          <Route path="Music" element={<Music />} />
          <Route path="Settings" element={<Settings />} />
          <Route path="Users" element={<UsersContainer />} />
          <Route path="Login" element={<Login />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
