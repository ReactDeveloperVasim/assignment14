import React, { useState } from "react";
import { Card, CardContent, Grid, Typography } from "@mui/material";

export const Fruits=()=>{
    const[data,setData]=useState(["Apple" ,"Mango" , "Banana" ,"Orange" ,"Kiwi" ,"Cherry" ])
    return(
        <Card sx={{height:"200px",margin:2, padding:3, marginBottom:5}}>
            <CardContent>
        <Grid container spacing={2}>
            <Grid item xs={12} align="center">
                <Typography   variant="h3" gutterBottom color="error" marginBottom="50px">Fruits Name</Typography>
            </Grid>
           
                    {
                        data.map((item)=>(
                            <Grid item xs={2}>
                            <Typography variant="h5" fontWeight="900" align="center">{item}</Typography>
                            </Grid>
                        ))
                    }
           
        </Grid>
        </CardContent>
        </Card>
    );
}