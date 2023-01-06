import { useColorMode, Container, ContainerProps } from '@chakra-ui/react'
import { motion } from "framer-motion";

export const Section = (props: ContainerProps) => {
  const { colorMode } = useColorMode()

  const bgColor = { light: 'gray.50', dark: 'gray.900' }
  const color = { light: 'black', dark: 'white' }
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.5 }}
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 },
      }}
    >
      <Container
        as="section"
        maxW={"full"}
        // bg={bgColor[colorMode]}
        // color={color[colorMode]}
        {...props}
      />
    </motion.div >
  )
}
