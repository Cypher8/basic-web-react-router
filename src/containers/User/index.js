import React, { Component } from 'react';
import UserService from "../../shared/services/UserService";
import { Button } from '../../components';

export default class User extends Component {
    constructor(props) {
        super(props)
        this.state = {
            users: []
        }
    }

    componentDidMount() {
        this.getUser();
    }

    getUser = async () => {
        const res = await UserService.getUser();
        console.log(res)
        this.setState({ users: res.data });
    }

    render() {
        return (
            <div style={{ display: "flex", flexDirection: "column", margin: 20  }}>
                {/* <a 
                href="/add-user"
                style={{
                    width: 40,
                    backgroundColor: "#4CAF50",
                    border: "none",
                    color: "white",
                    padding: 5,
                    margin: 5,
                    textDecoration: "none",
                    cursor: "pointer",
                    borderRadius: 4
                }}>Add</a> */}
                <Button href="/add-user" value="Add User"/>
                <table style={{ width: 640, borderCollapse: "collapse", border: "1px solid black" }}>
                    <thead>
                        <tr style={{ border: "1px solid black" }}>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Edit</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.users.map((item, index) => {
                                return (
                                    <tr key={index} style={{ border: "1px solid black" }}>
                                        <td>{item.first_name} {item.last_name}</td>
                                        <td>{item.email}</td>
                                        <td>
                                            <a style={{
                                                backgroundColor: "#EE9F37",
                                                border: "none",
                                                color: "white",
                                                padding: 5,
                                                textAlign: "center",
                                                textDecoration: "none",
                                                display: "inline-block",
                                                cursor: "pointer",
                                                borderRadius: 4
                                            }}>Edit</a>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}