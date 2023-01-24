import React from "react";
import { Link } from "react-router-dom";

export default function MainSidebar() {
  return (
    <ul className="menu-list">
      <li className="divider py-2 lh-sm">
        <span className="small">MAIN</span>
        <br />{" "}
      </li>
      <li className="collapsed">
        <Link
          className="m-link active"
          data-bs-toggle="collapse"
          data-bs-target="#my_dashboard"
          to="#"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            fill="currentColor"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="m8 3.293 6 6V13.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5V9.293l6-6zm5-.793V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z"
            />
            <path
              className="var(--secondary-color)"
              fill-rule="evenodd"
              d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z"
            />
          </svg>
          <span className="ms-2">My Dashboard</span>
          <span className="arrow fa fa-angle-right ms-auto text-end"></span>
        </Link>
        {/* <!-- Menu: Sub menu ul --> */}
        <ul className="sub-menu collapse show" id="my_dashboard">
          <li>
            <Link className="ms-link active" to="/DashBoard/DeskOne">
              Dashboard
            </Link>
          </li>
          <li>
            <Link className="ms-link" to="/DashBoard/QuickReport">
              Quick Report
            </Link>
          </li>
          <li>
            <Link className="ms-link" to="index-iot.html">
              IOT
            </Link>
          </li>
        </ul>
      </li>
      <li className="collapsed">
        <Link
          className="m-link"
          data-bs-toggle="collapse"
          data-bs-target="#menu_dashboard"
          to="#"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            fill="currentColor"
            viewBox="0 0 16 16"
          >
            <path
              className="fill-secondary"
              d="M8 4a.5.5 0 0 1 .5.5V6a.5.5 0 0 1-1 0V4.5A.5.5 0 0 1 8 4zM3.732 5.732a.5.5 0 0 1 .707 0l.915.914a.5.5 0 1 1-.708.708l-.914-.915a.5.5 0 0 1 0-.707zM2 10a.5.5 0 0 1 .5-.5h1.586a.5.5 0 0 1 0 1H2.5A.5.5 0 0 1 2 10zm9.5 0a.5.5 0 0 1 .5-.5h1.5a.5.5 0 0 1 0 1H12a.5.5 0 0 1-.5-.5zm.754-4.246a.389.389 0 0 0-.527-.02L7.547 9.31a.91.91 0 1 0 1.302 1.258l3.434-4.297a.389.389 0 0 0-.029-.518z"
            />
            <path
              fill-rule="evenodd"
              d="M0 10a8 8 0 1 1 15.547 2.661c-.442 1.253-1.845 1.602-2.932 1.25C11.309 13.488 9.475 13 8 13c-1.474 0-3.31.488-4.615.911-1.087.352-2.49.003-2.932-1.25A7.988 7.988 0 0 1 0 10zm8-7a7 7 0 0 0-6.603 9.329c.203.575.923.876 1.68.63C4.397 12.533 6.358 12 8 12s3.604.532 4.923.96c.757.245 1.477-.056 1.68-.631A7 7 0 0 0 8 3z"
            />
          </svg>
          <span className="ms-2">B.D. Team</span>
          <span className="arrow fa fa-angle-right ms-auto text-end"></span>
        </Link>
        {/* <!-- Menu: Sub menu ul --> */}
        <ul className="sub-menu collapse" id="menu_dashboard">
          <li>
            <Link className="ms-link" to="/DashBoard/AddClientPayment">
              Add Client's Payment
            </Link>
          </li>
          <li>
            <Link className="ms-link" to="/DashBoard/UploadLeads">
              Upload Lead
            </Link>
          </li>
          <li>
            <Link className="ms-link" to="/DashBoard/UploadDscLeads">
              Upload DSC Lead
            </Link>
          </li>
          <li>
            <Link className="ms-link" to="/DashBoard/GeneratePaymentLink">
              Generate Payment link
            </Link>
          </li>
          <li>
            <Link className="ms-link" to="/DashBoard/AddPanClient">
              Add Pan Clients
            </Link>
          </li>
          <li>
            <Link className="ms-link" to="/DashBoard/AddIrctcClient">
              Add IRCTC Clients
            </Link>
          </li>
          <li>
            <Link className="ms-link" to="/DashBoard/AddAirlineClient">
              Add Airline Clients
            </Link>
          </li>
          <li>
            <Link className="ms-link" to="/DashBoard/AddDscClient">
              Add DSC Clients
            </Link>
          </li>
          <li>
            <Link className="ms-link" to="/DashBoard/AddHvlClient">
              Add HVL Clients
            </Link>
          </li>
          <li>
            <Link className="ms-link" to="/DashBoard/AddIrctcDistributor">
              Add IRCTC Distributor
            </Link>
          </li>
          <li>
            <Link className="ms-link" to="/DashBoard/AddAirlineDistributor">
              Add Airline Distributor
            </Link>
          </li>
          <li>
            <Link className="ms-link" to="/DashBoard/InterestedIn">
              Interested IN
            </Link>
          </li>
          <li>
            <Link className="ms-link" to="/DashBoard/ServiceEnhance">
              Service Enhance
            </Link>
          </li>
          <li>
            <Link className="ms-link" to="/DashBoard/PanServiceEnhanceList">
              Pan Service Enhance List
            </Link>
          </li>

          <li>
            <Link className="ms-link" to="/DashBoard/IrctcServiceEnhanceList">
              IRCTC Service Enhance List
            </Link>
          </li>
          <li>
            <Link className="ms-link" to="/DashBoard/AirlineServiceEnhanceList">
              Airline Service Enhance List
            </Link>
          </li>
          <li>
            <Link className="ms-link" to="/DashBoard/ListClient">
              List Client
            </Link>
          </li>
          <li>
            <Link className="ms-link" to="/DashBoard/LeadList">
              Lead List
            </Link>
          </li>
          <li>
            <Link className="ms-link" to="/DashBoard/PaymentLinkList">
              Payment Link List
            </Link>
          </li>
          <li>
            <Link className="ms-link" to="/DashBoard/Supervisor">
              Supervisor
            </Link>
          </li>
          <li>
            <Link className="ms-link" to="/DashBoard/DscClientList">
              DSC Client List
            </Link>
          </li>
          <li>
            <Link className="ms-link" to="/DashBoard/LeadStatusDsc">
              Lead Status DSC
            </Link>
          </li>
          <li>
            <Link className="ms-link" to="/DashBoard/LeadStatusIrctc">
              Lead Status IRCTC
            </Link>
          </li>
          <li>
            <Link className="ms-link" to="/DashBoard/ClientRequirementReport">
              Client Requirement Reports
            </Link>
          </li>
          <li>
            <Link className="ms-link" to="/DashBoard/MissedCallList">
              Missed Call List
            </Link>
          </li>
          <li>
            <Link className="ms-link" to="/DashBoard/DmtRetentionUpload">
              DMT Retention Upload
            </Link>
          </li>
          <li>
            <Link className="ms-link" to="/DashBoard/WhatsappLead">
              Whatsapp Lead
            </Link>
          </li>
          <li>
            <Link className="ms-link" to="/DashBoard/WhatsappLeadAdd">
              Whatsapp Lead Status
            </Link>
          </li>
          <li>
            <Link className="ms-link" to="/DashBoard/IrctcUserCount">
              IRCTC User Count
            </Link>
          </li>
          <li>
            <Link className="ms-link" to="/DashBoard/ReAssignLeadIrctc">
              Re-assign Lead IRCTC
            </Link>
          </li>
          <li>
            <Link className="ms-link" to="/DashBoard/ReAssignLeadDsc">
              Re-assign Lead DSC
            </Link>
          </li>
          <li>
            <Link className="ms-link" to="/DashBoard/AddDscMeetingRecord">
              Add DSC Meeting Record
            </Link>
          </li>
          <li>
            <Link className="ms-link" to="/DashBoard/DscMeetingRecord">
              DSC Meeting Record
            </Link>
          </li>
        </ul>
      </li>
      <li className="collapsed">
        <Link
          className="m-link"
          data-bs-toggle="collapse"
          data-bs-target="#menu-Applications"
          to="#"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            fill="currentColor"
            viewBox="0 0 16 16"
          >
            <path d="M5.5 2A3.5 3.5 0 0 0 2 5.5v5A3.5 3.5 0 0 0 5.5 14h5a3.5 3.5 0 0 0 3.5-3.5V8a.5.5 0 0 1 1 0v2.5a4.5 4.5 0 0 1-4.5 4.5h-5A4.5 4.5 0 0 1 1 10.5v-5A4.5 4.5 0 0 1 5.5 1H8a.5.5 0 0 1 0 1H5.5z" />
            <path
              className="fill-secondary"
              d="M16 3a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"
            />
          </svg>
          <span className="ms-2">Accounts</span>
          <span className="arrow fa fa-angle-right ms-auto text-end"></span>
        </Link>
        {/* <!-- Menu: Sub menu ul --> */}
        <ul className="sub-menu collapse" id="menu-Applications">
          <li>
            <Link className="ms-link" to="/DashBoard/PaymentStatus">
              Payment Status
            </Link>
          </li>
          <li>
            <Link className="ms-link" to="/DashBoard/LedgerPayment">
              Ledger Payment
            </Link>
          </li>
          <li>
            <Link className="ms-link" to="/DashBoard/DownloadInvoice">
              Download Invoice
            </Link>
          </li>
          <li>
            <Link className="ms-link" to="/DashBoard/SurrenderClientList">
              Surrender Client List
            </Link>
          </li>
        </ul>
      </li>
      <li className="collapsed">
        <Link
          className="m-link"
          data-bs-toggle="collapse"
          data-bs-target="#menu_pages"
          to="#"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            fill="currentColor"
            viewBox="0 0 16 16"
          >
            <path
              className="fill-secondary"
              fill-rule="evenodd"
              d="M8.646 5.646a.5.5 0 0 1 .708 0l2 2a.5.5 0 0 1 0 .708l-2 2a.5.5 0 0 1-.708-.708L10.293 8 8.646 6.354a.5.5 0 0 1 0-.708zm-1.292 0a.5.5 0 0 0-.708 0l-2 2a.5.5 0 0 0 0 .708l2 2a.5.5 0 0 0 .708-.708L5.707 8l1.647-1.646a.5.5 0 0 0 0-.708z"
            />
            <path d="M3 0h10a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-1h1v1a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v1H1V2a2 2 0 0 1 2-2z" />
            <path d="M1 5v-.5a.5.5 0 0 1 1 0V5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0V8h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0v.5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1z" />
          </svg>
          <span className="ms-2">Documentation</span>
          <span className="arrow fa fa-angle-right ms-auto text-end"></span>
        </Link>
        {/* <!-- Menu: Sub menu ul --> */}
        <ul className="sub-menu collapse" id="menu_pages">
          <li>
            <Link className="ms-link" to="/DashBoard/AllClosureList">
              All Closure List
            </Link>
          </li>
          <li>
            <Link className="ms-link" to="/DashBoard/PanClosureList">
              Pan Closure List
            </Link>
          </li>
          <li>
            <Link className="ms-link" to="/DashBoard/IrctcClosureList">
              IRCTC Closure List
            </Link>
          </li>
          <li>
            <Link className="ms-link" to="/DashBoard/AirlineClosureList">
              Airline Closure List
            </Link>
          </li>
          <li>
            <Link className="ms-link" to="/DashBoard/PanServiceEnhanceList">
              Pan Service Enhance List
            </Link>
          </li>
          <li>
            <Link className="ms-link" to="/DashBoard/IrctcServiceEnhanceList">
              IRCTC Service Enhance List
            </Link>
          </li>
          <li>
            <Link className="ms-link" to="/DashBoard/AirlineServiceEnhanceList">
              Airline Service Enhance List
            </Link>
          </li>
          <li>
            <Link className="ms-link" to="/DashBoard/RegisterUrlList">
              Register URL List
            </Link>
          </li>
          <li>
            <Link className="ms-link" to="/DashBoard/ClientInfoUpdate">
              Client Info Update
            </Link>
          </li>
          <li>
            <Link className="ms-link" to="/DashBoard/UrnClientUpdate">
              URN Client Update
            </Link>
          </li>
          <li>
            <Link className="ms-link" to="/DashBoard/FileList">
              File List
            </Link>
          </li>
          <li>
            <Link className="ms-link" to="/DashBoard/UpdateCourierData">
              Update Courier data
            </Link>
          </li>
          <li>
            <Link className="ms-link" to="/DashBoard/CourierList">
              Courier List
            </Link>
          </li>
          <li>
            <Link className="ms-link" to="/DashBoard/DocumentRecive">
              Document Receive
            </Link>
          </li>
          <li>
            <Link className="ms-link" to="/DashBoard/UploadDocument">
              Upload Document
            </Link>
          </li>
        </ul>
      </li>
      <li className="collapsed">
        <Link
          className="m-link"
          data-bs-toggle="collapse"
          data-bs-target="#menu-Account"
          to="#"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            fill="currentColor"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M2 1C1.46957 1 0.960859 1.21071 0.585786 1.58579C0.210714 1.96086 0 2.46957 0 3L0 13C0 13.5304 0.210714 14.0391 0.585786 14.4142C0.960859 14.7893 1.46957 15 2 15H14C14.5304 15 15.0391 14.7893 15.4142 14.4142C15.7893 14.0391 16 13.5304 16 13V3C16 2.46957 15.7893 1.96086 15.4142 1.58579C15.0391 1.21071 14.5304 1 14 1H2ZM1 3C1 2.73478 1.10536 2.48043 1.29289 2.29289C1.48043 2.10536 1.73478 2 2 2H14C14.2652 2 14.5196 2.10536 14.7071 2.29289C14.8946 2.48043 15 2.73478 15 3V13C15 13.2652 14.8946 13.5196 14.7071 13.7071C14.5196 13.8946 14.2652 14 14 14H2C1.73478 14 1.48043 13.8946 1.29289 13.7071C1.10536 13.5196 1 13.2652 1 13V3ZM2 5.5C2 5.36739 2.05268 5.24021 2.14645 5.14645C2.24021 5.05268 2.36739 5 2.5 5H6C6.13261 5 6.25979 5.05268 6.35355 5.14645C6.44732 5.24021 6.5 5.36739 6.5 5.5C6.5 5.63261 6.44732 5.75979 6.35355 5.85355C6.25979 5.94732 6.13261 6 6 6H2.5C2.36739 6 2.24021 5.94732 2.14645 5.85355C2.05268 5.75979 2 5.63261 2 5.5ZM2 8.5C2 8.36739 2.05268 8.24021 2.14645 8.14645C2.24021 8.05268 2.36739 8 2.5 8H6C6.13261 8 6.25979 8.05268 6.35355 8.14645C6.44732 8.24021 6.5 8.36739 6.5 8.5C6.5 8.63261 6.44732 8.75979 6.35355 8.85355C6.25979 8.94732 6.13261 9 6 9H2.5C2.36739 9 2.24021 8.94732 2.14645 8.85355C2.05268 8.75979 2 8.63261 2 8.5ZM2 10.5C2 10.3674 2.05268 10.2402 2.14645 10.1464C2.24021 10.0527 2.36739 10 2.5 10H6C6.13261 10 6.25979 10.0527 6.35355 10.1464C6.44732 10.2402 6.5 10.3674 6.5 10.5C6.5 10.6326 6.44732 10.7598 6.35355 10.8536C6.25979 10.9473 6.13261 11 6 11H2.5C2.36739 11 2.24021 10.9473 2.14645 10.8536C2.05268 10.7598 2 10.6326 2 10.5Z"
            />
            <path
              className="fill-secondary"
              d="M8.5 11C8.5 11 8 11 8 10.5C8 10 8.5 8.5 11 8.5C13.5 8.5 14 10 14 10.5C14 11 13.5 11 13.5 11H8.5ZM11 8C11.3978 8 11.7794 7.84196 12.0607 7.56066C12.342 7.27936 12.5 6.89782 12.5 6.5C12.5 6.10218 12.342 5.72064 12.0607 5.43934C11.7794 5.15804 11.3978 5 11 5C10.6022 5 10.2206 5.15804 9.93934 5.43934C9.65804 5.72064 9.5 6.10218 9.5 6.5C9.5 6.89782 9.65804 7.27936 9.93934 7.56066C10.2206 7.84196 10.6022 8 11 8V8Z"
            />
          </svg>
          <span className="ms-2">ID Creation</span>
          <span className="arrow fa fa-angle-right ms-auto text-end"></span>
        </Link>
        {/* <!-- Menu: Sub menu ul --> */}
        <ul className="sub-menu collapse" id="menu-Account">
          <li>
            <Link className="ms-link" to="/DashBoard/ProgressingList">
              Processing List
            </Link>
          </li>
          <li>
            <Link className="ms-link" to="/DashBoard/IrctcProgressingList">
              IRCTC Processing List
            </Link>
          </li>
          <li>
            <Link className="ms-link" to="/DashBoard/AirlineProgressingList">
              Airline Processing List
            </Link>
          </li>
          <li>
            <Link className="ms-link" to="/DashBoard/listClient">
              List Client
            </Link>
          </li>
          <li>
            <Link className="ms-link" to="/DashBoard/irctcListClient">
              IRCTC List Client
            </Link>
          </li>
          <li>
            <Link className="ms-link" to="/DashBoard/AirlineListClient">
              Airline List Client
            </Link>
          </li>
          <li>
            <Link className="ms-link" to="/DashBoard/BranchCodeStatus">
              Branch Code Status
            </Link>
          </li>
        </ul>
      </li>
      <li className="collapsed">
        <Link
          className="m-link"
          data-bs-toggle="collapse"
          data-bs-target="#menu-Authentication"
          to="#"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            fill="currentColor"
            viewBox="0 0 16 16"
          >
            <path d="M5.33801 1.59C4.38559 1.85248 3.43965 2.1379 2.50101 2.446C2.41529 2.47376 2.3391 2.52504 2.28111 2.59399C2.22312 2.66295 2.18567 2.7468 2.17301 2.836C1.61901 6.993 2.89901 10.026 4.42601 12.024C5.07252 12.8784 5.84341 13.6311 6.71301 14.257C7.05901 14.501 7.36501 14.677 7.60601 14.79C7.72601 14.847 7.82401 14.885 7.89901 14.908C7.93181 14.9195 7.96562 14.9279 8.00001 14.933C8.03398 14.9275 8.06743 14.9191 8.10001 14.908C8.17601 14.885 8.27401 14.847 8.39401 14.79C8.63401 14.677 8.94101 14.5 9.28701 14.257C10.1566 13.6311 10.9275 12.8784 11.574 12.024C13.101 10.027 14.381 6.993 13.827 2.836C13.8145 2.74676 13.777 2.66285 13.719 2.59388C13.661 2.52491 13.5848 2.47366 13.499 2.446C12.848 2.233 11.749 1.886 10.662 1.591C9.55201 1.29 8.53101 1.067 8.00001 1.067C7.47001 1.067 6.44801 1.289 5.33801 1.59ZM5.07201 0.56C6.15701 0.265 7.31001 0 8.00001 0C8.69001 0 9.84301 0.265 10.928 0.56C12.038 0.86 13.157 1.215 13.815 1.43C14.0901 1.52085 14.334 1.68747 14.5187 1.9107C14.7034 2.13394 14.8213 2.40474 14.859 2.692C15.455 7.169 14.072 10.487 12.394 12.682C11.6824 13.621 10.834 14.4479 9.87701 15.135C9.5461 15.3728 9.19549 15.5819 8.82901 15.76C8.54901 15.892 8.24801 16 8.00001 16C7.75201 16 7.45201 15.892 7.17101 15.76C6.80452 15.5819 6.45391 15.3728 6.12301 15.135C5.16603 14.4478 4.31759 13.621 3.60601 12.682C1.92801 10.487 0.545005 7.169 1.14101 2.692C1.17869 2.40474 1.29665 2.13394 1.48132 1.9107C1.666 1.68747 1.9099 1.52085 2.18501 1.43C3.1402 1.11681 4.10281 0.826725 5.07201 0.56Z" />
            <path
              className="fill-secondary"
              d="M8 5.38462C8.21217 5.38462 8.41566 5.46566 8.56569 5.60992C8.71571 5.75418 8.8 5.94983 8.8 6.15385V6.53846H7.2V6.15385C7.2 5.94983 7.28429 5.75418 7.43431 5.60992C7.58434 5.46566 7.78783 5.38462 8 5.38462ZM9.2 6.53846V6.15385C9.2 5.84783 9.07357 5.55434 8.84853 5.33795C8.62348 5.12157 8.31826 5 8 5C7.68174 5 7.37652 5.12157 7.15147 5.33795C6.92643 5.55434 6.8 5.84783 6.8 6.15385V6.53846C6.58783 6.53846 6.38434 6.61951 6.23431 6.76376C6.08429 6.90802 6 7.10368 6 7.30769V9.23077C6 9.43478 6.08429 9.63044 6.23431 9.7747C6.38434 9.91896 6.58783 10 6.8 10H9.2C9.41217 10 9.61566 9.91896 9.76569 9.7747C9.91571 9.63044 10 9.43478 10 9.23077V7.30769C10 7.10368 9.91571 6.90802 9.76569 6.76376C9.61566 6.61951 9.41217 6.53846 9.2 6.53846Z"
            />
          </svg>
          <span className="ms-2">Training & Support</span>
          <span className="arrow fa fa-angle-right ms-auto text-end"></span>
        </Link>
        {/* <!-- Menu: Sub menu ul --> */}
        <ul className="sub-menu collapse" id="menu-Authentication">
          <li>
            <Link className="ms-link" to="/DashBoard/AddIrctcPortalId">
              Add IRCTC Portal Id
            </Link>
          </li>
          <li>
            <Link className="ms-link" to="/DashBoard/AddAirlinePortalId">
              Add Airline Portal Id
            </Link>
          </li>
          <li>
            <Link className="ms-link" to="/DashBoard/ActiveIds">
              Active Id's
            </Link>
          </li>
          <li>
            <Link className="ms-link" to="/DashBoard/TrainingTracker">
              Training Tracker
            </Link>
          </li>
          <li>
            <Link className="ms-link" to="/DashBoard/QueriesAndComplaints">
              Queries & Complaints
            </Link>
          </li>
          <li>
            <Link className="ms-link" to="/DashBoard/UtiObservation">
              UTI Observation
            </Link>
          </li>
          <li>
            <Link className="ms-link" to="/DashBoard/UtiObservationList">
              UTI Observation List
            </Link>
          </li>
          <li>
            <Link className="ms-link" to="/DashBoard/UploadUtiList">
              Upload UTI List
            </Link>
          </li>
          <li>
            <Link className="ms-link" to="/DashBoard/QueriesAndComplaintsList">
              Queries & Complaints List
            </Link>
          </li>
          <li>
            <Link className="ms-link" to="/DashBoard/BranchMaster">
              Branch Master
            </Link>
          </li>
          <li>
            <Link className="ms-link" to="/DashBoard/SupportCall">
              Support Call
            </Link>
          </li>
          <li>
            <Link className="ms-link" to="/DashBoard/SurrenderForm">
              Surrender Form
            </Link>
          </li>
          <li>
            <Link className="ms-link" to="/DashBoard/SurrenderList">
              Surrender List
            </Link>
          </li>
          <li>
            <Link className="ms-link" to="/DashBoard/OutstandingUploadData">
              Outstanding Upload Data
            </Link>
          </li>
        </ul>
      </li>
      <li className="collapsed">
        <Link
          className="m-link"
          data-bs-toggle="collapse"
          data-bs-target="#menu-level0"
          to="#"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            fill="currentColor"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M6 3.5C6 3.10218 6.15804 2.72064 6.43934 2.43934C6.72064 2.15804 7.10218 2 7.5 2H8.5C8.89782 2 9.27936 2.15804 9.56066 2.43934C9.84196 2.72064 10 3.10218 10 3.5V4.5C10 4.89782 9.84196 5.27936 9.56066 5.56066C9.27936 5.84196 8.89782 6 8.5 6V7H14C14.1326 7 14.2598 7.05268 14.3536 7.14645C14.4473 7.24021 14.5 7.36739 14.5 7.5V8.5C14.5 8.63261 14.4473 8.75979 14.3536 8.85355C14.2598 8.94732 14.1326 9 14 9C13.8674 9 13.7402 8.94732 13.6464 8.85355C13.5527 8.75979 13.5 8.63261 13.5 8.5V8H8.5V8.5C8.5 8.63261 8.44732 8.75979 8.35355 8.85355C8.25979 8.94732 8.13261 9 8 9C7.86739 9 7.74021 8.94732 7.64645 8.85355C7.55268 8.75979 7.5 8.63261 7.5 8.5V8H2.5V8.5C2.5 8.63261 2.44732 8.75979 2.35355 8.85355C2.25979 8.94732 2.13261 9 2 9C1.86739 9 1.74021 8.94732 1.64645 8.85355C1.55268 8.75979 1.5 8.63261 1.5 8.5V7.5C1.5 7.36739 1.55268 7.24021 1.64645 7.14645C1.74021 7.05268 1.86739 7 2 7H7.5V6C7.10218 6 6.72064 5.84196 6.43934 5.56066C6.15804 5.27936 6 4.89782 6 4.5V3.5Z"
            />
            <path
              className="fill-secondary"
              d="M0.43934 10.4393C0.158035 10.7206 0 11.1022 0 11.5V12.5C0 12.8978 0.158035 13.2794 0.43934 13.5607C0.720644 13.842 1.10218 14 1.5 14H2.5C2.89782 14 3.27936 13.842 3.56066 13.5607C3.84196 13.2794 4 12.8978 4 12.5V11.5C4 11.1022 3.84196 10.7206 3.56066 10.4393C3.27936 10.158 2.89782 10 2.5 10H1.5C1.10218 10 0.720644 10.158 0.43934 10.4393Z"
            />
            <path
              className="fill-secondary"
              d="M6.43934 10.4393C6.15804 10.7206 6 11.1022 6 11.5V12.5C6 12.8978 6.15804 13.2794 6.43934 13.5607C6.72064 13.842 7.10218 14 7.5 14H8.5C8.89782 14 9.27936 13.842 9.56066 13.5607C9.84196 13.2794 10 12.8978 10 12.5V11.5C10 11.1022 9.84196 10.7206 9.56066 10.4393C9.27936 10.158 8.89782 10 8.5 10H7.5C7.10218 10 6.72064 10.158 6.43934 10.4393Z"
            />
            <path
              className="fill-secondary"
              d="M12.4393 10.4393C12.158 10.7206 12 11.1022 12 11.5V12.5C12 12.8978 12.158 13.2794 12.4393 13.5607C12.7206 13.842 13.1022 14 13.5 14H14.5C14.8978 14 15.2794 13.842 15.5607 13.5607C15.842 13.2794 16 12.8978 16 12.5V11.5C16 11.1022 15.842 10.7206 15.5607 10.4393C15.2794 10.158 14.8978 10 14.5 10H13.5C13.1022 10 12.7206 10.158 12.4393 10.4393Z"
            />
          </svg>
          <span className="ms-2">Call Audit</span>
          <span className="arrow fa fa-angle-right ms-auto text-end"></span>
        </Link>
        {/* <!-- Menu: Sub menu ul --> */}
        <ul className="sub-menu collapse" id="menu-level0">
          <li>
            <Link className="ms-link" to="/DashBoard/CallList">
              Call List
            </Link>
          </li>

          <li>
            <Link className="ms-link" to="/DashBoard/CallReport">
              Call Audit Report
            </Link>
          </li>
          <li>
            <Link className="ms-link" to="/DashBoard/EmployeeCallReport">
              Emp. Call Audit Report
            </Link>
          </li>
        </ul>
      </li>
      <li className="collapsed">
        <Link
          className="m-link"
          data-bs-toggle="collapse"
          data-bs-target="#menu-WhatsappLead"
          to="#"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            fill="currentColor"
            viewBox="0 0 16 16"
          >
            <path d="M5.33801 1.59C4.38559 1.85248 3.43965 2.1379 2.50101 2.446C2.41529 2.47376 2.3391 2.52504 2.28111 2.59399C2.22312 2.66295 2.18567 2.7468 2.17301 2.836C1.61901 6.993 2.89901 10.026 4.42601 12.024C5.07252 12.8784 5.84341 13.6311 6.71301 14.257C7.05901 14.501 7.36501 14.677 7.60601 14.79C7.72601 14.847 7.82401 14.885 7.89901 14.908C7.93181 14.9195 7.96562 14.9279 8.00001 14.933C8.03398 14.9275 8.06743 14.9191 8.10001 14.908C8.17601 14.885 8.27401 14.847 8.39401 14.79C8.63401 14.677 8.94101 14.5 9.28701 14.257C10.1566 13.6311 10.9275 12.8784 11.574 12.024C13.101 10.027 14.381 6.993 13.827 2.836C13.8145 2.74676 13.777 2.66285 13.719 2.59388C13.661 2.52491 13.5848 2.47366 13.499 2.446C12.848 2.233 11.749 1.886 10.662 1.591C9.55201 1.29 8.53101 1.067 8.00001 1.067C7.47001 1.067 6.44801 1.289 5.33801 1.59ZM5.07201 0.56C6.15701 0.265 7.31001 0 8.00001 0C8.69001 0 9.84301 0.265 10.928 0.56C12.038 0.86 13.157 1.215 13.815 1.43C14.0901 1.52085 14.334 1.68747 14.5187 1.9107C14.7034 2.13394 14.8213 2.40474 14.859 2.692C15.455 7.169 14.072 10.487 12.394 12.682C11.6824 13.621 10.834 14.4479 9.87701 15.135C9.5461 15.3728 9.19549 15.5819 8.82901 15.76C8.54901 15.892 8.24801 16 8.00001 16C7.75201 16 7.45201 15.892 7.17101 15.76C6.80452 15.5819 6.45391 15.3728 6.12301 15.135C5.16603 14.4478 4.31759 13.621 3.60601 12.682C1.92801 10.487 0.545005 7.169 1.14101 2.692C1.17869 2.40474 1.29665 2.13394 1.48132 1.9107C1.666 1.68747 1.9099 1.52085 2.18501 1.43C3.1402 1.11681 4.10281 0.826725 5.07201 0.56Z" />
            <path
              className="fill-secondary"
              d="M8 5.38462C8.21217 5.38462 8.41566 5.46566 8.56569 5.60992C8.71571 5.75418 8.8 5.94983 8.8 6.15385V6.53846H7.2V6.15385C7.2 5.94983 7.28429 5.75418 7.43431 5.60992C7.58434 5.46566 7.78783 5.38462 8 5.38462ZM9.2 6.53846V6.15385C9.2 5.84783 9.07357 5.55434 8.84853 5.33795C8.62348 5.12157 8.31826 5 8 5C7.68174 5 7.37652 5.12157 7.15147 5.33795C6.92643 5.55434 6.8 5.84783 6.8 6.15385V6.53846C6.58783 6.53846 6.38434 6.61951 6.23431 6.76376C6.08429 6.90802 6 7.10368 6 7.30769V9.23077C6 9.43478 6.08429 9.63044 6.23431 9.7747C6.38434 9.91896 6.58783 10 6.8 10H9.2C9.41217 10 9.61566 9.91896 9.76569 9.7747C9.91571 9.63044 10 9.43478 10 9.23077V7.30769C10 7.10368 9.91571 6.90802 9.76569 6.76376C9.61566 6.61951 9.41217 6.53846 9.2 6.53846Z"
            />
          </svg>
          <span className="ms-2">Whatsapp Lead</span>
          <span className="arrow fa fa-angle-right ms-auto text-end"></span>
        </Link>
        {/* <!-- Menu: Sub menu ul --> */}
        <ul className="sub-menu collapse" id="menu-WhatsappLead">
          <li>
            <Link className="ms-link" to="/DashBoard/WhatsappLeadAdd">
              Add Lead
            </Link>
          </li>
          <li>
            <Link className="ms-link" to="/DashBoard/WhatsappLead">
              Whatsapp Lead Status
            </Link>
          </li>
        </ul>
      </li>
    </ul>
  );
}
