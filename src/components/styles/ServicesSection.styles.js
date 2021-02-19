import styled from 'styled-components';
import { Main } from './styles';

/* Export default styles */
export { Description, Hide, Image } from './styles';

export const Services = styled(Main)`
  h2 {
    padding-bottom: 5rem;
  }

  p {
    width: 70%;
    padding: 2rem 0rem 4rem 0rem;
  }
`;

export const CardsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const Card = styled.div`
  /*flex-basis: 20rem*/
  flex-basis: 15rem;
  .icon {
    display: flex;
    align-items: center;

    h3 {
      margin-left: 1rem;
      background: white;
      color: black;
      padding: 1rem;
    }
  }
`;
