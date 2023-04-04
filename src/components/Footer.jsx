import React from 'react'
import { Container,Row,Col } from 'react-bootstrap'
import {FaFacebook , FaTiktok , FaLine} from 'react-icons/fa'

export default function Footer() {
  return (
    <div>
      <Row>
        <Col className='d-flex justify-content-center'>
        <FaFacebook size={30} className='mx-3'/>
        <FaTiktok size={30} className='mx-3'/>
        <FaLine size={30} className='mx-3'/>
        </Col>

        <Col>
        <h3>Contact</h3>
        <h5>Phone: 061234568</h5>
        <h5>Email: dadawd@gmail.com</h5>
        <h5>Line: @ergdfvdfv</h5>
        </Col>
        <Col>
        <h3>Product</h3>
        </Col>
        <Col>
        <h5>Help</h5>
        </Col>


        <Row>
            <Col className='d-flex justify-content-center'>
            <h4>@ถ้าไม่เชื่อมาดูมิจิสิ ติ่งแนดติ่งแนดติ่งแนด ป๊าบๆๆ</h4>
            </Col>
        </Row>
        
      </Row>
    </div>
  )
}
