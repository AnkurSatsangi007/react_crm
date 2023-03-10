import React from "react";
import { Link } from "react-router-dom";

export default function ResourceSideBar() {
  return (
    <ul className="menu-list">
      <li className="divider py-2 lh-sm">
        <span className="small">RESOURCES</span>
        <br />{" "}
      </li>
      <li className="collapsed">
        <Link
          className="m-link"
          data-bs-toggle="collapse"
          data-bs-target="#menu-Task"
          to="#"
        >
         <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            fill="currentColor"
            viewBox="0 0 16 16"
          >
            <path d="M14 2a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h12zM2 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2H2z" />
            <path
              className="fill-secondary"
              d="M3 4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4z"
            />
          </svg>
          <span className="ms-2">Task Assign</span>
          <span className="arrow fa fa-angle-right ms-auto text-end"></span>
        </Link>
        {/* <!-- Menu: Sub menu ul --> */}
        <ul className="sub-menu collapse" id="menu-Task">
          <li>
            <Link className="ms-link" to="/DashBoard/CreateTask">
              Create Task
            </Link>
          </li>
          <li>
            <Link className="ms-link" to="/DashBoard/UserTaskList">
              User Task List
            </Link>
          </li>
          <li>
            <Link className="ms-link" to="/DashBoard/NestingCallList">
              Nesting Call List
            </Link>
          </li>
          <li>
            <Link className="ms-link" to="/DashBoard/SurrenderList">
              Surrender List
            </Link>
          </li>
          <li>
            <Link className="ms-link" to="/DashBoard/MasterTaskList">
              Master Task List
            </Link>
          </li>
          <li>
            <Link className="ms-link" to="/DashBoard/UploadBulkTask">
              Upload Bulk Task
            </Link>
          </li>
          <li>
            <Link className="ms-link" to="/DashBoard/UploadNestedTask">
              Upload Nasted Task
            </Link>
          </li>
          <li>
            <Link className="ms-link" to="/DashBoard/90SeriesList">
              90 Series List
            </Link>
          </li>
          <li>
            <Link className="ms-link" to="/DashBoard/90SeriesSearch">
              90 Series Search
            </Link>
          </li>
        </ul>
      </li>
      <li className="collapsed">
        <Link
          className="m-link"
          data-bs-toggle="collapse"
          data-bs-target="#menu-Ticket"
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
              d="M2 3C2 3.13261 2.05268 3.25979 2.14645 3.35355C2.24021 3.44732 2.36739 3.5 2.5 3.5H13.5C13.6326 3.5 13.7598 3.44732 13.8536 3.35355C13.9473 3.25979 14 3.13261 14 3C14 2.86739 13.9473 2.74021 13.8536 2.64645C13.7598 2.55268 13.6326 2.5 13.5 2.5H2.5C2.36739 2.5 2.24021 2.55268 2.14645 2.64645C2.05268 2.74021 2 2.86739 2 3ZM4 1C4 1.13261 4.05268 1.25979 4.14645 1.35355C4.24021 1.44732 4.36739 1.5 4.5 1.5H11.5C11.6326 1.5 11.7598 1.44732 11.8536 1.35355C11.9473 1.25979 12 1.13261 12 1C12 0.867392 11.9473 0.740215 11.8536 0.646447C11.7598 0.552678 11.6326 0.5 11.5 0.5H4.5C4.36739 0.5 4.24021 0.552678 4.14645 0.646447C4.05268 0.740215 4 0.867392 4 1Z"
            />
            <path d="M13.991 7L14.015 7.001C14.2018 7.01372 14.3845 7.06227 14.553 7.144C14.6744 7.20048 14.7786 7.28812 14.855 7.398C14.922 7.498 15 7.675 15 8V13.991L14.999 14.015C14.9862 14.2018 14.9376 14.3845 14.856 14.553C14.7995 14.6743 14.7118 14.7785 14.602 14.855C14.502 14.922 14.325 15 14 15H2.009L1.985 14.999C1.79817 14.9862 1.61554 14.9376 1.447 14.856C1.32567 14.7995 1.22148 14.7118 1.145 14.602C1.078 14.502 1 14.325 1 14V8.009L1.001 7.985C1.01372 7.79815 1.06227 7.6155 1.144 7.447C1.20052 7.32567 1.28816 7.22148 1.398 7.145C1.498 7.078 1.675 7 2 7H13.991ZM14 6H2C0 6 0 8 0 8V14C0 16 2 16 2 16H14C16 16 16 14 16 14V8C16 6 14 6 14 6Z" />
          </svg>
          <span className="ms-2">Ticket Manager</span>
          <span className="arrow fa fa-angle-right ms-auto text-end"></span>
        </Link>
        {/* <!-- Menu: Sub menu ul --> */}
        <ul className="sub-menu collapse" id="menu-Ticket">
          <li>
            <Link className="ms-link" to="/DashBoard/CreateTicket">
              Create Ticket
            </Link>
          </li>
          <li>
            <Link className="ms-link" to="/DashBoard/viewTicket">
              View Ticket
            </Link>
          </li>
          <li>
            <Link className="ms-link" to="/DashBoard/UserTicketList">
              User Ticket List
            </Link>
          </li>
          <li>
            <Link className="ms-link" to="/DashBoard/MasterTicketList">
              Master Ticket list
            </Link>
          </li>
        </ul>
      </li>
      <li className="collapsed">
        <Link
          className="m-link"
          data-bs-toggle="collapse"
          data-bs-target="#menu-HR"
          to="#"
        >
         <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            fill="currentColor"
            viewBox="0 0 16 16"
          >
            <path d="M4 1.5H3C2.46957 1.5 1.96086 1.71071 1.58579 2.08579C1.21071 2.46086 1 2.96957 1 3.5V14C1 14.5304 1.21071 15.0391 1.58579 15.4142C1.96086 15.7893 2.46957 16 3 16H13C13.5304 16 14.0391 15.7893 14.4142 15.4142C14.7893 15.0391 15 14.5304 15 14V3.5C15 2.96957 14.7893 2.46086 14.4142 2.08579C14.0391 1.71071 13.5304 1.5 13 1.5H12V2.5H13C13.2652 2.5 13.5196 2.60536 13.7071 2.79289C13.8946 2.98043 14 3.23478 14 3.5V14C14 14.2652 13.8946 14.5196 13.7071 14.7071C13.5196 14.8946 13.2652 15 13 15H3C2.73478 15 2.48043 14.8946 2.29289 14.7071C2.10536 14.5196 2 14.2652 2 14V3.5C2 3.23478 2.10536 2.98043 2.29289 2.79289C2.48043 2.60536 2.73478 2.5 3 2.5H4V1.5Z" />
            <path d="M9.5 1C9.63261 1 9.75979 1.05268 9.85355 1.14645C9.94732 1.24021 10 1.36739 10 1.5V2.5C10 2.63261 9.94732 2.75979 9.85355 2.85355C9.75979 2.94732 9.63261 3 9.5 3H6.5C6.36739 3 6.24021 2.94732 6.14645 2.85355C6.05268 2.75979 6 2.63261 6 2.5V1.5C6 1.36739 6.05268 1.24021 6.14645 1.14645C6.24021 1.05268 6.36739 1 6.5 1H9.5ZM6.5 0C6.10218 0 5.72064 0.158035 5.43934 0.43934C5.15804 0.720644 5 1.10218 5 1.5V2.5C5 2.89782 5.15804 3.27936 5.43934 3.56066C5.72064 3.84196 6.10218 4 6.5 4H9.5C9.89782 4 10.2794 3.84196 10.5607 3.56066C10.842 3.27936 11 2.89782 11 2.5V1.5C11 1.10218 10.842 0.720644 10.5607 0.43934C10.2794 0.158035 9.89782 0 9.5 0L6.5 0Z" />
            <path
              className="fill-secondary"
              d="M5.556 7.8225C5.54589 7.71838 5.55767 7.6133 5.59058 7.51401C5.6235 7.41472 5.67682 7.32341 5.74712 7.24595C5.81742 7.16849 5.90315 7.10659 5.9988 7.06424C6.09444 7.02188 6.19789 7 6.3025 7H7.5C7.5663 7 7.62989 7.02634 7.67678 7.07322C7.72366 7.12011 7.75 7.1837 7.75 7.25V7.441C7.75 7.789 7.5015 8.032 7.314 8.1755C7.29143 8.19154 7.27195 8.21153 7.2565 8.2345C7.25399 8.2384 7.25198 8.2426 7.2505 8.247L7.25 8.25V8.2515L7.2515 8.2565C7.2535 8.2615 7.2585 8.2705 7.2695 8.283C7.30776 8.32381 7.35362 8.35676 7.4045 8.38C7.545 8.45 7.755 8.5 8 8.5C8.246 8.5 8.456 8.45 8.595 8.38C8.64606 8.35681 8.69209 8.32386 8.7305 8.283C8.73784 8.27497 8.74391 8.26587 8.7485 8.256L8.75 8.251V8.247C8.74853 8.2426 8.74651 8.2384 8.744 8.2345C8.72855 8.21153 8.70907 8.19154 8.6865 8.1755C8.499 8.032 8.2505 7.789 8.2505 7.441V7.25C8.2505 7.18378 8.27677 7.12027 8.32355 7.0734C8.37032 7.02653 8.43378 7.00013 8.5 7H9.6975C9.80211 7 9.90556 7.02188 10.0012 7.06424C10.0968 7.10659 10.1826 7.16849 10.2529 7.24595C10.3232 7.32341 10.3765 7.41472 10.4094 7.51401C10.4423 7.6133 10.4541 7.71838 10.444 7.8225L10.3225 9.25H10.441C10.5385 9.25 10.651 9.1765 10.7785 9.01C10.8835 8.873 11.0425 8.75 11.25 8.75C11.534 8.75 11.7235 8.9735 11.827 9.181C11.9385 9.4035 12 9.6935 12 10C12 10.3065 11.9385 10.5965 11.827 10.819C11.7235 11.0265 11.534 11.25 11.25 11.25C11.0425 11.25 10.8835 11.127 10.7785 10.99C10.651 10.8235 10.5385 10.75 10.441 10.75H10.3225L10.444 12.1775C10.4541 12.2816 10.4423 12.3867 10.4094 12.486C10.3765 12.5853 10.3232 12.6766 10.2529 12.7541C10.1826 12.8315 10.0968 12.8934 10.0012 12.9358C9.90556 12.9781 9.80211 13 9.6975 13H8.5C8.4337 13 8.37011 12.9737 8.32322 12.9268C8.27634 12.8799 8.25 12.8163 8.25 12.75V12.559C8.25 12.211 8.4985 11.968 8.686 11.8245C8.70857 11.8085 8.72805 11.7885 8.7435 11.7655C8.74601 11.7616 8.74802 11.7574 8.7495 11.753L8.75 11.75V11.7485L8.7485 11.7435C8.74386 11.7338 8.7378 11.7249 8.7305 11.717C8.69225 11.6762 8.64639 11.6432 8.5955 11.62C8.455 11.55 8.245 11.5 8 11.5C7.7545 11.5 7.544 11.55 7.405 11.62C7.35393 11.6432 7.3079 11.6761 7.2695 11.717C7.26216 11.725 7.25609 11.7341 7.2515 11.744L7.25 11.749V11.75L7.2505 11.753C7.25198 11.7574 7.25399 11.7616 7.2565 11.7655C7.2645 11.779 7.2815 11.7995 7.314 11.8245C7.5015 11.968 7.75 12.211 7.75 12.559V12.75C7.75 12.8163 7.72366 12.8799 7.67678 12.9268C7.62989 12.9737 7.5663 13 7.5 13H6.3025C6.19789 13 6.09444 12.9781 5.9988 12.9358C5.90315 12.8934 5.81742 12.8315 5.74712 12.7541C5.67682 12.6766 5.6235 12.5853 5.59058 12.486C5.55767 12.3867 5.54589 12.2816 5.556 12.1775L5.678 10.75H5.559C5.4615 10.75 5.349 10.8235 5.2215 10.99C5.1165 11.127 4.9575 11.25 4.75 11.25C4.466 11.25 4.2765 11.0265 4.173 10.819C4.0615 10.5965 4 10.3065 4 10C4 9.6935 4.0615 9.4035 4.173 9.181C4.2765 8.9735 4.466 8.75 4.75 8.75C4.9575 8.75 5.1165 8.873 5.2215 9.01C5.349 9.1765 5.4615 9.25 5.559 9.25H5.678L5.556 7.8225Z"
            />
          </svg>
          <span className="ms-2">HR Department</span>
          <span className="arrow fa fa-angle-right ms-auto text-end"></span>
        </Link>
        {/* <!-- Menu: Sub menu ul --> */}
        <ul className="sub-menu collapse" id="menu-HR">
          <li>
            <Link className="ms-link" to="/DashBoard/EmployeeForm">
              Add Employee
            </Link>
          </li>
          <li>
            <Link className="ms-link" to="/DashBoard/EmployeeList">
              Employee List
            </Link>
          </li>
          <li>
            <Link className="ms-link" to="/DashBoard/Attendance">
              Attendance
            </Link>
          </li>
        </ul>
      </li>
       <li className="collapsed">
        <Link
          className="m-link"
          data-bs-toggle="collapse"
          data-bs-target="#menu-user"
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
              d="M5 10.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5zm0-2a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm0-2a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm0-2a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5z"
            />
            <path d="M3 0h10a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-1h1v1a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v1H1V2a2 2 0 0 1 2-2z" />
            <path d="M1 5v-.5a.5.5 0 0 1 1 0V5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0V8h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0v.5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1z" />
          </svg>
          <span className="ms-2">User Permission</span>
          <span className="arrow fa fa-angle-right ms-auto text-end"></span>
        </Link>
        {/* <!-- Menu: Sub menu ul --> */}
        <ul className="sub-menu collapse" id="menu-user">
          <li>
            <Link className="ms-link" to="/DashBoard/PermissionForm">
              Add User
            </Link>
          </li>
          <li>
            <Link className="ms-link" to="/DashBoard/PermissionUserList">
              User List
            </Link>
          </li>
          <li>
            <Link className="ms-link" to="/DashBoard/QcClientList">
              QC Client List
            </Link>
          </li>         
          
        </ul>
      </li>
      <li className="collapsed">
        <Link
          className="m-link"
          data-bs-toggle="collapse"
          data-bs-target="#menu-Leave"
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
              d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"
            />
            <path
              fill-rule="evenodd"
              d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"
            />
          </svg>
          <span className="ms-2">Leave Application</span>
          <span className="arrow fa fa-angle-right ms-auto text-end"></span>
        </Link>
        {/* <!-- Menu: Sub menu ul --> */}
        <ul className="sub-menu collapse" id="menu-Leave">
          <li>
            <Link className="ms-link" to="/DashBoard/LeaveForm">
              Leave Form
            </Link>
          </li>
          <li>
            <Link className="ms-link" to="/DashBoard/LeaveRecord">
            Leave Record
            </Link>
          </li>
          <li>
            <Link className="ms-link" to="/DashBoard/HrLeaveRecord">
              Hr Leave Record
            </Link>
          </li>       
          
        </ul>
      </li>
    </ul>
  );
}
