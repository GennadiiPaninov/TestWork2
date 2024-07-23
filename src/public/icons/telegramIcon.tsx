import { forwardRef, memo } from "react";

export const TelegramIcon = memo(
    forwardRef<SVGSVGElement>(({}, ref) => {
        return (
            <svg
                fill={"none"}
                height={20}
                ref={ref}
                width={20}
                xmlns={"http://www.w3.org/2000/svg"}

            >
                <g clipPath={"url(#a)"}>
                    <path
                        d={"m1.289 10.036 16.198-6.245c.752-.272 1.408.183 1.165 1.32l.001-.002-2.758 12.994c-.204.921-.752 1.145-1.517.711l-4.2-3.095-2.026 1.951c-.224.224-.413.413-.847.413l.298-4.274 7.784-7.032c.339-.298-.076-.466-.522-.17l-9.62 6.057L1.1 11.37c-.9-.285-.92-.9.19-1.334Z"}
                        fill={"#fff"}
                    />
                </g>
                <defs>
                    <clipPath id={"a"}>
                        <path d={"M0 0h20v20H0z"} fill={"#fff"} />
                    </clipPath>
                </defs>
            </svg>
        );
    }),
);
