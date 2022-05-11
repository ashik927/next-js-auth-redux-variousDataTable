import React,{useState} from 'react';
import Breadcrumb from '../../components/Common/Breadcrumb/Breadcrumb';
import { Layout } from '../../Layout/Layout';
import { Row, Col, Card, CardBody, CardTitle,InputGroup } from "reactstrap"
import LineApexChart from './LineApexChart';
import DashBoardMiddle from '../../components/Dashboard/DashboardMiddle';
import Flatpickr from "react-flatpickr"
import "flatpickr/dist/themes/material_blue.css"
import { useSelector } from 'react-redux';

 const Dashboard = (props) => {
  const [chartButtonActive , setChartButtonActive] = useState(1)
  const selector =useSelector((state) => state)
  const handleChartButton = (value) => {
    setChartButtonActive(value)
  }
    return (
         <Layout headbar="Dashboard">
            <div className="container-fluid">
               <Breadcrumb title="DashBoard" breadcrumbItem="DashBoard" />
               <Row>
                  <Col lg={12}>
                    <Card>
                      <CardBody>
                        <CardTitle className="">Sales Trend</CardTitle> 
                          <Col md={{offset:8,size:3}} style={{marginTop:'-30px'}}>
                                <InputGroup>
                                    <Flatpickr
                                        className="form-control d-block chartDrHeader"
                                        placeholder="2022-01-01 - 2022-12-01"
                                        options={{
                                            mode: "range",
                                            dateFormat: "Y-m-d"
                                        }}
                                    />
                                    <svg style={{backgroundColor:'#017EFA',color:'#FFFFFF',borderRadius:'4px'}} xmlns="http://www.w3.org/2000/svg" width="45" height="39" viewBox="0 0 30 30" fill="none">
                                      <path d="M12.4763 18.5138L11.8925 21.9213L14.9538 20.3125L18.015 21.9213L17.43 18.5138L19.9075 16.0988L16.485 15.6013L14.9538 12.5L13.4225 15.6013L10 16.0988L12.4763 18.5138Z" fill="white"/>
                                      <path d="M23.75 5H21.25V2.5H18.75V5H11.25V2.5H8.75V5H6.25C4.87125 5 3.75 6.12125 3.75 7.5V25C3.75 26.3787 4.87125 27.5 6.25 27.5H23.75C25.1287 27.5 26.25 26.3787 26.25 25V7.5C26.25 6.12125 25.1287 5 23.75 5ZM23.7525 25H6.25V10H23.75L23.7525 25Z" fill="white"/>
                                    </svg>
                                </InputGroup>
                          </Col>
                          <Col className="mt-2" md={{offset:8,size:12}}>
                            <Row className={selector?.foo?.isMobile ? "dashBoardHeadMobile" : "dashBoardHead"}>
                              <Col md={{offset:0,size:1}} className={chartButtonActive==1 ? selector?.foo?.isMobile ? 'MobileactiveHeadButton' : 'activeHeadButton' : 'HeadButton'  } onClick={() => handleChartButton('1')}>
                                 <p>Total STT</p>
                              </Col>
                              <Col md={{offset:0,size:1}} className={chartButtonActive==2 ? selector?.foo?.isMobile ? 'MobileactiveHeadButton' : 'activeHeadButton' : 'HeadButtonStt'  }>
                                <p  onClick={() => handleChartButton('2')}>Brandwise STT</p>
                              </Col>
                              <Col md={{offset:0,size:1}} className={chartButtonActive==3 ? selector?.foo?.isMobile ? 'MobileactiveHeadButton' : 'activeHeadButtonBcp' :'HeadButtonBcp'} onClick={() => handleChartButton('3')}>
                                <p>BCP</p>
                              </Col>
                              <Col md={{offset:0,size:1}} className={chartButtonActive==4 ? selector?.foo?.isMobile ? 'MobileactiveHeadButton' : 'activeHeadButton' : 'HeadButton'} onClick={() => handleChartButton('4')}>
                                <p>Strike Rate</p>
                              </Col>
                            </Row>
                          </Col>
                          <div style={{marginTop:selector?.foo?.isMobile ? '0px' : '-18px'}}>
                            <LineApexChart />
                          </div>
                      </CardBody>
                    </Card>
                  </Col>
               </Row>
              <DashBoardMiddle/>
            </div>
          </Layout>
    );
  };

  // export async function getServerSideProps() {
  //   const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  //   const posts = await res.json();
  //   return {
  //     props: {
  //       message:posts,
  //     },
  //   };
  // }


  // export async function getStaticProps() {
  //   const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  //   const posts = await res.json();
  //   return {
  //     props: {
  //       message:posts,
  //     },
  //   };
  // }

export default Dashboard;

