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
  Pagination,
  PaginationItem,
  PaginationLink,
  Input,
  Label,
} from "reactstrap"
import { map } from "lodash"
import BrowseRetailerTable from '../../../components/Retailer/BrowseRetailerTable';



const columns = [{
  dataField: 'id',
  // text: 'Id',
  sort: true,
}, {
  dataField: 'name',
  // text: 'Name',
  sort: true
}, {
  dataField: 'position',
  // text: 'Position',
  sort: true
}, {
  dataField: 'office',
  // text: 'Office',
  sort: true
}, {
  dataField: 'age',
  // text: 'Age',
  sort: true
}, {
  dataField: 'startdate',
  // text: 'Start Date',
  sort: true
}, {
  dataField: 'salary',
  // text: 'Salary',
  sort: true
}];

// Table Data
const productData = [
  { "id": 1, "name": "Airi Satou", "position": "Accountant", "office": "Tokyo", "age": "33", "startdate": "2008/11/28", "salary": "$162,700" },

  { "id": 2, "name": "Angelica Ramos", "position": "Chief Executive Officer (CEO)", "office": "London", "age": "47", "startdate": "2009/10/09", "salary": "$1,200,000" },

  { "id": 3, "name": "Ashton Cox", "position": "Junior Technical Author", "office": "San Francisco", "age": "66", "startdate": "2009/01/12", "salary": "$86,000" },

  { "id": 4, "name": "Bradley Greer", "position": "Software Engineer", "office": "London", "age": "41", "startdate": "2012/10/13", "salary": "$132,000" },

  { "id": 5, "name": "Brenden Wagner", "position": "Software Engineer", "office": "San Francisco", "age": "28", "startdate": "2011/06/07", "salary": "$206,850" },

  { "id": 6, "name": "Brielle Williamson", "position": "Integration Specialist", "office": "New York", "age": "61", "startdate": "2012/12/02", "salary": "$372,000" },

  { "id": 7, "name": "Bruno Nash", "position": "Software Engineer", "office": "London", "age": "38", "startdate": "2011/05/03", "salary": "$163,500" },

  { "id": 8, "name": "Caesar Vance", "position": "Pre-Sales Support", "office": "New York", "age": "21", "startdate": "2011/12/12", "salary": "$106,450" },

  { "id": 9, "name": "Cara Stevens", "position": "Sales Assistant", "office": "New York", "age": "46", "startdate": "2011/12/06", "salary": "$145,600" },

  { "id": 10, "name": "Cedric Kelly", "position": "Senior Javascript Developer", "office": "Edinburgh", "age": "22", "startdate": "2012/03/29", "salary": "$433,060" },

  { "id": 11, "name": "Marshall", "position": "Regional Director", "office": "San Francisco", "age": "36", "startdate": "2008/10/16", "salary": "$470,600" },

  { "id": 12, "name": "Hurst", "position": "Javascript Developer", "office": "San Francisco", "age": "39", "startdate": "2009/09/15", "salary": "$205,500" },

  { "id": 13, "name": "Rios", "position": "Personnel Lead", "office": "Edinburgh", "age": "35", "startdate": "2012/09/26", "salary": "$217,500" },

  { "id": 14, "name": "Snider", "position": "Customer Support", "office": "New York", "age": "27", "startdate": "2011/01/25", "salary": "$112,000" },

  { "id": 15, "name": "Wilder", "position": "Sales Assistant", "office": "Sidney", "age": "23", "startdate": "2010/09/20", "salary": "$85,600" },

  { "id": 16, "name": "Camacho", "position": "Support Engineer", "office": "San Francisco", "age": "47", "startdate": "2009/07/07", "salary": "$87,500" },

  { "id": 17, "name": "Green", "position": "Chief Operating Officer (COO)", "office": "San Francisco", "age": "48", "startdate": "2010/03/11", "salary": "$850,000" },

  { "id": 18, "name": "Winters", "position": "Accountant", "office": "Tokyo", "age": "63", "startdate": "2011/07/25", "salary": "$170,750" },

  { "id": 19, "name": "Cortez", "position": "Team Leader", "office": "San Francisco", "age": "22", "startdate": "2008/10/26", "salary": "$235,500" },

  { "id": 20, "name": "Joyce", "position": "Developer", "office": "Edinburgh", "age": "42", "startdate": "2010/12/22", "salary": "$92,575" },

  { "id": 21, "name": "Gloria Little", "position": "Systems Administrator", "office": "New York", "age": "59", "startdate": "2009/04/10", "salary": "$237,500" },

  { "id": 22, "name": "Haley Kennedy", "position": "Senior Marketing Desi,ner", "office": "London", "age": "43", "startdate": "2012/12/18", "salary": "$313,500" },

  { "id": 23, "name": "Hermione Butler", "position": "Regional Director", "office": "London", "age": "47", "startdate": "2011/03/21", "salary": "$356,250" },

  { "id": 24, "name": "Herrod Chandler", "position": "Sales Assistant", "office": "San Francisco", "age": "59", "startdate": "2012/08/06", "salary": "$137,500" },

  { "id": 25, "name": "Hope Fuentes", "position": "Secretary", "office": "San Francisco", "age": "41", "startdate": "2010/02/12", "salary": "$109,850" },

  { "id": 26, "name": "Howard Hatfield", "position": "Office Manager", "office": "San Francisco", "age": "51", "startdate": "2008/12/16", "salary": "$164,500" },

  { "id": 27, "name": "Jackson Bradshaw", "position": "Director", "office": "New York", "age": "65", "startdate": "2008/09/26", "salary": "$645,750" },

  { "id": 28, "name": "Jena Gaines", "position": "Office Manager", "office": "London", "age": "30", "startdate": "2008/12/19", "salary": "$90,560" },

  { "id": 29, "name": "Jenette Caldwell", "position": "Development Lead", "office": "New York", "age": "30", "startdate": "2011/09/03", "salary": "$345,000" },

  { "id": 30, "name": "Jennifer Acosta", "position": "Junior Javascript Devel,per", "office": "Edinburgh", "age": "43", "startdate": "2013/02/01", "salary": "$75,650" }

];

const defaultSorted = [{
  dataField: 'id',
  order: 'asc'
}];

const pageOptions = {
  sizePerPage: 10,
  totalSize: productData.length, // replace later with size(customers),
  custom: true,
}

const BrowseRetailer = (props) => {

  const [page, setPage] = useState(1)
  const [totalPage, setTotalPage] = useState(5)

    const handlePageClick = page => {
        setPage(page)
    }
   
    return (
      <Layout headbar="Retailer">
            <div className="container-fluid" >
               <Breadcrumb title="Retailer" breadcrumbItem="Browse Retailer" />
               <Row>
                  <Col xl={12}>
                    <Card>
                      <CardBody>
                       <CardTitle>All Retailer</CardTitle>
                         {/* <BrowseRetailerTable/> */}
                        <div className="table-responsive retail mb-2" style={{backgroundColor: "#FFFFFF"}}>
                          <Table className="table mb-4 ">
                            <thead className="table-headColor">
                              <tr>
                                <th>
                                    <Input
                                          type="email"
                                          className="form-control retailerForm"
                                          id="formrow-email-Input"
                                          placeholder="Retailer Name"
                                          style={{border: "none",backgroundColor:'#FFFFFF'}}
                                      />
                                </th>
                                <th>
                                    <Input
                                          type="email"
                                          className="form-control retailerForm"
                                          id="formrow-email-Input"
                                          placeholder="Owner Name"
                                          style={{border: "none",backgroundColor:'#FFFFFF'}}
                                      />
                                </th>
                                <th >
                                  <p className='retailerFormContactTh'> Contact No. </p>
                                </th>
                                <th>
                                  <Input
                                        type="email"
                                        className="form-control retailerForm"
                                        id="formrow-email-Input"
                                        placeholder="Route"
                                        style={{border: "none",backgroundColor:'#FFFFFF'}}
                                    />
                                </th>
                                <th>
                                   <p className='retailerFormContactTh'> GEO Class </p>
                                </th>
                                <th>
                                    <select defaultValue="0" className="form-select retailerForm">
                                      <option value="0">Cluster Name</option>
                                      <option value="1">One</option>
                                      <option value="2">Two</option>
                                      <option value="3">Three</option>
                                    </select>
                                </th>
                                <th>
                                    <select defaultValue="0" className="form-select retailerForm">
                                      <option value="0">Cluster Type</option>
                                      <option value="1">One</option>
                                      <option value="2">Two</option>
                                      <option value="3">Three</option>
                                  </select>
                                </th>
                                <th>
                                  <select defaultValue="0" className="form-select retailerForm">
                                    <option value="0">Channel</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                  </select>
                                </th>
                                <th>
                                  <select defaultValue="0" className="form-select retailerForm">
                                    <option value="0">Sub Channel</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                  </select>
                                </th>
                                <th>
                                  <select defaultValue="0" className="form-select retailerForm">
                                    <option value="0">TPG</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                  </select>
                                </th>
                                <th>
                                  <select defaultValue="0" className="form-select retailerForm">
                                    <option value="0">PMM Info</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                  </select>
                                </th>
                                <th>
                                  <select defaultValue="0" className="form-select retailerForm">
                                    <option value="0">SMC</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                  </select>
                                </th>
                                <th>
                                  <select defaultValue="0" className="form-select retailerForm">
                                    <option value="0">Retailer Code</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                  </select>
                                </th>
                                <th>
                                  <select defaultValue="0" className="form-select retailerForm">
                                    <option value="0">Status</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                  </select>
                                </th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <th>1</th>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                                <td>@mdo</td>
                                <th>1</th>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                                <td>@mdo</td>
                                <td>@mdo</td>
                                <td>@mdo</td>
                                <td>@mdo</td>
                                <td>@mdo</td>
                              </tr>
                              <tr>
                                <th>1</th>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                                <td>@mdo</td>
                                <th>1</th>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                                <td>@mdo</td>
                                <td>@mdo</td>
                                <td>@mdo</td>
                                <td>@mdo</td>
                                <td>@mdo</td>
                              </tr>
                              <tr>
                                <th>1</th>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                                <td>@mdo</td>
                                <th>1</th>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                                <td>@mdo</td>
                                <td>@mdo</td>
                                <td>@mdo</td>
                                <td>@mdo</td>
                                <td>@mdo</td>
                              </tr>
                              <tr>
                                <th>1</th>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                                <td>@mdo</td>
                                <th>1</th>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                                <td>@mdo</td>
                                <td>@mdo</td>
                                <td>@mdo</td>
                                <td>@mdo</td>
                                <td>@mdo</td>
                              </tr>
                              <tr>
                                <th>1</th>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                                <td>@mdo</td>
                                <th>1</th>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                                <td>@mdo</td>
                                <td>@mdo</td>
                                <td>@mdo</td>
                                <td>@mdo</td>
                                <td>@mdo</td>
                              </tr>
                              <tr>
                                <th>1</th>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                                <td>@mdo</td>
                                <th>1</th>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                                <td>@mdo</td>
                                <td>@mdo</td>
                                <td>@mdo</td>
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

               <Row>
                  <Col lg="6">
                      <p>Showing 20 of 1,350 entries</p>
                  </Col>
                  <Col lg="6">
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
            </div>
      </Layout>
    );
};

export default BrowseRetailer;