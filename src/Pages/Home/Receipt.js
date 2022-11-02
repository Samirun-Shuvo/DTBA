import React from 'react';
import { Link } from 'react-router-dom';
import { Outlet } from 'react-router-dom';

const Receipt = () => {
    return (
        <div className="whiteBackground">
      <div>
        <ul className="flex bg-[#d8c2c2]  rounded-4">
          <Link to="/dashboard/receipt">
            <li className="p-2 border">
              <button>
                <i className="fa-solid fa-list p-1"></i> Receipt List
              </button>
            </li>
          </Link>
          <Link to="/dashboard/receipt/unapproved">
            <li className="p-2 border">
              <button>
                <i className="fa-solid fa-eye-slash p-1"></i> Unapproved Receipt
              </button>
            </li>
          </Link>
          <Link to="/dashboard/receipt/approved">
            <li className="p-2 border">
              <button>
                <i className="fa-solid fa-check p-1"></i> Approved Receipt
              </button>
            </li>
          </Link>
          <Link to="/dashboard/receipt/addreceipt">
            <li className="p-2 border">
              <button>
                <i className="fa-solid fa-plus p-1"></i> Add Recipt
              </button>
            </li>
          </Link>
        </ul>
      </div>
      <Outlet></Outlet>
    </div>
    );
};

export default Receipt;