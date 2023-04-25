import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import { THEME } from './theme';

type PropsImageLogo = {
  src: string;
  texto: string;
  alt?: string;
  xp?: number;
};

export const StackContainer = styled.div`
  position: fixed !important;
  top: 0;
  left: 28px;
  height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: start;
  padding-top: 70px;
  z-index: 100;

  @media ${THEME.MEDIA.tablet} {
    left: 36px;
  }

  @media ${THEME.MEDIA.desktop} {
    left: 3.55%;
  }

  @media ${THEME.MEDIA.desktopXl} {
    left: 2.9%;
  }
`;

const TextInfo = styled.div`
  visibility: hidden;
  transition: visibility 0.5s ease-in-out;

  position: relative;
  left: 0;
  top: 0;

  background-color: ${THEME.COLORS.branco};
  border-radius: 5px;
  color: #000;
  font-size: 0.65rem;
  opacity: 0.85;

  padding: 3px 8px;
  margin: 0 10px;
  width: fit-content;
`;

const DivImgContainer = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  flex-direction: row;

  :hover ${TextInfo} {
    visibility: visible;
  }
`;

const Img = styled(Image)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 22px;
  height: 22px;

  margin: 9px 0;
  opacity: 0.3;
  transition: opacity 0.5s ease-in-out;

  :hover {
    opacity: 1;
  }

  @media ${THEME.MEDIA.tablet} {
    width: 26px;
    height: 26px;
    margin: 10px 0;
  }

  @media ${THEME.MEDIA.desktop} {
    width: 28px;
    height: 28px;
    margin: 12px 0;
  }

  @media ${THEME.MEDIA.desktopXl} {
    width: 28px;
    height: 28px;
    margin: 16px 0;
  }
`;

export const ImageLogo = ({ ...props }: PropsImageLogo) => {
  return (
    <DivImgContainer>
      <Img src={props.src} alt="Logo" width={256} height={256} priority />
      <TextInfo className="textInfo">{props.texto}</TextInfo>
    </DivImgContainer>
  );
};
