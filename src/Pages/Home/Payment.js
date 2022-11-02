import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Payment = () => {
    return (
        <div className="whiteBackground">
        <div>
          <ul className="flex bg-[#d8c2c2]  rounded-4">
            <Link to="/dashboard/payment">
              <li className="p-2 border">
                <button>
                  <i className="fa-solid fa-list p-1"></i> Payment List
                </button>
              </li>
            </Link>
            <Link to="/dashboard/payment/unapproved">
              <li className="p-2 border">
                <button>
                  <i className="fa-solid fa-list p-1"></i> Payment Unapproved
                </button>
              </li>
            </Link>
          </ul>
        </div>
        <Outlet></Outlet>
      </div>
    );
};

export default Payment;