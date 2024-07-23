import { forwardRef, memo } from "react";

export const BurgerMenu = memo(
    forwardRef<SVGSVGElement>(({}, ref) => {
        return (
            <svg
                fill={"none"}
                height={20}
                ref={ref}
                width={27}
                xmlns={"http://www.w3.org/2000/svg"}
            >
                <path
                    d={"M26.625 17.656v2.188H.375v-2.188h26.25Zm0-8.75v2.188H.375V8.906h26.25Zm0-8.75v2.188H.375V.156h26.25Z"}
                    fill={"#fff"}
                />
            </svg>
        );
    }),
);
