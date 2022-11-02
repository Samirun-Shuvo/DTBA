import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Documents = () => {
    return (
        <div className="whiteBackground">
        <ul className="flex bg-[#d8c2c2]  rounded-4">
        <Link to="/dashboard/document">
            <li className="p-2 border">
              <button>
                <i className="fa-solid fa-list p-1"></i> Documents List
              </button>
            </li>
          </Link>
          <Link to="/dashboard/document/add">
            <li className="p-2 border">
              <button>
                <i className="fa-solid fa-address-book p-1"></i> Add Documents
              </button>
            </li>
          </Link>
        </ul>
        <Outlet></Outlet>
      </div>
    );
};

export default Documents;