import React, { useEffect } from "react";
import Heading from "../../Shared/Heading";
import CopyPrintPdfBtn from "../../Shared/CopyPrintPdfBtn";
import { Link } from "react-router-dom";
import ClientInfoTable from "./ClientInfoTable";
import AddButton from "../../Shared/AddButton";
import { useState } from "react";

const ClientInfoHome = () => {
  const [clientInfoDatas, SetClientInfoDatas] = useState([]);
  // useEffect(() => {
  //   fetch("/clientInformations.json")
  //     .then((res) => res.json())
  //     .then((data) => SetClientInfoDatas(data));
  // }, []);
  useEffect(() => {
    fetch("http://192.168.0.115:8000/api/client/information")
      .then((res) => res.json())
      .then((data) => SetClientInfoDatas(data));
  }, []);
  return (
    <>
      <div>
        <Heading>Client Information</Heading>
        <div className="p-5 whiteBackground">
          <div className="flex flex-wrap justify-between my-5">
            <CopyPrintPdfBtn></CopyPrintPdfBtn>
            <div className="my-2">
              <Link to="addclient">
                <AddButton>
                  Add Customer <i className="fa-solid fa-user-plus mx-2"></i>
                </AddButton>
              </Link>
            </div>
          </div>
          <ClientInfoTable clientInfoDatas={clientInfoDatas}></ClientInfoTable>
        </div>
      </div>
    </>
  );
};

export default ClientInfoHome;
