import React, { useState } from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import FormSecton from "./FormSecton";

const TableSection = ({ user_data }) => {
  const [Insert, setInsert] = useState(false);
  const [Delete, setDelete] = useState(true);

  const Insert_handle = () => {
    setInsert(true);
  };
  const DeleteHandle = () => {
    console.log("Ok");
    setDelete(false)
  };

  return (
    <div>
      {Insert ? (
        <FormSecton />
      ) : (
        <div>
          <div className="container text-center">
            <Table className="Table">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Mobile Name</th>
                  <th>Model</th>
                  <th>Price</th>
                  <th>RAM</th>
                  <th>ROM</th>
                  <th>Controller</th>
                </tr>
              </thead>
                {Delete ? (
                  
                     <tbody>
                <tr> 
                  <td>1</td>
                  <td>{user_data.Mobile_Name}</td>
                  <td>{user_data.model}</td>
                  <td>{user_data.price}</td>
                  <td>{user_data.Ram}</td>
                  <td>{user_data.Rom}</td>

                  <td>
                    {" "}
                    <ButtonGroup aria-label="Basic example">
                      <Button variant="success" onClick={Insert_handle}>
                        insert
                      </Button>
                      <Button variant="warning">update</Button>
                      <Button variant="danger" onClick={DeleteHandle}>
                        delete
                      </Button>
                    </ButtonGroup>
                  </td>
                  </tr>
              </tbody>
              
                ) : null}
             
            </Table>
          </div>
        </div>
      )}
    </div>
  );
};

export default TableSection;
