import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';

const RankingBox = function (props) {
  const { rankingData } = props;

  // const pattern = /[^0-9A-Z]([0-9A-Z]{10})([^0-9A-Z]|$)/;
  // const isbn = url.match(pattern)[1]
  return (
    <>

      { rankingData.map((ranking, key) => (
        <div className="ranking_item" key={key}>
          <h3>
            {ranking.ranking}
            位
          </h3>
          {console.log(ranking)}
          <a href={`https://amazon.co.jp/dp/${ranking.asin}?tag=gustave02-22`}>
            <Card style={{
              width: '125px', height: '160px', margin: 'auto', textAlign: 'center', backgroundImage: `url(https://images-na.ssl-images-amazon.com/images/P/${ranking.asin}.09.MZZZZZZZ)`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center top',
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

RankingBox.propTypes = {
  rankingData: PropTypes.arrayOf(
    PropTypes.PropTypes.shape({
      ranking: PropTypes.number,
      asin: PropTypes.string,
    }),
  ).isRequired,
};

export default RankingBox;
