import { Link } from 'react-router-dom';

import athlete from '../../img/athlete-small.png';
import theracer from '../../img/theracer-small.png';
import goodtimes from '../../img/goodtimes-small.png';

import { Work, Movie } from './styles';

import { motion } from 'framer-motion';
import { pageAnimation } from '../../animation';

const OurWork = () => {
  return (
    <>
      <Work
        exit="exit"
        variants={pageAnimation}
        initial="hidden"
        animate="show"
      >
        <Movie>
          <h2>The Athlete</h2>
          <div className="line"></div>
          <Link to="/work/the-athlete">
            <img src={athlete} alt="athelete" />
          </Link>
        </Movie>

        <Movie>
          <h2>The Racer</h2>
          <div className="line"></div>
          <Link to="/work/the-racer">
            <img src={theracer} alt="racer" />
          </Link>
        </Movie>

        <Movie>
          <h2>Good Times</h2>
          <div className="line"></div>
          <Link to="/work/good-times">
            <img src={goodtimes} alt="good times" />
          </Link>
        </Movie>
      </Work>
    </>
  );
};

export default OurWork;
