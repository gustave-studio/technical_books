import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';

const EditorialDepartmentRecommendationsBox = function (props) {
  const { rankingData } = props;

  // const pattern = /[^0-9A-Z]([0-9A-Z]{10})([^0-9A-Z]|$)/;
  // const isbn = url.match(pattern)[1]

  const awardChecker = (ranking) => {
    if (ranking.description) {
      return (
        <div className="to_details">
          <a href={`${process.env.REACT_APP_HOST}/details/${ranking.asin}`}>
            詳細ページ
          </a>
        </div>
      );
    }
    return '';
  };

  const imageURL = (asin) => {
    if (asin === '4908686092') {
      return 'https://m.media-amazon.com/images/I/517YxDGm7EL._SL160_.jpg';
    }
    return `https://images-na.ssl-images-amazon.com/images/P/${asin}.09.MZZZZZZZ`;
  };

  return (
    <>
      { rankingData.map((ranking, key) => (
        <div className="ranking_item" key={key}>
          <div className="award_container" />
          <a href={`${process.env.REACT_APP_HOST}/details/${ranking.asin}`}>
            <Card style={{
              width: '125px', height: '160px', margin: 'auto', textAlign: 'center', backgroundImage: `url(${imageURL(ranking.asin)})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center top',
            }}
            >
              <CardContent>
                <Typography
                  variant="string"
                  component="div"
                  style={{ fontSize: '18px' }}
                />
              </CardContent>
            </Card>
          </a>
          <div>
            {awardChecker(ranking)}
          </div>
        </div>
      ))}

    </>
  );
};

EditorialDepartmentRecommendationsBox.propTypes = {
  rankingData: PropTypes.arrayOf(
    PropTypes.PropTypes.shape({
      ranking: PropTypes.number,
      asin: PropTypes.string,
    }),
  ).isRequired,
};

export default EditorialDepartmentRecommendationsBox;
