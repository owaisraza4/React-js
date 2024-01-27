import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { CardActionArea, Stack } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import { useNavigate } from "react-router-dom";

const Product_Card = (props) => {
  const navigate = useNavigate();
  const { id, img_url, title, rating, sold, dis_price, orignal_price } =
    props.card_data;
  const ChangeHandle = (id) => {
    navigate(
      `/pro/${(id)}`
    );
  };

  return (
    <div>
      <Card sx={{ maxWidth: "100%", margin: 1, height: 400 }}>
        <CardActionArea
          onClick={() =>
            ChangeHandle(
              id,
              img_url,
              title,
              rating,
              sold,
              dis_price,
              orignal_price
            )
          }
        >
          <CardMedia sx={{ height: 200 }} image={img_url} />

          <CardContent>
            <Typography
              gutterBottom
              variant="span"
              component="div"
              style={{ fontSize: 13 }}
            >
              ID : {id}
            </Typography>
            <Typography
              style={{ fontSize: 13, marginBottom: 10 }}
              color="text.secondary"
            >
              Rating: {rating}
              <StarIcon sx={{ height: 15, color: "green" }} />
            </Typography>
            <Typography
              gutterBottom
              variant="span"
              component="div"
              style={{ fontSize: 13 }}
            >
              {title}
            </Typography>

            <Stack flexDirection="row" gap={3} alignItems="center">
              <Typography
                style={{ fontSize: 13, marginBottom: 10 }}
                color="text.secondary"
              >
                {sold} sold
              </Typography>
            </Stack>

            <Stack flexDirection="row" gap={3} alignItems="center">
              <Typography style={{ fontSize: 12, fontWeight: "bold" }}>
                AED : {dis_price}
              </Typography>

              <Typography
                sx={{ textDecorationLine: "line-through" }}
                style={{ fontSize: 12, color: "gray" }}
              >
                AED: {orignal_price}
              </Typography>
            </Stack>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
};

export default Product_Card;
