import React, { Component } from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import cellEditFactory from 'react-bootstrap-table2-editor';

class SizeTable extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            products: [
                {
                    size: "5",
                    rms: "sdad",
                    diffid: "dassda"
                },
                {
                    size: "6",
                    rms: "dasda",
                    diffid: "fads"
                },
                {
                    size: "4",
                    rms: "fsadsf",
                    diffid: "ijfdioj"
                },
                {
                    size: "8",
                    rms: "hdsk",
                    diffid: "jfiosdj"
                },
                {
                    size: "5",
                    rms: "fdhksd",
                    diffid: "sdalkd"
                },
                {
                    size: "6",
                    rms: "dsaasd",
                    diffid: "dsadsa"
                },

            ],

            columns: [
                {
                    dataField: 'size',
                    text: 'Size'
                },
                {
                    dataField: 'suppcost',
                    text: 'Supplier Cost Price'
                },
                {
                    dataField: 'suppdisc',
                    text: 'Supplier Discount%',
                    headerStyle: {
                        width:100
                      }
                },
                {
                    dataField: 'actcostprice',
                    text: 'Actual Supplier Cost Price',
                    headerStyle: {
                        width:100
                      }
                },
                {
                    dataField: 'costpricecurrency',
                    text: 'Cost Price Currency'
                },
                {
                    dataField: 'actcostpricepounds',
                    text: 'Actual Cost Price in Pounds'
                },
                {
                    dataField: 'container',
                    text: 'Container F3 Units'
                },
                {
                    dataField: 'duty',
                    text: 'Duty %'
                },
                {
                    dataField: 'agentcomm',
                    text: 'Agent Commission %'
                },
                {
                    dataField: 'freight',
                    text: 'Freight Charge'
                },
                {
                    dataField: 'overridelandedprice',
                    text: 'Override Landed Price'
                },
                {
                    dataField: 'landedprice',
                    text: 'Landed Price'
                },
                 {
                    dataField: 'sellingprice',
                    text: 'Selling Price'
                },
                {
                    dataField: 'deliverycharge',
                    text: 'Delivery Charge'
                },
                {
                    dataField: 'vat',
                    text: 'VAT%'
                },
                {
                    dataField: 'bim',
                    text: 'BIM%'
                },
                 {
                    dataField: 'bimdel',
                    text: 'BIM% Delivery'
                },
                {
                    dataField: 'bysize',
                    text: '% by Size'
                },
                 {
                    dataField: 'rmsd3a',
                    text: 'RMS D3a Diff ID'
                },
                 {
                    dataField: 'rmsd3b',
                    text: 'RMS D3b Diff ID'
                },
                {
                    dataField: 'usermod',
                    text: 'User Modified'
                },
                {
                    dataField: 'datemod',
                    text: 'Date Modified'
                }, {
                    dataField: 'usercreate',
                    text: 'User Created'
                },
                {
                    dataField: 'datecreate',
                    text: 'Date Created'
                },



                
            ]
        }
    }

    render() {
        return (
            <div>               
                <BootstrapTable style={{backgroundColor:"green"}} classes="rounded table-hover" headerClasses="thead-dark" keyField='task' data={this.state.products} columns={this.state.columns} cellEdit={cellEditFactory({ mode: 'click' })} />
            </div>
        );
    }

}

export default SizeTable;