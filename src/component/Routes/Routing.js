import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DeskOne from "../pages/DeskOne";
import MainSectionContainer from "../header/MainSectionContainer";
import Logout from "../Logout";
import Error403 from "../Error403";
import Error500 from "../error500";
import Login from "../Login";
import DashBoard from "../DashBoard";
import Error404 from "../Error404";
import CallList from "../pages/CallAudit/CallList";
import CallReport from "../pages/CallAudit/CallReport";
import EmployeeCallReport from "../pages/CallAudit/EmployeeCallReport";
import Attendance from "../pages/Employee/Attendance";
import EmployeeForm from "../pages/Employee/EmployeeForm";
import EmployeeList from "../pages/Employee/EmployeeList";
import PermissionForm from "../pages/UserPermision/PermissionForm";
import PermissionUserList from "../pages/UserPermision/PermissionUserList";
import QcClientList from "../pages/UserPermision/QcClientList";
import WhatsappLeadAdd from "../pages/whatsappLead/WhatsappLeadAdd";
import WhatsappStatus from "../pages/whatsappLead/WhatasppStatus";
import CreateTicket from "../pages/TicketManagwer/CreateTicket";
import ViewTicket from "../pages/TicketManagwer/ViewTicket";
import UserTicket from "../pages/TicketManagwer/UserTicket";
import MasterTicket from "../pages/TicketManagwer/MasterTicket";
import CreateTask from "../pages/TaskAssign/CreateTask";
import NestedCallList from "../pages/TaskAssign/NestingCallList";
import UserTaskList from "../pages/TaskAssign/UserTaskList";
import MasterTaskList from "../pages/TaskAssign/MasterTaskList";
import UploadBulkTask from "../pages/TaskAssign/UploadBulkTask";
import UploadNeatedTask from "../pages/TaskAssign/UploadNestedTask";
import NintySeriesList from "../pages/TaskAssign/NintySeriesList";
import NintySeriesSerach from "../pages/TaskAssign/NintySeriesSearch";
import SurrenderList from "../pages/TaskAssign/SurrenderList";
import PaymentStatus from "../pages/Account/PaymentStatus";
import LedgerPayment from "../pages/Account/LedgerPayment";
import DownloadInvoice from "../pages/Account/DownloadInvoice";
import SurrenderClientList from "../pages/Account/SurrenderClientList";
// import SurrenderList from "../pages/TaskAssign/SurrenderList";
const Routing = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />

          <Route path="/DashBoard" element={<DashBoard />} />

          <Route path="/Logout" element={<Logout />} />
          <Route path="*" element={<Error404 />} />
          <Route path="/Error403" element={<Error403 />} />
          <Route path="/Error500" element={<Error500 />} />
          {/* deskOne */}
          <Route path="/DashBoard" element={<MainSectionContainer />} />
          {/* whatsapp lead  */}
          <Route path="/DashBoard/WhatsappLead" element={<WhatsappStatus/>} />
          <Route path="/DashBoard/WhatsappLeadAdd" element={<WhatsappLeadAdd/>} />

          {/* deskone */}
          <Route path="/DashBoard/DeskOne" element={<DeskOne />} />
          {/* quickreport */}
          <Route path="/DashBoard/QuickReport" element={""} />
          {/* user permission */}
          <Route path="/DashBoard/PermissionForm" element={<PermissionForm/>} />
          <Route path="/DashBoard/PermissionUserList" element={<PermissionUserList/>} />
          <Route path="/DashBoard/QcClientList" element={<QcClientList/>} />
          {/* Employee */}
          <Route path="/DashBoard/Attendance" element={<Attendance/>} />
          <Route path="/DashBoard/EmployeeForm" element={<EmployeeForm/>} />
          <Route path="/DashBoard/EmployeeList" element={<EmployeeList/>} />
          {/* call Audit */}
          <Route path="/DashBoard/CallList" element={<CallList/>} />
          <Route path="/DashBoard/CallReport" element={<CallReport/>} />
          <Route path="/DashBoard/EmployeeCallReport" element={<EmployeeCallReport/>} />
          {/* bd team */}
          <Route path="/DashBoard/AddClientPayment" element={""} />
          <Route path="/DashBoard/UploadLeads" element={""} />
          <Route path="/DashBoard/UploadDscLeads" element={""} />
          <Route path="/DashBoard/GeneratePaymentLink" element={""} />
          <Route path="/DashBoard/AddPanClient" element={""} />
          <Route path="/DashBoard/AddIrctcClient" element={""} />
          <Route path="/DashBoard/AddAirlineClient" element={""} />
          <Route path="/DashBoard/AddHvlClient" element={""} />
          <Route path="/DashBoard/AddIrctcDistributor" element={""} />
          <Route path="/DashBoard/AddAirlineDistributor" element={""} />
          <Route path="/DashBoard/AddDscClient" element={""} />
          <Route path="/DashBoard/InterestedIn" element={""} />
          <Route path="/DashBoard/ServiceEnhance" element={""} />
          <Route path="/DashBoard/PanServiceEnhanceList" element={""} />
          <Route path="/DashBoard/IrctcServiceEnhanceList" element={""} />
          <Route path="/DashBoard/AirlineServiceEnhanceList" element={""} />
          <Route path="/DashBoard/ListClient" element={""} />
          <Route path="/DashBoard/LeadList" element={""} />
          <Route path="/DashBoard/PaymentLinkList" element={""} />
          <Route path="/DashBoard/Supervisor" element={""} />
          <Route path="/DashBoard/DscClientList" element={""} />
          <Route path="/DashBoard/LeadStatusIrctc" element={""} />
          <Route path="/DashBoard/LeadStatusDsc" element={""} />
          <Route path="/DashBoard/ClientRequirementReport" element={""} />
          <Route path="/DashBoard/MissedCallList" element={""} />
          <Route path="/DashBoard/DmtRetentionUpload" element={""} />
          <Route path="/DashBoard/IrctcUserCount" element={""} />
          <Route path="/DashBoard/ReAssignLeadIrctc" element={""} />
          <Route path="/DashBoard/ReAssignLeadDsc" element={""} />
          <Route path="/DashBoard/AddDscMeetingRecord" element={""} />
          <Route path="/DashBoard/DscMeetingRecord" element={""} />
          {/* Accounts */}
          <Route path="/DashBoard/PaymentStatus" element={<PaymentStatus/>} />
          <Route path="/DashBoard/LedgerPayment" element={<LedgerPayment/>} />
          <Route path="/DashBoard/DownloadInvoice" element={<DownloadInvoice/>} />
          <Route path="/DashBoard/SurrenderClientList" element={<SurrenderClientList/>} />
          {/* Documentation */}
          <Route path="/DashBoard/AllClosureList" element={""} />
          <Route path="/DashBoard/PanClosureList" element={""} />
          <Route path="/DashBoard/IrctcClosureList" element={""} />
          <Route path="/DashBoard/AirlineClosureList" element={""} />
          <Route path="/DashBoard/RegisterUrlList" element={""} />
          <Route path="/DashBoard/ClientInfoUpdate" element={""} />
          <Route path="/DashBoard/UrnClientUpdate" element={""} />
          <Route path="/DashBoard/FileList" element={""} />
          <Route path="/DashBoard/UpdateCourierData" element={""} />
          <Route path="/DashBoard/CourierList" element={""} />
          <Route path="/DashBoard/DocumentRecive" element={""} />
          <Route path="/DashBoard/UploadDocument" element={""} />
          {/* id creation */}
          <Route path="/DashBoard/ProgressingList" element={""} />
          <Route path="/DashBoard/IrctcProgressingList" element={""} />
          <Route path="/DashBoard/AirlineProgressingList" element={""} />
          <Route path="/DashBoard/listClient" element={""} />
          <Route path="/DashBoard/AirlineListClient" element={""} />
          <Route path="/DashBoard/irctcListClient" element={""} />
          <Route path="/DashBoard/BranchCodeStatus" element={""} />
          {/* Training And Support */}
          <Route path="/DashBoard/AddIrctcPortalId" element={""} />
          <Route path="/DashBoard/AddAirlinePortalId" element={""} />
          <Route path="/DashBoard/ActiveIds" element={""} />
          <Route path="/DashBoard/TraineeList" element={""} />
          <Route path="/DashBoard/TrainingTracker" element={""} />
          <Route path="/DashBoard/QueriesAndComplaints" element={""} />
          <Route path="/DashBoard/UtiObservation" element={""} />
          <Route path="/DashBoard/UtiObservationList" element={""} />
          <Route path="/DashBoard/UploadUtiList" element={""} />
          <Route path="/DashBoard/QueriesAndComplaintsList" element={""} />
          <Route path="/DashBoard/BranchMaster" element={""} />
          <Route path="/DashBoard/SupportCall" element={""} />
          <Route path="/DashBoard/SurrenderForm" element={""} />
          <Route path="/DashBoard/SurrenderList" element={<SurrenderList/>} />
          <Route path="/DashBoard/OutstandingUploadData" element={""} />
          {/* task Assign */}
          <Route path="/DashBoard/CreateTask" element={<CreateTask/>} />
          <Route path="/DashBoard/NestingCallList" element={<NestedCallList/>} />
          <Route path="/DashBoard/UserTaskList" element={<UserTaskList/>} />
          <Route path="/DashBoard/MasterTaskList" element={<MasterTaskList/>} />
          <Route path="/DashBoard/UploadBulkTask" element={<UploadBulkTask/>} />
          <Route path="/DashBoard/UploadNestedTask" element={<UploadNeatedTask/>} />
          <Route path="/DashBoard/90SeriesList" element={<NintySeriesList/>} />
          <Route path="/DashBoard/90SeriesSearch" element={<NintySeriesSerach/>} />
          {/* Ticket Manager */}
          <Route path="/DashBoard/CreateTicket" element={<CreateTicket/>} />
          <Route path="/DashBoard/viewTicket" element={<ViewTicket/>} />
          <Route path="/DashBoard/UserTicketList" element={<UserTicket/>} />
          <Route path="/DashBoard/MasterTicketList" element={<MasterTicket/>} />
          {/* leave  */}
          <Route path="/DashBoard/LeaveForm" element={""} />
          <Route path="/DashBoard/LeaveRecord" element={""} />
          <Route path="/DashBoard/HrLeaveRecord" element={""} />
        </Routes>
      </Router>
    </>
  );
};

export default Routing;
