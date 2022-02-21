import React from 'react';
import styled from 'styled-components';
import { IBtn } from '../Store/Type/Interfaces';

export const Button = ({ onClick, label }: IBtn) => {
  return <BtnStyle onClick={onClick}>{label}</BtnStyle>;
};

const BtnStyle = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 10px 0;
  font-size: 2rem;
`;
