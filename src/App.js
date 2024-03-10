import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./Components/Admin/Common/Layout";
import Home from "./Components/Admin/Home";
import StudentProfile from "./Components/Admin/StudentProfile";
import RegistrationForm1 from "./Components/Forms/RegistrationForm1";
import Login from "./Components/Login/Login";
import TrailPermit from "./Components/Forms/TrailPermit";

function App() {
  return (
    <Router>
      <Routes>
        <Route index element={<Login />} />
        <Route path="/" element={<Layout />}>
          <Route path="/Home" element={<Home />}></Route>
          <Route path="/studentprofile" element={<StudentProfile />} />
          <Route path="/studentprofile/Form1" element={<RegistrationForm1 />} />
          <Route path="/studentprofile/trail" element={<TrailPermit />} />
          {/*
          <Route path="/Form2" element={<Form2 />} /> */}
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
