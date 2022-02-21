import React, { useState, useEffect } from 'react';
import { IInput } from '../Store/Type/Interfaces';
import styled from 'styled-components';

const judgeIsWrong = (reg: RegExp, value: string) => {
  if (!reg.test(value)) {
    return true;
  } else {
    return false;
  }
};

export const InputID = ({ setState }: IInput) => {
  const [value, setValue] = useState('');
  const [isWrong, setIsWrong] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  useEffect(() => {
    setState(value);
    if (value.length > 0) {
      setIsWrong(judgeIsWrong(/^[a-zA-Z0-9+-\_.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/, value));
    } else {
      setIsWrong(false);
    }
  }, [value]);

  return (
    <InputConainer>
      <label htmlFor="id">ID: </label>
      <input type="text" value={value} onChange={handleChange} id="id" />
      {isWrong && <p className="alert">형식이 다름</p>}
    </InputConainer>
  );
};

export const InputPW = ({ setState }: IInput) => {
  const [value, setValue] = useState('');
  const [isWrong, setIsWrong] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  useEffect(() => {
    setState(value);
    if (value.length > 0) {
      setIsWrong(judgeIsWrong(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,16}$/, value));
    } else {
      setIsWrong(false);
    }
  }, [value]);

  return (
    <InputConainer>
      <label htmlFor="pw">PW: </label>
      <input type="password" value={value} onChange={handleChange} id="pw" />
      {isWrong && <p className="alert">8-16 개 문자 숫자</p>}
    </InputConainer>
  );
};

export const InputPWAgain = ({ setState, externalIsWrong }: IInput) => {
  const [value, setValue] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  useEffect(() => {
    setState(value);
  }, [value]);

  return (
    <InputConainer>
      <label htmlFor="pwagain">PW2: </label>
      <input type="password" value={value} onChange={handleChange} id="pwagain" />
      {!externalIsWrong && <p className="alert">비밀변호가 일치하지 않습니다</p>}
    </InputConainer>
  );
};

const InputConainer = styled.div`
  display: grid;
  grid-template-columns: 20% auto;
  grid-column-gap: 20px;
  position: relative;
  label {
    display: flex;
    align-items: center;
    justify-content: right;
  }
  input {
    width: 100%;
  }
  .alert {
    font-size: 1.5rem;
    color: red;
    position: absolute;
    bottom: -20px;
    left: 30%;
  }
`;
