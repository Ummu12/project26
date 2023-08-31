import React from "react";
import {Grid} from"@mui/material"
import { Navitem } from "./Navitem";
import { NavData } from "../NavData";

export const Nav=()=>{
    
   return(
    <Grid container spacing={2}>
       {
        NavData.map(item=>
            <Navitem xs={item.xs}
              path={item.path}  title={item.title}  />
            )
       }

    </Grid>
   )

}

