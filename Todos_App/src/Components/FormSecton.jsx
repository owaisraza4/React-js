import React, { useState } from "react";
import InputFeild from "./InputFeild";
import TableSection from "./TableSection";

const FormSecton = () => {
  const [user_data, setuser_data] = useState({
    
  });
  const [Show_detail, setShow_detail] = useState(false);
  const onChangeHandle = (val, Key) => {
    const obj = { ...user_data };
    obj[Key] = val;
    setuser_data(obj);
  };
  const Submit_Handle = () => {
    setShow_detail(true);
  };

  return (
    <div>
        
        {Show_detail ? (
            <TableSection
            user_data = {user_data}
             />

            
        ) : (
            <div>
                <div className="container">
            <div className="row">
              <div className="col-md-4"></div>
              <div className="col-md-4">
                <div className="">
             <form action="" >
              
                  <InputFeild
                    type="text"
                    placeholder="Mobile Name"
                    id="Mobile_Name"
                    onChangeHandle={onChangeHandle}
                  />
    
                  <InputFeild
                    type="text"
                    placeholder="Model"
                    id="model"
                    onChangeHandle={onChangeHandle}
                  />
    
                  <InputFeild
                    type="number"
                    placeholder="Price"
                    id="price"
                    onChangeHandle={onChangeHandle}
                  />
    
                  <InputFeild
                  
                    type="text"
                    placeholder="RAM"
                    id="Ram"
                    onChangeHandle={onChangeHandle}
                  />
                  
    
                  <InputFeild
                    type="text"
                    placeholder="ROM"
                    id="Rom"
                    onChangeHandle={onChangeHandle}
                  />
              <button className="btn btn-success" onClick={Submit_Handle}>
                    Submit
                  </button>
                  </form>
                </div>
              </div>
              <div className="col-md-4"></div>
            </div>
          </div>
            </div>
        )
        }
          
    </div>
  );
};

export default FormSecton;
