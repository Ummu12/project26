import React from "react";
import {Grid,Card,CardContent} from "@mui/material";
 
 export const HRitem=({item})=>{
    return(
        <Grid xs={3}>
 <Card sx={{bgcolor: item.completed  ? "green" : "coral",height:100}}>
    <CardContent>
         {item.id}.{item.title}
    </CardContent>
 </Card>
        </Grid>
   
    )
}