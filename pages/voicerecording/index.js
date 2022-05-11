import React,{useState} from 'react';
import Breadcrumb from '../../components/Common/Breadcrumb/Breadcrumb';
import { Layout } from '../../Layout/Layout';
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

 const VoiceRecording = (props) => {
   
    return (
      <Layout headbar="Voice Recording">
            <div className="container-fluid" style={{backgroundColor: "#FFFFFF"}}>
               <Breadcrumb title="DashBoard" breadcrumbItem="Voice Recording" />
                 <div >
                  <Row >
                    <Col lg={12} >
                     <Card >
                        <CardBody >
                        <div className="row justify-content-center">
                           <CardTitle className="mb-4">Upload voice record</CardTitle>
                            <Form style={{backgroundColor: "#FAFAFA"}} className='pb-5' >
                             <Container className="pt-5 ml-5" >
                                   <Row>
                                        <Col md={{offset: 4,size: 4}}>
                                            <div className="mb-3 select2-container">
                                                <Label>Select Date</Label>
                                                <div className="col-md-10">
                                                    <input
                                                        className="form-control"
                                                        type="date"
                                                        defaultValue="2019-08-19"
                                                        id="example-date-input"
                                                    />
                                                </div>
                                            </div>
                                        </Col>
                                    </Row>

                                    <Row>
                                        <Col md={{offset: 4,size: 4}}>
                                            <div className="mb-3">
                                            <Label htmlFor="formrow-email-Input">Select Route</Label>
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
                                 Submit
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

export default VoiceRecording;