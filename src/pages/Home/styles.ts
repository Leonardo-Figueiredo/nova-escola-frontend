import styled from 'styled-components';

interface ButtonProps {
  show: boolean;
}

export const Header = styled.header`
  background: #df114c;
  height: 126px;
  width: 100%;

  position: relative;

  img {
    height: 84px;
    position: absolute;
    left: 30px;
    top: 50%;
    transform: translateY(-50%);
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

export const Content = styled.div`
  width: 100%;
  max-width: 80vw;
  height: 100%;
  overflow: hidden;

  display: flex;
  align-items: center;

  section {
    width: 50%;
    height: 100%;

    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const Form = styled.form`
  width: 500px;
  height: 600px;
  padding: 30px;

  display: flex;
  flex-direction: column;
  align-items: flex-start;

  h4 {
    margin: 0 auto;
    margin-top: -20px;
    padding-bottom: 5px;
  }

  h2 {
    width: 100%;
    height: 110px;
    background: #df114c;
    color: #fff;
    font-size: 40px;
    margin-bottom: 40px;

    display: flex;
    align-items: center;
    justify-content: center;
  }

  label {
    color: #888;
    font-size: 16px;
    background: #fff;
  }

  input {
    width: 95%;
    height: 37px;
    padding: 5px;
    font-size: 14px;
    color: #888;
    border: #888 solid 1px;
    font-weight: 500;
    margin: 0 10px;

    & + label {
      margin-top: 28px;
    }
  }

  input[type='date'] {
    width: 35%;
  }

  > button {
    font-size: 30px;
    color: #fff;
    font-weight: 500;
    background: #6d2077;
    border: 0;
    width: 270px;
    height: 60px;

    margin: 0 auto;
    margin-top: 40px;
  }
`;

export const Footer = styled.footer`
  height: 90px;
  background: #252626;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  img {
    height: 50px;
  }

  img:first-child {
    margin-left: 20px;
  }

  img:last-child {
    margin-right: 20px;
  }
`;
