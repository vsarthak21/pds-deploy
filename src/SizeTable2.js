import React, { Component } from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import cellEditFactory from 'react-bootstrap-table2-editor';

class SizeTab2 extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            products: [
                {
                    size:'L',
                    suppcost:'99.00',
                    suppdisc:'',
                    actcostprice:'30',
                    costpricecurrency:'GBP',
                    actcostpricepounds:'60',
                    container:'',
                    duty:'0.00',
                    agentcomm:'',
                    freight:'0',
                    overridelandedprice:'N',
                    landedprice:'50',
                    sellingprice:'190',
                    deliverycharge:'',
                    vat:'30',
                    bim:'45.2',
                    bimdel:'',
                    bysize:'10',
                    rmsd3a:'Long',
                    rmsd3b:'LARGE',
                    usermod:'TPID532',
                    
                    usercreate:'MESW',
                    

                },
                {
                    size:'M',
                    suppcost:'20.00',
                    suppdisc:'',
                    actcostprice:'30',
                    costpricecurrency:'GBP',
                    actcostpricepounds:'10',
                    container:'',
                    duty:'0.00',
                    agentcomm:'',
                    freight:'0',
                    overridelandedprice:'N',
                    landedprice:'10',
                    sellingprice:'190',
                    deliverycharge:'',
                    vat:'30',
                    bim:'30.2',
                    bimdel:'',
                    bysize:'10',
                    rmsd3a:'Long',
                    rmsd3b:'LARGE',
                    usermod:'TP5372',
                    
                    usercreate:'MESW',
                    

                },
                {
                    size:'4XL',
                    suppcost:'90.00',
                    suppdisc:'',
                    actcostprice:'30',
                    costpricecurrency:'GBP',
                    actcostpricepounds:'10',
                    container:'',
                    duty:'0.00',
                    agentcomm:'',
                    freight:'0',
                    overridelandedprice:'N',
                    landedprice:'21',
                    sellingprice:'200',
                    deliverycharge:'',
                    vat:'25',
                    bim:'36.2',
                    bimdel:'',
                    bysize:'10',
                    rmsd3a:'Long',
                    rmsd3b:'LARGE',
                    usermod:'TPID532',
                    
                    usercreate:'MESW',
                    

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

export default SizeTab2;