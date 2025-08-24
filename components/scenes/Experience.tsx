'use client';

import Timeline from 'components/Timeline';
import type { ReactElement } from 'react';
import { useMemo } from 'react';
import Markdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import remarkGfm from 'remark-gfm';
import type { ExpProps } from 'types/components/scenes/experience';
import type { TimelineProps } from 'types/components/timeline';

const Experience = ({ jobs = [] }: ExpProps): ReactElement => {
  const timelineData: TimelineProps[] = useMemo(() => {
    return jobs.reduce((acc, curr) => {
      return acc.concat({
        title: curr.frontmatter.role,
        subtitle: curr.frontmatter.company,
        date: curr.frontmatter.start,
        location: curr.frontmatter.location,
        content: (
          <Markdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw]}>
            {curr.html}
          </Markdown>
        )
      } as any);
    }, []);
  }, [jobs]);

  return <Timeline data={timelineData} />;
};

export default Experience;
