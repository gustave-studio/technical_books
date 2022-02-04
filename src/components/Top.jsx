import React, { useState, useEffect } from 'react';
// import { Helmet, HelmetProvider } from 'react-helmet-async';
import Grid from '@material-ui/core/Grid';
import axios from 'axios';
import { FaSpinner } from 'react-icons/fa';
import RankingBox from './RankingBox';
import EditorialDepartmentRecommendationsBox from './EditorialDepartmentRecommendationsBox';
import Header from './Header';
import Footer from './Footer';

const Top = function () {
  const [monthlyRankings, setMonthlyRankings] = useState([]);
  const [threeMonthlyRankings, setThreeMonthlyRankings] = useState([]);
  const [sixMonthlyRankings, setSixMonthlyRankings] = useState([]);
  const [editorialDepartmentRecommendationsPythonRankings, setEditorialDepartmentRecommendationsPythonRankings] = useState([]);
  const [editorialDepartmentRecommendationsRubyRankings, setEditorialDepartmentRecommendationsRubyRankings] = useState([]);
  const [editorialDepartmentRecommendationsJavaScriptRankings, setEditorialDepartmentRecommendationsJavaScriptRankings] = useState([]);
  const [editorialDepartmentRecommendationsMotivationRankings, setEditorialDepartmentRecommendationsMotivationRankings] = useState([]);
  const [editorialDepartmentRecommendationsOthersRankings, setEditorialDepartmentRecommendationsOthersRankings] = useState([]);

  useEffect(() => {
    const monthlyRankingsData = axios.get(process.env.REACT_APP_MONTHLY_RANKINGS_URL);
    const threeMonthlyRankingsData = axios.get(process.env.REACT_APP_THREE_MONTHLY_RANKINGS_URL);
    const sixMonthlyRankingsData = axios.get(process.env.REACT_APP_SIX_MONTHLY_RANKINGS_URL);
    const editorialDepartmentRecommendationsPython = axios.get(process.env.REACT_APP_EDITORIAL_DEPARTMENT_RECOMMENDATION_PYTHON_URL);
    const editorialDepartmentRecommendationsRuby = axios.get(process.env.REACT_APP_EDITORIAL_DEPARTMENT_RECOMMENDATION_RUBY_URL);
    const editorialDepartmentRecommendationsJavaScript = axios.get(process.env.REACT_APP_EDITORIAL_DEPARTMENT_RECOMMENDATION_JAVASCRIPT_URL);
    const editorialDepartmentRecommendationsMotivation = axios.get(process.env.REACT_APP_EDITORIAL_DEPARTMENT_RECOMMENDATION_MOTIVATION_URL);
    const editorialDepartmentRecommendationsOthers = axios.get(process.env.REACT_APP_EDITORIAL_DEPARTMENT_RECOMMENDATION_OTHERS_URL);

    monthlyRankingsData.then((response) => {
      setMonthlyRankings(response.data.monthly_rankings.map((item) => ({ ranking: item.ranking, asin: item.asin })));
    });

    threeMonthlyRankingsData.then((response) => {
      setThreeMonthlyRankings(response.data.three_months_rankings.map((item) => ({ ranking: item.ranking, asin: item.asin })));
    });

    sixMonthlyRankingsData.then((response) => {
      setSixMonthlyRankings(response.data.six_months_rankings.map((item) => ({ ranking: item.ranking, asin: item.asin })));
    });

    editorialDepartmentRecommendationsPython.then((response) => {
      setEditorialDepartmentRecommendationsPythonRankings(response.data.editorial_department_recommendations.map((item) => ({ award: item.award, asin: item.asin, description: item.description })));
    });

    editorialDepartmentRecommendationsRuby.then((response) => {
      setEditorialDepartmentRecommendationsRubyRankings(response.data.editorial_department_recommendations.map((item) => ({ award: item.award, asin: item.asin, description: item.description })));
    });

    editorialDepartmentRecommendationsJavaScript.then((response) => {
      setEditorialDepartmentRecommendationsJavaScriptRankings(response.data.editorial_department_recommendations.map((item) => ({ award: item.award, asin: item.asin, description: item.description })));
    });

    editorialDepartmentRecommendationsMotivation.then((response) => {
      setEditorialDepartmentRecommendationsMotivationRankings(response.data.editorial_department_recommendations.map((item) => ({ award: item.award, asin: item.asin, description: item.description })));
    });

    editorialDepartmentRecommendationsOthers.then((response) => {
      setEditorialDepartmentRecommendationsOthersRankings(response.data.editorial_department_recommendations.map((item) => ({ award: item.award, asin: item.asin, description: item.description })));
    });
  }, []);

  return (

    <div className="container">
      <Header />

      <Grid container>
        <Grid item xs={1} />
        <Grid item xs={10}>
          <div className="ranking_header">
            <div className="ranking_header_text">
              <h1>
                Qiitaで紹介されている技術書ランキング
              </h1>
            </div>
          </div>
          <div className="ranking_description">
            Qiitaの記事にリンクされている本を集計して作った独自のランキングです。
            <br />
            Qiitaの記事一覧から集計対象となった記事をご覧頂けます。
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
            <div className="ranking_header_text">
              <h1>
                編集部のおすすめ
              </h1>
            </div>
          </div>
          <div className="ranking_description">
            当サイトの編集部がおすすめする技術書です。
            <br />
          </div>
          <div className="ranking_container">
            <h2>Pythonのおすすめ本</h2>
            <div style={{ display: 'flex', overflowX: 'auto' }} className="rankings">
              { editorialDepartmentRecommendationsPythonRankings.length ? <EditorialDepartmentRecommendationsBox rankingData={editorialDepartmentRecommendationsPythonRankings} /> : <FaSpinner icon="spinner" className="spinner" />}
            </div>
            <hr />
            <h2>Rubyのおすすめ本</h2>
            <div style={{ display: 'flex', overflowX: 'auto' }} className="rankings">
              { editorialDepartmentRecommendationsRubyRankings.length ? <EditorialDepartmentRecommendationsBox rankingData={editorialDepartmentRecommendationsRubyRankings} /> : <FaSpinner icon="spinner" className="spinner" />}
            </div>
            <hr />
            <h2>JavaScriptのおすすめ本</h2>
            <div style={{ display: 'flex', overflowX: 'auto' }} className="rankings">
              { editorialDepartmentRecommendationsJavaScriptRankings.length ? <EditorialDepartmentRecommendationsBox rankingData={editorialDepartmentRecommendationsJavaScriptRankings} /> : <FaSpinner icon="spinner" className="spinner" />}
            </div>
            <hr />
            <h2>モチベーション | やる気 のおすすめ本</h2>
            <div style={{ display: 'flex', overflowX: 'auto' }} className="rankings">
              { editorialDepartmentRecommendationsMotivationRankings.length ? <EditorialDepartmentRecommendationsBox rankingData={editorialDepartmentRecommendationsMotivationRankings} /> : <FaSpinner icon="spinner" className="spinner" />}
            </div>
            <hr />
            <h2>その他のおすすめ本</h2>
            <div style={{ display: 'flex', overflowX: 'auto' }} className="rankings">
              { editorialDepartmentRecommendationsOthersRankings.length ? <EditorialDepartmentRecommendationsBox rankingData={editorialDepartmentRecommendationsOthersRankings} /> : <FaSpinner icon="spinner" className="spinner" />}
            </div>
          </div>
        </Grid>
        <Grid item xs={1} />
      </Grid>
      <Footer />
    </div>
  );
};

export default Top;
