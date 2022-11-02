import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

// Excel-IT-AI824298
// 0w08sgk4wo040ws4ssg0ow8408c4cs08o44w0w08

const ReceiptList = () => {
  const [receiptlists, setReceiptlists] = useState({});
  useEffect(() => {
    const url = `https://beta-dtba.btla.net/api/member/receipt/list?INSTANCE-NAME=Excel-IT-AI824298&INSTANCE-API-SECRETE=0w08sgk4wo040ws4ssg0ow8408c4cs08o44w0w08&membership_number=K00223`;
    // var myHeaders = new Headers();
    // myHeaders.append("INSTANCE-NAME", "Excel-IT-AI413826");
    // myHeaders.append(
    //   "INSTANCE-API-SECRETE",
    //   "g0csso04scsogwwkc0884sk0s4g4w84sgs8sw0s0"
    // );
    fetch(url)
      .then((response) => response.json())
      .then((data) => setReceiptlists(data));
  }, []);
  return (
    <div>
      <div className="p-4">
        <div className="my-4 flex justify-end">
          <input
            className="border mr-2 p-1"
            type="text"
            placeholder="Receipt ID"
          />
          <input
            className="border mr-2 p-1"
            type="text"
            placeholder="Member ID"
          />
          <button className="px-5 mr-2 bg-[#333547] text-white">Search</button>
          <button className="px-3 mr-2 bg-[#f39c12] text-white">X</button>
        </div>
        <div className="overflow-x-auto">
          <p className="my-2">Showing 1 - 7 of 7 data(s)</p>
          <table id="invoice" className="table table-zebra w-full">
            <thead>
              <tr>
                <th>SL.</th>
                <th>Recepit ID</th>
                <th>Date</th>
                <th>Member ID</th>
                <th>Member Name</th>
                <th>Month</th>
                <th>Start Date</th>
                <th>Finish Date</th>
                <th>Amount</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {receiptlists?.data?.map((list, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{list?.receipt_number}</td>
                  <td>{list?.receipt_date}</td>
                  <td>{list?.member_id}</td>
                  <td>{list?.member_name}</td>
                  <td>{list?.month_period}</td>
                  <td>{list?.start_date}</td>
                  <td>{list?.finish_date}</td>
                  <td>{list?.total_amount}</td>
                  <td>
                    <button onClick={() => window.print()}>
                      <i className="fa-solid fa-print m-2"></i>
                    </button>
                    <Link to={`view/${list?.receipt_number}`}>
                      <button>
                        <i className="fa-solid fa-eye m-2"></i>
                      </button>
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <button className="btn btn-active btn-sm btn-ghost m-2">Excel</button>
          <button className="btn btn-active btn-sm btn-ghost m-2">PDF</button>
          <button className="btn btn-active btn-sm btn-ghost m-2">Print</button>
        </div>
      </div>
    </div>
  );
};

export default ReceiptList;
