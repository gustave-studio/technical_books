import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';

const ITEngineerBooksAwardBox = function (props) {
  const { rankingData } = props;

  // const pattern = /[^0-9A-Z]([0-9A-Z]{10})([^0-9A-Z]|$)/;
  // const isbn = url.match(pattern)[1]

  const awardChecker = (award) => {
    if (award === 'grand_prize') {
      return '大賞';
    } if (award === 'special_prize') {
      return '特別賞';
    } if (award === 'grand_prize_and_special_prize') {
      return '大賞 & 特別賞';
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

      { rankingData.map((ranking) => {
        console.log('----------');
        console.log(ranking);
        return (
          <div className="ranking_item">
            <h3>
              {awardChecker(ranking.award)}
            </h3>
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
        );
      })}

    </>
  );
};

ITEngineerBooksAwardBox.propTypes = {
  rankingData: PropTypes.objectOf.isRequired,
};

export default ITEngineerBooksAwardBox;