import React from "react";
import{Grid} from "@mui/material"
import { HRitem } from "./HRitem";
import { TodoData } from "../TodoData";

export const HR=()=>{
    return(

      <Grid container spacing={3}>
        {
           TodoData.map(item=>
            <HRitem item={item} />
            )
        }
 
        </Grid>


    )
}