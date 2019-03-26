import React, { Component } from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import cellEditFactory from 'react-bootstrap-table2-editor';

class TableColor extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            products: [
                {
                    size: "1",
                    rmsc: "ANTLY",
                    diffid: "1"
                },
                {
                    size: "12",
                    rmsc: "ANTLY",
                    diffid: "1"
                },
                {
                    size: "Large",
                    rmsc: "ANTLY",
                    diffid: " "
                },
                {
                    size: "XL",
                    rmsc: "ANTLY",
                    diffid: "1"
                },
                {
                    size: "pair",
                    rmsc: "ANTLY",
                    diffid: " "
                },
                {
                    size: "4",
                    rmsc: "ANTLY",
                    diffid: "2"
                },

            ],

            columns: [
                {
                    dataField: 'size',
                    text: 'SIZE Description'
                },
                {
                    dataField: 'rmsc',
                    text: 'RMS Target Color',
                },
                {
                    dataField: 'diffid',
                    text: 'RMS Diff ID',

                }
            ]
        }
    }

    render() {
        return (
            <div>               
                <BootstrapTable classes="rounded table-hover" headerClasses="thead-dark" keyField='task' data={this.state.products} columns={this.state.columns} cellEdit={cellEditFactory({ mode: 'click' })} />
            </div>
        );
    }

}

export default TableColor;