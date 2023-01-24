import React from "react";
import TableTemplate from "../Ui/TableTemplate";

const QuickReport =()=>{
    return(
        <div className="container">
            <div className="row">
                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                    <TableTemplate title={"Client Risk"}>
                        <thead>
                            <tr>
                                <th>0 Amount</th>
                                <th>1 - 350 Amount</th>
                                <th>351 - 650 Amount</th>
                                <th>651 -1499 Amount</th>
                                <th>1500 - 9999 Amount </th>
                                <th>10000 - 15000 Amount</th>
                                <th>15000 - 50000 Amount</th>
                                <th>50000 + Amount</th>
                                <th>Total Client</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>0</td>
                                <td>0</td>
                                <td>0</td>
                                <td>0</td>
                                <td>0</td>
                                <td>0</td>
                                <td>0</td>
                                <td>0</td>
                                <td>0</td>                                
                            </tr>
                        </tbody>
                    </TableTemplate>
                </div>
                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                    <TableTemplate  title={"Business Development"}>
                        <thead>
                            <tr>
                                <th>Date</th>
                                <th>Total Closer</th>
                                <th>Closer Amount</th>
                                <th>Recived Amount</th>
                                <th>Panding Amount</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>0</td>
                                <td>0</td>
                                <td>0</td>
                                <td>0</td>
                                <td>0</td>
                            </tr>
                        </tbody>
                    </TableTemplate>
                </div>
            </div>
        </div>
    )
}

export default QuickReport