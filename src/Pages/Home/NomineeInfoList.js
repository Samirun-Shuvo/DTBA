import React, { useEffect, useState } from "react";

const NomineeInfoList = () => {
  const [nomineeList, setNomineeList] = useState([]);
// console.log(nomineeList);

  // function myList()
  // {

  //   fetch(
  //     "https://beta-dtba.btla.net/api/member/nominee/list?INSTANCE-NAME=Excel-IT-AI824298&INSTANCE-API-SECRETE=0w08sgk4wo040ws4ssg0ow8408c4cs08o44w0w08&membership_number=K00223"
  //   )
  //     .then((response) => response.json())
  //     .then((data) => setNomineeList(data));
  // }

    // fetch(
    //   "https://beta-dtba.btla.net/api/member/nominee/list?INSTANCE-NAME=Excel-IT-AI824298&INSTANCE-API-SECRETE=0w08sgk4wo040ws4ssg0ow8408c4cs08o44w0w08&membership_number=K00223"
    // )
    //   .then((response) => response.json())
    //   .then((data) => setNomineeList(data));


  useEffect(() => {
    loadNominee();
  }, []);
  
  async function loadNominee() {
    await fetch('https://beta-dtba.btla.net/api/member/nominee/list?INSTANCE-NAME=Excel-IT-AI824298&INSTANCE-API-SECRETE=0w08sgk4wo040ws4ssg0ow8408c4cs08o44w0w08&membership_number=K00223')
    .then((response) => response.json())
    .then((data) => setNomineeList(data));
  }
  
  const handleNomineeDelete = (id) => {
    const proceed = window.confirm( "Are you sure you want to delete this item?" );
    if (proceed) {
      console.log("Deleting nominee with id:", id);
      const url = `https://beta-dtba.btla.net/api/member/nominee/remove?id=${id}`;

      fetch(url, {
        method: "DELETE",
        headers: {
          "INSTANCE-NAME": "Excel-IT-AI824298",
          "INSTANCE-API-SECRETE": "0w08sgk4wo040ws4ssg0ow8408c4cs08o44w0w08",
        },
        body: id,
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.status === true) {
            const remaining = nomineeList?.data?.nomineeList?.filter(
              (nominees) => nominees.id !== id
            );
            console.log(remaining);
            loadNominee();
          }
        });
    }
  };
  return (
    <div className="p-4">
      <div className="overflow-x-auto">
        <p className="my-2">Showing 1 - 7 of 7 data(s)</p>
        <table className="table table-zebra w-full">
          <thead>
            <tr>
              <th>ID</th>
              <th>Membership Number</th>
              <th>Full Name</th>
              <th>Relation With Nominee</th>
              <th>Shares Percentage</th>
              <th>NID Number</th>
              <th>Date Of Birth</th>
              <th>Address</th>
              <th>Nominee Profile Picture</th>
              <th>Nid Front Side Picture</th>
              <th>Nid Back Side Picture</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {nomineeList?.data?.nomineeList?.map((list) => (
              <tr key={list?.id}>
                <td>{list?.id}</td>
                <td>{list?.membership_number}</td>
                <td>{list?.fullname}</td>
                <td>{list?.relation}</td>
                <td>{list?.percentage}</td>
                <td>{list?.nid_number} </td>
                <td>{list?.date_of_birth}</td>
                <td>{list?.address}</td>
                <td>
                  <img
                    className="h-[60px] w-[60px]"
                    src={`https://beta-dtba.btla.net/nominee/photo/${list?.picture}`}
                    alt=""
                    srcSet=""
                  />{" "}
                </td>
                <td>
                  <img
                    className="h-[60px] w-[60px]"
                    src={`https://beta-dtba.btla.net/nominee/photo/${list?.nid_picture_front}`}
                    alt=""
                    srcSet=""
                  />
                </td>
                <td>
                  <img
                    className="h-[60px] w-[60px]"
                    src={`https://beta-dtba.btla.net/nominee/photo/${list?.nid_picture_back}`}
                    alt=""
                    srcSet=""
                  />
                </td>
                <td>
                  <button onClick={() => handleNomineeDelete(list?.id)}>
                    <i className="fa-sharp fa-solid fa-trash"></i>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default NomineeInfoList;
