'use client';

import Laptop from 'components/laptop';
import { Section } from 'components/layout/Section';
import type { ReactElement } from 'react';

const About = (): ReactElement => {
  return (
    <Section id="about">
      <Laptop />
    </Section>
  );
};

export default About;
