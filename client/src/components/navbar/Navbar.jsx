import "./navbar.css";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";


const Navbar = () => {
  const { user } = useContext(AuthContext);
  const auth= localStorage.getItem('user');
  const navigate= useNavigate();
  const logout =()=>{
    localStorage.clear();
    navigate("/register");
  }

  return (
    <div className="navbar">
      <div className="navContainer">
        <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
          <span className="logo">Hotelya</span>
        </Link>
        {user ? user.username : (
          <div className="navItems">
            <Link to ="/register" >
            <button className="navButton">

            Register
            </button>
            </Link>
            <Link to ="/login">
            <button className="navButton">

            Login
            </button>
            </Link>
          </div>
        )}
        <div>{auth? <Link onClick={logout} to="/login">Logout</Link>:
        <Link to="/login">Register</Link> }
        </div>
      </div>
    </div>
  );
};

export default Navbar;