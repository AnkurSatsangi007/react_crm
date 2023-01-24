import React from "react";
import TableTemplate from "../../Ui/TableTemplate";

const NintySeriesList = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                    <TableTemplate title={"90 Series User list"}>
                        <thead>
                            <tr key="">
                                <th>Sno.</th>
                                <th>Case Type</th>
                                <th>90 Branch Code</th>
                                <th>Name</th>
                                <th>Contact</th>
                                <th>Email</th>
                                <th>Staus</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr key="">
                               <td>1</td>
                               <td>nx</td>
                               <td>12345</td>
                               <td>96595</td>
                               <td>admin</td>
                               <td>+91 254555525</td>
                               <td>active</td>
                               <td><button className="btn btn-info">view</button></td>
                            </tr>
                        </tbody>
                    </TableTemplate>
                </div>
            </div>
        </div>
    )
}

export default NintySeriesList;