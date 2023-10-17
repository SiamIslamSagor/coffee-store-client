import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="bg-base-200 flex justify-around container mx-auto">
      <NavLink
        className="btn text-white hover:text-black duration-700 bg-gray-900"
        to="/"
      >
        Home
      </NavLink>
      <NavLink
        className="btn text-white hover:text-black duration-700 bg-gray-900"
        to="/login"
      >
        Login
      </NavLink>
      <NavLink
        className="btn text-white hover:text-black duration-700 bg-gray-900"
        to="/signUp"
      >
        SignUP
      </NavLink>
      <NavLink
        className="btn text-white hover:text-black duration-700 bg-gray-900"
        to="/users"
      >
        Users
      </NavLink>
      <NavLink
        className="btn text-white hover:text-black duration-700 bg-gray-900"
        to="/addCoffee"
      >
        Add Coffee
      </NavLink>
    </div>
  );
};

export default Header;
