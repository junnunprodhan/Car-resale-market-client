import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import logo1 from "../../assets/logo.png";
import { AuthContext } from "../../Contexts/AuthProvider/AuthProvider";
const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, logout } = useContext(AuthContext);
  const handleLogOut = () => {
    logout();
  };
  return (
    <div className="bg-gray-900">
      <div className="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
        <div className="relative flex items-center justify-between">
          <a
            href="/"
            aria-label="car resale market"
            title="Car resale market"
            className="inline-flex items-center"
          >
            <img className="w-12" src={logo1} alt="" />
            <span className="ml-2 text-xl font-bold tracking-wide text-gray-100 uppercase">
              Car Resale Market
            </span>
          </a>
          <ul className="flex items-center hidden space-x-8 lg:flex">
            <li>
              <Link
                to="/"
                aria-label="Our product"
                title="Home"
                className="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400"
              >
                Home
              </Link>
            </li>

            <li>
              <Link
                to="/blog"
                aria-label="Product pricing"
                title="Blog"
                className="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400"
              >
                Blog
              </Link>
            </li>
          </ul>
          <ul className="flex items-center hidden space-x-8 lg:flex">
            {user?.uid ? (
              <>
                <li>
                  <Link
                    to="/dashBoard"
                    aria-label="Product pricing"
                    title="DashBoard"
                    className="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400"
                  >
                    DashBoard
                  </Link>
                </li>
                <li>
                  <div className="flex justify-center items-center">
                    <div className="avatar">
                      <div className="w-10 rounded-full">
                        {
                          user?.photoURL?
                          <><img src={user.photoURL} alt="" /></> :
                          <><img src="https://t4.ftcdn.net/jpg/00/65/77/27/360_F_65772719_A1UV5kLi5nCEWI0BNLLiFaBPEkUbv5Fv.jpg" alt="" /></>
                        }
                      </div>
                    </div>
                    <h4 className="text-white">{user.displayName}</h4>
                  </div>
                </li>
                <li>
                  <div
                    onClick={handleLogOut}
                    to="/login"
                    className="inline-flex items-center justify-center h-12 px-6 font-medium rounded  bg-rose-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto"
                    aria-label="Login"
                    title="Login"
                  >
                    Log Out
                  </div>
                </li>
              </>
            ) : (
              <>
                {" "}
                <li>
                  <Link
                    to="/register"
                    className="inline-flex items-center justify-center h-12 px-6 font-medium rounded  bg-rose-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto"
                    aria-label="Sign up"
                    title="Sign up"
                  >
                    Register
                  </Link>
                </li>
                <li>
                  <Link
                    to="/login"
                    className="inline-flex items-center justify-center h-12 px-6 font-medium rounded  bg-rose-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto"
                    aria-label="Login"
                    title="Login"
                  >
                    Login
                  </Link>
                </li>
              </>
            )}
          </ul>
          <div className="lg:hidden">
            <button
              aria-label="Open Menu"
              title="Open Menu"
              className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline"
              onClick={() => setIsMenuOpen(true)}
            >
              <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
                />
                <path
                  fill="currentColor"
                  d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
                />
                <path
                  fill="currentColor"
                  d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
                />
              </svg>
            </button>
            {isMenuOpen && (
              <div className="absolute top-0 z-10 left-0 w-full">
                <div className="p-5 bg-white border rounded shadow-sm">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <a
                        href="/"
                        aria-label="Company"
                        title="Company"
                        className="inline-flex items-center"
                      >
                        <img className="h-6 w-6" src={logo1} alt="" />
                        <span className="ml-2 font-bold tracking-wide text-gray-800 uppercase">
                          Car resale market
                        </span>
                      </a>
                    </div>
                    <div>
                      <button
                        aria-label="Close Menu"
                        title="Close Menu"
                        className="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                          <path
                            fill="currentColor"
                            d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <nav>
                    <ul className="space-y-4">
                      <li>
                        <Link
                          href="/"
                          aria-label="Our product"
                          title="Our product"
                          className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                        >
                          Home
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/blog"
                          aria-label="Product pricing"
                          title="Product pricing"
                          className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                        >
                          Blog
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/dashBoard"
                          aria-label="Product pricing"
                          title="DashBoard"
                          className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                        >
                          DashBoard
                        </Link>
                      </li>

                      <li>
                        <Link
                          to="/register"
                          className="inline-flex items-center justify-center w-full h-12 rounded bg-rose-600 px-12 py-3 text-sm font-medium text-white shadow rounded hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto"
                          aria-label="Sign up"
                          title="Sign up"
                        >
                          Register
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/login"
                          className="inline-flex items-center justify-center w-full h-12 rounded bg-rose-600 px-12 py-3 text-sm font-medium text-white shadow rounded hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto"
                          aria-label="Sign up"
                          title="Sign up"
                        >
                          Login
                        </Link>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
