import { forwardRef, memo } from "react";

export const ArrowUp = memo(
    forwardRef<SVGSVGElement>(({}, ref) => {
        return (
            <svg
                fill={"none"}
                height={50}
                ref={ref}
                width={50}
                xmlns={"http://www.w3.org/2000/svg"}
            >
                <circle cx={25} cy={25} fill={"#FFCF5C"} r={25} />
                <path
                    d={"m34.625 28-8.813-8.812L17 28"}
                    stroke={"#393333"}
                    strokeLinecap={"square"}
                    strokeMiterlimit={10}
                    strokeWidth={2}
                />
            </svg>
    );
    }),
);
