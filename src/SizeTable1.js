import React, { Component } from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import cellEditFactory from 'react-bootstrap-table2-editor';

class SizeTab1 extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            products: [
                {
                    size:'1PHOTO',
                    suppcost:'0.00',
                    suppdisc:'',
                    actcostprice:'',
                    costpricecurrency:'GBP',
                    actcostpricepounds:'',
                    container:'',
                    duty:'0.00',
                    agentcomm:'',
                    freight:'',
                    overridelandedprice:'N',
                    landedprice:'',
                    sellingprice:'0.00',
                    deliverycharge:'',
                    vat:'20.00',
                    bim:'',
                    bimdel:'',
                    bysize:'0',
                    rmsd3a:'Extra Long',
                    rmsd3b:'Long',
                    usermod:'TP5701',
                    datemod:'25/03/2019 15:13:06',
                    usercreate:'MESW',
                    datecreate:'16/05/2017 13:15:20',

                },
                {
                    size:'1XL',
                    suppcost:'62.00',
                    suppdisc:'',
                    actcostprice:'62.00',
                    costpricecurrency:'GBP',
                    actcostpricepounds:'62.00',
                    container:'',
                    duty:'0.00',
                    agentcomm:'',
                    freight:'0.00',
                    overridelandedprice:'N',
                    landedprice:'62.00',
                    sellingprice:'195.00',
                    deliverycharge:'',
                    vat:'20.00',
                    bim:'51.54',
                    bimdel:'',
                    bysize:'20',
                    rmsd3a:'Extra Long',
                    rmsd3b:'Long',
                    usermod:'TP5701',
                    datemod:'25/03/2019 15:13:08',
                    usercreate:'MESWB',
                    datecreate:'16/05/2017 13:15:20',

                },
                {
                    size:'2XL',
                    suppcost:'74.00',
                    suppdisc:'',
                    actcostprice:'74.00',
                    costpricecurrency:'GBP',
                    actcostpricepounds:'74.00',
                    container:'',
                    duty:'0.00',
                    agentcomm:'',
                    freight:'0.00',
                    overridelandedprice:'N',
                    landedprice:'74.00',
                    sellingprice:'195.00',
                    deliverycharge:'',
                    vat:'20.00',
                    bim:'45.38',
                    bimdel:'',
                    bysize:'20',
                    rmsd3a:'Extra Long',
                    rmsd3b:'Long',
                    usermod:'TP5701',
                    datemod:'25/03/2019 15:13:09',
                    usercreate:'MESWB',
                    datecreate:'16/05/2017 13:15:20',

                },
                {
                    size:'3XL',
                    suppcost:'74.00',
                    suppdisc:'',
                    actcostprice:'74.00',
                    costpricecurrency:'GBP',
                    actcostpricepounds:'74.00',
                    container:'',
                    duty:'0.00',
                    agentcomm:'',
                    freight:'0.00',
                    overridelandedprice:'N',
                    landedprice:'74.00',
                    sellingprice:'195.00',
                    deliverycharge:'',
                    vat:'20.00',
                    bim:'45.38',
                    bimdel:'',
                    bysize:'20',
                    rmsd3a:'Extra Long',
                    rmsd3b:'Long',
                    usermod:'TP5701',
                    datemod:'25/03/2019 15:13:09',
                    usercreate:'MESWB',
                    datecreate:'16/05/2017 13:15:20',

                }

               
                

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
                    text: 'Supplier Discount%'
                },
                {
                    dataField: 'actcostprice',
                    text: 'Actual Supplier Cost Price'
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
                    dataField: 'usercreate',
                    text: 'User Created'
                },
               



                
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

export default SizeTab1;