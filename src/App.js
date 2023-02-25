import './App.css';
import Navbar from './Components/Navbar/Navbar';
import {Route, Routes} from 'react-router-dom';
import News from './Components/News/News';
import Music from './Components/Music/Music';
import Settings from './Components/Settings/Settings';
//import DialogsContainer from './Components/Dialogs/DialogsContainer';
import UsersContainer from './Components/Users/UsersContainer';
import ProfileContainer from './Components/Profile/ProfileContainer';
import HeaderContainer from './Components/Header/HeaderContainer';
import Login from './Components/Login/Login';
import React from 'react';
import {connect} from 'react-redux';
import {setInitial} from './Redax/app-reducer';
import Preloader from './Components/Preloader/Preloader';

const DialogsContainer = React.lazy(() => import('./Components/Dialogs/DialogsContainer'));

class App extends React.Component {
  componentDidMount() {
    this.props.setInitial();
  }

  render() {
    if (!this.props.initial) return <Preloader />;
    return (
      <div className="app-wrapper">
        <HeaderContainer />
        <Navbar />
        <div className="app-wrapper-content">
          <React.Suspense fallback={<Preloader />}>
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
          </React.Suspense>
        </div>
      </div>
    );
  }
}
let msp = state => ({initial: state.app.initial});
export default connect(msp, {setInitial})(App);
