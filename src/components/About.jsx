import React from 'react';
// import { Helmet, HelmetProvider } from 'react-helmet-async';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@mui/material/CardContent';
import Footer from './Footer';
import Header from './Header';

const About = function () {
  return (
    <div className="container">
      <Header />

      <Grid container>
        <Grid item xs={1} />
        <Grid item xs={10}>
          <div className="about_container">
            <Card sx={{ minWidth: 275 }}>
              <CardContent>
                <h2>このサイトについて</h2>
                このサイトはおすすめの技術書をまとめたランキングサイトです。
                <br />
                <br />
                <h2>Qiitaの記事から集計した技術書ランキングについて</h2>
                Qiitaの記事から集計したAmazonのリンク数や本が紹介されている記事のLGTM数などから独自のポイント集計を行い、ランキングを作っています。
                <br />
                <br />
                <h2>翔泳社ITエンジニア本大賞について</h2>
                株式会社翔泳社様の
                <a href="https://www.shoeisha.co.jp/campaign/award/">ITエンジニア本大賞</a>
                にノミネートされた本をまとめています。
                <br />
                <br />
                <h2>編集部のおすすめ</h2>
                当サイト編集部のおすすめをまとめています。
                <br />
                <br />
              </CardContent>
            </Card>
          </div>
        </Grid>
        <Grid item xs={1} />
      </Grid>
      <Footer />
    </div>
  );
};

export default About;
