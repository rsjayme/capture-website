import styled from 'styled-components';
import { motion } from 'framer-motion';
export const FML = styled.div``;

export const Work = styled(motion.div)`
  background: #fff;
  min-height: 100vh;
  overflow: hidden;
  padding: 5rem 10rem;
  h2 {
    padding: 1rem 0rem;
  }
`;

export const Movie = styled.div`
  padding-bottom: 10rem;
  .line {
    height: 0.5rem;
    background: #cccccc;
    margin-bottom: 3rem;
  }

  img {
    width: 100%;
    height: 70%;
    object-fit: cover;
  }
`;
