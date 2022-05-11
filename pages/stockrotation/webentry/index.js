import React,{useState} from 'react';
import Breadcrumb from '../../../components/Common/Breadcrumb/Breadcrumb';
import { Layout } from '../../../Layout/Layout';
 import cellEditFactory from 'react-bootstrap-table2-editor';
 import BootstrapTable from "react-bootstrap-table-next"
 import {
  Table,
  Row,
  Col,
  Card,
  CardBody,
  CardTitle,
  Pagination,
  PaginationItem,
  PaginationLink,
  CardSubtitle,
  Label,
  Input,
} from "reactstrap"
import { isEmpty, map } from "lodash"
import Select from 'react-select';


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


 const WebEntry = (props) => {

  const [page, setPage] = useState(1)
  const [totalPage, setTotalPage] = useState(5)

    const handlePageClick = page => {
        setPage(page)
    }
   
    return (
      <Layout headbar="Stock Rotation">
            <div className="container-fluid" style={{backgroundColor: "#FFFFFF"}}>
              <Breadcrumb title="Stock Rotation" breadcrumbItem="Stock Rotation Report" />
               <Row>
                  <Col xl={12}>
                    <Card>
                      <CardBody>
                        <CardTitle>Stock Rotation Report</CardTitle>
                        <CardSubtitle className="mb-3 mt-4">
                                    <Row>
                                        <Col md={{ size: 3}}>
                                            <div className="mb-3 select2-container">
                                                    <Label>Select Route</Label>
                                                    <div className="col-md-10">
                                                    <Select
                                                            // value={selectedGroup}
                                                            // onChange={this.handleSelectGroup}
                                                            options={optionGroup}
                                                            classNamePrefix="select2-selection"
                                                        />
                                                    </div>
                                            </div>
                                        </Col>
                                        <Col md={{ size: 3}}>
                                            <div className="mb-3 select2-container">
                                                    <Label>Select Retailer</Label>
                                                    <div className="col-md-10">
                                                    <Select
                                                            // value={selectedGroup}
                                                            // onChange={this.handleSelectGroup}
                                                            options={optionGroup}
                                                            classNamePrefix="select2-selection"
                                                        />
                                                    </div>
                                                </div>
                                          </Col>
                                        <Col md={{offset: 2, size: 2}} style={{ marginTop:'28px',marginRight:'-90px'}}>
                                          <div className="col-md-10"  >
                                            <button
                                                    type="button"
                                                    className="btn mb-3"
                                                    style={{backgroundColor:'#017EFA',color:'#FFFFFF'}}
                                                    >
                                                    <i className="fas fa-cloud-download-alt font-size-16 align-middle me-2"></i>{" "}
                                                    Get Excel
                                                </button>
                                          </div>
                                        </Col>
                                        <Col md={{ size: 2}} style={{ marginTop:'28px'}}>
                                          <div className="col-md-10"  >
                                            <button
                                                    type="button"
                                                    className="btn mb-3"
                                                    style={{backgroundColor:'#25C979',color:'#FFFFFF'}}
                                                    >
                                                    <i className="far fa-save font-size-16 align-middle me-2"></i>{" "}
                                                    Save
                                                </button>
                                          </div>
                                        </Col>
                                        
                                    </Row>
                            </CardSubtitle>
                            <div className="table-responsive">
                              <Table className="table mb-0">
                                <thead className="table-headColor">
                                  <tr>
                                    <th>Brand</th>
                                    <th>On Hand Stock</th>
                                    <th>Additional OHS</th>
                                    <th>Till Date OHS</th>
                                    <th>Instant Rotation</th>
                                    <th>Till Date Large Scale Rotation</th>
                                    <th>Large Scale Rotation</th>
                                    <th>Till Date Rotation	</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr>
                                    <th>1</th>
                                    <td>
                                        <Input
                                        type="email"
                                        className=" tableInputButton"
                                        id="formrow-email-Input"
                                       />
                                    </td>
                                    <td>
                                      <Input
                                        type="email"
                                        className=" tableInputButton"
                                        id="formrow-email-Input"
                                       />
                                    </td>
                                    <td>
                                      <Input
                                        type="email"
                                        className=" tableInputButton"
                                        id="formrow-email-Input"
                                       />
                                    </td>
                                    <td>
                                     <Input
                                        type="email"
                                        className=" tableInputButton"
                                        id="formrow-email-Input"
                                       />
                                    </td>
                                    <td>
                                       <Input
                                        type="email"
                                        className=" tableInputButton"
                                        id="formrow-email-Input"
                                       />
                                    </td>
                                    <td>
                                       <Input
                                        type="email"
                                        className=" tableInputButton"
                                        id="formrow-email-Input"
                                       />
                                    </td>
                                    <td>
                                       <Input
                                        type="email"
                                        className=" tableInputButton"
                                        id="formrow-email-Input"
                                       />
                                    </td>
                                  </tr>
                                  <tr>
                                    <th>1</th>
                                    <td>
                                        <Input
                                        type="email"
                                        className=" tableInputButton"
                                        id="formrow-email-Input"
                                       />
                                    </td>
                                    <td>
                                      <Input
                                        type="email"
                                        className=" tableInputButton"
                                        id="formrow-email-Input"
                                       />
                                    </td>
                                    <td>
                                      <Input
                                        type="email"
                                        className=" tableInputButton"
                                        id="formrow-email-Input"
                                       />
                                    </td>
                                    <td>
                                     <Input
                                        type="email"
                                        className=" tableInputButton"
                                        id="formrow-email-Input"
                                       />
                                    </td>
                                    <td>
                                       <Input
                                        type="email"
                                        className=" tableInputButton"
                                        id="formrow-email-Input"
                                       />
                                    </td>
                                    <td>
                                       <Input
                                        type="email"
                                        className=" tableInputButton"
                                        id="formrow-email-Input"
                                       />
                                    </td>
                                    <td>
                                       <Input
                                        type="email"
                                        className=" tableInputButton"
                                        id="formrow-email-Input"
                                       />
                                    </td>
                                  </tr>
                                  <tr>
                                    <th>1</th>
                                    <td>
                                        <Input
                                        type="email"
                                        className=" tableInputButton"
                                        id="formrow-email-Input"
                                       />
                                    </td>
                                    <td>
                                      <Input
                                        type="email"
                                        className=" tableInputButton"
                                        id="formrow-email-Input"
                                       />
                                    </td>
                                    <td>
                                      <Input
                                        type="email"
                                        className=" tableInputButton"
                                        id="formrow-email-Input"
                                       />
                                    </td>
                                    <td>
                                     <Input
                                        type="email"
                                        className=" tableInputButton"
                                        id="formrow-email-Input"
                                       />
                                    </td>
                                    <td>
                                       <Input
                                        type="email"
                                        className=" tableInputButton"
                                        id="formrow-email-Input"
                                       />
                                    </td>
                                    <td>
                                       <Input
                                        type="email"
                                        className=" tableInputButton"
                                        id="formrow-email-Input"
                                       />
                                    </td>
                                    <td>
                                       <Input
                                        type="email"
                                        className=" tableInputButton"
                                        id="formrow-email-Input"
                                       />
                                    </td>
                                  </tr>
                                  <tr>
                                    <th>1</th>
                                    <td>
                                        <Input
                                        type="email"
                                        className=" tableInputButton"
                                        id="formrow-email-Input"
                                       />
                                    </td>
                                    <td>
                                      <Input
                                        type="email"
                                        className=" tableInputButton"
                                        id="formrow-email-Input"
                                       />
                                    </td>
                                    <td>
                                      <Input
                                        type="email"
                                        className=" tableInputButton"
                                        id="formrow-email-Input"
                                       />
                                    </td>
                                    <td>
                                     <Input
                                        type="email"
                                        className=" tableInputButton"
                                        id="formrow-email-Input"
                                       />
                                    </td>
                                    <td>
                                       <Input
                                        type="email"
                                        className=" tableInputButton"
                                        id="formrow-email-Input"
                                       />
                                    </td>
                                    <td>
                                       <Input
                                        type="email"
                                        className=" tableInputButton"
                                        id="formrow-email-Input"
                                       />
                                    </td>
                                    <td>
                                       <Input
                                        type="email"
                                        className=" tableInputButton"
                                        id="formrow-email-Input"
                                       />
                                    </td>
                                  </tr>
                                  <tr>
                                    <th>1</th>
                                    <td>
                                        <Input
                                        type="email"
                                        className=" tableInputButton"
                                        id="formrow-email-Input"
                                       />
                                    </td>
                                    <td>
                                      <Input
                                        type="email"
                                        className=" tableInputButton"
                                        id="formrow-email-Input"
                                       />
                                    </td>
                                    <td>
                                      <Input
                                        type="email"
                                        className=" tableInputButton"
                                        id="formrow-email-Input"
                                       />
                                    </td>
                                    <td>
                                     <Input
                                        type="email"
                                        className=" tableInputButton"
                                        id="formrow-email-Input"
                                       />
                                    </td>
                                    <td>
                                       <Input
                                        type="email"
                                        className=" tableInputButton"
                                        id="formrow-email-Input"
                                       />
                                    </td>
                                    <td>
                                       <Input
                                        type="email"
                                        className=" tableInputButton"
                                        id="formrow-email-Input"
                                       />
                                    </td>
                                    <td>
                                       <Input
                                        type="email"
                                        className=" tableInputButton"
                                        id="formrow-email-Input"
                                       />
                                    </td>
                                  </tr>
                                </tbody>
                              </Table>
                            </div>
                      </CardBody>
                    </Card>
                  </Col>
               </Row>
           </div>
      </Layout>
    );
  };

export default WebEntry;