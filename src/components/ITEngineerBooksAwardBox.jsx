import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';
import { FaAward } from 'react-icons/fa';

const ITEngineerBooksAwardBox = function (props) {
  const { rankingData } = props;

  // const pattern = /[^0-9A-Z]([0-9A-Z]{10})([^0-9A-Z]|$)/;
  // const isbn = url.match(pattern)[1]

  const awardChecker = (award) => {
    if (award === 'grand_prize') {
      return (
        <div className="award">
          <FaAward className="award_icon" />
          大賞
        </div>
      );
    } if (award === 'special_prize') {
      return (
        <div className="award">
          <FaAward className="award_icon" />
          特別賞
        </div>
      );
    } if (award === 'grand_prize_and_special_prize') {
      return (
        <div>
          <FaAward className="award_icon" />
          大賞
          &nbsp;
          <FaAward className="award_icon" />
          特別賞
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
      { rankingData.map((ranking) => (
        <div className="ranking_item">
          <div className="award_container">
            <p>
              {awardChecker(ranking.award)}
            </p>
          </div>
          <a href={`https://amazon.co.jp/dp/${ranking.asin}?tag=gustave02-22`}>
            <Card style={{
              width: '125px', height: '160px', margin: 'auto', textAlign: 'center', backgroundImage: `url(${imageURL(ranking.asin)})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center top',
            }}
            >
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
      ))}

    </>
  );
};

ITEngineerBooksAwardBox.propTypes = {
  rankingData: PropTypes.arrayOf(
    PropTypes.PropTypes.shape({
      ranking: PropTypes.number,
      asin: PropTypes.string,
    }),
  ).isRequired,
};

export default ITEngineerBooksAwardBox;
