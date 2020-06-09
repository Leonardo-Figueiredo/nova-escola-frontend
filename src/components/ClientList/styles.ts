import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  width: 500px;
  height: 600px;
  border: 2px solid #6d2077;
  border-radius: 4px;
  padding: 0 50px;
  padding-bottom: 20px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Form = styled.form`
  height: 300px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  h4 {
    color: #df114c;
    margin-top: 5px;
  }

  label {
    color: #ccc;
    font-size: 14px;
  }
`;

export const Input = styled.div`
  display: flex;
  border: #888 1px solid;
  width: 300px;

  input {
    border: 0;
    padding: 5px;
    width: 100%;
  }

  button {
    background: #6d2077;
    color: #fff;
    border: 0;
    padding: 6px 15px;
    transition: background-color 0.2s;
    font-weight: 700;

    :hover {
      background: ${shade(0.2, '#6d2077')};
    }
  }
`;

export const List = styled.ul`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin-bottom: 40px;
  position: relative;

  overflow: auto;
  overflow-x: hidden;

  li {
    display: flex;
    width: 100%;

    border: #888 solid 1px;
    padding: 10px;

    & + li {
      margin-top: 5px;
    }
  }

  button {
    background: 0;
    color: #df114c;
    width: 80px;
    border: 0;
    font-weight: 700;
    margin-top: 12px;
  }

  span {
    min-width: 25px;
  }

  p {
    height: 20px;
  }

  svg {
    margin-right: 4px;
    min-width: 20px;
    min-height: 20px;
  }

  div {
    min-width: 220px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
  }

  p,
  strong {
    font-size: 14px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }

  div strong + p {
    margin-top: 10px;
  }
`;

export const Footer = styled.footer`
  display: flex;
  width: 100%;
  justify-content: space-between;

  button {
    background: #df114c;
    border: 0;
    width: 100px;
    height: 25px;
    color: #fff;
    font-weight: 700;
    font-size: 18px;
    transition: background-color 0.2s;

    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
      background: ${shade(0.2, '#df114c')};
    }
  }
`;
