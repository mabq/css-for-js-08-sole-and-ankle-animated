import React from 'react';
import styled from 'styled-components/macro';

import { WEIGHTS } from '../../constants';

const NavLink = ({ children, ...delegated }) => {
  return (
    <Wrapper {...delegated}>
      <FirstRow>{children}</FirstRow>
      <SecondRow>{children}</SecondRow>
    </Wrapper>
  );
};


const Wrapper = styled.a`
  position: relative;
  overflow: hidden;
  font-size: 1.125rem;
  text-transform: uppercase;
  text-decoration: none;
  color: var(--color-gray-900);
  font-weight: ${WEIGHTS.medium};

  &:first-of-type {
    color: var(--color-secondary);
  }
`;

const FirstRow = styled.span`
  display: block;
  transition: transform 400ms ease;

  ${Wrapper}:hover & {
    transform: translateY(-100%);
    transition: transform 180ms ease;
  }
`;

const SecondRow = styled(FirstRow)`
  position: absolute;
  font-weight: ${WEIGHTS.bold};
`;

export default NavLink;
