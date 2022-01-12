import React, { Component } from 'react';
import { Table } from 'reactstrap';
// import axios from "axios";
import EmployeeData from './EmployeeData.json';
// import './EmployeeInfo.css';
// import { Icon } from 'semantic-ui-react'

export class EmployeeInfo extends Component {
    render() {

        const DisplayData=EmployeeData.map(
            (info)=>{
                 return(
                    <tr>
                            <td>
                                <input type="text" value={info.Name} />
                            </td>
                            <td>
                                <input type="Number" value={info.Age} />
                            </td>

                            <td>
                                <select type="select" id="select" value={info.isMarried}>
                                    <option>Active</option>
                                    <option>Inactive</option>
                                </select>
                            
                            </td>

                            <td>
                                <input type="text" value={info.Address} />
                            </td>
                            <td>
                                <input type="text" value={info.Country} />
                            </td>
                        </tr>
                )
            }
        )

        return (
            <div className="container">
                <Table bordered striped>
                    <thead>
                        <tr>
                            <th>
                                Name
                            </th>
                            <th>
                                Age
                            </th>
                            <th>
                                isMarried
                            </th>
                            <th>
                                Address
                            </th>
                            <th>
                                Country
                            </th>
                        </tr>
                    </thead>
                    <tbody>

                        {DisplayData}

                    </tbody>
            </Table>

            <button className="btn btn-primary ">Save</button>
        </div>
        )
        }
}

export default EmployeeInfo
