import React,{useState} from 'react';
import { Button } from 'react-bootstrap';
import {
    Col,
    Modal,
    Input,
  } from "reactstrap";

 const AddNewRouteModal = (props) => {
   
    return (
        <Col lg={6}>
              <Modal
                isOpen={props.openModal}
                toggle={() => {
                    props.handleModal();
                }}
                centered={true}
              >
                <div className="modal-header" style={{backgroundColor: "#01529C",color: "#FFFFFF"}}>
                  <h5 className="modal-title mt-0" style={{color: "#FFFFFF"}}>Add new route catagory</h5>
                  <button
                    type="button"
                    onClick={() => {
                      props.setOpenModal(false);
                    }}
                    className="close"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div className="modal-body text-center" style={{backgroundColor: "#FAFAFA"}}>
                  <p>
                   Enter the name of new route catagory
                  </p>
                  <Input
                    type="email"
                    className="form-control"
                    id="formrow-email-Input"
                    placeholder="Type Here"
                    style={{border: "none",backgroundColor:'#FFFFFF'}}
                  />
                   <div  className="text-center mt-5" style={{marginLeft:'-55px'}}>
                        <button
                            type="button"
                            className="btn mb-3 "
                            style={{backgroundColor:'#25C979',color:'#FFFFFF',marginRight:'30px'}}
                            >
                            <i className="far fa-save font-size-16 align-middle me-2"></i>{" "}
                            Save Retailer
                        </button>
                        <button
                            type="button"
                            className="btn mb-3"
                            style={{backgroundColor:'#017EFA',color:'#FFFFFF'}}
                            onClick={() => {
                                props.setOpenModal(false);
                              }}
                            >
                           Close
                        </button>
                    </div>
                </div>
              </Modal>
      </Col>
    );
  };

export default AddNewRouteModal;