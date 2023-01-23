'use client';

import { Section } from 'components/layout/Section';
import Timeline from 'components/Timeline';
import type { ReactElement } from 'react';
import { useMemo } from 'react';
import ReactMarkdown from 'react-markdown';
import type { TimelineProps } from 'types/components/Timeline';
import type { ExpProps } from 'types/sections/experience';

const Experience = ({ jobs = [] }: ExpProps): ReactElement => {
  const timelineData: TimelineProps[] = useMemo(() => {
    return jobs.reduce((acc, curr) => {
      return acc.concat({
        title: curr.frontmatter.role,
        subtitle: curr.frontmatter.company,
        date: curr.frontmatter.start,
        location: curr.frontmatter.location,
        content: <ReactMarkdown>{curr.html}</ReactMarkdown>
      } as any);
    }, []);
  }, [jobs]);

  return (
    <Section id="experience" title="Experience">
      <Timeline data={timelineData} />
    </Section>
  );
};

export default Experience;
