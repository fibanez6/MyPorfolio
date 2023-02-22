'use client';

import FlyThroughScene from 'components/flyThrough/FlyThroughScene';
import { SKILLS } from 'content/profile-data';
import type { ReactElement } from 'react';
import { dublicateItems, shuffle } from 'utils/array';

const words = shuffle(dublicateItems(SKILLS.words, SKILLS.times));

const Skills = (): ReactElement => (
  <FlyThroughScene words={words} minH="25rem" minDuration={4} maxDuration={5} />
);

export default Skills;
