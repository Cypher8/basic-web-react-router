import React, { Component } from 'react';

export default class Button extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        return (
            <a
                href={this.props.href} // กำหนด path ไปยังหน้าที่ต้องการ
                style={{
                    width: 80,
                    backgroundColor: "#4CAF50",
                    border: "none",
                    color: "white",
                    padding: 5,
                    margin: 5,
                    textDecoration: "none",
                    cursor: "pointer",
                    borderRadius: 4
                }}>
                
                {this.props.value} {/* ข้อความบนปุ่ม */}
            </a>
        )
    }
}