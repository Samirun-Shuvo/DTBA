import "./App.css";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./Pages/Home/Dashboard";
import Login from "./Pages/Login/Login";
import NotFoundPage from "./Pages/NotFoundPage/NotFoundPage";
import NomineeInfo from "./Pages/Home/NomineeInfo";
import NomineeInfoList from "./Pages/Home/NomineeInfoList";
import Profile from "./Pages/Home/Profile";
import Nominee from "./Pages/Home/Nominee";
import ReceiptList from "./Pages/Home/ReceiptList";
import UnapprovedReceipt from './Pages/Home/UnapprovedReceipt';
import ApprovedReceipt from "./Pages/Home/ApprovedReceipt";
import AddReceipt from "./Pages/Home/AddReceipt";
import ViewReceipt from "./Pages/Home/ViewReceipt";
import OtpVerification from "./Pages/Login/OtpVerification";
import ProfilePersonal from "./Pages/Home/ProfilePersonal";
import ProfileSocial from "./Pages/Home/ProfileSocial";
import ProfileContact from "./Pages/Home/ProfileContact";
import Documents from "./Pages/Home/Documents";
import AddDocuments from "./Pages/Home/AddDocuments";
import DocumentsList from "./Pages/Home/DocumentsList";
import Chart from './Pages/Home/Chart';
import Receipt from "./Pages/Home/Receipt";
import Payment from "./Pages/Home/Payment";
import PaymentList from "./Pages/Home/PaymentList";
import UnapprovedPayment from "./Pages/Home/UnapprovedPayment";
import { createContext } from "react";


export const UserContext = createContext();

function App() {
  // console.log(loggedInUser);
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login></Login>}></Route>
        <Route path="otpverification" element={<OtpVerification></OtpVerification>}></Route>

        <Route path="dashboard" element={<Dashboard></Dashboard>}>
          <Route index element={<Chart></Chart>}></Route>
          <Route path="receipt" element={<Receipt></Receipt>}>
            <Route index element={<ReceiptList></ReceiptList>}></Route>
            <Route path="unapproved" element={<UnapprovedReceipt></UnapprovedReceipt>}></Route>
            <Route path="approved" element={<ApprovedReceipt></ApprovedReceipt>}></Route>
            <Route path="addreceipt" element={<AddReceipt></AddReceipt>}></Route>
            <Route path="view/:receiptId" element={<ViewReceipt></ViewReceipt>}></Route>
          </Route>
          <Route path="payment" element={<Payment></Payment>}>
            <Route index element={<PaymentList></PaymentList>}></Route>
            <Route path="unapproved" element={<UnapprovedPayment></UnapprovedPayment>}></Route>
          </Route>
          <Route path="profile" element={<Profile></Profile>}>
            <Route index element={<ProfilePersonal></ProfilePersonal>}></Route>
            <Route path="social" element={<ProfileSocial></ProfileSocial>}></Route>
            <Route path="contact" element={<ProfileContact></ProfileContact>}></Route>
          </Route>
          <Route path="nominee" element={<Nominee></Nominee>}>
          <Route index element={<NomineeInfoList></NomineeInfoList>}></Route>
            <Route path="add" element={<NomineeInfo></NomineeInfo>}></Route>
          </Route>
          <Route path="document" element={<Documents></Documents>}>
            <Route index element={<DocumentsList></DocumentsList>}></Route>
            <Route path="add" element={<AddDocuments></AddDocuments>}></Route>
          </Route>
        </Route>

        <Route path="*" element={<NotFoundPage></NotFoundPage>}></Route>
      </Routes>
    </div>
  );
}

export default App;
