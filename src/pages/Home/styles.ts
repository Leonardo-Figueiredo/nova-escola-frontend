import styled from 'styled-components';

export const Header = styled.header`
  background: #df114c;
  height: 126px;
  width: 100%;

  position: relative;

  img {
    height: 84px;
    position: absolute;
    left: 30px;
    top: 20px;
  }

  div {
    background: #fff;
    border: 1px solid #252626;
    border-radius: 3px;
    width: 562px;
    height: 93px;
    padding: 10px;

    position: absolute;
    bottom: -45px;
    left: 50%;
    transform: translateX(-50%);

    display: flex;
    align-items: center;
    justify-content: center;
    strong {
      font-size: 36px;
      color: #252626;
    }
  }
`;

export const Content = styled.div``;
