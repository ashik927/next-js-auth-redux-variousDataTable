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

 const AddEmployee = (props) => {
   
    return (
      <Layout headbar="HR">
            <div className="container-fluid" style={{backgroundColor: "#FFFFFF"}}>
               <Breadcrumb title="HR" breadcrumbItem="Add Employee" />
                 <div >
                  <Row >
                    <Col lg={12} >                    
                     <Card >
                        <CardBody >
                           <CardTitle className="">Add New Employee</CardTitle>
                            <Form style={{backgroundColor: "#FAFAFA"}} className="pb-5"  >
                             <Container className="pt-5 ml-5" >
                                <FormGroup>
                                    <Col md={{offset: 4,size: 4}}>
                                        <div className="mb-3">
                                        <Label htmlFor="formrow-email-Input">Retailer Name*</Label>
                                        <Input
                                            type="email"
                                            className="form-control"
                                            id="formrow-email-Input"
                                            placeholder="Name"
                                            style={{border: "none",backgroundColor:'#FFFFFF'}}
                                        />
                                        </div>
                                    </Col>
                                    
                                </FormGroup>

                                <FormGroup>
                                    <Col md={{offset: 4,size: 4}}>
                                        <div className="mb-3">
                                        <Label htmlFor="formrow-email-Input">Contact No.</Label>
                                        <Input
                                            type="email"
                                            className="form-control"
                                            id="formrow-email-Input"
                                            placeholder="+880"
                                            style={{border: "none",backgroundColor:'#FFFFFF'}}
                                        />
                                        </div>
                                    </Col>
                                </FormGroup>

                                <FormGroup>
                                    <Col md={{offset: 4,size: 4}}>
                                        <div className="mb-3 select2-container">
                                            <Label>TGP*</Label>
                                            <Select
                                                // value={selectedGroup}
                                                // onChange={this.handleSelectGroup}
                                                options={optionGroup}
                                                classNamePrefix="select2-selection"
                                            />
                                        </div>
                                    </Col>
                                </FormGroup>

                                <FormGroup>
                                    <Col md={{offset: 4,size: 4}}>
                                        <div className="mb-3 select2-container">
                                            <Label>Cluster Name</Label>
                                            <Select
                                                // value={selectedGroup}
                                                // onChange={this.handleSelectGroup}
                                                options={optionGroup}
                                                classNamePrefix="select2-selection"
                                            />
                                        </div>
                                    </Col>
                                </FormGroup>

                                <FormGroup>
                                    <Col md={{offset: 4,size: 4}}>
                                        <div className="mb-3 select2-container">
                                            <Label>GEO Classification*</Label>
                                            <Select
                                                // value={selectedGroup}
                                                // onChange={this.handleSelectGroup}
                                                options={optionGroup}
                                                classNamePrefix="select2-selection"
                                            />
                                        </div>
                                    </Col>
                                    
                                </FormGroup>
                                <div  className="text-center mt-5" style={{marginLeft:'-55px'}}>
                                    <button type="submit" className="btn btn-primary w-md">
                                        Submit
                                    </button>
                                </div>
                            </Container>
                           
                           </Form>
                          
                           {/* </div> */}
                        </CardBody>
                     </Card>
                    </Col>
                  </Row>
               </div>
           </div>
      </Layout>
    );
  };

export default AddEmployee;