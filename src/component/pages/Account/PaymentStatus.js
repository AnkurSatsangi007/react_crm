import React from "react";
import TableTemplate from "../../Ui/TableTemplate";
const PaymentStatus =()=>{
    return(
        <div className="container">
            <div className="row">
                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                    <TableTemplate>
                        <thead>
                            <tr key="">
                                <th>Add Date</th>
                                <th>client Urn</th>
                                <th>Service</th>
                                <th>Parent Urn</th>
                                <th>Client Name</th>
                                <th>Payment Mode</th>
                                <th>Txn. No.</th>
                                <th>Payment Client Id</th>
                                <th>Payment Date</th>
                                <th>closer Amount</th>
                                <th>Deposit Amount</th>
                                <th>Payment Proof</th>
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
                                <td><button className="btn btn-primary">View</button></td>
                                <td><button className="btn btn-danger">Update Payment</button></td>
                            </tr>
                        </tbody>
                    </TableTemplate>
                </div>
            </div>
        </div>
    )
}
export default PaymentStatus