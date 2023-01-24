import React from "react";
import TableTemplate from "../../Ui/TableTemplate";

const NestedCallList = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
          <TableTemplate title={"Nesting Client"}>
            <thead>
              <tr key="">
                <th>Sno.</th>
                <th>Data Type</th>
                <th>Branch Code</th>
                <th>Name</th>
                <th>Pan Count</th>
                <th>Mobile No.</th>
                <th>Alternate No</th>
                <th>Training Date</th>
                <th>Click To Call</th>
                <th>Status</th>
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
              </tr>
            </tbody>
          </TableTemplate>
        </div>
      </div>
    </div>
  );
};

export default NestedCallList;
