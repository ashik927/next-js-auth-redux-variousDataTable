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
  Button,
  FormGroup,
  Container,
  Pagination,
  PaginationItem,
  PaginationLink,
} from "reactstrap"
import { isEmpty, map } from "lodash"
import Select from 'react-select';
// import '../../components/SectionConfigCreate/SectionConfigCrete.css'


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


 const FieldForce = (props) => {

  const [page, setPage] = useState(1)
  const [totalPage, setTotalPage] = useState(5)

    const handlePageClick = page => {
        setPage(page)
    }
   
    return (
      <Layout headbar="Section COnfig Create">
            <div className="container-fluid m-2" style={{backgroundColor: "#FFFFFF"}}>
              <Breadcrumb title="Survey" breadcrumbItem="Survey Configuration" />
                <Row className="m-2">
                  <Col lg={12}>
                  {/* <CardTitle className="m-3">Section Config Create</CardTitle> */}
                    <Card style={{backgroundColor: "#FAFAFA",borderRadius:'12px'}}>
                        <CardBody className="m-auto" >
                        <CardTitle className="mb-4">*In this page we will create Master Section. If you want to upload Build file</CardTitle>
                        <Form>
                            <div className="row mb-4">
                                <Label
                                    htmlFor="horizontal-firstname-Input"
                                    className="col-sm-5 col-form-label"
                                >
                                    Download Sample File
                                </Label>
                                <Col md={{size :5}}>
                                     <button
                                      type="button"
                                      className="btn mb-3 pl-5 sampleButtonScc"
                                    //   style={{backgroundColor:'#FAFAFA',color:'#FFFFFF'}}
                                      >
                                          <i className="bx bx-cloud-upload font-size-16 align-middle me-2"></i>{" "}
                                          Sample
                                      </button>
                                </Col>
                            </div>
                            <div className="row mb-4">
                                <Label
                                    htmlFor="horizontal-email-Input"
                                    className="col-sm-5 col-form-label"
                                >
                                    Upload File
                                </Label>
                                <Col md={{size :5}}>
                                     <button
                                      type="button"
                                      className="btn mb-3 pl-5 uploadButtonScc"
                                    //   style={{backgroundColor:'#017EFA',color:'#FFFFFF'}}
                                      >
                                          <i className="bx bx-cloud-download font-size-16 align-middle me-2"></i>{" "}
                                         Upload
                                      </button>
                                </Col>
                            </div>
                        </Form>
                        </CardBody>
                    </Card>
                  </Col>
                </Row>
                <h5> Create Field Force</h5>
                <Row className="m-3 p-3" style={{backgroundColor: "#FAFAFA",borderRadius:'12px'}}>
                   <CardTitle className="m-3">Select Location</CardTitle>                   
                        <Col  md={{ size: 2}} className="mb-3">
                        <div className="m-3 select2-container">
                                <Label>Frequency</Label>
                                <div className="">
                                    <select defaultValue="0" className="form-select">
                                        <option value="0">Open this select menu</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </select>
                                </div>
                            </div>
                        </Col>

                        <Col  md={{ size: 2}} className="mb-3">
                        <div className="m-3 select2-container">
                                <Label>Frequency</Label>
                                <div className="">
                                    <select defaultValue="0" className="form-select">
                                        <option value="0">Open this select menu</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </select>
                                </div>
                            </div>
                        </Col>

                        <Col  md={{ size: 2}} className="mb-3">
                        <div className="m-3 select2-container">
                                <Label>Frequency</Label>
                                <div className="">
                                    <select defaultValue="0" className="form-select">
                                        <option value="0">Open this select menu</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </select>
                                </div>
                            </div>
                        </Col>

                        <Col  md={{ size: 2}} className="mb-3">
                        <div className="m-3 select2-container">
                                <Label>Frequency</Label>
                                <div className="">
                                    <select defaultValue="0" className="form-select">
                                        <option value="0">Open this select menu</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </select>
                                </div>
                            </div>
                        </Col>

                        <Col  md={{ size: 2}} className="mb-3">
                        <div className="m-3 select2-container">
                                <Label>Frequency</Label>
                                <div className="">
                                    <select defaultValue="0" className="form-select">
                                        <option value="0">Open this select menu</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </select>
                                </div>
                            </div>
                        </Col>
                        <Form className="mb-3">
                            <div className="row mb-4">
                            <Label
                                htmlFor="horizontal-firstname-Input"
                                className="col-sm-2 col-form-label"
                            >
                            Field Force Type
                            </Label>
                            <Col sm={3}>
                               <div className="">
                                    <select defaultValue="0" className="form-select">
                                        <option value="0">Open this select menu</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </select>
                                </div>
                            </Col>
                            <Label
                                htmlFor="horizontal-firstname-Input"
                                className="col-sm-2 col-form-label"
                            >
                                Field Force Name
                            </Label>
                            <Col sm={{offset:0,size:3}}>
                                <Input
                                type="text"
                                className="form-control"
                                id="horizontal-firstname-Input"
                                />
                            </Col>
                            </div>
                            <div className="row mb-4">
                            <Label
                                htmlFor="horizontal-firstname-Input"
                                className="col-sm-2 col-form-label"
                            >
                            FF Contact No.
                            </Label>
                            <Col sm={3}>
                                <Input
                                type="text"
                                className="form-control"
                                id="horizontal-firstname-Input"
                                />
                            </Col>
                            <Label
                                htmlFor="horizontal-firstname-Input"
                                className="col-sm-2 col-form-label"
                            >
                               FF NID
                            </Label>
                            <Col sm={{offset:0,size:3}}>
                                <Input
                                type="text"
                                className="form-control"
                                id="horizontal-firstname-Input"
                                />
                            </Col>
                            </div>
                        </Form>
                        <button
                            type="button"
                            className="btn m-auto"
                            style={{backgroundColor:'#25C979',color:'#FFFFFF',width:'161px'}}
                            >
                            <i className="far fa-save font-size-16 align-middle me-2"></i>{" "}
                            Save
                        </button>
                </Row>

                <Row className="m-2">
                <CardTitle>Field Force List</CardTitle>
                   <Col md={{offset:9 ,size:6}}>
                        <button
                                type="button"
                                className="btn mb-3"
                                style={{backgroundColor:'#017EFA',color:'#FFFFFF'}}
                                >
                                <i className="fas fa-cloud-download-alt font-size-16 align-middle me-2"></i>{" "}
                                Get Excel
                        </button>
                   </Col>
                    
                  <Col md={{offset:2 ,size:8}}>
                    <Card>
                      <CardBody>
                        <div className="table-responsive ">
                          <Table className="table">
                            <thead className="table-headColor">
                              <tr>
                                <th>SL</th>
                                <th>Dep</th>
                                <th>Ff Type</th>
                                <th>Name</th>
                                <th>Phone No.</th>
                                <th>NID</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <th>1</th>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>Mark</td>
                              </tr>
                              <tr>
                                <th>2</th>
                                <td>Jacob</td>
                                <td>Thornton</td>
                                <td>Jacob</td>
                                <td>Thornton</td>
                                <td>Jacob</td>
                              </tr>
                              <tr>
                                <th>3</th>
                                <td>Larry</td>
                                <td>the Bird</td>
                                <td>the Bird</td>
                                <td>the Bird</td>
                                <td>the Bird</td>
                              </tr>
                            </tbody>
                          </Table>
                        </div>
                      </CardBody>
                    </Card>
                    <Row>
                    <Col lg={{offset:6,size:6}}>
                        <Pagination className="pagination pagination-rounded justify-content-end mb-2">
                        <PaginationItem disabled={page === 1}>
                            <PaginationLink
                            previous
                            href="#"
                            onClick={() => handlePageClick(page - 1)}
                            />
                        </PaginationItem>
                        {map(Array(totalPage), (item, i) => (
                            <PaginationItem active={i + 1 === page} key={i}>
                            <PaginationLink
                                onClick={() => handlePageClick(i + 1)}
                                href="#"
                            >
                                {i + 1}
                            </PaginationLink>
                            </PaginationItem>
                        ))}
                        <PaginationItem disabled={page === totalPage}>
                            <PaginationLink
                            next
                            href="#"
                            onClick={() => handlePageClick(page + 1)}
                            />
                        </PaginationItem>
                        </Pagination>
                    </Col>
              </Row>
                  </Col>
               </Row>
              
           </div>
      </Layout>
    );
  };

export default FieldForce;