import logo from "./logo.svg";
import "./App.css";
import Sidebar from "./components/sideBar/index";
import WorkOrder from "./pages/WorkOrder";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Dashboard from "./pages/Dashboard/Dashboard";
function App() {
  return (
    <div className="App">
      <Sidebar />
      <div className="main-content-wrapper">
        <Router>
          <Routes>
            <Route exact path="/" element={<WorkOrder />}></Route>
            {/* <Route exact path="/work-order" element={<WorkOrder/>}></Route> */}
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
