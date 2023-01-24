import React from "react";
import DeskOne from "../DeskOne";
import QuickReport from "../QuickReport";
import CallList from "../CallAudit/CallList";
import CallReport from "../CallAudit/CallReport";
import EmployeeCallReport from "../CallAudit/EmployeeCallReport";
import Attendance from "../Employee/Attendance";
import EmployeeForm from "../Employee/EmployeeForm";
import EmployeeList from "../Employee/EmployeeList";
import PermissionForm from "../UserPermision/PermissionForm";
import PermissionUserList from "../UserPermision/PermissionUserList";
import QcClientList from "../UserPermision/QcClientList";
import WhatsappLeadAdd from "../whatsappLead/WhatsappLeadAdd";
import WhatsappStatus from "../whatsappLead/WhatasppStatus";

const LoadedComponent =()=>{
    return(
        <>
        <DeskOne/>
        <QuickReport/>
        <CallList/>
        <CallReport/>
        <EmployeeCallReport/>
        <Attendance/>
        <EmployeeForm/>
        <EmployeeList/>
        <PermissionForm/>
        <PermissionUserList/>
        <QcClientList/>
        <WhatsappLeadAdd/>
        <WhatsappStatus/>
        </>
    )
}

export default LoadedComponent