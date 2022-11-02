import React, { useEffect, useState } from "react";

const ProfilePersonal = () => {
    const [profile, setProfile] = useState({});
   const data=profile?.data;
  //  console.log(data);

  useEffect(() => {
    const url = `https://beta-dtba.btla.net/api/member/profile?INSTANCE-NAME=Excel-IT-AI824298&INSTANCE-API-SECRETE=0w08sgk4wo040ws4ssg0ow8408c4cs08o44w0w08&membership_number=K00223&mobile_number=01676667145`;

    // var myHeaders = new Headers();
    // myHeaders.append("INSTANCE-NAME", "Excel-IT-AI413826");
    // myHeaders.append(
    //   "INSTANCE-API-SECRETE",
    //   "g0csso04scsogwwkc0884sk0s4g4w84sgs8sw0s0"
    // );
    fetch(url)
      .then((response) => response.json())
      .then((data) => setProfile(data));
  }, []);
  return (
    <div>
      <div className="card w-[80%] mx-auto my-5 bg-base-100 shadow-xl">
        <figure>
          <img
            className="mask mask-circle w-[10%] h-[10%] p-5"
            src={`https://beta-dtba.btla.net/photo/${data?.membership_number}`}
            alt=""
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">First Name</h2>
          <input type="text" value={data?.member_name} className="input input-sm input-bordered bg-[#f9eded] w-full" />
          <h2 className="card-title">Last Name</h2>
          <input type="text" value={data?.member_name} className="input input-sm input-bordered bg-[#f9eded] w-full" />
          <h2 className="card-title">Father Name</h2>
          <input type="text" value={data?.father_name} className="input input-sm input-bordered bg-[#f9eded] w-full" />
          <h2 className="card-title">Mother Name</h2>
          <input type="text" value={data?.mother_name} className="input input-sm input-bordered bg-[#f9eded] w-full" />
          <h2 className="card-title">Email</h2>
          <input type="text" value={data?.email} className="input input-sm input-bordered bg-[#f9eded] w-full" />
          <h2 className="card-title">Self Mobile Number</h2>
          <input type="text" value={data?.mobile_number} className="input input-sm input-bordered bg-[#f9eded] w-full" />
          <h2 className="card-title">Practicing District</h2>
          <input type="text" value={data?.practicing_district} className="input input-sm input-bordered bg-[#f9eded] w-full" />
          <h2 className="card-title">Religion</h2>
          <input type="text" value={data?.religion} className="input input-sm input-bordered bg-[#f9eded] w-full" />
          <h2 className="card-title">Blood Group</h2>
          <input type="text" value={data?.blood_group} className="input input-sm input-bordered bg-[#f9eded] w-full" />
          <h2 className="card-title">Date Of Birth</h2>
          <input type="text" value={data?.birth_date} className="input input-sm input-bordered bg-[#f9eded] w-full" />
          <h2 className="card-title">NID Number</h2>
          <input type="text" value={data?.nationalid_number} className="input input-sm input-bordered bg-[#f9eded] w-full" />
          <h2 className="card-title">Nationality</h2>
          <input type="text" value={data?.nationality} className="input input-sm input-bordered bg-[#f9eded] w-full" />
          <h2 className="card-title">Residential Address</h2>
          <input type="text" value={data?.residential_address} className="input input-sm input-bordered bg-[#f9eded] w-full" />
          <h2 className="card-title">Permanent Address</h2>
          <input type="text" value={data?.permanent_address} className="input input-sm input-bordered bg-[#f9eded] w-full" />
          <h2 className="card-title">Office Address</h2>
          <input type="text" value={data?.office_address} className="input input-sm input-bordered bg-[#f9eded] w-full" />
        </div>
      </div>
    </div>
  );
};

export default ProfilePersonal;
