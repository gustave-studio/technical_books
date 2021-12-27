import React, { useState, useEffect } from 'react';
// import { Helmet, HelmetProvider } from 'react-helmet-async';
import Grid from '@material-ui/core/Grid';
import axios from 'axios';
import { FaSpinner } from 'react-icons/fa';
import RankingBox from './RankingBox';
import ITEngineerBooksAwardBox from './ITEngineerBooksAwardBox';
import Footer from './Footer';
import HamburgerMenu from './HamburgerMenu';

const Top = function () {
  const [monthlyRankings, setMonthlyRankings] = useState([]);
  const [threeMonthlyRankings, setThreeMonthlyRankings] = useState([]);
  const [sixMonthlyRankings, setSixMonthlyRankings] = useState([]);
  const [itEngineerBooksAwardsTechnologyRankings, setItEngineerBooksAwardsTechnologyRankings] = useState([]);
  const [itEngineerBooksAwardsBusinessRankings, setItEngineerBooksAwardsBusinessRankings] = useState([]);
  const [editorialDepartmentRecommendationsRankings, setEditorialDepartmentRecommendationsRankings] = useState([]);

  useEffect(() => {
    const monthlyRankingsData = axios.get(process.env.REACT_APP_MONTHLY_RANKINGS_URL);
    const threeMonthlyRankingsData = axios.get(process.env.REACT_APP_THREE_MONTHLY_RANKINGS_URL);
    const sixMonthlyRankingsData = axios.get(process.env.REACT_APP_SIX_MONTHLY_RANKINGS_URL);
    const itEngineerBooksAwardsTechnology = axios.get(process.env.REACT_APP_IT_ENGINEER_BOOKS_AWARDS_TECHNOLOGY_URL);
    const itEngineerBooksAwardsBusiness = axios.get(process.env.REACT_APP_IT_ENGINEER_BOOKS_AWARDS_BUSINESS_URL);
    const editorialDepartmentRecommendations = axios.get(process.env.REACT_APP_EDITORIAL_DEPARTMENT_RECOMMENDATION_URL);

    monthlyRankingsData.then((response) => {
      // console.log(response.data.monthly_rankings);
      setMonthlyRankings(response.data.monthly_rankings.map((item) => ({ ranking: item.ranking, asin: item.asin })));
    });

    threeMonthlyRankingsData.then((response) => {
      // console.log(response.data.monthly_rankings);
      setThreeMonthlyRankings(response.data.three_months_rankings.map((item) => ({ ranking: item.ranking, asin: item.asin })));
    });

    sixMonthlyRankingsData.then((response) => {
      // console.log(response.data.monthly_rankings);
      setSixMonthlyRankings(response.data.six_months_rankings.map((item) => ({ ranking: item.ranking, asin: item.asin })));
    });

    itEngineerBooksAwardsTechnology.then((response) => {
      setItEngineerBooksAwardsTechnologyRankings(response.data.it_engineer_books_awards.map((item) => ({ award: item.award, asin: item.asin })));
    });

    itEngineerBooksAwardsBusiness.then((response) => {
      setItEngineerBooksAwardsBusinessRankings(response.data.it_engineer_books_awards.map((item) => ({ award: item.award, asin: item.asin })));
    });

    editorialDepartmentRecommendations.then((response) => {
      setEditorialDepartmentRecommendationsRankings(response.data.editorial_department_recommendations.map((item) => ({ award: item.award, asin: item.asin })));
    });
  }, []);

  return (

    <div className="container">
      <div className="title">
        <HamburgerMenu width={250} />
        <h1>
          技術書
          <br />
          おすすめまとめ
        </h1>
      </div>

      <Grid container>
        <Grid item xs={1} />
        <Grid item xs={10}>
          <div className="ranking_header">
            <h1>
              Qiitaの記事から集計した
              <br />
              技術書ランキング
            </h1>
          </div>
          <div className="ranking_container">
            <h2>最近紹介された技術書TOP10</h2>
            <div style={{ display: 'flex', overflowX: 'auto' }} className="rankings">
              { monthlyRankings.length ? <RankingBox rankingData={monthlyRankings} /> : <FaSpinner icon="spinner" className="spinner" /> }
            </div>
            <hr />
          </div>
          <div className="ranking_container">
            <h2>3ヶ月間ランキングTOP10</h2>
            <div style={{ display: 'flex', overflowX: 'auto' }} className="rankings">
              { threeMonthlyRankings.length ? <RankingBox rankingData={threeMonthlyRankings} /> : <FaSpinner icon="spinner" className="spinner" /> }
            </div>
            <hr />
          </div>
          <div className="ranking_container">
            <h2>6ヶ月間ランキングTOP10</h2>
            <div style={{ display: 'flex', overflowX: 'auto' }} className="rankings">
              { sixMonthlyRankings.length ? <RankingBox rankingData={sixMonthlyRankings} /> : <FaSpinner icon="spinner" className="spinner" /> }
            </div>
          </div>
          <div className="ranking_header">
            <h1>
              翔英社
              <br />
              ITエンジニア本大賞2021
            </h1>
          </div>
          <div className="ranking_container">
            <h2>技術書</h2>
            <div style={{ display: 'flex', overflowX: 'auto' }} className="rankings">
              { itEngineerBooksAwardsTechnologyRankings.length ? <ITEngineerBooksAwardBox rankingData={itEngineerBooksAwardsTechnologyRankings} /> : <FaSpinner icon="spinner" className="spinner" />}
            </div>
            <hr />
          </div>
          <div className="ranking_container">
            <h2>ビジネス</h2>
            <div style={{ display: 'flex', overflowX: 'auto' }} className="rankings">
              { itEngineerBooksAwardsBusinessRankings.length ? <ITEngineerBooksAwardBox rankingData={itEngineerBooksAwardsBusinessRankings} /> : <FaSpinner icon="spinner" className="spinner" /> }
            </div>
            <hr />
          </div>
          <div className="ranking_header">
            <h1>
              編集部のおすすめ
            </h1>
          </div>
          <div className="ranking_container">
            <h2>技術書</h2>
            <div style={{ display: 'flex', overflowX: 'auto' }} className="rankings">
              { editorialDepartmentRecommendationsRankings.length ? <ITEngineerBooksAwardBox rankingData={editorialDepartmentRecommendationsRankings} /> : <FaSpinner icon="spinner" className="spinner" />}
            </div>
            <hr />
          </div>
        </Grid>
        <Grid item xs={1} />
      </Grid>
      <Footer />
    </div>
  );
};

export default Top;
