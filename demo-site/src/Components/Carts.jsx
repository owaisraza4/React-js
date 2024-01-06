import React,{useState} from "react";
import Card from "react-bootstrap/Card";



const Carts = (props) => {


    // console.log(data);
 
  
  return (
       <div>
           
              <div >
              <Card style={{ width: "18rem", border: "none" }} >
                <Card.Img variant="top" src={props.img} />
                <Card.Body>
                  <Card.Text>{props.label}</Card.Text>
                  <Card.Text>{props.Desc}</Card.Text>
                  <Card.Text>{props.price}</Card.Text>
                </Card.Body>
              </Card>
              </div>
       
              </div>
          
  )
};

export default Carts;
