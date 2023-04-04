import React from 'react'
import { Button, } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Link,useNavigate} from 'react-router-dom'

export default function Product() {
  return (
    <div>
      <h1>Product</h1>
      <Link to={"/"}><Button variant='outline-primary'>back to homepage</Button></Link>
      <Button as={Link} to={'/login'}>go login</Button> <br />
      <Button variant='outline-danger' onClick={()=>navigate("/order")}>Order</Button>

      <Link to={'/'}><img src="https://picsum.photos/100/100?random=1" alt="" /></Link>
      
      
    </div>
  )
}
