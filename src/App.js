import './App.css';
import Login from './component/LoginPage/Login';
import Signup from './component/Registration/RegistrationForm';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ForgotPassword from './component/LoginPage/ForgotPassword';
import NotesHome from './component/Notes/HomeNotes';
import ResetPassword from './component/LoginPage/ResetPassword';
import NotesPage from './component/Pages/NotesPage';
import ArchivePage from './component/Pages/ArchivePage'
import Trashpage from './component/Pages/Trashpage';





function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/registration" element={<Signup />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/reset-password" element={<ResetPassword />} />

          <Route path='/notes-home' element={<NotesHome />} />
          <Route path='/notes-home' element={<NotesPage />} />
          <Route path='/archivePage' element={<ArchivePage />} />
          <Route path='/trashPage' element={<Trashpage />} />


        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
