import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/dtba.png";

const Login = () => {
  const nevigate = useNavigate();

  const onSubmit = (formdata) => {
    // console.log(formdata);
    const url = `https://beta-dtba.btla.net/api/member/profile/login?device_id=33&device_name=332TyuT&device_model=33U%26U&app_signature_id=444098&sms_text=you&member_id=4398&membership_number=${formdata.membership_number}&mobile_number=${formdata.mobile_number}&device_os=Android`;
    fetch(url, {
      method: "POST",
      headers: {
        "INSTANCE-NAME": "Excel-IT-AI824298",
        "INSTANCE-API-SECRETE": "0w08sgk4wo040ws4ssg0ow8408c4cs08o44w0w08",
      },
      body: formdata,
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
        if (data.opt_required) {
          otpSend(formdata);
        }

      })
      .catch((error) => {
        console.log("Error:", error);
      });
  };

  const otpSend = (formdata) => {
    const otpUrl = `https://beta-dtba.btla.net/api/sms/otp/send?device_id=1111&device_name=222&device_model=333&app_signature_id=444&sms_text=55555&member_id=12321&membership_number=${formdata.membership_number}&mobile_number=${formdata.mobile_number}&device_os=android`;
    fetch(otpUrl, {
      method: "PUT",
      headers: {
        "INSTANCE-NAME": "Excel-IT-AI824298",
        "INSTANCE-API-SECRETE": "0w08sgk4wo040ws4ssg0ow8408c4cs08o44w0w08",
      },
      body: formdata,
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("OTP Send Success:", data);
        nevigate("otpverification");
      })
      .catch((error) => {
        console.log("OTP Send Error:", error);
      });
  };

  const { register, handleSubmit } = useForm();

  return (
    <div>
      <div className="hero min-h-screen">
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <div className="flex justify-center my-2">
              <img src={logo} alt="" srcSet="" />
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="bg-[#765a5a] border-2 rounded-xl">
                <h1 className="text-3xl font-bold my-5 pt-2">
                  Sign in to start session
                </h1>
                <input
                  {...register("membership_number", { required: true })}
                  name="membership_number"
                  type="text"
                  placeholder="Membership ID"
                  className="input input-bordered text-black w-full max-w-xs my-2"
                />
                <input
                  {...register("mobile_number", { required: true })}
                  name="mobile_number"
                  type="password"
                  placeholder="Mobile Number"
                  className="input input-bordered text-black w-full max-w-xs my-2"
                />
                <div className="form-control">
                  <input
                    className="input input-bordered w-[60%] mx-auto cursor-pointer py-1.5 bg-[#b5b1ab] my-8 text-white font-bold"
                    type="submit"
                    value="LOGIN"
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
