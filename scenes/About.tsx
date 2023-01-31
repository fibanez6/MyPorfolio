'use client';

import { useToken } from '@chakra-ui/react';
import { Section } from 'components/layout/Section';
import Terminal from 'components/Terminal';
import { BASH_ABOUT } from 'content/profile-data';
import type { ReactElement } from 'react';
import { useMemo } from 'react';

const About = (): ReactElement => {
  const [bashColor] = useToken('colors', ['bash']);

  const data = useMemo(() => {
    const styledAbout = BASH_ABOUT.map(({ cmd, resp }) => {
      return `<span style="color:${bashColor}">${cmd}</span>\n\`${resp}\``;
    });
    styledAbout.push(`<span style="color:${bashColor}">$ </span>`);
    return styledAbout.join('\n');
  }, [bashColor]);

  return (
    <Section id="about">
      <Terminal data={[data]} />
    </Section>
  );
};

export default About;
