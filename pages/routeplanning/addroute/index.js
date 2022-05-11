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
import AddNewRouteModal from '../../../components/Route/AddNewRouteModal';

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


 const AddRoute = (props) => {
    const [openModal , setOpenModal] = useState(false)
    const handleModal = () => {
      setOpenModal(!openModal)
    }
   
    return (
      <Layout headbar="Route">
            <div className="container-fluid" style={{backgroundColor: "#FFFFFF"}}>
               <Breadcrumb title="Route" breadcrumbItem="Add Route" />
                 <div >
                  <Row >
                    <Col lg={12} >
                     <Card >
                        <CardBody >
                        <div className="row justify-content-center">
                           <CardTitle className="mb-4">Create New Route</CardTitle>
                            <Form style={{backgroundColor: "#FAFAFA"}} className='pb-5' >
                             <Container className="pt-5 ml-5" >
                                   <Row>
                                        <Col md={{offset:4, size: 4}}>
                                            <div className="mb-3 select2-container">
                                                <Label>Route Section*</Label>
                                                <Select
                                                    // value={selectedGroup}
                                                    // onChange={this.handleSelectGroup}
                                                    options={optionGroup}
                                                    classNamePrefix="select2-selection"
                                                />
                                            </div>
                                        </Col>
                                         <Col md={{ size: 1}} >
                                           <div className="mt-4" style={{cursor: "pointer"}} onClick={()=>handleModal()}>
                                                <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                  <path d="M14 0C10.3008 0.0446294 6.76575 1.53395 4.14985 4.14985C1.53395 6.76575 0.0446294 10.3008 0 14C0.0446294 17.6992 1.53395 21.2343 4.14985 23.8501C6.76575 26.466 10.3008 27.9554 14 28C17.6992 27.9554 21.2343 26.466 23.8501 23.8501C26.466 21.2343 27.9554 17.6992 28 14C27.9554 10.3008 26.466 6.76575 23.8501 4.14985C21.2343 1.53395 17.6992 0.0446294 14 0ZM22 15H15V22H13V15H6V13H13V6H15V13H22V15Z" fill="#017EFA"/>
                                                 </svg> 
                                            </div>
                                        </Col>
                                    </Row>

                                    <Row>
                                        <Col md={{offset:4, size: 4}}>
                                            <div className="mb-3">
                                            <Label htmlFor="formrow-email-Input">Route Name*</Label>
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
                      <AddNewRouteModal openModal={openModal} handleModal={handleModal} setOpenModal={setOpenModal}/>
                  </Row>
               </div>
           </div>
      </Layout>
    );
  };

export default AddRoute;