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


 const StockManagementReport = (props) => {

  const [page, setPage] = useState(1)
  const [totalPage, setTotalPage] = useState(5)

    const handlePageClick = page => {
        setPage(page)
    }
   
    return (
      <Layout headbar="Stock Management">
            <div className="container-fluid" style={{backgroundColor: "#FFFFFF"}}>
              <Breadcrumb title="Stock Management" breadcrumbItem="Stock Mgt. Report" />
               <Row>
                  <Col xl={12}>
                    <Card>
                      <CardBody>
                        <CardTitle>All Employee</CardTitle>
                        <CardSubtitle className="mb-3 mt-4">
                                    <Row>
                                        <Col md={{ size: 3}}>
                                            <div className="mb-3 select2-container">
                                                    <Label>Select Distrubution Point</Label>
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
                                        <Col md={{ size: 2}} style={{ marginTop:'28px',marginRight:'0px'}}>
                                          <div className="col-md-10"  >
                                            <button
                                                    type="button"
                                                    className="btn mb-3"
                                                    style={{backgroundColor:'#EE7B20',color:'#FFFFFF'}}
                                                    >
                                                    <i className="fas fa-eye font-size-16 align-middle me-2"></i>{" "}{" "}
                                                    View Stock Report
                                                </button>
                                          </div>
                                        </Col>
                                        <Col md={{ size: 2}} style={{ marginTop:'28px',marginRight:'0px'}}>
                                          <div className="col-md-10"  >
                                            <button
                                                    type="button"
                                                    className="btn mb-3"
                                                    style={{backgroundColor:'#25C979',color:'#FFFFFF'}}
                                                    >
                                                    <i className="bx bx-transfer-alt font-size-16 align-middle me-2"></i>{" "}
                                                    Transfer Stock
                                                </button>
                                          </div>
                                        </Col>
                                        <Col md={{ size: 2}} style={{ marginTop:'28px',marginRight:'0px'}}>
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
                                    </Row>
                            </CardSubtitle>
                            <div className="table-responsive">
                              <Table className="table mb-0">
                                <thead className="table-headColor">
                                  <tr>
                                    <th>Area</th>
                                    <th>House</th>
                                    <th>Point</th>
                                    <th>SKUS</th>
                                    <th>Opening</th>
                                    <th>Distributed Amount</th>
                                    <th>IGT</th>
                                    <th>Recieved</th>
                                    <th>Transferred</th>
                                    <th>STT</th>
                                    <th>Stolen</th>
                                    <th>Warehouse QC</th>
                                    <th>Closing</th>
                                    <th>SCR</th>
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
                                    <td>Otto</td>
                                    <td>Mark</td>
                                    <td>Otto</td>
                                    <td>Mark</td>
                                    <td>Otto</td>
                                    <td>Mark</td>
                                    <td>Otto</td>
                                    <td>Otto</td>
                                  </tr>
                                  <tr>
                                  <th>1</th>
                                    <td>Mark</td>
                                    <td>Otto</td>
                                    <td>Mark</td>
                                    <td>Otto</td>
                                    <td>Mark</td>
                                    <td>Otto</td>
                                    <td>Mark</td>
                                    <td>Otto</td>
                                    <td>Mark</td>
                                    <td>Otto</td>
                                    <td>Mark</td>
                                    <td>Otto</td>
                                    <td>Otto</td>
                                  </tr>
                                  <tr>
                                    <th>1</th>
                                    <td>Mark</td>
                                    <td>Otto</td>
                                    <td>Mark</td>
                                    <td>Otto</td>
                                    <td>Mark</td>
                                    <td>Otto</td>
                                    <td>Mark</td>
                                    <td>Otto</td>
                                    <td>Mark</td>
                                    <td>Otto</td>
                                    <td>Mark</td>
                                    <td>Otto</td>
                                    <td>Otto</td>
                                  </tr>
                                  <tr>
                                    <th>1</th>
                                    <td>Mark</td>
                                    <td>Otto</td>
                                    <td>Mark</td>
                                    <td>Otto</td>
                                    <td>Mark</td>
                                    <td>Otto</td>
                                    <td>Mark</td>
                                    <td>Otto</td>
                                    <td>Mark</td>
                                    <td>Otto</td>
                                    <td>Mark</td>
                                    <td>Otto</td>
                                    <td>Otto</td>
                                  </tr>
                                  <tr>
                                    <th>1</th>
                                    <td>Mark</td>
                                    <td>Otto</td>
                                    <td>Mark</td>
                                    <td>Otto</td>
                                    <td>Mark</td>
                                    <td>Otto</td>
                                    <td>Mark</td>
                                    <td>Otto</td>
                                    <td>Mark</td>
                                    <td>Otto</td>
                                    <td>Mark</td>
                                    <td>Otto</td>
                                    <td>Otto</td>
                                  </tr>
                                  <tr className="table-headColor" style={{color: 'white'}}>
                                    <th></th>
                                    <td></td>
                                    <td></td>
                                    <td>Total</td>
                                    <td></td>
                                    <td></td>
                                    <td>Mark</td>
                                    <td>Mark</td>
                                    <td>Otto</td>
                                    <td>Mark</td>
                                    <td>Otto</td>
                                    <td>Otto</td>
                                    <td>Otto</td>
                                    <td>Otto</td>
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

export default StockManagementReport;