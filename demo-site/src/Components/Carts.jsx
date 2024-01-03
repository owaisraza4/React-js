import { BorderAll } from "@mui/icons-material";
import React from "react";
import Card from "react-bootstrap/Card";

const Carts = (props) => {
  return (
    <div>

        <div className="row">
          <div className="col-md-3 p-2">
            <Card style={{ width: "18rem", border : "none"}}>
              <Card.Img variant="top" src={props.img}/>
              <Card.Body>
                <Card.Text>
                {props.label}
                </Card.Text>
                <Card.Text>
                {props.Desc}
                </Card.Text>
                <Card.Text>
                {props.price}
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        
        </div>
      </div>

  );
};

export default Carts;
