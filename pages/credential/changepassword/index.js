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

 const ChangePassword = (props) => {
   
    return (
      <Layout headbar="Credentials">
            <div className="container-fluid" style={{backgroundColor: "#FFFFFF"}}>
               <Breadcrumb title="Credentials" breadcrumbItem="Change Password" />
                 <div >
                  <Row >
                    <Col lg={12} >
                     <Card >
                        <CardBody >
                        <div className="row justify-content-center">
                           <CardTitle className="mb-4">Change Password</CardTitle>
                            <Form style={{backgroundColor: "#FAFAFA"}} className="pb-5" >
                             <Container className="pt-5 ml-5" >
                                    <Row>
                                        <Col md={{offset: 4,size: 4}}>
                                            <div className="mb-3">
                                            <Label htmlFor="formrow-email-Input">Old Password*</Label>
                                            <Input
                                                type="email"
                                                className="form-control"
                                                id="formrow-email-Input"
                                                placeholder="Name"
                                                style={{border: "none",backgroundColor:'#FFFFFF'}}
                                            />
                                            </div>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col md={{ offset: 4,size: 4}}>
                                            <div className="mb-3">
                                            <Label htmlFor="formrow-email-Input">New Password*</Label>
                                            <Input
                                                type="email"
                                                className="form-control"
                                                id="formrow-email-Input"
                                                placeholder="Name"
                                                style={{border: "none",backgroundColor:'#FFFFFF'}}
                                            />
                                            </div>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col md={{ offset: 4,size: 4}}>
                                            <div className="mb-3">
                                            <Label htmlFor="formrow-email-Input">Retype New Password*</Label>
                                            <Input
                                                type="email"
                                                className="form-control"
                                                id="formrow-email-Input"
                                                placeholder="Name"
                                                style={{border: "none",backgroundColor:'#FFFFFF'}}
                                            />
                                            </div>
                                        </Col>
                                    </Row>
                            </Container>
                            <div  className="text-center mt-5" style={{marginLeft:'-55px'}}>
                              <button type="submit" className="btn btn-primary w-md">
                                 Change Password
                              </button>
                           </div>
                           </Form>
                          
                           </div>
                        </CardBody>
                     </Card>
                    </Col>
                  </Row>
               </div>
           </div>
      </Layout>
    );
  };

export default ChangePassword;