import { ComponentSingleStyleConfig, theme } from '@chakra-ui/react';
import { bgMode } from '@theme/color';

const Button: ComponentSingleStyleConfig = {
  baseStyle: ({ colorMode }) => ({
    ...bgMode(colorMode),
    color: 'whiteAlpha.900',
    transition: 'border 0.25s linear'
  }),
  variants: {
    ghost: {
      color: 'whiteAlpha.900',
      _hover: {
        bg: 'None',
        border: '2px solid #1C6FEB'
      }
    },
    submit: {
      ...theme.components.Button.baseStyle,

      transition: 'all 0.6s',
      overflow: 'hidden',
      _active: {
        transform: 'scale(0.95)'
      }
    }
  }
};

export default Button;
