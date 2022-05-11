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
       { label: "Mustard", value: "Mustard" },
       { label: "Ketchup", value: "Ketchup" },
       { label: "Relish", value: "Relish" },
       { label: "Tent", value: "Tent" },
       { label: "Flashlight", value: "Flashlight" },
       { label: "Toilet Paper", value: "Toilet Paper" }
 ]

 const AddRetailer = (props) => {
  const [selectedMulti, setselectedMulti] = useState(null)
  function handleMulti(selectedMulti) {
   setselectedMulti(selectedMulti)
 }
 const options = [{ label: "Select All", value: "all" }, ...optionGroup]

 const  handleChange = value => {
   setselectedMulti(value)
 };

    return (
      <Layout headbar="Retailer">
            <div className="container-fluid" style={{backgroundColor: "#FFFFFF"}}>
               <Breadcrumb title="Retailer" breadcrumbItem="Add Retailer" />
                 <div >
                   <Row>
                     <Col lg={12}>
                        <Card>
                           <CardBody>
                              <CardTitle className="mb-4">Create New Retailer</CardTitle>
                              <Form style={{backgroundColor: "#FAFAFA"}} className="pb-5">
                                 <Container className="pt-5 ml-5">
                                    <Row>
                                       {/* <div className="mb-3">
                                          <label className="control-label">
                                             Multiple Select
                                          </label>
                                          <Select
                                             value={selectedMulti}
                                             isMulti={true}
                                             // onChange={() => {
                                             //    handleMulti()
                                             // }}
                                             options={options}
                                             classNamePrefix="select2-selection"
                                             onChange={selected => {
                                                selected.length &&
                                                selected.find(option => option.value === "all")
                                                ? handleChange(options.slice(1))
                                                : handleChange(selected);
                                             }}
                                          />
                                       </div> */}
                                       <Col md={{ size: 5}}>
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
                                       <Col md={{ offset: 1,size: 5}}>
                                          <div className="mb-3">
                                          <Label htmlFor="formrow-password-Input">Owner Name*</Label>
                                          <Input
                                             type="password"
                                             className="form-control"
                                             id="formrow-password-Input"
                                             placeholder="Name"
                                             style={{border: "none",backgroundColor:'#FFFFFF'}}
                                          />
                                          </div>
                                       </Col>
                                    </Row>

                                    <Row>
                                       <Col md={{ size: 5}}>
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
                                       <Col md={{offset: 1, size: 5}}>
                                          <div className="mb-3 select2-container">
                                                <Label>Select Route</Label>
                                                <Select
                                                   // value={selectedGroup}
                                                   // onChange={this.handleSelectGroup}
                                                   className="CreateRetailerForm"
                                                   options={optionGroup}
                                                   classNamePrefix="select2-selection"
                                                />
                                          </div>
                                       </Col>
                                    </Row>

                                    <Row>
                                       <Col md={{ size: 5}}>
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
                                       <Col md={{offset: 1, size: 5}}>
                                          <div className="mb-3 select2-container">
                                                <Label>Channel*</Label>
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
                                                <Label>Cluster Name</Label>
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
                                                <Label>Cluster Type*</Label>
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
                                                <Label>GEO Classification*</Label>
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
                                                <Label>PMM Information*</Label>
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
                                                <Label>SMC</Label>
                                                <Select
                                                   // value={selectedGroup}
                                                   // onChange={this.handleSelectGroup}
                                                   options={optionGroup}
                                                   classNamePrefix="select2-selection"
                                                />
                                          </div>
                                       </Col>
                                       <Col md={{offset: 1, size: 5}}>
                                          <div className="mb-3">
                                             <Label htmlFor="formrow-email-Input">Retailer Code</Label>
                                             <Input
                                                type="email"
                                                className="form-control"
                                                id="formrow-email-Input"
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
                           </CardBody>
                        </Card>
                     </Col>
                   </Row>
                 </div>
            </div>
      </Layout>
    );
  };

export default AddRetailer;