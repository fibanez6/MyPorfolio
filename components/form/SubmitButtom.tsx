import { Box, Button, ButtonProps, keyframes } from "@chakra-ui/react";
import React, { useEffect, useRef, useState } from "react";
import { getRandom } from "../helper/random";


type SubmitButtomProps = ButtonProps & {
    label: string;
};

type Position = {
    x: number | undefined;
    y: number | undefined;
};

export const SubmitButtom = ({ label, ...props }: SubmitButtomProps) => {
    const buttomRef = useRef<HTMLButtonElement>();
    const [pos, setPos] = useState<Position>({
        x: undefined,
        y: undefined,
    });

    useEffect(() => {
        let timer: NodeJS.Timeout;
        if (pos.x !== 0 || pos.y !== 0) {
            timer = setTimeout(() => {
                buttomRef.current.style.transform = `translate(0px, 0px)`
            }, 1000);
        }
        return () => {
            clearTimeout(timer);
        };
    }, [props.disabled, pos]);

    var posX: number;
    var posY: number;
    const dodgeMouse = () => {
        if (props.disabled) {
            posX ? posX = 0 : posX = getRandom(0, 300)
            posY ? posY = 0 : posY = getRandom(0, 300)
            setPos({ x: posX, y: posY })
            buttomRef.current.style.transform = `translate(${-posX}px, ${-posY}px)`
        }
    }

    const fly = keyframes`
        from {transform: translateY(0.1em);}
        to {transform: translateY(-0.1em)}
    `;

    return (
        <Button
            ref={buttomRef}
            role="group"
            transition="all 0.6s"
            overflow="hidden"
            _active={{
                transform: "scale(0.95)"
            }}
            disabled={props.disabled}
            onMouseOver={dodgeMouse}
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
