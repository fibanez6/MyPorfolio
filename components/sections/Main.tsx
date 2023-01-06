import { Stack, StackProps } from '@chakra-ui/react'

export const Main = (props: StackProps) => (
  <Stack
    className='main'
    spacing="1.5rem"
    maxW={"8xl"}
    m="0 auto"
    p={{ sm: 5, md: 5, lg: 16 }}
    overflow="hidden"
    {...props}
  />
)
