import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  ></Box>
);

export default function BasicCard(props) {
  return (
    <Card variant="outlined" sx={{ minWidth: 275 }}>
      <CardContent>
                <Typography variant="h5" component="div">
                {props.word}
                </Typography>
        
        
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                {props.tag1}
                </Typography>

                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="10" height="10" rx="2" fill="#43A047"/>
</svg> &nbsp;
{props.tag2}
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="10" height="10" rx="2" fill="#C21C1D"/>
</svg> &nbsp;
  {props.tag3}
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="10" height="10" rx="2" fill="#EB996E"/>
</svg> &nbsp;
   {props.tag4}
                </Typography>

      </CardContent>
    </Card>
  );
}
