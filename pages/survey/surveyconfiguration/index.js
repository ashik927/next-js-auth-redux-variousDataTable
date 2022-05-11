import React,{useState} from 'react';
import Breadcrumb from '../../../components/Common/Breadcrumb/Breadcrumb';
import { Layout } from '../../../Layout/Layout';
 import {
  Table,
  Row,
  Col,
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  Input,
  Form,
  Label,
  InputGroup,
} from "reactstrap"
import { isEmpty, map } from "lodash"
import Select from 'react-select';
// import './SurveyConfiguration.module.css'
import Flatpickr from "react-flatpickr"
import "flatpickr/dist/themes/material_blue.css"




 const SurveyConfiguration = (props) => {

  const [page, setPage] = useState(1)
  const [totalPage, setTotalPage] = useState(5)
  const [customOutlinePrimary, setcustomOutlinePrimary] = useState(true);
  const [toggleSwitch, settoggleSwitch] = useState(true);

    const handlePageClick = page => {
        setPage(page)
    }
   
    return (
      <Layout headbar="Survey">
            <div className="container-fluid" >
              <Breadcrumb title="Survey" breadcrumbItem="Survey Configuration" />
                <Row className='m-3' style={{backgroundColor: "#FFFFFF",borderRadius:'12px'}}>
                   <h5 className="m-2">Survey Configuration</h5>
                    <Col xs={12}>
                    <Card style={{backgroundColor: "#FAFAFA", borderRadius: "12px"}}>
                        <CardBody>
                           <CardTitle className="mb-4">Basic Configuration</CardTitle>
                            <div className="mb-4">
                                <Row>
                                    <Col  md={{offset: 1, size: 4}} className="mb-3 ">
                                        <label htmlFor="name">Survey Title </label>
                                        <input
                                        type="text"
                                        id="name"
                                        name="untyped-input"
                                        className="form-control surveryButtonSC"
                                        />
                                    </Col>

                                    <Col md={{offset: 2, size: 4}} className="mb-3">
                                        <label htmlFor="email">Effective Date Range*</label>
                                                <InputGroup>
                                                <Flatpickr
                                                    className="form-control d-block surveryButtonSC"
                                                    placeholder="dd M,yyyy"
                                                    options={{
                                                        mode: "range",
                                                        dateFormat: "Y-m-d"
                                                    }}
                                                    style={{backgroundColor:'#FFFFFF'}}
                                                />
                                            </InputGroup>
                                    </Col>
                                </Row>
                            </div>
                        <Row className="" >
                            <Row>
                            <Col  md={{offset: 1, size: 3}} className="mb-3" >
                                  <CardTitle className="">Select Location</CardTitle>
                                </Col>  
                            </Row>

                                <Col  md={{offset: 1, size: 1}} className="mb-3" style={{width: "55px"}}>
                                    <Input
                                      type="checkbox"
                                      className="form-check-Input"
                                      id="horizontal-customCheck"
                                    />
                                </Col>  

                                <Col  md={{ size: 2}} className="mb-3">
                                    <div className=" select2-container">
                                            <Label>Frequency</Label>
                                            <div className="">
                                                <select defaultValue="0" className="form-select surveySelectSc">
                                                    <option value="0">Open this select menu</option>
                                                    <option value="1">One</option>
                                                    <option value="2">Two</option>
                                                    <option value="3">Three</option>
                                                </select>
                                            </div>
                                    </div>
                                </Col>

                                <Col  md={{ size: 2}} className="mb-3">
                                <div className=" select2-container ">
                                        <Label>Frequency</Label>
                                        <div className="">
                                            <select defaultValue="0" className="form-select surveySelectSc">
                                                <option value="0">Open this select menu</option>
                                                <option value="1">One</option>
                                                <option value="2">Two</option>
                                                <option value="3">Three</option>
                                            </select>
                                        </div>
                                    </div>
                                </Col>

                                <Col  md={{ size: 2}} className="mb-3">
                                <div className=" select2-container ">
                                        <Label>Frequency</Label>
                                        <div className="">
                                            <select defaultValue="0" className="form-select surveySelectSc">
                                                <option value="0">Open this select menu</option>
                                                <option value="1">One</option>
                                                <option value="2">Two</option>
                                                <option value="3">Three</option>
                                            </select>
                                        </div>
                                    </div>
                                </Col>

                                <Col  md={{ size: 2}} className="mb-3">
                                <div className=" select2-container ">
                                        <Label>Frequency</Label>
                                        <div className="">
                                            <select defaultValue="0" className="form-select surveySelectSc">
                                                <option value="0">Open this select menu</option>
                                                <option value="1">One</option>
                                                <option value="2">Two</option>
                                                <option value="3">Three</option>
                                            </select>
                                        </div>
                                    </div>
                                </Col>

                                <Col  md={{ size: 2}} className="mb-3">
                                <div className=" select2-container">
                                        <Label>Frequency</Label>
                                        <div className="">
                                            <select defaultValue="0" className="form-select surveySelectSc">
                                                <option value="0">Open this select menu</option>
                                                <option value="1">One</option>
                                                <option value="2">Two</option>
                                                <option value="3">Three</option>
                                            </select>
                                        </div>
                                    </div>
                                </Col>
                                <Form className="mt-5">
                                    <div className="row mb-4">
                                    <Col  md={{offset: 1, size: 1}} className="mb-3 mt-3" style={{width: "55px"}}>
                                        <Input
                                        type="checkbox"
                                        className="form-check-Input"
                                        id="horizontal-customCheck"
                                        />
                                    </Col>  
                                    <Col  md={{ size: 1}} className="mb-4  mt-3" >
                                       <h6>Bulk Upload</h6>
                                    </Col>  
                                    <Col sm={2}>
                                      <div className="">
                                      <button
                                      type="button"
                                      className="btn mb-3 sampleButtonSc"
                                      >
                                          <i className="bx bx-cloud-upload font-size-16 align-middle me-2"></i>{" "}
                                          Sample
                                      </button>
                                        </div>
                                    </Col>
                                    
                                    <Col sm={{offset:0,size:3}}>
                                    <button
                                      type="button"
                                      className="btn mb-3 uploadButtonSc"
                                      >
                                          <i className="bx bx-cloud-download font-size-16 align-middle me-2"></i>{" "}
                                         Upload
                                      </button>
                                    </Col>
                                    </div>
                                </Form>
                        </Row>
                    </CardBody>
                </Card>
                    </Col>
                </Row>
                <Row className='m-3' style={{backgroundColor: "#FFFFFF",borderRadius:'12px'}}>
                   <h5 className="m-2">Question Setup</h5>
                    <Col xs={12}>
                        <Card style={{backgroundColor: "#FAFAFA", borderRadius: "12px"}}>
                            <CardBody>
                                <div className="mb-4">
                                    <Row>
                                        <Col  md={{offset: 1, size: 5}} className="mb-3 ">
                                            <label htmlFor="name">Question: 1 </label>
                                            <input
                                            type="text"
                                            id="name"
                                            name="untyped-input"
                                            className="form-control surveryButtonSC"
                                            />
                                            <div className="d-flex justify-content-end" >
                                            <div className=" w-50 form-check  form-check-primary mt-3 mb-3">
                                                <input
                                                type="checkbox"
                                                className="form-check-input"
                                                id="customCheck-outlinecolor1"
                                                checked={customOutlinePrimary}
                                                onChange={() => {
                                                    setcustomOutlinePrimary(!customOutlinePrimary)
                                                }}
                                                />
                                                <label
                                                className="form-check-label"
                                                htmlFor="customCheck-outlinecolor1"
                                                >
                                                Checkbox Outline Primary
                                                </label>
                                            </div>
                                            <div className=" flex-shrink-1 form-check form-switch mt-3 mb-3" >
                                            <label
                                                    className="form-check-label"
                                                    htmlFor="customSwitch2"
                                                >
                                                    Is mandatory ?
                                                </label>
                                                <input
                                                    type="checkbox"
                                                    className="form-check-input"
                                                    id="customSwitch2"
                                                    defaultChecked
                                                    onClick={e => {
                                                    settoggleSwitch(!toggleSwitch)
                                                    }}
                                                />
                                            
                                            </div>
                                            </div>
                                        </Col>
                                        
                                        <Col md={{offset: 1, size: 4}} className="mb-3">
                                            <label htmlFor="email"></label>
                                                <div className="mt-2">
                                                    <select defaultValue="0" className="form-select surveySelectSc">
                                                        <option value="0">Yes/No</option>
                                                        <option value="1">One</option>
                                                        <option value="2">Two</option>
                                                        <option value="3">Three</option>
                                                    </select>
                                                </div>
                                        </Col>
                                    </Row>
                                    <Row className='m-3'>
                                        <Col  md={{offset: 1, size: 5}} className="mb-3 ">
                                            <label htmlFor="name">Answer </label>
                                            <div className=" w-50 form-check  form-check-primary mt-3 mb-2">
                                                <input
                                                type="checkbox"
                                                className="form-check-input"
                                                id="customCheck-outlinecolor1"
                                                checked={customOutlinePrimary}
                                                onChange={() => {
                                                    setcustomOutlinePrimary(!customOutlinePrimary)
                                                }}
                                                />
                                                <label
                                                className="form-check-label"
                                                htmlFor="customCheck-outlinecolor1"
                                                >
                                                Yes
                                                </label>
                                            </div>
                                            <input
                                            type="text"
                                            id="name"
                                            name="untyped-input"
                                            className="form-control surveryButtonSC"
                                            />
                                            <div className="d-flex justify-content-end" >
                                                <div className=" w-50 form-check  form-check-primary mt-3 mb-3">
                                                    <input
                                                    type="checkbox"
                                                    className="form-check-input"
                                                    id="customCheck-outlinecolor1"
                                                    checked={customOutlinePrimary}
                                                    onChange={() => {
                                                        setcustomOutlinePrimary(!customOutlinePrimary)
                                                    }}
                                                    />
                                                    <label
                                                    className="form-check-label"
                                                    htmlFor="customCheck-outlinecolor1"
                                                    >
                                                    Checkbox Outline Primary
                                                    </label>
                                                </div>
                                            
                                                <div className=" flex-shrink-1 form-check form-switch mt-3 mb-3" >
                                                <label
                                                        className="form-check-label"
                                                        htmlFor="customSwitch2"
                                                    >
                                                        Is mandatory ?
                                                    </label>
                                                    <input
                                                        type="checkbox"
                                                        className="form-check-input"
                                                        id="customSwitch2"
                                                        defaultChecked
                                                        onClick={e => {
                                                        settoggleSwitch(!toggleSwitch)
                                                        }}
                                                    />
                                                
                                                </div>
                                            </div>
                                        </Col>
                                        
                                        <Col md={{offset: 1, size: 4}} className="mb-3">
                                            <label htmlFor="email"></label>
                                                <div className="mt-5">
                                                    <select defaultValue="0" className="form-select surveySelectSc">
                                                        <option value="0">Numaric</option>
                                                        <option value="1">One</option>
                                                        <option value="2">Two</option>
                                                        <option value="3">Three</option>
                                                    </select>
                                                </div>
                                        </Col>
                                    </Row>
                                    <Row className='m-3'>
                                        <Col  md={{offset: 1, size: 5}} className="mb-3 ">
                                            <div className=" w-50 form-check  form-check-primary mt-3 mb-2">
                                                <input
                                                type="checkbox"
                                                className="form-check-input"
                                                id="customCheck-outlinecolor1"
                                                checked={customOutlinePrimary}
                                                onChange={() => {
                                                    setcustomOutlinePrimary(!customOutlinePrimary)
                                                }}
                                                />
                                                <label
                                                className="form-check-label"
                                                htmlFor="customCheck-outlinecolor1"
                                                >
                                                No
                                                </label>
                                            </div>
                                            <input
                                            type="text"
                                            id="name"
                                            name="untyped-input"
                                            className="form-control surveryButtonSC"
                                            />
                                            <div className="d-flex justify-content-end" >
                                                <div className=" w-50 form-check  form-check-primary mt-3 mb-3">
                                                    <input
                                                    type="checkbox"
                                                    className="form-check-input"
                                                    id="customCheck-outlinecolor1"
                                                    checked={customOutlinePrimary}
                                                    onChange={() => {
                                                        setcustomOutlinePrimary(!customOutlinePrimary)
                                                    }}
                                                    />
                                                    <label
                                                    className="form-check-label"
                                                    htmlFor="customCheck-outlinecolor1"
                                                    >
                                                    Checkbox Outline Primary
                                                    </label>
                                                </div>
                                            
                                                <div className=" flex-shrink-1 form-check form-switch mt-3 mb-3" >
                                                <label
                                                        className="form-check-label"
                                                        htmlFor="customSwitch2"
                                                    >
                                                        Is mandatory ?
                                                    </label>
                                                    <input
                                                        type="checkbox"
                                                        className="form-check-input"
                                                        id="customSwitch2"
                                                        defaultChecked
                                                        onClick={e => {
                                                        settoggleSwitch(!toggleSwitch)
                                                        }}
                                                    />
                                                
                                                </div>
                                            </div>
                                        </Col>
                                        
                                        <Col md={{offset: 1, size: 4}} className="mb-3">
                                            <label htmlFor="email"></label>
                                                <div className="mt-4">
                                                    <select defaultValue="0" className="form-select surveySelectSc">
                                                        <option value="0">Numaric</option>
                                                        <option value="1">One</option>
                                                        <option value="2">Two</option>
                                                        <option value="3">Three</option>
                                                    </select>
                                                </div>
                                        </Col>
                                    </Row>
                                </div>
                        
                        </CardBody>
                        </Card>
                    </Col>
                </Row>

                <Row className='m-3' style={{backgroundColor: "#FFFFFF",borderRadius:'12px'}}>
                    <Col xs={12}>
                        <Card style={{backgroundColor: "#FAFAFA", borderRadius: "12px"}}>
                            <CardBody>
                                <div className="mb-4">
                                    <Row>
                                        <Col  md={{offset: 1, size: 5}} className="mb-3 ">
                                            <label htmlFor="name">Question: 2 </label>
                                            <input
                                            type="text"
                                            id="name"
                                            name="untyped-input"
                                            className="form-control surveryButtonSC"
                                            />
                                            <div className="d-flex justify-content-end" >
                                            <div className=" w-50 form-check  form-check-primary mt-3 mb-3">
                                                <input
                                                type="checkbox"
                                                className="form-check-input"
                                                id="customCheck-outlinecolor1"
                                                checked={customOutlinePrimary}
                                                onChange={() => {
                                                    setcustomOutlinePrimary(!customOutlinePrimary)
                                                }}
                                                />
                                                <label
                                                className="form-check-label"
                                                htmlFor="customCheck-outlinecolor1"
                                                >
                                                Checkbox Outline Primary
                                                </label>
                                            </div>
                                            <div className=" flex-shrink-1 form-check form-switch mt-3 mb-3" >
                                            <label
                                                    className="form-check-label"
                                                    htmlFor="customSwitch2"
                                                >
                                                    Is mandatory ?
                                                </label>
                                                <input
                                                    type="checkbox"
                                                    className="form-check-input"
                                                    id="customSwitch2"
                                                    defaultChecked
                                                    onClick={e => {
                                                    settoggleSwitch(!toggleSwitch)
                                                    }}
                                                />
                                            
                                            </div>
                                            </div>
                                        </Col>
                                        
                                        <Col md={{offset: 1, size: 4}} className="mb-3">
                                            <label htmlFor="email"></label>
                                                <div className="mt-2">
                                                    <select defaultValue="0" className="form-select surveySelectSc">
                                                        <option value="0">Custom</option>
                                                        <option value="1">One</option>
                                                        <option value="2">Two</option>
                                                        <option value="3">Three</option>
                                                    </select>
                                                </div>
                                        </Col>
                                    </Row>
                                    <Row className='m-3'>
                                        <Col  md={{offset: 1, size: 5}} className="mb-3 ">
                                            <label htmlFor="name">Answer </label>
                                           
                                            <input
                                            type="text"
                                            id="name"
                                            name="untyped-input"
                                            className="form-control surveryButtonSC"
                                            />
                                            <div className="d-flex justify-content-end" >
                                                <div className=" w-10 form-check  form-check-primary mt-3 mb-3">
                                                    <label
                                                    className="form-check-label"
                                                    htmlFor="customCheck-outlinecolor1"
                                                    >
                                                    <i className="dripicons-plus"></i>
                                                    Add More
                                                    </label>
                                                </div>
                                            
                                            </div>
                                        </Col>
                                    </Row>
                                </div>
                        </CardBody>
                        </Card>
                    </Col>
                </Row>

                <Row className='m-3' style={{backgroundColor: "#FFFFFF",borderRadius:'12px'}}>
                    <Col xs={12}>
                        <Card style={{backgroundColor: "#FAFAFA", borderRadius: "12px"}}>
                            <CardBody>
                                <div className="mb-4">
                                    <Row>
                                        <Col  md={{offset: 1, size: 5}} className="mb-3 ">
                                            <label htmlFor="name">Question: 3 </label>
                                            <input
                                            type="text"
                                            id="name"
                                            name="untyped-input"
                                            className="form-control surveryButtonSC"
                                            />
                                            <div className="d-flex justify-content-end" >
                                            <div className=" w-50 form-check  form-check-primary mt-3 mb-3">
                                                <input
                                                type="checkbox"
                                                className="form-check-input"
                                                id="customCheck-outlinecolor1"
                                                checked={customOutlinePrimary}
                                                onChange={() => {
                                                    setcustomOutlinePrimary(!customOutlinePrimary)
                                                }}
                                                />
                                                <label
                                                className="form-check-label"
                                                htmlFor="customCheck-outlinecolor1"
                                                >
                                               Allow Multiple
                                                </label>
                                            </div>
                                            <div className=" w-50  mt-3 mb-3" >
                                            <label
                                                    className="form-check-label"
                                                    htmlFor="customSwitch2"
                                                >
                                                   Max.Image
                                                </label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="customSwitch2"
                                                    defaultValue="0"
                                                    style={{width:'40px'}}
                                                    // defaultChecked
                                                    // onClick={e => {
                                                    // settoggleSwitch(!toggleSwitch)
                                                    // }}
                                                />
                                            
                                            </div>
                                            <div className=" flex-shrink-1 form-check form-switch mt-3 mb-3" >
                                            <label
                                                    className="form-check-label"
                                                    htmlFor="customSwitch2"
                                                >
                                                    Is mandatory ?
                                                </label>
                                                <input
                                                    type="checkbox"
                                                    className="form-check-input"
                                                    id="customSwitch2"
                                                    defaultChecked
                                                    onClick={e => {
                                                    settoggleSwitch(!toggleSwitch)
                                                    }}
                                                />
                                            
                                            </div>
                                            </div>
                                        </Col>
                                        
                                        <Col md={{offset: 1, size: 4}} className="mb-3">
                                            <label htmlFor="email"></label>
                                                <div className="mt-2">
                                                    <select defaultValue="0" className="form-select surveySelectSc">
                                                        <option value="0">Custom</option>
                                                        <option value="1">One</option>
                                                        <option value="2">Two</option>
                                                        <option value="3">Three</option>
                                                    </select>
                                                </div>
                                        </Col>
                                    </Row>
                                    <Row className='m-3'>
                                        <Col  md={{offset: 1, size: 5}} className="mb-3 ">
                                            <label htmlFor="name">Answer </label>
                                            <div >
                                                <div className=" mt-3 mb-3">
                                                    <label
                                                    className="form-check-label"
                                                    htmlFor="customCheck-outlinecolor1"
                                                    >
                                                         <button
                                                            type="button"
                                                            className="btn mb-3 uploadButtonSc"
                                                         >
                                                            <i className="bx bx-cloud-download font-size-16 align-middle me-2"></i>{" "}
                                                                Upload
                                                            </button>
                                                       <label className="m-4">
                                                        <i className="dripicons-plus"></i>
                                                            Add More
                                                       </label>
                                                        
                                                    </label>
                                                </div>
                                            
                                            </div>
                                        </Col>
                                    </Row>
                                </div>
                        </CardBody>
                        </Card>
                    </Col>
                </Row>
                <Row>
                <Col md={{offset:9,size:3}} className="mb-3 mt-2">
                        <button
                        type="button"
                        className="btn m-auto addMoreQcSc"
                        >
                            <i className="dripicons-plus me-2"></i>
                            Add more question
                        </button>
                        
                    </Col>
                </Row>
           </div>
      </Layout>
    );
  };

export default SurveyConfiguration;