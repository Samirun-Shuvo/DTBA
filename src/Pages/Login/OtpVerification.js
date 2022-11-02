import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const OtpVerification = () => {
  const nevigate = useNavigate();

  const onSubmit = (inputOtp) => {
    // console.log(inputOtp.otp);

    const url = `https://beta-dtba.btla.net/api/sms/otp/check?app_signature_id=444&otp=${inputOtp.otp}`;
    fetch(url, {
      method: "PUT",
      headers: {
        "INSTANCE-NAME": "Excel-IT-AI824298",
        "INSTANCE-API-SECRETE": "0w08sgk4wo040ws4ssg0ow8408c4cs08o44w0w08",
      },
      body: inputOtp,
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("OTP Match :", data);
        if (data.status === true) {
          nevigate("/dashboard");
        }
      })
      .catch((error) => {
        console.log("Error:", error);
      });
  };

  const {
    register,
    handleSubmit,
  } = useForm();

  return (
    <div className="hero min-h-screen">
      <div className="flex justify-center mt-5">
        <h2 className="card-title text-center">OTP Verification</h2>
      </div>
      <div className="flex justify-center mt-5">
        <div className="card w-96 bg-[#6f868c] text-neutral-content">
          <div className="card-body items-center text-center">
            <p>Waiting for OTP</p>
            <small>Please enter the verification code sent to (number)</small>
            <form onSubmit={handleSubmit(onSubmit)}>
              <input
                {...register("otp", { required: true })}
                type="text"
                placeholder="---OTP HERE--"
                className="input input-bordered text-center text-black w-full max-w-xs my-2"
              />
              <h1 className="my-1">OTP will expired in 0.00</h1>
              <button
                onClick={onSubmit}
                className="input input-bordered w-[60%] mx-auto cursor-pointer bg-[#b5b1ab] hover:bg-[#a9a094] text-white font-bold"
              >
                Resend
              </button>
              <div className="form-control">
                <input
                  className="input input-bordered w-[60%] mx-auto cursor-pointer py-1.5 bg-[#9c958b] hover:bg-[#bcb3a7] my-5 text-white font-bold"
                  type="submit"
                  value="Confirm OTP"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OtpVerification;
