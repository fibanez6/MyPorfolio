import { Box, Button, keyframes } from "@chakra-ui/react";
import React from "react";


type SubmitButtomProps = {
    label: string;
};

export const SubmitButtom = ({ label }: SubmitButtomProps) => {

    const fly = keyframes`
        from {transform: translateY(0.1em);}
        to {transform: translateY(-0.1em)}
    `;

    return (
        <Button
            role="group"
            transition="all 0.2s"
            overflow="hidden"
            _active={{
                transform: "scale(0.95)"
            }}
        >
            <Box
                w="1.5em"
                _groupHover={{
                    animation: `${fly} 0.6s ease-in-out infinite alternate`
                }}
            >
                <Box
                    as="svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    transition="transform 0.3s ease-in-out"
                    transform-origin="center center"
                    transform="rotate(-45deg)"
                    _groupHover={{
                        transform: "translateX(1.2em) rotate(0deg) scale(1.1)"
                    }}
                >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                </Box>
            </Box>
            <Box
                as="span"
                ml="0.3em"
                transition="all 0.3s ease-in-out"
                _groupHover={{
                    transform: "translateX(5em)"
                }}
            >
                {label}
            </Box>
        </Button>
    );
};
