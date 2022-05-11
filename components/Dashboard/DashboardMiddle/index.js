import React,{useState} from 'react';
import { Row, Col, Card, CardBody, CardTitle,Media,Progress } from "reactstrap"
import SimpleBar from "simplebar-react"

 const DashBoardMiddle = (props) => {
    return (
        <Row>
            <Col xl={4} lg={6}>
                <Card>
                    <CardBody>
                        <div className="d-flex flex-wrap">
                            <div className="me-2">
                                <h5 className="card-title mb-3">Comments</h5>
                            </div>
                            <p className="ms-auto">
                            Sameday Last Week (SDLW)
                            </p>
                        </div>
                        <SimpleBar style={{ maxHeight: "300px" }} className='dashboardScrollBar'>
                            <div>
                                <ul className="list-group list-group-flush">
                                <li className="list-group-item py-3">
                                    <div className="media">
                                    <div className="avatar-xs me-3">
                                        <div className="avatar-title rounded-circle bg-light text-primary">
                                        <i className="bx bxs-user"></i>
                                        </div>
                                    </div>
                                    <div className="media-body">
                                        <h5 className="font-size-14 mb-1">
                                        Delores Williams{" "}
                                        <small className="text-muted float-end">
                                            1 hr Ago
                                        </small>
                                        </h5>
                                        <p className="text-muted">
                                        If several languages coalesce, the grammar of the
                                        resulting of the individual
                                        </p>
                                        <div>
                                        </div>
                                    </div>
                                    </div>
                                </li>

                                <li className="list-group-item py-3">
                                    <div className="media">
                                    <div className="avatar-xs me-3">
                                        <div className="avatar-title rounded-circle bg-light text-primary">
                                        <i className="bx bxs-user"></i>
                                        </div>
                                    </div>
                                    <div className="media-body">
                                        <h5 className="font-size-14 mb-1">
                                        Delores Williams{" "}
                                        <small className="text-muted float-end">
                                            1 hr Ago
                                        </small>
                                        </h5>
                                        <p className="text-muted">
                                        If several languages coalesce, the grammar of the
                                        resulting of the individual
                                        </p>
                                        <div>
                                        </div>
                                    </div>
                                    </div>
                                </li>

                                <li className="list-group-item py-3">
                                    <div className="media">
                                    <div className="avatar-xs me-3">
                                        <div className="avatar-title rounded-circle bg-light text-primary">
                                        <i className="bx bxs-user"></i>
                                        </div>
                                    </div>
                                    <div className="media-body">
                                        <h5 className="font-size-14 mb-1">
                                        Delores Williams{" "}
                                        <small className="text-muted float-end">
                                            1 hr Ago
                                        </small>
                                        </h5>
                                        <p className="text-muted">
                                        If several languages coalesce, the grammar of the
                                        resulting of the individual
                                        </p>
                                        <div>
                                        </div>
                                    </div>
                                    </div>
                                </li>

                                <li className="list-group-item py-3">
                                    <div className="media">
                                    <div className="avatar-xs me-3">
                                        <div className="avatar-title rounded-circle bg-light text-primary">
                                        <i className="bx bxs-user"></i>
                                        </div>
                                    </div>
                                    <div className="media-body">
                                        <h5 className="font-size-14 mb-1">
                                        Delores Williams{" "}
                                        <small className="text-muted float-end">
                                            1 hr Ago
                                        </small>
                                        </h5>
                                        <p className="text-muted">
                                        If several languages coalesce, the grammar of the
                                        resulting of the individual
                                        </p>
                                        <div>
                                        </div>
                                    </div>
                                    </div>
                                </li>

                                <li className="list-group-item py-3">
                                    <div className="media">
                                    <div className="avatar-xs me-3">
                                        {/* <img
                                        src={user1}
                                        alt=""
                                        className="img-fluid d-block rounded-circle"
                                        /> */}
                                    </div>
                                    <div className="media-body">
                                        <h5 className="font-size-14 mb-1">
                                        Clarence Smith{" "}
                                        <small className="text-muted float-end">
                                            2 hrs Ago
                                        </small>
                                        </h5>
                                        <p className="text-muted">
                                        Neque porro quisquam est, qui dolorem ipsum quia dolor
                                        sit amet
                                        </p>
                                        <div>
                                        {/* <Link to="#" className="text-success"> */}
                                            <i className="mdi mdi-reply"></i> Reply
                                        {/* </Link> */}
                                        </div>

                                        <div className="media pt-3">
                                        <div className="avatar-xs me-3">
                                            <div className="avatar-title rounded-circle bg-light text-primary">
                                            <i className="bx bxs-user"></i>
                                            </div>
                                        </div>
                                        <div className="media-body">
                                            <h5 className="font-size-14 mb-1">
                                            Silvia Martinez{" "}
                                            <small className="text-muted float-end">
                                                2 hrs Ago
                                            </small>
                                            </h5>
                                            <p className="text-muted">
                                            To take a trivial example, which of us ever
                                            undertakes
                                            </p>
                                            <div>
                                            {/* <Link to="#" className="text-success"> */}
                                                <i className="mdi mdi-reply"></i> Reply
                                            {/* </Link> */}
                                            </div>
                                        </div>
                                        </div>
                                    </div>
                                    </div>
                                </li>

                                <li className="list-group-item py-3">
                                    <div className="media">
                                    <div className="avatar-xs me-3">
                                        <div className="avatar-title rounded-circle bg-light text-primary">
                                        <i className="bx bxs-user"></i>
                                        </div>
                                    </div>
                                    <div className="media-body">
                                        <h5 className="font-size-14 mb-1">
                                        Keith McCoy{" "}
                                        <small className="text-muted float-end">
                                            12 Aug
                                        </small>
                                        </h5>
                                        <p className="text-muted">
                                        Donec posuere vulputate arcu. phasellus accumsan
                                        cursus velit
                                        </p>
                                        <div>
                                        {/* <Link to="#" className="text-success"> */}
                                            <i className="mdi mdi-reply"></i> Reply
                                        {/* </Link> */}
                                        </div>
                                    </div>
                                    </div>
                                </li>
                                </ul>
                            </div>
                        </SimpleBar>
                    </CardBody>
                </Card>
            </Col>
            
            <Col xl="4">
              <Card>
                 <CardBody>
                   <CardTitle className="mb-4">Top Cities Selling Product</CardTitle>
                    <div className="table-responsive mt-4">
                      <table className="table align-middle table-nowrap">
                        <tbody>
                            <tr>
                            <td style={{ width: "30%" }}>
                                <p className="mb-0">San Francisco</p>
                            </td>
                            <td style={{ width: "25%" }}>
                                <h5 className="mb-0">1,456</h5>
                            </td>
                            <td>
                                <Progress
                                value="94"
                                color="primary"
                                className="bg-transparent progress-sm"
                                size="sm"
                                />
                            </td>
                            </tr>
                            <tr>
                            <td>
                                <p className="mb-0">Los Angeles</p>
                            </td>
                            <td>
                                <h5 className="mb-0">1,123</h5>
                            </td>
                            <td>
                                <Progress
                                value="82"
                                color="success"
                                className="bg-transparent progress-sm"
                                size="sm"
                                />
                            </td>
                            </tr>
                            <tr>
                            <td>
                                <p className="mb-0">San Diego</p>
                            </td>
                            <td>
                                <h5 className="mb-0">1,026</h5>
                            </td>
                            <td>
                                <Progress
                                value="70"
                                color="warning"
                                className="bg-transparent progress-sm"
                                size="sm"
                                />
                            </td>
                            </tr>
                            <tr>
                            <td>
                                <p className="mb-0">San Diego</p>
                            </td>
                            <td>
                                <h5 className="mb-0">1,026</h5>
                            </td>
                            <td>
                                <Progress
                                value="70"
                                color="warning"
                                className="bg-transparent progress-sm"
                                size="sm"
                                />
                            </td>
                            </tr>
                            <tr>
                            <td>
                                <p className="mb-0">San Diego</p>
                            </td>
                            <td>
                                <h5 className="mb-0">1,026</h5>
                            </td>
                            <td>
                                <Progress
                                value="70"
                                color="warning"
                                className="bg-transparent progress-sm"
                                size="sm"
                                />
                            </td>
                            </tr>
                            <tr>
                            <td>
                                <p className="mb-0">San Diego</p>
                            </td>
                            <td>
                                <h5 className="mb-0">1,026</h5>
                            </td>
                            <td>
                                <Progress
                                value="70"
                                color="warning"
                                className="bg-transparent progress-sm"
                                size="sm"
                                />
                            </td>
                            </tr>
                        </tbody>
                      </table>
                    </div>
                 </CardBody>
              </Card>
            </Col>

            <Col xl="4">
              <Card>
                 <CardBody>
                        <div className="d-flex flex-wrap">
                            <div className="me-2">
                                <h5 className="card-title mb-3">Strike Rate</h5>
                            </div>
                        </div>
                        <SimpleBar style={{ maxHeight: "300px" }} className='dashboardScrollBar'>
                            <div>
                                <ul className="list-group list-group-flush">
                                <li className="list-group-item py-3">
                                    <div className="media">
                                    <div className="avatar-xs me-3">
                                        <div className="avatar-title rounded-circle bg-light text-primary">
                                        <i className="bx bxs-user"></i>
                                        </div>
                                    </div>
                                    <div className="media-body">
                                        <h5 className="font-size-14 mb-1">
                                        Delores Williams{" "}
                                        <small className="text-muted float-end">
                                            1 hr Ago
                                        </small>
                                        </h5>
                                        <p className="text-muted">
                                        If several languages coalesce, the grammar of the
                                        resulting of the individual
                                        </p>
                                        <div>
                                        </div>
                                    </div>
                                    </div>
                                </li>

                                <li className="list-group-item py-3">
                                    <div className="media">
                                    <div className="avatar-xs me-3">
                                        <div className="avatar-title rounded-circle bg-light text-primary">
                                        <i className="bx bxs-user"></i>
                                        </div>
                                    </div>
                                    <div className="media-body">
                                        <h5 className="font-size-14 mb-1">
                                        Delores Williams{" "}
                                        <small className="text-muted float-end">
                                            1 hr Ago
                                        </small>
                                        </h5>
                                        <p className="text-muted">
                                        If several languages coalesce, the grammar of the
                                        resulting of the individual
                                        </p>
                                        <div>
                                        </div>
                                    </div>
                                    </div>
                                </li>

                                <li className="list-group-item py-3">
                                    <div className="media">
                                    <div className="avatar-xs me-3">
                                        <div className="avatar-title rounded-circle bg-light text-primary">
                                        <i className="bx bxs-user"></i>
                                        </div>
                                    </div>
                                    <div className="media-body">
                                        <h5 className="font-size-14 mb-1">
                                        Delores Williams{" "}
                                        <small className="text-muted float-end">
                                            1 hr Ago
                                        </small>
                                        </h5>
                                        <p className="text-muted">
                                        If several languages coalesce, the grammar of the
                                        resulting of the individual
                                        </p>
                                        <div>
                                        </div>
                                    </div>
                                    </div>
                                </li>

                                <li className="list-group-item py-3">
                                    <div className="media">
                                    <div className="avatar-xs me-3">
                                        <div className="avatar-title rounded-circle bg-light text-primary">
                                        <i className="bx bxs-user"></i>
                                        </div>
                                    </div>
                                    <div className="media-body">
                                        <h5 className="font-size-14 mb-1">
                                        Delores Williams{" "}
                                        <small className="text-muted float-end">
                                            1 hr Ago
                                        </small>
                                        </h5>
                                        <p className="text-muted">
                                        If several languages coalesce, the grammar of the
                                        resulting of the individual
                                        </p>
                                        <div>
                                        </div>
                                    </div>
                                    </div>
                                </li>

                                <li className="list-group-item py-3">
                                    <div className="media">
                                    <div className="avatar-xs me-3">
                                        {/* <img
                                        src={user1}
                                        alt=""
                                        className="img-fluid d-block rounded-circle"
                                        /> */}
                                    </div>
                                    <div className="media-body">
                                        <h5 className="font-size-14 mb-1">
                                        Clarence Smith{" "}
                                        <small className="text-muted float-end">
                                            2 hrs Ago
                                        </small>
                                        </h5>
                                        <p className="text-muted">
                                        Neque porro quisquam est, qui dolorem ipsum quia dolor
                                        sit amet
                                        </p>
                                        <div>
                                        {/* <Link to="#" className="text-success"> */}
                                            <i className="mdi mdi-reply"></i> Reply
                                        {/* </Link> */}
                                        </div>

                                        <div className="media pt-3">
                                        <div className="avatar-xs me-3">
                                            <div className="avatar-title rounded-circle bg-light text-primary">
                                            <i className="bx bxs-user"></i>
                                            </div>
                                        </div>
                                        <div className="media-body">
                                            <h5 className="font-size-14 mb-1">
                                            Silvia Martinez{" "}
                                            <small className="text-muted float-end">
                                                2 hrs Ago
                                            </small>
                                            </h5>
                                            <p className="text-muted">
                                            To take a trivial example, which of us ever
                                            undertakes
                                            </p>
                                            <div>
                                            {/* <Link to="#" className="text-success"> */}
                                                <i className="mdi mdi-reply"></i> Reply
                                            {/* </Link> */}
                                            </div>
                                        </div>
                                        </div>
                                    </div>
                                    </div>
                                </li>

                                <li className="list-group-item py-3">
                                    <div className="media">
                                    <div className="avatar-xs me-3">
                                        <div className="avatar-title rounded-circle bg-light text-primary">
                                        <i className="bx bxs-user"></i>
                                        </div>
                                    </div>
                                    <div className="media-body">
                                        <h5 className="font-size-14 mb-1">
                                        Keith McCoy{" "}
                                        <small className="text-muted float-end">
                                            12 Aug
                                        </small>
                                        </h5>
                                        <p className="text-muted">
                                        Donec posuere vulputate arcu. phasellus accumsan
                                        cursus velit
                                        </p>
                                        <div>
                                        {/* <Link to="#" className="text-success"> */}
                                            <i className="mdi mdi-reply"></i> Reply
                                        {/* </Link> */}
                                        </div>
                                    </div>
                                    </div>
                                </li>
                                </ul>
                            </div>
                        </SimpleBar>
                 </CardBody>
              </Card>
            </Col>
        </Row>
    );
  };

export default DashBoardMiddle;