import React,{useState} from 'react';
import Breadcrumb from '../../components/Common/Breadcrumb/Breadcrumb';
import { Layout } from './../../Layout/Layout';
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



 const PaanMasalaCollection = (props) => {

  const [page, setPage] = useState(1)
  const [totalPage, setTotalPage] = useState(5)

    const handlePageClick = page => {
        setPage(page)
    }
   
    return (
      <Layout headbar="Retailer">
            <div className="container-fluid" style={{backgroundColor: "#FFFFFF"}}>
               <Breadcrumb title="Dashboard/" breadcrumbItem="Paan Masala Collection Information" />
               <Row>
                  <Col xl={12}>
                    <Card>
                      <CardBody>
                        <CardTitle>Paan Masala Collection Info</CardTitle>
                        <CardSubtitle className="mb-3 mt-4">
                                <Row>
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
                                    <Col md={{ size: 3}} style={{ marginTop:'28px',marginLeft:'-25px'}}>
                                    <div className="col-md-10"  >
                                      <button
                                            type="button"
                                            className="btn mb-3"
                                            style={{backgroundColor:'#EE7B20',color:'#FFFFFF'}}
                                            >
                                              <i className="fas fa-eye font-size-16 align-middle me-2"></i>{" "}
                                              View Report
                                        </button>
                                     </div>
                                    
                                    </Col>
                                </Row>
                        </CardSubtitle>

                        <div className="table-responsive">
                          <Table className="table mb-0">
                            <thead className="table-headColor">
                              <tr>
                                <th>Point</th>
                                <th>Section</th>
                                <th>Jar</th>
                                <th>Places</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <th>1</th>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                              </tr>
                              <tr>
                                <th>2</th>
                                <td>Jacob</td>
                                <td>Thornton</td>
                                <td>@fat</td>
                              </tr>
                              <tr>
                                <th>3</th>
                                <td>Larry</td>
                                <td>the Bird</td>
                                <td>@twitter</td>
                              </tr>
                            </tbody>
                          </Table>
                        </div>
                          <div  className="text-center mt-5" style={{marginLeft:'-55px'}}>
                             <button
                                  type="button"
                                  className="btn mb-3 "
                                  style={{backgroundColor:'#25C979',color:'#FFFFFF',marginRight:'30px'}}
                                  >
                                    <i className="far fa-save font-size-16 align-middle me-2"></i>{" "}
                                    Submit Information
                              </button>
                              <button
                                  type="button"
                                  className="btn mb-3"
                                  style={{backgroundColor:'#017EFA',color:'#FFFFFF'}}
                                  >
                                    <i className="fas fa-cloud-download-alt font-size-16 align-middle me-2"></i>{" "}
                                    Get Excel
                              </button>
                          </div>
                      </CardBody>
                    </Card>
                  </Col>
               </Row>

               {/* <Row>
                <Col lg="12">
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
              </Row> */}
           </div>
      </Layout>
    );
  };

export default PaanMasalaCollection;