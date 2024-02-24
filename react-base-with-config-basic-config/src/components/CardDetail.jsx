import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function ActionAreaCard({
id,
  title,
  category,
  desc,
  image,
  price,
  rating,
}) {

  const navigate=  useNavigate();


const ChangHandle=()=>{
  navigate(
    `/ProductDetail/${id}`
  );
}

  return (
    <div>
    <Card sx={{ maxWidth: 300 , padding: 2,margin:2}}>
      <CardActionArea onClick={ChangHandle}>
        <CardMedia
          component="img"
         
          image={image}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
            {category}
          </Typography>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {desc}
          </Typography>
          <Typography variant="h4" color="" style={{fontWeight:"bold"}}>
            $ : {price}
          </Typography>
          <Typography variant="p" color="">
           Rating :  {rating}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </div>
  );
}
