'use client';

import { Section } from 'components/layout/Section';
import type { ReactElement } from 'react';
import type { ExpProps } from 'types/sections/experience';

const Education = ({ jobs }: ExpProps): ReactElement => {
  return <Section id="education" title="Education"></Section>;
};

export default Education;
