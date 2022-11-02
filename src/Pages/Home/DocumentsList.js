import React, { useEffect, useState } from "react";

const DocumentsList = () => {
  const [documentList, setDocumentList] = useState([]);
  // console.log(documentList?.data?.documentList);
  useEffect(() => {
   
    loadDocument();
   
  }, []);
  async function loadDocument() {
    await fetch(
    "https://beta-dtba.btla.net/api/member/document/list?INSTANCE-NAME=Excel-IT-AI824298&INSTANCE-API-SECRETE=0w08sgk4wo040ws4ssg0ow8408c4cs08o44w0w08&title=New Doc Title From Post man&member_id=223&membership_number=K00223&mobile_number=01676667145"
  )
    .then((response) => response.json())
    .then((data) => setDocumentList(data));
  }
  const handleDocumentDelete = (id) => {
    const proceed = window.confirm( "Are you sure you want to delete this item?" );
    if (proceed) {
      // console.log("Deleting nominee with id:", id);
      const url = `https://beta-dtba.btla.net/api/member/document/remove?id=${id}`;

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
          console.log(data);
          if (data.status === true) {
            console.log("delete success");
            const remainingDocument = documentList?.data?.documentList.filter(
              (document) => document.id !== id
            );
            console.log(remainingDocument);
           
            loadDocument();
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
              <th>Id</th> 
              <th>Member Id</th>
              <th>Membership Number</th>
              <th>Created On</th>
              <th>Doc Number</th> 
              <th>Doc Type</th>
              <th>Expires On</th> 
              <th>Institute</th>
              <th>Issued On</th>
              <th>Passing Year</th>
              <th>Picture</th>
              <th>Title</th>
              <th>Updated Oon</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {documentList?.data?.documentList?.map((list, index) => (
              <tr key={index}>
                <td>{list?.id}</td>
                <td>{list?.member_id}</td>
                <td>{list?.membership_number}</td>
                <td>{list?.created_on}</td>
                <td>{list?.doc_number}</td>
                <td>{list?.doc_type}</td>
                <td>{list?.expires_on}</td>
                <td>{list?.institute}</td>
                <td>{list?.issued_on}</td>
                <td>{list?.passing_year}</td>
                <td><img className="h-[60px] w-[60px]" src={`https://beta-dtba.btla.net/document/photo/${list?.picture}`} alt="" srcSet="" /></td>
                <td>{list?.title}</td>
                <td>{list?.updated_on}</td>
                <td>
                  <button onClick={() => handleDocumentDelete(list?.id)}>
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

export default DocumentsList;
