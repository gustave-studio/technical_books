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

const QiitaDetailsPage = function () {
  const { asin } = useParams();
  const [qiitaArticles, setQiitaArticles] = useState([]);

  useEffect(() => {
    const qiitaArticlesList = axios.get(`${process.env.REACT_APP_RECOMMENDED_BOOKS}?asin=${asin}`);

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
    <div className="qiita_articles_container">
      <Header />
      <Grid container>
        <Grid item xs={1} />
        <Grid item xs={10}>
          <div className="to_amazon">

            <a href={`https://amazon.co.jp/dp/${asin}`}>
              <Card style={{
                width: '125px', height: '160px', margin: '10px', textAlign: 'center', backgroundImage: `url(https://images-na.ssl-images-amazon.com/images/P/${asin}.09.MZZZZZZZ)`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center top',
              }}
              />
            </a>
            <div className="to_amazon_button">
              <a href={`https://amazon.co.jp/dp/${asin}`}>Amazonで見る</a>
            </div>
          </div>
          <div className="qiita_articles">
            <h4>
              この本を引用しているQiitaの記事
            </h4>
          </div>
          <div className="qiita_articles_list">
            <Card sx={{ minWidth: 275 }}>
              <CardContent>
                { qiitaArticles.map((article, key) => (
                  <div key={key}>
                    <a href={article.article_url}>
                      <p>
                        {article.title}
                      </p>
                    </a>
                  </div>
                ))}
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

export default QiitaDetailsPage;
