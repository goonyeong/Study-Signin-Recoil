import React, { useState } from 'react';
import styled from 'styled-components';
import logoImg from '../../Assets/Images/logoimg.png';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { signInfoAtom } from '../../Store/Atoms';

interface IInput {
  setState: (value: string) => void;
}

const InputID = ({ setState }: IInput) => {
  const [value, setValue] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    setState(value);
  };

  return (
    <>
      <label htmlFor="id">ID: </label>
      <input type="text" value={value} onChange={handleChange} id="id" />
    </>
  );
};

const InputPW = ({ setState }: IInput) => {
  const [value, setValue] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    setState(value);
  };

  return (
    <>
      <label htmlFor="pw">PW: </label>
      <input type="password" value={value} onChange={handleChange} id="pw" />
    </>
  );
};

const Home = () => {
  const signInfo = useRecoilValue(signInfoAtom);
  const setSignInfo = useSetRecoilState(signInfoAtom);

  console.log(signInfo);

  return (
    <>
      <InputID
        setState={(value) => {
          setSignInfo({ ...signInfo, userID: value });
        }}
      />
      <InputPW
        setState={(value) => {
          setSignInfo({ ...signInfo, userPW: value });
        }}
      />
      <SigninIngoBox>
        <h4>UserID : {signInfo.userID}</h4>
        <h4>UserPW : {signInfo.userPW}</h4>
      </SigninIngoBox>
    </>
  );
};

export default Home;

const Title = styled.h1`
  font-size: 5rem;
`;

const SigninIngoBox = styled.div``;
