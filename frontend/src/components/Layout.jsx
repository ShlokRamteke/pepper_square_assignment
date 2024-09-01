import React from "react";
import { Link } from "react-router-dom";

const MainLayout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center">
            <img src="/logo.png" alt="DBTR Logo" className="h-12 w-12 mr-4" />
            <nav>
              <ul className="flex space-x-4">
                <li>
                  <Link to="/" className="text-gray-700 hover:text-gray-900">
                    The School
                  </Link>
                </li>
                <li>
                  <Link
                    to="/academics"
                    className="text-gray-700 hover:text-gray-900"
                  >
                    Academics
                  </Link>
                </li>
                <li>
                  <Link
                    to="/life"
                    className="text-gray-700 hover:text-gray-900"
                  >
                    Life @ DBTR
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact"
                    className="text-gray-700 hover:text-gray-900"
                  >
                    Contact us
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
          <div className="flex items-center space-x-4">
            <Link
              to="/csr"
              className="border border-gray-300 rounded px-4 py-2 text-gray-700 hover:bg-gray-100"
            >
              CSR
            </Link>
            <Link
              to="/donate"
              className="bg-red-500 text-white rounded px-4 py-2 hover:bg-red-600"
            >
              Donate ❤️
            </Link>
          </div>
        </div>
      </header>

      <main className="flex-grow">{children}</main>

      <footer className="bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <img src="/logo.png" alt="DBTR Logo" className="h-16 w-16 mr-4" />
              <div>
                <h3 className="font-bold text-lg">
                  DBTR National Higher Secondary School
                </h3>
                <p className="text-sm text-gray-600">
                  Established in 1901, DBTR is situated in the temple town of
                  Mayiladuthurai.
                </p>
              </div>
            </div>
            <div>
              <h4 className="font-bold mb-2">QUICK LINKS</h4>
              <ul className="text-sm">
                <li>
                  <Link
                    to="/admissions"
                    className="text-gray-600 hover:text-gray-900"
                  >
                    Admissions
                  </Link>
                </li>
                <li>
                  <Link
                    to="/alumni"
                    className="text-gray-600 hover:text-gray-900"
                  >
                    Alumni association
                  </Link>
                </li>
                <li>
                  <Link
                    to="/donate"
                    className="text-gray-600 hover:text-gray-900"
                  >
                    Donate
                  </Link>
                </li>
                <li>
                  <Link
                    to="/events"
                    className="text-gray-600 hover:text-gray-900"
                  >
                    Events
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-2">CONTACT</h4>
              <p className="text-sm text-gray-600">
                DBTR NHS,
                <br />
                Mahadhanar Street,
                <br />
                Koranattu Salai,
                <br />
                Mayiladuthurai,
                <br />
                Tamilnadu - 609001
              </p>
              <p className="text-sm text-gray-600 mt-2">+91.436.422.3272</p>
              <p className="text-sm text-gray-600">
                contact@nationalhighschool.in
              </p>
            </div>
            <div>
              <p className="text-sm text-gray-600 mb-2">
                Big or small, you can make an impact.
              </p>
              <Link
                to="/donate"
                className="bg-red-500 text-white rounded px-4 py-2 hover:bg-red-600"
              >
                Donate ❤️
              </Link>
            </div>
          </div>
          <div className="mt-8 text-center text-sm text-gray-600">
            <p>© DBTR 2023, All Rights Reserved | Sitemap</p>
            <p>Designed by PEPPER SQUARE</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default MainLayout;
