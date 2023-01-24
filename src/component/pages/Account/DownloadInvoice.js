import React from "react";
import TableTemplate from "../../Ui/TableTemplate";
const DownloadInvoice =()=>{
    return(
        <div className="container">
            <div className="row">
                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                <TableTemplate title={"Download Invoice"}>
                        <thead>
                            <tr key="">
                                <th>Invoice Date</th>
                                <th>Invoice No</th>
                                <th>Client Urn</th>
                                <th>Client Name</th>
                                <th>Payment Mode</th>
                                <th>Payment Order id</th>
                                <th>Txn. No.</th>
                                <th>Payment Date.</th>
                                <th>Amount</th>
                                <th>Gst</th>
                                <th>PG</th>
                                <th>Total Paid</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr key="">
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                        </tbody>
                    </TableTemplate>
                </div>
            </div>
        </div>
    )
}
export default DownloadInvoice