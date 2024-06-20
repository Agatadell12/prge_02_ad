import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function MediaCard({ name, surname, content, image }) {
  return (
    <Card sx={{ width: "100%", maxWidth: 345, margin: "0 auto" }}>
      <CardMedia
        component="img"
        sx={{ height: 200, objectFit: "cover" }}
        image={image}
        title={`${name} ${surname}`}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name} {surname}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {content}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}
