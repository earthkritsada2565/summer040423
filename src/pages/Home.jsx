import React from 'react'
import { Container ,Row,Col} from 'react-bootstrap'

export default function Home() {
  return (
    <div>
      <Row>
        <Col>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde quos sed dicta explicabo eveniet repudiandae id, optio sapiente asperiores inventore minima ullam pariatur sunt fugiat autem nam aut sit dolore.</Col>
        <Col>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit voluptatem placeat officiis ut repellendus earum, esse, impedit hic, mollitia quod assumenda aut sit quae aspernatur ex eveniet. Fugiat, itaque laudantium!</Col>
      </Row>


      <Row>
        <Col>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus a aliquam animi cum quod esse eius soluta nam consequatur eos optio ratione nulla ipsam veniam, saepe eum, delectus, aspernatur magnam.</Col>
        <Col sm={6} className='text-center'> <img src="https://picsum.photos/id/237/536/354" alt="pic" /> </Col>
        <Col>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem minus neque nostrum quibusdam at hic voluptatum explicabo excepturi! Non expedita ipsum sequi voluptatem delectus assumenda enim autem ipsam doloremque hic.</Col>
      </Row>
    </div>
  )
}
