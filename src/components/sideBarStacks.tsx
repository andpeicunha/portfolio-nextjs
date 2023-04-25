import React from 'react';

import { ImageLogo, StackContainer } from '../styles/sideBarStacksStyled';

export function SideBarStacks() {
  return (
    <StackContainer>
      <ImageLogo src="/stacks/logoReact.png" alt="ReactJs" texto="ReactJs" />
      <ImageLogo src="/stacks/logoNextJs.png" alt="NextJs" texto="NextJs" />
      <ImageLogo src="/stacks/logoTS.png" alt="Typescript" texto="Typescript" />
      <ImageLogo src="/stacks/logoJavascript.png" alt="ES6+" texto="ES6+" />
      <ImageLogo src="/stacks/logoJest.png" alt="Jest" texto="Jest" />
      <ImageLogo src="/stacks/logoCypress.png" alt="Cypress" texto="Cypress" />
      <ImageLogo
        src="/stacks/logoStorybook.png"
        alt="Storybook"
        texto="Storybook"
      />
      <ImageLogo src="/stacks/logoMongoDB.png" alt="MongoDB" texto="MongoDB" />
      <ImageLogo src="/stacks/logoFigma.png" alt="Figma" texto="Figma" />
      <ImageLogo
        src="/stacks/logoPhotoshop.png"
        alt="Photoshop"
        texto="Photoshop"
      />
    </StackContainer>
  );
}
