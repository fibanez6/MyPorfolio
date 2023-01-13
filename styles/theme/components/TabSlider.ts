import { ComponentSingleStyleConfig } from '@chakra-ui/react';
import { bgMode } from '../color';


const TabSlider = {
  baseStyle: ({ colorMode }) => ({
    ...bgMode(colorMode),
    borderRadius: "50%",
    position: "absolute",
    bottom: "0.4",
    h: "0.175rem",
    transition: "left 0.3s ease",
    boxShadow: "0px 10px 10px 5px #569eff",
  })
} as ComponentSingleStyleConfig;

export default TabSlider;
