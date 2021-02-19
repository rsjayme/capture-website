import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { MovieState } from '../../movieState';

import { pageAnimation } from '../../animation';

import { Details, Headline, Awards, AwardStyled, ImageDisplay } from './styles';
import { motion } from 'framer-motion';

const MovieDetail = () => {
  const history = useHistory();
  const url = history.location.pathname;
  const [movies] = useState(MovieState);
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const currentMovie = movies.filter((stateMovie) => stateMovie.url === url);
    setMovie(currentMovie[0]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [movies]);
  return (
    <>
      {movie && (
        <>
          <Details
            variants={pageAnimation}
            initial="hidden"
            animate="show"
            exit="exit"
          >
            <Headline>
              <h2>{movie.title}</h2>
              <img src={movie.mainImg} alt="movie" />
            </Headline>
            <Awards>
              {movie.awards.map((award) => (
                <Award
                  key={award.title}
                  title={award.title}
                  description={award.description}
                ></Award>
              ))}
            </Awards>
            <ImageDisplay>
              <img src={movie.secondaryImg} alt="movie" />
            </ImageDisplay>
          </Details>
        </>
      )}
    </>
  );
};

const Award = ({ title, description }) => {
  return (
    <AwardStyled>
      <h3>{title}</h3>
      <div className="line"></div>
      <p>{description}</p>
    </AwardStyled>
  );
};

export default MovieDetail;
