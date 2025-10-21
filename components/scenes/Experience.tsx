'use client';

import {
  Box,
  Button,
  HStack,
  Icon,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
  VStack
} from '@chakra-ui/react';
import Timeline from 'components/Timeline';
import type { ReactElement } from 'react';
import { useMemo } from 'react';
import Markdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import remarkGfm from 'remark-gfm';
import type { ExpProps } from 'types/components/scenes/experience';
import type { TimelineProps } from 'types/components/timeline';

const Experience = ({ jobs = [] }: ExpProps): ReactElement => {
  const handleDownloadResume = (format: 'md' | 'pdf'): void => {
    // Direct download for both formats
    const link = document.createElement('a');
    link.href = `/api/download-resume?format=${format}`;
    link.download = `Fernando_Ibanez_Resume.${format}`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleViewResume = (): void => {
    // Open HTML version in new window for viewing
    window.open('/api/download-resume?format=html', '_blank');
  };

  const timelineData: TimelineProps[] = useMemo(() => {
    return jobs.reduce((acc, curr) => {
      return acc.concat({
        title: curr.frontmatter.role,
        subtitle: curr.frontmatter.company,
        date: curr.frontmatter.start,
        location: curr.frontmatter.location,
        content: (
          <Box
            sx={{
              '& ul': {
                marginBottom: 4,
                paddingLeft: 4,
                '& ul': {
                  paddingLeft: 6,
                  marginTop: 2,
                  marginBottom: 2
                }
              },
              '& ol': {
                marginBottom: 4,
                paddingLeft: 4,
                '& ol': {
                  paddingLeft: 6,
                  marginTop: 2,
                  marginBottom: 2
                }
              },
              '& li': {
                marginBottom: 1,
                lineHeight: '1.6'
              },
              '& p': {
                marginBottom: 3,
                lineHeight: '1.6'
              },
              '& strong': {
                fontWeight: 'bold',
                color: 'blue.600'
              },
              '& em': {
                fontStyle: 'italic',
                color: 'gray.600'
              }
            }}
          >
            <Markdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw]}>
              {curr.html}
            </Markdown>
          </Box>
        )
      } as any);
    }, []);
  }, [jobs]);

  return (
    <VStack spacing={6} align="stretch">
      {/* Download Resume Dropdown */}
      <HStack justify="center" mb={4}>
        <Menu>
          <MenuButton
            as={Button}
            colorScheme="blue"
            variant="outline"
            size="md"
            position="relative"
            zIndex="dropdown"
            sx={{
              touchAction: 'manipulation',
              WebkitTapHighlightColor: 'transparent',
              pointerEvents: 'auto',
              cursor: 'pointer'
            }}
            leftIcon={
              <Icon viewBox="0 0 24 24" boxSize={4}>
                <path
                  fill="currentColor"
                  d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z"
                />
              </Icon>
            }
            rightIcon={
              <Icon viewBox="0 0 24 24" boxSize={4}>
                <path fill="currentColor" d="M7,10L12,15L17,10H7Z" />
              </Icon>
            }
          >
            Download Resume
          </MenuButton>
          <MenuList
            zIndex="dropdown"
            sx={{
              touchAction: 'manipulation',
              WebkitTapHighlightColor: 'transparent',
              pointerEvents: 'auto'
            }}
          >
            <MenuItem
              onClick={() => handleDownloadResume('md')}
              sx={{
                touchAction: 'manipulation',
                WebkitTapHighlightColor: 'transparent',
                cursor: 'pointer',
                minH: '44px'
              }}
            >
              <HStack spacing={3}>
                <Icon viewBox="0 0 24 24" boxSize={5}>
                  <path
                    fill="currentColor"
                    d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z"
                  />
                </Icon>
                <VStack align="start" spacing={0}>
                  <Text fontSize="sm" fontWeight="medium">
                    Markdown (.md)
                  </Text>
                  <Text fontSize="xs" color="gray.500">
                    Plain text format
                  </Text>
                </VStack>
              </HStack>
            </MenuItem>
            <MenuItem
              onClick={() => handleDownloadResume('pdf')}
              sx={{
                touchAction: 'manipulation',
                WebkitTapHighlightColor: 'transparent',
                cursor: 'pointer',
                minH: '44px'
              }}
            >
              <HStack spacing={3}>
                <Icon viewBox="0 0 24 24" boxSize={5} color="red.500">
                  <path
                    fill="currentColor"
                    d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z"
                  />
                </Icon>
                <VStack align="start" spacing={0}>
                  <Text fontSize="sm" fontWeight="medium">
                    PDF (.pdf)
                  </Text>
                  <Text fontSize="xs" color="gray.500">
                    Formatted document
                  </Text>
                </VStack>
              </HStack>
            </MenuItem>
            <MenuItem
              onClick={handleViewResume}
              sx={{
                touchAction: 'manipulation',
                WebkitTapHighlightColor: 'transparent',
                cursor: 'pointer',
                minH: '44px'
              }}
            >
              <HStack spacing={3}>
                <Icon viewBox="0 0 24 24" boxSize={5} color="blue.500">
                  <path
                    fill="currentColor"
                    d="M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9M12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17M12,4.5C7,4.5 2.73,7.61 1,12C2.73,16.39 7,19.5 12,19.5C17,19.5 21.27,16.39 23,12C21.27,7.61 17,4.5 12,4.5Z"
                  />
                </Icon>
                <VStack align="start" spacing={0}>
                  <Text fontSize="sm" fontWeight="medium">
                    View Online
                  </Text>
                  <Text fontSize="xs" color="gray.500">
                    Open in new tab
                  </Text>
                </VStack>
              </HStack>
            </MenuItem>
          </MenuList>
        </Menu>
      </HStack>

      <Timeline data={timelineData} />
    </VStack>
  );
};

export default Experience;
