import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Details = styled(motion.div)`
  color: #fff;
`;

export const Headline = styled.div`
  min-height: 90vh;
  padding-top: 20vh;
  position: relative;

  h2 {
    position: absolute;
    top: 10%;
    left: 50%;
    transform: translate(-50%, -10%);
  }
  img {
    width: 100%;
    height: 70vh;
    object-fit: cover;
  }
`;

export const Awards = styled.div`
  min-height: 80vh;
  display: flex;
  margin: 5rem 10rem;
  align-items: center;
  justify-content: space-around;
`;

export const AwardStyled = styled.div`
  padding: 5rem;
  h3 {
    font-size: 2rem;
  }

  .line {
    width: 90%;
    background: #23d997;
    height: 0.5rem;
    margin: 1rem 0rem;
  }
`;

export const ImageDisplay = styled.div`
  min-height: 50vh;
  img {
    width: 100%;
    height: 100vh;
    object-fit: cover;
  }
`;
