import styled from "styled-components";

export const Heading = styled.div`
  //   border: 1px solid red;
  position: relative;
  margin-bottom: 0;
  h1 {
    font-size: 4rem;
    position: absolute;
    top: -0.1em;
    left: 0.1em;
    color: #00000018;
  }
  h2 {
    font-size: 2.5rem;
    color: var(--secondary-color);
  }

  h1::before {
    content :'';
    position: absolute;
    left: ${({left}) => left};
    top: .98em;
    
    height: .06em;
    width: 5em;
    border-radius: 20px;
    // background-color: var(--secondary-color);
    background-color: #0002;
    z-index: -3;
    // filter: contrast(1%);
  }
`;
