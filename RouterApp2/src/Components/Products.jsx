import React from "react";

import { products_data } from "./productData";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Products = () => {
  const Array_data = [...products_data];
  const navigate = useNavigate();
  const navigate_handle = (id) => {
    navigate(`/productdetail/${id}`);
  };

  return (
    <div>
      <Grid container spacing={2}>
        {Array_data.map((current_obj, index) => {
          const {id,title, price,image,description,category} = current_obj
          return (
            <div>
            
                <Card sx={{ maxWidth: 300}}>
                  <CardActionArea onClick={() => navigate_handle(id,title, price,image,description,category)}>
                    <CardMedia
                      component="img"
                      height="300"
                      image={image}
                      alt="green iguana"
                    />
                    <CardContent>
                      <Typography variant="h6">
                        ID : {id}
                      </Typography>
                      <Typography gutterBottom variant="h6" component="div">
                        {title}
                      </Typography>
                    
                      <Typography variant="p" color="text.secondary">
                         {description}
                      </Typography>
                      <Typography variant="h6" >
                      category:  {category}
                      </Typography>
                      <Typography variant="h6" >
                        $: {price} only
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
            
            </div>
          );
        })}
      </Grid>
    </div>
  );
};

export default Products;
