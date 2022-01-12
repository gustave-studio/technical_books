import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@mui/material/CardContent';
// import Typography from '@mui/material/Typography';
// import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';

const DetailsPage = function () {
  const { asin } = useParams();
  const [qiitaArticles, setQiitaArticles] = useState([]);
  console.log(asin);

  useEffect(() => {
    const qiitaArticlesList = axios.get(`${process.env.REACT_APP_RECOMMENDED_BOOKS}asin=${asin}`);

    console.log('url');
    console.log(`${process.env.REACT_APP_RECOMMENDED_BOOKS}asin=${asin}`);
    qiitaArticlesList.then((response) => {
      setQiitaArticles(response.data.recommended_books.map((item) => (
        { title: item.title, article_url: item.article_url }
      )).slice(0, 10));
    });
  }, []);
  console.log('qiitaArticles!!!!');
  console.log(qiitaArticles);

  return (
    <div className="container">
      <Header />

      <Grid container>
        <Grid item xs={1} />
        <Grid item xs={10}>
          <div className="about_container">
            <a href={`https://amazon.co.jp/dp/${asin}`}>
              <Card style={{
                width: '125px', height: '160px', margin: 'auto', textAlign: 'center', backgroundImage: `url(https://images-na.ssl-images-amazon.com/images/P/${asin}.09.MZZZZZZZ)`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center top',
              }}
              />
            </a>
            <Card sx={{ minWidth: 275 }}>
              <CardContent>
                <h2>
                  このサイトについて
                </h2>
                このサイトはおすすめの技術書をまとめたランキングサイトです。
              </CardContent>

              { qiitaArticles.map((article, key) => (
                <div className="ranking_item" key={key}>
                  <a href={article.article_url}>
                    <p>{article.title}</p>
                  </a>

                </div>
              ))}
            </Card>
          </div>
        </Grid>
        <Grid item xs={1} />
      </Grid>
      <Footer />
    </div>
  );
};

// DetailsPage.propTypes = {
//   id: PropTypes.string.isRequired,
// };

export default DetailsPage;
