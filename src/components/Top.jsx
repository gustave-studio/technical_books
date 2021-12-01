import React, { useState, useEffect } from 'react';
// import { Helmet, HelmetProvider } from 'react-helmet-async';

import Card from '@material-ui/core/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Grid from '@material-ui/core/Grid';


import axios from 'axios';

const Top = () => {
    const [booksUrl, setBooksUrl] = useState([]);
  
    useEffect(() => {
      const books = axios.get('http://localhost:3001/api/recommended_books')
  
      books.then((response) => {
        setBooksUrl(response.data.recommended_books.slice(0, 10).map((item) => {return item.url}))
      })
    }, [])
    // https://www.amazon.co.jp/dp/477416366X/?tag=gustave02-22
    // https://images-na.ssl-images-amazon.com/images/P/477416366X.09.MZZZZZZZ
    // axios.get('http://localhost:3001/api/recommended_books').then((response) => {
    //     response.data.recommended_books.slice(0, 10).map((item) => {
    //       console.log(item.url);
    //     })
    //   })

    // const colorArray = ["1位", "2位", "3位", "4位", "5位", "6位", "7位", "8位", "9位", "10位"];
    
    const colorComponent = booksUrl.map((url, key) => {
        const pattern = /[^0-9A-Z]([0-9A-Z]{10})([^0-9A-Z]|$)/;
        const asin = url.match(pattern)[1]
        console.log(asin);
        return (
        <>
        <div key={key}>
        {key + 1}位
            <div className="explanation">
            <a href={`https://amazon.co.jp/dp/${asin}?tag=gustave02-22`}>
              <Card style={{ width: "120px", height: "160px", marginRight: "5px", textAlign: 'center', backgroundImage: `url(https://images-na.ssl-images-amazon.com/images/P/${asin}.09.MZZZZZZZ)`, backgroundRepeat: "no-repeat", backgroundPosition: "center top"}} >
                <CardContent>
                <Typography
                    variant="string"
                    component="div"
                    style={{ fontSize: '18px' }}
                >
                  <div>
                      {/* <a href={`https://amazon.co.jp/dp/${asin}?tag=gustave02-22`}><img src={`https://images-na.ssl-images-amazon.com/images/P/${asin}.09.MZZZZZZZ`} alt="TAG index" border="0" /></a> */}
                  </div>
                </Typography>
                </CardContent>
              </Card>
              </a>
            </div>
        </div>
        </>
        )
    });



    return (

  <div className="container">
    <h1>技術書おすすめ<br/>ランキング</h1>

    <Grid container>
      <Grid item xs={1} />
      <Grid item xs={10}>
      <h2>今週のQiita集計<br />ランキングTOP10</h2>
      <div style={{ display: "flex", overflowX: "auto" }}>{colorComponent}</div>
      <br />
      <h2>今月のQiita集計<br />ランキングTOP10</h2>
      <div style={{ display: "flex", overflowX: "auto" }}>{colorComponent}</div>
      <br />
      <h2>3ヶ月間のQiita集計<br />ランキングTOP10</h2>
      <div style={{ display: "flex", overflowX: "auto" }}>{colorComponent}</div>
      </Grid>
      <Grid item xs={1} />
    </Grid>
  </div>
);
    }

export default Top;