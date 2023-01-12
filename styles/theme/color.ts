import { ComponentSingleStyleConfig } from '@chakra-ui/react';


export const useColorMode = (colorMode: "light" | "dark") => {
    return colorMode === 'light' ? 'primary.main' : 'secundary.main'
}

export const useHoverColorMode = (colorMode: "light" | "dark") => {
    return colorMode === 'light' ? 'primary.50' : 'secundary.50'
}

export const bgMode = (colorMode: "light" | "dark") => {
    return {
        bg: useColorMode(colorMode),
        _hover: {
            bg: useHoverColorMode(colorMode),
        }
    }
}

const Colors = {
    primary: {
        main: "#0D74FF",
        50: "#86baff",
        60: "#6eacff",
        70: "#569eff",
        80: "#3d90ff",
        90: "#2582ff",
        100: "#0c68e6",
        200: "#0a5dcc",
        300: "#0951b3",
        400: "#084699",
        500: "#073a80",
        600: "#052e66",
        700: "#04234c",
        800: "#031733",
        900: "#010c19"
    },
    secundary: {
        main: "#FF5430",
        50: "#ffaa98",
        100: "#e64c2b",
        200: "#cc4326",
        300: "#b33b22",
        400: "#99321d",
        500: "#802a18",
        600: "#662213",
        700: "#4c190e",
        800: "#33110a",
        900: "#190805"
    },
    tertiary: {
        main: "#44d8a4",
        50: "#ffaa98",
        100: "#3dc294",
        200: "#36ad83",
        300: "#309773",
        400: "#298262",
        500: "#226c52",
        600: "#1b5642",
        700: "#144131",
        800: "#0e2b21",
        900: "#071610"
    }

} as ComponentSingleStyleConfig;

export default Colors;	
