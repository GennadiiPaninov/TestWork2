import { forwardRef, memo } from "react";

export const Line = memo(
    forwardRef<SVGSVGElement>(({}, ref) => {
        return (
            <svg
                fill={"none"}
                height={3}
                ref={ref}
                width={50}
                xmlns={"http://www.w3.org/2000/svg"}
            >
                <path d={"M0 .5h50v2H0z"} fill={"#fff"} />
            </svg>
        );
    }),
);
