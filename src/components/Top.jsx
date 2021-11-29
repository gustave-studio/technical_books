import React from 'react';
// import { Helmet, HelmetProvider } from 'react-helmet-async';

import Card from '@material-ui/core/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Grid from '@material-ui/core/Grid';

const Top = () => {
    const colorArray = ["1位", "2位", "3位", "4位", "5位", "6位", "7位", "8位", "9位", "10位"];
    const colorComponent = colorArray.map((item, key) => (
        <div key={key}>
          <div className={item} style={{ width: "200px", height: "200px"}} />
            <div className="explanation">
              <Card style={{ width: "200px", height: "250px", marginRight: "10px"}} >
                <CardContent>
                <Typography
                    variant="string"
                    component="div"
                    style={{ fontSize: '18px' }}
                >
                  <div>
                    {item}
                  </div>
                </Typography>
                </CardContent>
              </Card>
            </div>
        </div>
    ));
    return (

  <div className="container">
          <h1>SFに出会う診断</h1>
    <h2>(初心者編)</h2>
    

    <Grid container>
      <Grid item xs={1} />
      <Grid item xs={10}>
      <div style={{ display: "flex", overflowX: "auto" }}>{colorComponent}</div>
      </Grid>
      <Grid item xs={1} />
    </Grid>
  </div>
);
    }

export default Top;