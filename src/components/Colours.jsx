import { Card, CardContent, Grid, Typography } from "@mui/material";
import React, { useState } from "react";

export const Colours=()=>{
    const[data,setData]=useState(["Yellow","Skyblue","Brown","Green"])
    return(
        <Card sx={{bgcolor:"lightseagreen", paddingBottom:"10px"   }}>
            <CardContent>
                <Grid container spacing={2}>
                    <Grid item xs={12} align="center">
                        <Typography variant="h3" gutterBottom marginBottom="40px" color="white">Color's Name</Typography>
                    </Grid>
                        {
                            data.map((item)=>(
                                <Card sx={{width:"300px" , height:"120px",padding:2,margin:2.2}}>
                                <CardContent> 
                                 <Grid item xs={12}>
                                    <Typography variant="h4" align="center">{item}</Typography>
                                </Grid>
                                </CardContent>

                                </Card>
                            ))
                        }
                    
                
                </Grid>
            </CardContent>
        </Card>
    );
}