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


 const WareHouseQcEntry = (props) => {

  const [page, setPage] = useState(1)
  const [totalPage, setTotalPage] = useState(5)

    const handlePageClick = page => {
        setPage(page)
    }
   
    return (
      <Layout headbar="Stock">
            <div className="container-fluid" style={{backgroundColor: "#FFFFFF"}}>
              <Breadcrumb title="Stock" breadcrumbItem="Warehouse QC Entry" />
               <Row>
                  <Col xl={12}>
                    <Card>
                      <CardBody>
                        <CardSubtitle className="mb-3">
                                    <Row>
                                        <Col md={{ size: 3}}>
                                            <CardTitle>Warehouse QC Entry</CardTitle>
                                        </Col>
                                      
                                        <Col md={{offset: 5, size: 2}} style={{ marginTop:'28px',marginRight:'-90px'}}>
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
                              <Table className="table mb-0 qcentry">
                                <thead style={{ backgroundColor:'017EFA'}}>
                                    <tr>
                                        <th rowSpan="2" colSpan="2">
                                             SKU
                                        </th>
                                      
                                        <th rowSpan="1" colSpan="5">
                                               MFC Fault
                                        </th>
                                        <th rowSpan="1" colSpan="5">
                                            MKT Fault
                                        </th>
                                    </tr>
                                    <tr>
                                          <th>Brand Mix Up</th>
                                          <th>Cigarette Visual Fault	</th>
                                          <th>Damaged & Crushed Pack/Outer CBC	</th>
                                          <th>Damaged & Crushed Pack/Outer CBC	</th>
                                          <th>Others</th>
                                          <th>Damp Cigarette stick	</th>
                                          <th>Stock damaged during transport	</th>
                                          <th style={{width:"auto"}}>Shelf life expired stock	</th>
                                          <th>Spotting on Cigarette		</th>
                                          <th>Others	</th>
                                    </tr>
                                </thead>
                                <tbody  className='mt-5'>
                                  <tr>
                                    <td colSpan="2">1</td>
                                    <td  rowSpan="1">
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
                                    <td colSpan="2">1</td>
                                    <td  rowSpan="1">
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
                                    <td colSpan="2">1</td>
                                    <td  rowSpan="1">
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
                                    <td colSpan="2">1</td>
                                    <td  rowSpan="1">
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

export default WareHouseQcEntry;