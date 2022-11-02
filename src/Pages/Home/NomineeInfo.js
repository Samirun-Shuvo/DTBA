// import { useForm } from "react-hook-form";
import Heading from "./../Shared/Heading";
import { useForm } from "react-hook-form";
// import axios  from 'axios';
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";

const NomineeInfo = () => {
  const [getParcentage, setGetParcentage] = useState({});
  const [clientImage, setClientImage] = useState(null);
  const [clientNidFontImg, setClientNidFontImg] = useState(null);
  const [clientNidBackImg, setClientNidBackImg] = useState(null);

  const navigate = useNavigate();

  const shareCovered = parseInt(getParcentage?.data?.covered);
  const nomineePersentageTotal = 100;
  let remainingShare = nomineePersentageTotal - shareCovered;
  
  useEffect(() => {
    fetch(
      "https://beta-dtba.btla.net/api/member/nominee/list?INSTANCE-NAME=Excel-IT-AI824298&INSTANCE-API-SECRETE=0w08sgk4wo040ws4ssg0ow8408c4cs08o44w0w08&membership_number=K00223"
    )
      .then((response) => response.json())
      .then((data) => setGetParcentage(data));
  }, [remainingShare]);

  const onSubmit = (data) => {
    let inputShared = parseInt(data?.percentage);
    if (inputShared <= remainingShare && inputShared > 0) {
      saveNomineeInfo(data);
    }
  };

  const saveNomineeInfo = (data) => {
    const url = `https://beta-dtba.btla.net/api/member/nominee/save?member_id=${data.id}&membership_number=${data.membership_number}&mobile_number=${data.mobile_number}&fullname=${data.fullname}&relation=${data.relation}&nid_number=${data.nid_number}&date_of_birth=${data.date_of_birth}&address=${data.address}&percentage=${data.percentage}`;
    var myHeaders = new Headers();
    myHeaders.append("INSTANCE-NAME", "Excel-IT-AI413826");
    myHeaders.append(
      "INSTANCE-API-SECRETE",
      "g0csso04scsogwwkc0884sk0s4g4w84sgs8sw0s0"
    );

    var fileInput = document.getElementsByClassName("fileInput");
    var formdata = new FormData();
    formdata.append("picture", fileInput[0].files[0]);
    formdata.append("nid_picture_front", fileInput[1].files[0]);
    formdata.append("nid_picture_back", fileInput[2].files[0]);

    fetch(url, {
      method: "POST",
      headers: {
        "INSTANCE-NAME": "Excel-IT-AI824298",
        "INSTANCE-API-SECRETE": "0w08sgk4wo040ws4ssg0ow8408c4cs08o44w0w08",
        // "Content-Type": "application/json",
      },
      // body: info,
      body: formdata,
    })
      .then((response) => response.json())
      .then((info) => {
        console.log("Success:", info);
        navigate("/dashboard/nominee");
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
      <Heading>Add Nominee Information</Heading>
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
            {errors.member_id && (
              <p className="py-1 text-red-900">Member Id is required.</p>
            )}
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold">
                Membership Number
              </span>
            </label>
            <input
              {...register("membership_number", { required: true })}
              name="membership_number"
              className="input input-bordered py-1.5 bg-[whitesmoke]"
              type="text"
              placeholder="Membership Number"
            />
            {errors.membership_number && (
              <p className="py-1 text-red-900">
                Membership Number is required.
              </p>
            )}
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold">
                Nominee Full Name
              </span>
            </label>
            <input
              {...register("fullname", { required: true })}
              name="fullname"
              className="input input-bordered py-1.5 bg-[whitesmoke]"
              type="text"
              placeholder="Nominee Full Name"
            />
            {errors.fullname && (
              <p className="py-1 text-red-900">Name is required.</p>
            )}
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold">Relation</span>
            </label>
            <input
              {...register("relation", { required: true })}
              name="relation"
              className="input input-bordered py-1.5 bg-[whitesmoke]"
              type="text"
              placeholder="Relation"
            />
            {errors.relation && (
              <p className="py-1 text-red-900">Relationship is required.</p>
            )}
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
            {errors.mobile_number && (
              <p className="py-1 text-red-900">Mobile Number is required.</p>
            )}
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
            {errors.nid_number && (
              <p className="py-1 text-red-900">
                National id number is required.
              </p>
            )}
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold">Date Of Birth</span>
            </label>
            <input
              {...register("date_of_birth", { required: true })}
              name="date_of_birth"
              className="input input-bordered py-1.5 bg-[whitesmoke]"
              type="date"
            />
            {errors.date_of_birth && (
              <p className="py-1 text-red-900">Date of birth is required.</p>
            )}
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
            {errors.address && (
              <p className="py-1 text-red-900">Address is required.</p>
            )}
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold">
                Percentage Availabe ({remainingShare}){" "}
              </span>
            </label>
            <input
              {...register("percentage", { required: true })}
              name="percentage"
              className="input input-bordered py-1.5 bg-[whitesmoke]"
              type="text"
              placeholder="Percentage"
            />

            {errors.percentage && (
              <p className="py-1 text-red-900">Percentage is required.</p>
            )}
            {}
          </div>
        </div>

        <div className="flex my-2">
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold">
                Upload Nominee Profile Picture
              </span>
            </label>
            <input
              {...register("picture", { required: true })}
              name="picture"
              className="input input-bordered py-1.5 bg-[whitesmoke] fileInput"
              onChange={(event) => {
                setClientImage(event.target.files[0]);
              }}
              type="file"
            />
            {errors.picture && (
              <p className="py-1 text-red-900">
                Nominee Profile Picture is required.
              </p>
            )}
          </div>
          <div className="m-3">
            {clientImage && (
              <img
                alt=""
                srcSet=""
                width={"186px"}
                height={"220px"}
                src={URL.createObjectURL(clientImage)}
              />
            )}
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold">
                Upload Nominee NID Front Picture
              </span>
            </label>
            <input
              {...register("nid_picture_front", { required: true })}
              name="nid_picture_front"
              className="input input-bordered py-1.5 bg-[whitesmoke] fileInput"
              onChange={(event) => {
                setClientNidFontImg(event.target.files[0]);
              }}
              type="file"
            />
            {errors.nid_picture_front && (
              <p className="py-1 text-red-900">
                Nominee NID Front Picture is required.
              </p>
            )}
          </div>
          <div className="m-3">
            {clientNidFontImg && (
              <img
                alt=""
                srcSet=""
                width={"186px"}
                height={"220px"}
                src={URL.createObjectURL(clientNidFontImg)}
              />
            )}
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold">
                Upload Nominee NID Back Picture
              </span>
            </label>
            <input
              {...register("nid_picture_back", { required: true })}
              name="nid_picture_back"
              className="input input-bordered py-1.5 bg-[whitesmoke] fileInput"
              onChange={(event) => {
                setClientNidBackImg(event.target.files[0]);
              }}
              type="file"
            />
            {errors.nid_picture_back && (
              <p className="py-1 text-red-900">
                Nominee NID Back Picture is required.
              </p>
            )}
          </div>
          <div className="m-3">
            {clientNidBackImg && (
              <img
                alt=""
                srcSet=""
                width={"186px"}
                height={"220px"}
                src={URL.createObjectURL(clientNidBackImg)}
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

export default NomineeInfo;
