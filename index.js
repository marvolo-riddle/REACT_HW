
// 1 фрагмент
// npm install react-router-dom
// yarn add react-router-dom


// 2 фрагмент
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

ReactDOM.render(
    <BrowserRouter>
      <App />
    </BrowserRouter>,
    document.getElementById('root')
);


// 3 фрагмент
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
  );
}

export default App;


// 4 фрагмент
<Route path="/user/:id" element={<UserProfile />} />

// 5 фрагмент
import { useParams } from 'react-router-dom';

function UserProfile() {
  const { id } = useParams();

  return (
      <div>
        <h2>Профіль користувача {id}</h2>
        {/* Тут можна завантажити та відобразити дані користувача з цим id*/}
      </div>
  );
}

export default UserProfile;

// 6 фрагмент
<Route path="/user/:id" element={<UserLayout />}>
  <Route path="info" element={<UserInfo />} />
  <Route path="settings" element={<UserSettings />} />
</Route>

// 7 фрагмент
import { useNavigate } from 'react-router-dom';

const navigate = useNavigate();
navigate(`/user/${id}/info`);

// 8 фрагмент
<Link to={`/user/${id}/info`}>Інформація</Link>

// 9 фрагмент
navigate(`/user/${id}/info`, { state: { fromDashboard: true } });

// 10 фрагмент
const location = useLocation();
console.log(location.state);
