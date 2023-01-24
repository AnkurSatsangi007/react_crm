import React  from "react";
import TableTemplate from "../../Ui/TableTemplate";
const UserTicket = () =>{
    return(
        <div className="container">
            <div className="row">
                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                <TableTemplate title={"User Ticket"}>
                        <thead>
                            <tr key="">
                                <th>Sno.</th>
                                <th>Assign To</th>
                                <th>Ticket No</th>
                                <th>Subject</th>
                                <th>Assigning Date</th>
                                <th>Target Date</th>
                                <th>Started on</th>
                                <th>Closed Date</th>
                                <th>Status</th>
                                <th>Action</th>                                
                            </tr>
                        </thead>
                        <tbody>
                            <tr key="">
                                <td>351</td>
                                <td>55</td>
                                <td>11</td>
                                <td>35</td>
                                <td>535</td>
                                <td>86</td>
                                <td>96</td>
                                <td>474</td>
                                <td>051</td>
                                <td><button className="btn btn-primary">View Ticket</button></td>
                            </tr>
                        </tbody>
                    </TableTemplate>
                </div>
            </div>
        </div>
    )
}

export default UserTicket