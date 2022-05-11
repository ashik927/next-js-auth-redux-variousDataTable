import React from "react"
import Link from 'next/link'
import { Row, Col, BreadcrumbItem } from "reactstrap"

const Breadcrumb = props => {
  return (
    <Row>
      <Col xs="12">
        <div className=" d-sm-flex align-items-center justify-content-between">
          {/* <h4 className="mb-0 font-size-18">{props?.breadcrumbItem}</h4> */}
          <div className="page-title-right">
            <ol className="breadcrumb m-0">
              <BreadcrumbItem>
                <Link href="#"><a>{props?.title}</a></Link>
              </BreadcrumbItem>
              <BreadcrumbItem active>
                <Link href="#"><a>{props?.breadcrumbItem}</a></Link>
              </BreadcrumbItem>
            </ol>
          </div>
        </div>
      </Col>
    </Row>
  )
}



export default Breadcrumb
