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




 const SurveyConfigurationEdit = (props) => {

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
                                        disabled
                                        value='ADS Survey'
                                        id="name"
                                        name="untyped-input"
                                        className="form-control surveryButtonSC"
                                        />
                                    </Col>

                                    <Col md={{offset: 2, size: 4}} className="mb-3">
                                        <label htmlFor="email">Effective Date Range*</label>
                                                <InputGroup>
                                                <Flatpickr
                                                    readOnly={true}
                                                    className="form-control d-block surveryButtonSC"
                                                    placeholder="dd M,yyyy"
                                                    allowInput={false}
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
                                <Col  md={{offset: 1, size: 3}} className="mb-1" >
                                  <CardTitle className="">Scope*</CardTitle>
                                </Col>  
                            </Row>
                            
                                <Form className="mt-3">
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
                                      className="btn mb-3 sampleButtonSce"
                                      >
                                          <i className="font-size-16 align-middle me-2">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                                                <path d="M16 8V6H8V2H6V6H2V8H6V16H8V8H16ZM16 0C16.5 0 17 0.2 17.39 0.61C17.8 1 18 1.5 18 2V16C18 16.5 17.8 17 17.39 17.39C17 17.8 16.5 18 16 18H2C1.5 18 1 17.8 0.61 17.39C0.2 17 0 16.5 0 16V2C0 1.5 0.2 1 0.61 0.61C1 0.2 1.5 0 2 0H16Z" fill="#25C979"/>
                                            </svg>    
                                          </i>{" "}
                                          Demo sheet.xsl
                                      </button>
                                        </div>
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
                                            <label htmlFor="name">Question: 1 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Here is your demo question ? </label>
                                            
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
                                        </Col>
                                    </Row>
                                </div>
                        </CardBody>
                        </Card>
                    </Col>
                </Row>
           </div>
      </Layout>
    );
  };

export default SurveyConfigurationEdit;