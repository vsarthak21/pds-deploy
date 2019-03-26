import React from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import cellEditFactory from 'react-bootstrap-table2-editor';

class TableSize extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            products: [
                {
                    size: "1",
                    rms: "ANTLY",
                    diffid: "1"
                },
                {
                    size: "12",
                    rms: "ANTLY",
                    diffid: "1"
                },
                {
                    size: "Large",
                    rms: "ANTLY",
                    diffid: " "
                },
                {
                    size: "XL",
                    rms: "ANTLY",
                    diffid: "1"
                },
                {
                    size: "pair",
                    rms: "ANTLY",
                    diffid: " "
                },
                {
                    size: "4",
                    rms: "ANTLY",
                    diffid: "2"
                },

            ],

            columns: [
                {
                    dataField: 'size',
                    text: 'SIZE Description'
                },
                {
                    dataField: 'rms',
                    text: 'RMS Target Size',
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

export default TableSize;