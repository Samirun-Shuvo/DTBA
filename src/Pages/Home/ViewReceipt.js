import React, { useEffect } from "react";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";
// Excel-IT-AI824298
// 0w08sgk4wo040ws4ssg0ow8408c4cs08o44w0w08

const ViewReceipt = () => {
  const { receiptId } = useParams();

  const [receipt, setReceipt] = useState({});
  console.log(receipt);
  useEffect(() => {
    fetch(
      `https://beta-dtba.btla.net/api/member/receipt?INSTANCE-NAME=Excel-IT-AI824298&INSTANCE-API-SECRETE=0w08sgk4wo040ws4ssg0ow8408c4cs08o44w0w08&receipt_number=${receiptId}`
    )
      .then((res) => res.json())
      .then((data) => setReceipt(data?.data));
  }, [receiptId]);

  return (
    <div className="p-4">
      <div className="overflow-x-auto">
        <table className="table table-zebra w-full">
          <tbody className="border-2">
            <tr>
              <td className="font-semibold w-[20%]">Date</td>
              <td>: {receipt?.receipt_date}</td>
            </tr>
            <tr>
              <td className="font-semibold w-[20%]">Receipt No.</td>
              <td>: {receipt?.receipt_number}</td>
            </tr>
            <tr>
              <td className="font-semibold w-[20%]">Description</td>
              <td>: </td>
            </tr>
            <tr>
              <td className="font-semibold w-[20%]">Membership No</td>
              <td>: {receipt?.id}</td>
            </tr>
            <tr>
              <td className="font-semibold w-[20%]">Member Name</td>
              <td>: </td>
            </tr>
            <tr>
              <td className="font-semibold w-[20%]">Month</td>
              <td>: {receipt?.month_period}</td>
            </tr>
            <tr>
              <td className="font-semibold w-[20%]">Start Date</td>
              <td>: {receipt?.start_date}</td>
            </tr>
            <tr>
              <td className="font-semibold w-[20%]">Finish Date</td>
              <td>: {receipt?.finish_date}</td>
            </tr>
            <tr>
              <td className="w-[20%]">
                Nomination Fee(Assistant <br /> General Secretary Candidate)
              </td>
              <td>: </td>
            </tr>
            <tr>
              <td className="font-semibold w-[20%]">Total Amount</td>
              <td>: {receipt?.total_amount}</td>
            </tr>
          </tbody>
        </table>
        <div className="flex justify-end">
          <Link to="/dashboard/receipt">
            <button className="btn btn-active btn-sm btn-ghost m-2">
              <i className="fa-solid fa-arrow-left-long m-2"></i> Back
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ViewReceipt;
