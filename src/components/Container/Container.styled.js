import { styled } from 'styled-components';


export const ContainersStyle = styled.div`
  min-width: 300px;
  margin: 0 auto;
  /* max-width: 360px; */
  padding: 0 10px;

  /* outline: 1px solid red;
  outline-offset: -1px; */

  @media screen and (min-width: 768px) {
    /* max-width: 834px; */
    max-width: none;
    padding: 0 27px;
  }

  @media screen and (min-width: 1280px) {
    /* max-width: 1440px; */
    padding: 0 34px;
  }
`
