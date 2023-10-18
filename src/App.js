import { Card, CardContent, Grid } from "@mui/material";
import React from "react";
import { Fruits } from "./components/Fruits";
import { Colours } from "./components/Colours";

function App() {
  return (
      <Card sx={{bgcolor:"lightsalmon"}}>
          <CardContent>
              <Grid container spacing={2}>
                  <Grid item xs={12}>
                      <Fruits />
                  </Grid>
                  <Grid item xs={12}>
                      <Colours />
                  </Grid>
              </Grid>
          </CardContent>
      </Card>
  );
}

export default App;
