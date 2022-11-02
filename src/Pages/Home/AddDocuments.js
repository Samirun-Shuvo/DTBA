import React from 'react';
import Heading from "./../Shared/Heading";
import { useState } from "react";
import { useForm } from "react-hook-form";
// import axios  from 'axios';
import { useNavigate } from 'react-router-dom';

const AddDocuments = () => {
  const [picture, setPicture] = useState(null);

  const navigate=useNavigate();
  
  const onSubmit = (data) => {
    console.log(data);
    const url = `https://beta-dtba.btla.net/api/member/document/save?member_id=${data.member_id}&membership_number=${data.membership_number}&mobile_number=${data.mobile_number}&title=${data.title}&doc_type=${data.doc_type}&doc_number=${data.doc_number}&issued_on=${data.issued_on}&expires_on=${data.expires_on}&nid_number=${data.nid_number}&address=${data.address}&passing_year=${data.passing_year}&passing_board=${data.passing_board}&institute=${data.institute}`;

    var myHeaders = new Headers();
    myHeaders.append("INSTANCE-NAME", "Excel-IT-AI413826");
    myHeaders.append(
      "INSTANCE-API-SECRETE",
      "g0csso04scsogwwkc0884sk0s4g4w84sgs8sw0s0"
    );

    var fileInput = document.getElementsByClassName("fileInput");
    var formdata = new FormData();
    formdata.append("picture", fileInput[0].files[0]);


    fetch(url, {
      method: "POST",
      headers: {
        "INSTANCE-NAME": "Excel-IT-AI824298",
        "INSTANCE-API-SECRETE": "0w08sgk4wo040ws4ssg0ow8408c4cs08o44w0w08",
        // "Content-Type": "application/json",
      },
      // body: info,
      body: formdata
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
        navigate("/dashboard/document")
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

    return (
        <div className="p-4">
      <Heading>Add Documents</Heading>
      <form onSubmit={handleSubmit(onSubmit)}>
       <div className="grid grid-cols-2 gap-5">
       <div className="form-control">
          <label className="label">
            <span className="label-text font-semibold">Member Id</span>
          </label>
          <input
            {...register("member_id", { required: true })}
            name="member_id"
            className="input input-bordered py-1.5 bg-[whitesmoke]"
            type="text"
            placeholder="Member Id"
          />
          {errors.member_id && <p className="py-1 text-red-900">Member Id is required.</p>}
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text font-semibold">Membership Number</span>
          </label>
          <input
            {...register("membership_number", { required: true })}
            name="membership_number"
            className="input input-bordered py-1.5 bg-[whitesmoke]"
            type="text"
            placeholder="Membership Number"
          />
          {errors.membership_number && <p className="py-1 text-red-900">Membership Number is required.</p>}
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text font-semibold">Mobile Number</span>
          </label>
          <input
            {...register("mobile_number", { required: true })}
            name="mobile_number"
            className="input input-bordered py-1.5 bg-[whitesmoke]"
            type="text"
            placeholder="Mobile Number"
          />
          {errors.mobile_number && <p className="py-1 text-red-900">Mobile Number is required.</p>}
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text font-semibold">Title</span>
          </label>
          <input
            {...register("title", { required: true })}
            name="title"
            className="input input-bordered py-1.5 bg-[whitesmoke]"
            type="text"
            placeholder="Title"
          />
          {errors.title && <p className="py-1 text-red-900">Title is required.</p>}
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text font-semibold">Doc Type</span>
          </label>
          <input
            {...register("doc_type", { required: true })}
            name="doc_type"
            className="input input-bordered py-1.5 bg-[whitesmoke]"
            type="text"
            placeholder="Doc Type "
          />
          {errors.doc_type && <p className="py-1 text-red-900">Doc Type is required.</p>}
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text font-semibold">Doc Number</span>
          </label>
          <input
            {...register("doc_number", { required: true })}
            name="doc_number"
            className="input input-bordered py-1.5 bg-[whitesmoke]"
            type="text"
            placeholder="Doc Number"
          />
          {errors.doc_number && <p className="py-1 text-red-900">Doc Number is required.</p>}
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text font-semibold">Issued Date</span>
          </label>
          <input
            {...register("issued_on", { required: true })}
            name="issued_on"
            className="input input-bordered py-1.5 bg-[whitesmoke]"
            type="date"
          />
          {errors.issued_on && <p className="py-1 text-red-900">Issued Date is required.</p>}
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text font-semibold">Expired Date</span>
          </label>
          <input
            {...register("expires_on", { required: true })}
            name="expires_on"
            className="input input-bordered py-1.5 bg-[whitesmoke]"
            type="date"
          />
          {errors.expires_on && <p className="py-1 text-red-900">Expired Date is required.</p>}
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text font-semibold">NID Number</span>
          </label>
          <input
            {...register("nid_number", { required: true })}
            name="nid_number"
            className="input input-bordered py-1.5 bg-[whitesmoke]"
            type="text"
            placeholder="NID Number"
          />
          {errors.nid_number && <p className="py-1 text-red-900">National id number is required.</p>}
        </div>
        
        <div className="form-control">
          <label className="label">
            <span className="label-text font-semibold">Address</span>
          </label>
          <input
            {...register("address", { required: true })}
            name="address"
            className="input input-bordered py-1.5 bg-[whitesmoke]"
            type="text"
            placeholder="Address"
          />
          {errors.address && <p className="py-1 text-red-900">Address is required.</p>}
        </div>
        
       
        <div className="form-control">
          <label className="label">
            <span className="label-text font-semibold">Passing Year</span>
          </label>
          <input
            {...register("passing_year", { required: true })}
            name="passing_year"
            className="input input-bordered py-1.5 bg-[whitesmoke]"
            type="date"
          />
          {errors.passing_year && <p className="py-1 text-red-900">Passing Year is required.</p>}
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text font-semibold">Passing Board</span>
          </label>
          <input
            {...register("passing_board", { required: true })}
            name="passing_board"
            className="input input-bordered py-1.5 bg-[whitesmoke]"
            type="text"
            placeholder="passing_board"
          />
          {errors.passing_board && <p className="py-1 text-red-900">Passing Board is required.</p>}
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text font-semibold">Institute</span>
          </label>
          <input
            {...register("institute", { required: true })}
            name="institute"
            className="input input-bordered py-1.5 bg-[whitesmoke]"
            type="text"
            placeholder="Institute"
          />
          {errors.institute && <p className="py-1 text-red-900">Institute required.</p>}
        </div>

        </div>


     <div className="flex my-2">
     <div className="form-control">
          <label className="label">
            <span className="label-text font-semibold">
              Picture
            </span>
          </label>
          <input
            {...register("picture", { required: true })}
            name="picture"
            className="input input-bordered py-1.5 bg-[whitesmoke] fileInput"
            onChange={(event) => {
                setPicture(event.target.files[0]);
            }}
            type="file"
          />
          {errors.picture && <p className="py-1 text-red-900">Picture is required.</p>}
        </div>
        <div className="m-3">
          {picture && (
            <img
              alt=""
              srcSet=""
              width={"186px"}
              height={"220px"}
              src={URL.createObjectURL(picture)}
            />
          )}
        </div>
     </div>
        <div className="form-control">
          <input
            className="input input-bordered cursor-pointer hover:bg-[#d08a1b] py-1.5 bg-[#f39c12] my-8 text-white font-bold"
            type="submit"
            value="SUBMIT"
          />
        </div>
       
      </form>
    </div>
    );
};

export default AddDocuments;