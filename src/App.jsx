import "./App.css";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import HomePage from "./Components/HomePage";
import EditPage from "./Components/EditPage";
import AddProfile from "./Components/AddProfile";
import ProfilePage from "./Components/ProfilePage";
import Teacher from "./Components/Teacher";

function App() {
  return (
    <>
      <div className="App container-fliud">
        <BrowserRouter>
          <header>
            <nav className="navbar navbar-expand-lg bg-body">
              <div className="container px-4 px-lg-5">
                <h className="navbar-brand" href="_blank" id="start">
                  Student Dashboard
                </h>
                <button
                  className="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarNav"
                  aria-controls="navbarNav"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                  <ul className="navbar-nav">
                    <li className="nav-item">
                      <Link to="/profiles" id="homebtn">
                        Home
                      </Link>
                    </li>
                    <li className="nav-item">
                      &nbsp;
                      <Link to="/profiles/add" className="add">
                        {" "}
                        <i
                          className="fa-solid fa-plus"
                          style={{ color: "#acb1b9" }}
                        >
                          &nbsp;
                        </i>
                        Add Student
                      </Link>
                    </li>
                  </ul>
                </div>
                <Link to="/profiles/teacher" id="yourprofile">
                  <button className="btn btn-outline-dark" type="sumit">
                    Your Profile
                  </button>
                </Link>
              </div>
            </nav>
            <Link to="/profiles/edit"></Link>
            &nbsp;
            <Link to="/profiles/profile"></Link>
          </header>
          <Routes>
            <Route index path="/" element={<HomePage />} />
            <Route path="profiles">
              <Route index element={<HomePage />} />
              <Route path="edit" element={<EditPage />} />
              <Route path="add" element={<AddProfile />} />
              <Route path="teacher" element={<Teacher />} />
              <Route path=":profileId" element={<ProfilePage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
