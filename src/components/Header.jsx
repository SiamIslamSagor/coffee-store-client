import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/login">Login</NavLink>
      <NavLink to="/signUp">SignUP</NavLink>
      <NavLink to="/users">Users</NavLink>
      <NavLink to="/addCoffee">Add Coffee</NavLink>
    </div>
  );
};

export default Header;
