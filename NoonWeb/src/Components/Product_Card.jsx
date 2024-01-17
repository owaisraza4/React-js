import React from 'react'
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Stack } from "@mui/material";

const Product_Card = (props) => {
    const { img_url, title, rating, sold, dis_price, orignal_price } =
    props.card_data;
  return (
    <div>
        <Card sx={{ maxWidth: "100%" , margin:1 }}>
      <CardMedia sx={{ height: 200 }} image={img_url} />
      <CardContent>
        <Typography gutterBottom variant="p" component="div">
          {title}
        </Typography>

        <Stack flexDirection="row" gap={3} alignItems="center">
          <Typography variant="body2" color="text.secondary">
            Rating: {rating}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {sold} sold
          </Typography>
        </Stack>

        <Stack flexDirection="row" gap={3} alignItems="center">
          <Typography>Rs. {dis_price}</Typography>

          <Typography sx={{ textDecorationLine: "line-through" }}>
            Rs. {orignal_price}
          </Typography>
        </Stack>
      </CardContent>
    </Card>
    </div>
  )
}

export default Product_Card
