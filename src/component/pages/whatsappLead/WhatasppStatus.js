import {React, useState} from "react";
import CommonTable from "../../Ui/CommonTable";

const WhatsappStatus = ()=>{
    const [header, setHeader]= useState({
        Sno:1,
        date:"date",
        mobile:"mobile",
        PanAssignTo:" Pan Assign To",
        PanStatus:"Pan Status",
        PanAmount:"Pan Amount",
        IrctcAssign:"IRCTC Assign",
        IrctcAssignTo:" IRCTC Assign To",
        IrctcStatus:"IRCTC Status",
        IrctcAmount:"IRCTC Amount",
        DmtAssignTo:" DMT Assign To",
        DmtStatus:"DMT Status",
        DmtAmount:"DMT Amount",
    });

    // console.log(header);
    // const [body,SetBody]=useState({
    //     Sno:"1",
    //     date:"",
    //     mobile:"",
    //     PanAssignTo:"",
    //     PanStatus:"",
    //     PanAmount:"",
    //     IrctcAssign:"",
    //     IrctcAssignTo:"",
    //     IrctcStatus:"",
    //     IrctcAmount:"",
    //     DmtAssignTo:"",
    //     DmtStatus:"",
    //     DmtAmount:"",
    // });
    return(
        <div className="container">
            <div className="row">
                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                    <CommonTable title={"Intrested Client List"} header={header}/>
                </div>
            </div>
        </div>
    )
}

export default WhatsappStatus