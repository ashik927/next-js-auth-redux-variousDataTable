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
} from "reactstrap"
import { isEmpty, map } from "lodash"



 const ManageBrandSku = (props) => {

  const [page, setPage] = useState(1)
  const [totalPage, setTotalPage] = useState(5)

    const handlePageClick = page => {
        setPage(page)
    }
   
    return (
      <Layout headbar="Sales Plan">
            <div className="container-fluid" style={{backgroundColor: "#FFFFFF"}}>
               <Breadcrumb title="Sales Plan" breadcrumbItem="Manage Brand SKUs" />
               <Row>
                  <Col xl={12}>
                    <Card>
                      <CardBody>
                        <CardTitle>Manage Brand SKUs</CardTitle>
                        <div className="table-responsive">
                          <Table className="table mb-0">
                            <thead className="table-headColor">
                              <tr>
                                <th>Distributor Point Name	</th>
                                <th>Lifting Point	</th>
                                <th>Region</th>
                                <th>Area</th>
                                <th>Territory</th>
                                <th>Enabled SKUs</th>
                                <th>Data Entry Date</th>
                                <th>PDA</th>
                                <th>ID</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <th>1</th>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                                <td>@mdo</td>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                                <td>@mdo</td>
                              </tr>
                              <tr>
                                <th>2</th>
                                <td>Jacob</td>
                                <td>Thornton</td>
                                <td>@fat</td>
                                <td>@fat</td>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                                <td>@mdo</td>
                              </tr>
                              <tr>
                                <th>3</th>
                                <td>Larry</td>
                                <td>the Bird</td>
                                <td>@twitter</td>
                                <td>@twitter</td>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                                <td>@mdo</td>
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

export default ManageBrandSku;