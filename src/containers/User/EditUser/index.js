import React, { Component } from 'react';


export default class EditUser extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }


    render() {
        return (
            <div>
                <div>
                    <span>firstName: </span>
                    <input onChange={(event) => this.setState({ firstName: event.target.value })} />
                </div>
                <div>
                    <span>lastName: </span>
                    <input onChange={(event) => this.setState({ lastName: event.target.value })} />
                </div>
                <div>
                    <span>email: </span>
                    <input onChange={(event) => this.setState({ email: event.target.value })} />
                </div>
                <div style={{ marginTop: 10, textAlign: "center" }}>
                    <a
                        href="/user"
                        style={{
                            backgroundColor: "#f44336",
                            border: "none",
                            color: "white",
                            padding: 5,
                            textAlign: "center",
                            textDecoration: "none",
                            display: "inline-block",
                            cursor: "pointer",
                            borderRadius: 4,
                            marginRight: 10
                        }}
                    >Cancel</a>
                    <a style={{
                        backgroundColor: "#4CAF50",
                        border: "none",
                        color: "white",
                        padding: 5,
                        textAlign: "center",
                        textDecoration: "none",
                        display: "inline-block",
                        cursor: "pointer",
                        borderRadius: 4
                    }}
                        onClick={this.addUser}>Save</a>
                </div>
            </div>
        )
    }
}