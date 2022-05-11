import React,{useState} from 'react';
import Breadcrumb from '../../../components/Common/Breadcrumb/Breadcrumb';
import { Layout } from '../../../Layout/Layout';
import {
   Card,
   Col,
   Container,
   Row,
   CardBody,
   CardTitle,
   Label,
   Button,
   Form,
   Input,
   InputGroup,
   FormGroup,
 } from "reactstrap"
 import Select from "react-select"
 import Flatpickr from "react-flatpickr"
 import "flatpickr/dist/themes/material_blue.css"

 const optionGroup = [
   {
     label: "Picnic",
     options: [
       { label: "Mustard", value: "Mustard" },
       { label: "Ketchup", value: "Ketchup" },
       { label: "Relish", value: "Relish" }
     ]
   },
   {
     label: "Camping",
     options: [
       { label: "Tent", value: "Tent" },
       { label: "Flashlight", value: "Flashlight" },
       { label: "Toilet Paper", value: "Toilet Paper" }
     ]
   }
 ]

 const StockRotationReport = (props) => {
   
    return (
      <Layout headbar="Stock Rotation">
            <div className="container-fluid" style={{backgroundColor: "#FFFFFF"}}>
               <Breadcrumb title="Stock Rotation" breadcrumbItem="Stock Rotation Report" />
                 <div >
                  <Row>
                     <Col lg={12}>
                     <Card>
                        <CardBody>
                           <CardTitle className="mb-4">Stock Rotation Report</CardTitle>
                           <Form style={{backgroundColor: "#FAFAFA"}} className="mb-5">
                              <Container className="pt-5 ml-5">
                           
                           <Row>
                              <Col md={{ size: 5}}>
                                 <div className="mb-3 select2-container">
                                       <Label>Region</Label>
                                       <Select
                                          // value={selectedGroup}
                                          // onChange={this.handleSelectGroup}
                                          options={optionGroup}
                                          classNamePrefix="select2-selection"
                                       />
                                 </div>
                              </Col>
                              <Col md={{offset: 1, size: 5}}>
                                 <div className="mb-3 select2-container">
                                       <Label>Area</Label>
                                       <Select
                                          // value={selectedGroup}
                                          // onChange={this.handleSelectGroup}
                                          options={optionGroup}
                                          classNamePrefix="select2-selection"
                                       />
                                 </div>
                              </Col>
                           </Row>

                           <Row>
                              <Col md={{ size: 5}}>
                                 <div className="mb-3 select2-container">
                                       <Label>Distribution House</Label>
                                       <Select
                                          // value={selectedGroup}
                                          // onChange={this.handleSelectGroup}
                                          options={optionGroup}
                                          classNamePrefix="select2-selection"
                                       />
                                 </div>
                              </Col>
                              <Col md={{offset: 1, size: 5}}>
                                 <div className="mb-3 select2-container">
                                       <Label>Territory</Label>
                                       <Select
                                          // value={selectedGroup}
                                          // onChange={this.handleSelectGroup}
                                          options={optionGroup}
                                          classNamePrefix="select2-selection"
                                       />
                                 </div>
                              </Col>
                           </Row>

                           <Row>
                              <Col md={{ size: 5}}>
                                 <div className="mb-3 select2-container">
                                       <Label>Distribution Point</Label>
                                       <Select
                                          // value={selectedGroup}
                                          // onChange={this.handleSelectGroup}
                                          options={optionGroup}
                                          classNamePrefix="select2-selection"
                                       />
                                 </div>
                              </Col>
                              <Col md={{offset: 1, size: 5}}>
                                 <div className="mb-3 select2-container">
                                       <FormGroup className="mb-4">
                                            <Label>Date Range</Label>
                                            <InputGroup>
                                                <Flatpickr
                                                    className="form-control d-block"
                                                    placeholder="dd M,yyyy"
                                                    options={{
                                                        mode: "range",
                                                        dateFormat: "Y-m-d"
                                                    }}
                                                    style={{backgroundColor:'#FFFFFF'}}
                                                />
                                            </InputGroup>
                                        </FormGroup>
                                   </div>
                                   
                              </Col>
                           </Row>
                           
                           </Container>
                           <div  className="text-center mt-5" style={{marginLeft:'-55px'}}>
                             <button
                                  type="button"
                                  className="btn mb-3 pl-5"
                                  style={{backgroundColor:'#017EFA',color:'#FFFFFF'}}
                                  >
                                    <i className="fas fa-cloud-download-alt font-size-16 align-middle me-2"></i>{" "}
                                    Get Excel
                              </button>
                           </div>
                           </Form>
                         
                        </CardBody>
                     </Card>
                     </Col>
                  </Row>
               </div>
           </div>
      </Layout>
    );
  };

export default StockRotationReport;