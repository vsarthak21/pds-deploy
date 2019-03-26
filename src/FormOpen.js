import React from 'react';
import { Button } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import { Row, Col, Container } from 'react-bootstrap';
import "./FormOpen.css"
import ModalFooter from 'react-bootstrap/ModalFooter'

class FormOpen extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            show: false,
        };

        this.handleShow = () => {
            this.setState({ show: true });
        };

        this.handleHide = () => {
            this.setState({ show: false });
        };
    }

    render() {
        return (
            <div>
                <button className="btn btn-primary mr-2" onClick={this.handleShow}>Edit</button>
                <button className=" btn btn-primary mr-2" onClick={()=>{
                    alert("Data Copied");}}>Copy</button>
                <button className="btn btn-primary mr-2" onClick={()=>{
                    alert("Data Deleted");}}>Delete</button>

                <Modal
                    show={this.state.show}
                    onHide={this.handleHide}
                    dialogClassName="modalWidth"
                    aria-labelledby="example-custom-modal-styling-title"
                >
                    <Modal.Header closeButton>
                        <Modal.Title id="update">
                            <h1>Product Updation</h1>
              </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>

                        <Row>
                            <Col md={4}>
                                <div className="form-group">
                                    <label for="FormControlInput1">Prod line code</label>
                                    <input type="text" class="form-control" id="FormControlInput1" value="EQ485" />

                                    <label for="FormControlInput1">Style Relationship</label>
                                    <input type="text" class="form-control" id="FormControlInput1" placeholder="EQ485" />

                                    <label for="FormControlInput1">% by color</label>
                                    <input type="text" class="form-control" id="FormControlInput1" placeholder="100" />

                                    <label for="Merch Sort Group"></label>
                                    <input type="text" class="form-control" id="FormControlInput1" placeholder="PO" />

                                    <label for="FormControlInput1">Product Brand</label>
                                    <input type="text" class="form-control" id="FormControlInput1" placeholder="H&M" />

                                    <label for="FormControlDropDown">Size Range</label>
                                    <select class="form-control">
                                        <option>S-M</option>
                                        <option>L-XL</option>
                                        <option>L-XXl</option>
                                    </select>

                                    <label for="FormControlDropDown">Storage Category</label>
                                    <select class="form-control">
                                        <option>Direct Dispatch</option>
                                        <option>Awkward</option>
                                        <option>FlowRack</option>
                                        <option>Special</option>
                                    </select>

                                    <label for="FormControlDropDown">Launch Phase</label>
                                    <select class="form-control">
                                        <option>Jan</option>
                                        <option>Feb</option>
                                        <option>Mar</option>
                                        <option>Apr</option>
                                        <option>May</option>
                                        <option>Jun</option>
                                        <option>Jul</option>
                                        <option>Aug</option>
                                        <option>Sep</option>
                                        <option>Oct</option>
                                        <option>Nov</option>
                                        <option>Dec</option>
                                    </select>

                                    <label for="FormControlDropDown">Internet Desciption</label>
                                    <textarea class="form-control" rows="2" id="comment"></textarea>   

                                    <label for="FormControlDropDown">Internet Desciption</label>
                                    <textarea class="form-control" rows="2" id="comment"></textarea>     

                                    <label for="FormControlInput1">Master Offer No.</label>
                                    <input type="text" class="form-control" id="FormControlInput1" placeholder="3900" />

                                    <label for="FormControlInput1">Master Offer No.</label>
                                    <input type="text" class="form-control" id="FormControlInput1" placeholder="3900" />                              
                                </div>


                            </Col>

                            <Col md={4}>
                                <div className="form-group">
                                    <label for="FormControlInput1">Master Offer No.</label>
                                    <input type="text" class="form-control" id="FormControlInput1" placeholder="3900" />

                                    <label for="FormControlInput1">Master Offer No.</label>
                                    <input type="text" class="form-control" id="FormControlInput1" placeholder="3900" />

                                    <label for="FormControlInput1">Master Offer No.</label>
                                    <input type="text" class="form-control" id="FormControlInput1" placeholder="3900" />

                                    <label for="FormControlInput1">Master Offer No.</label>
                                    <input type="text" class="form-control" id="FormControlInput1" placeholder="3900" />

                                    <label for="FormControlInput1">Master Offer No.</label>
                                    <input type="text" class="form-control" id="FormControlInput1" placeholder="3900" />

                                    <label for="FormControlDropDown">Size Range</label>
                                    <select class="form-control">
                                        <option>Default select</option>
                                    </select>

                                    <label for="FormControlDropDown">Size Range</label>
                                    <select class="form-control">
                                        <option>Default select</option>
                                    </select>

                                    <label for="FormControlDropDown">Size Range</label>
                                    <select class="form-control">
                                        <option>Default select</option>
                                    </select>

                                    <label for="FormControlDropDown">Internet Desciption</label>
                                    <textarea class="form-control" rows="2" id="comment"></textarea>  

                                    <label for="FormControlDropDown">Internet Desciption</label>
                                    <textarea class="form-control" rows="2" id="comment"></textarea>  

                                    <label for="FormControlInput1">Master Offer No.</label>
                                    <input type="text" class="form-control" id="FormControlInput1" placeholder="3900" />

                                    <label for="FormControlInput1">Master Offer No.</label>
                                    <input type="text" class="form-control" id="FormControlInput1" placeholder="3900" />

                                </div>

                            </Col>

                            <Col md={4}>
                                <div className="form-group">
                                    <label for="FormControlInput1">Master Offer No.</label>
                                    <input type="text" class="form-control" id="FormControlInput1" placeholder="3900" />

                                    <label for="FormControlInput1">Master Offer No.</label>
                                    <input type="text" class="form-control" id="FormControlInput1" placeholder="3900" />

                                    <label for="FormControlInput1">Master Offer No.</label>
                                    <input type="text" class="form-control" id="FormControlInput1" placeholder="3900" />

                                    <label for="FormControlInput1">Master Offer No.</label>
                                    <input type="text" class="form-control" id="FormControlInput1" placeholder="3900" />

                                    <label for="FormControlInput1">Master Offer No.</label>
                                    <input type="text" class="form-control" id="FormControlInput1" placeholder="3900" />

                                    <label for="FormControlDropDown">Size Range</label>
                                    <select class="form-control">
                                        <option>Default select</option>
                                    </select>

                                    <label for="FormControlDropDown">Size Range</label>
                                    <select class="form-control">
                                        <option>Default select</option>
                                    </select>

                                    <label for="FormControlDropDown">Size Range</label>
                                    <select class="form-control">
                                        <option>Default select</option>
                                    </select>

                                    <label for="FormControlDropDown">Internet Desciption</label>
                                    <textarea class="form-control" rows="2" id="comment"></textarea>  

                                    <label for="FormControlDropDown">Internet Desciption</label>
                                    <textarea class="form-control" rows="2" id="comment"></textarea>  

                                    <label for="FormControlInput1">Master Offer No.</label>
                                    <input type="text" class="form-control" id="FormControlInput1" placeholder="3900" />

                                    <label for="FormControlInput1">Master Offer No.</label>
                                    <input type="text" class="form-control" id="FormControlInput1" placeholder="3900" />

                                </div>

                            </Col>
                        </Row>

                    </Modal.Body>
                    <Modal.Footer>
                        <button onClick={()=>{
                            alert("Data Saved");
                            this.handleHide();
                        }}className="btn btn-success">Update</button>
                        <button onClick={this.handleHide} >Cancel</button>
                    </Modal.Footer>
                </Modal>
            </div>
        )
    }
}

export default FormOpen;