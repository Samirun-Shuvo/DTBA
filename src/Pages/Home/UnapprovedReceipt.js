import React, { useEffect, useState } from "react";

const UnapprovedReceipt = () => {
  const [receiptlists, setReceiptlists] = useState({});

  useEffect(() => {
    fetch(
      "https://beta-dtba.btla.net/api/member/receipt/list?INSTANCE-NAME=sibldtba459807&INSTANCE-API-SECRETE=k8wscw04kwwok4gcwsk488o4sog8o00gsgwsog0k&membership_number=K00223"
    )
      .then((response) => response.json())
      .then((data) => setReceiptlists(data));
  }, []);
  return (
    <div className="p-4">
     <div className="my-4 flex justify-end">
        <input className="border mr-2 p-1" type="text" placeholder="Receipt ID" />
        <input className="border mr-2 p-1" type="text" placeholder="Member ID" />
        <button className="px-5 mr-2 bg-[#333547] text-white">Search</button>
        <button className="px-3 mr-2 bg-[#f39c12] text-white">X</button>
      </div>
      <div className="overflow-x-auto">
        <p className="my-2">Showing 1 - 7 of 7 data(s)</p>
        <table className="table table-zebra w-full">
          <thead>
            <tr>
              <th>
                <input type="checkbox" unchecked className="checkbox" />
              </th>
              <th>Date</th>
              <th>Bank</th>
              <th>Receipt ID</th>
              <th>Date</th>
              <th>Member ID</th>
              <th>Member Name</th>
              <th>Start Date</th>
              <th>Finish Date</th>
              <th>Amount</th>
              <th>Approve</th>
            </tr>
          </thead>
          <tbody>
            {receiptlists?.data?.map((list, index) => (
              <tr key={index}>
                <td>
                  <input type="checkbox" unchecked className="checkbox" />
                </td>
                <td>
                  <input type="date" />
                </td>
                <td>
                  <select className="select select-bordered select-sm w-full max-w-xs">
                    <option>Sonali</option>
                    <option>AB</option>
                  </select>
                </td>
                <td>{list?.receipt_number}</td>
                <td>{list?.receipt_date}</td>
                <td>{list?.member_id}</td>
                <td>{list?.member_name}</td>
                <td>{list?.start_date}</td>
                <td>{list?.finish_date}</td>
                <td>{list?.total_amount}</td>
                <td>
                  <button className="btn btn-sm">Approve</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="flex flex-row">
          <div className="basis-1/2">
            <button className="btn btn-active btn-sm btn-ghost m-2">
              Excel
            </button>
            <button className="btn btn-active btn-sm btn-ghost m-2">PDF</button>
            <button className="btn btn-active btn-sm btn-ghost m-2">
              Print
            </button>
          </div>
          <div className="basis-1/2">
            <button className="px-3 py-2 mr-2 bg-[#f39c12] text-white">
              <i className="fa-solid fa-pen-to-square mr-2"></i> Approved
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UnapprovedReceipt;
