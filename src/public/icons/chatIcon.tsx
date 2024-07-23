import { forwardRef, memo } from "react";

export const ChatIcon = memo(
    forwardRef<SVGSVGElement>(({}, ref) => {
        return (
            <svg
                fill={"none"}
                height={50}
                ref={ref}
                width={50}
                xmlns={"http://www.w3.org/2000/svg"}
            >
                <rect fill={"#393333"} height={50} rx={25} width={50} />
                <path
                    d={"M23.425 13.08c-2.64.355-5.06 1.55-6.925 3.42a11.972 11.972 0 0 0-3.425 6.965c-.1.77-.1 2.25 0 3.02.18 1.335.56 2.605 1.155 3.806l.375.764-.8 2.41C13.35 34.83 13 35.956 13 36.06c0 .206.175.39.37.39.055 0 1.165-.35 2.46-.775l2.355-.78.445.28c.65.416 1.75.936 2.505 1.196 1.305.444 2.455.63 3.89.63s2.465-.165 3.785-.605c4.375-1.45 7.51-5.265 8.115-9.86.1-.776.1-2.296 0-3.07a12.038 12.038 0 0 0-1.15-3.79c-1.795-3.625-5.225-6.07-9.24-6.6-.73-.096-2.405-.096-3.11.005Zm-1.95 10.865c.23.1.505.395.605.636.04.095.07.28.07.42 0 .31-.085.52-.305.774-.225.256-.5.376-.87.376-.625 0-1.14-.52-1.14-1.15 0-.63.515-1.15 1.14-1.15.18 0 .38.04.5.095Zm3.965-.015c.425.175.71.6.71 1.07 0 .645-.505 1.15-1.15 1.15-1.01 0-1.53-1.21-.835-1.944.32-.335.855-.45 1.275-.276Zm4.035.015c.23.1.505.395.605.636.04.095.07.28.07.42 0 .89-.965 1.44-1.735 1-.44-.25-.685-.8-.565-1.25.145-.54.595-.9 1.125-.9.18 0 .38.04.5.095Z"}
                    fill={"#FFCF5C"}
                />
            </svg>
    );
    }),
);
