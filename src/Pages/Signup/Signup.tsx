import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { signInfoAtom } from '../../Store/Atoms';
import { InputID, InputPW, InputPWAgain } from '../../Components/Input';
import { Button } from '../../Components/Button';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const [passwordAgain, setPasswordAgain] = useState('');

  const navigate = useNavigate();

  return (
    <Container>
      <div className="input_container">
        <InputID
          setState={(value) => {
            setId(value);
          }}
        />
        <InputPW
          setState={(value) => {
            setPassword(value);
          }}
        />
        <InputPWAgain
          setState={(value) => {
            setPasswordAgain(value);
          }}
          externalIsWrong={password === passwordAgain}
        />
        <BtnContainer>
          <Button
            onClick={() => {
              // 서버로 회원정보 보내기
            }}
            label="Sign up"
          />
          <Button
            onClick={() => {
              navigate('/');
            }}
            label="Home"
          />
        </BtnContainer>
      </div>
    </Container>
  );
};

export default Signup;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 100px;
  .input_container {
    width: 50%;
    height: 600px;
    border: 1px solid #cd55d1;
    border-radius: 20px;
    display: grid;
    align-content: start;
    padding: 50px 80px;
    grid-gap: 50px;
  }
`;

const BtnContainer = styled.div`
  margin-top: 100px;
  display: grid;
  grid-gap: 20px;
`;
