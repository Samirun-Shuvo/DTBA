import React from 'react';

const ApprovedReceipt = () => {
    return (
        <div className="p-4">
         <div className="my-4 flex justify-end">
        <input className="border mr-2 p-1" type="text" placeholder="Receipt ID" />
        <input className="border mr-2 p-1" type="text" placeholder="Member ID" />
        <button className="px-5 mr-2 bg-[#333547] text-white">Search</button>
        <button className="px-3 mr-2 bg-[#f39c12] text-white">X</button>
      </div>
            Approved Receipt
        </div>
    );
};

export default ApprovedReceipt;