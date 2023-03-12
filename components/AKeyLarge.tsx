import { FC } from "react";

interface AKeyLargeProps {
  className?: string;
  width?: string;
  height?: string;
}

export const AKeyLarge: FC<AKeyLargeProps> = ({
  className,
  width = "94.06",
  height = "71.33",
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      className={className}
    >
      <path
        d="m92.02,37.86h0s-10.39-28.31-10.39-28.31l-17.92,22.56-29.03-4.12c-3.34-.47-4.17-3.26-6.05-1.71l-16.23-1.03L2.08,58.07s-.01.04-.02.06l-.14.44.05-.02c-.21,1.47,1.45,2.78,4.39,3.2l53.02,7.53c3.71.53,8-.57,9.59-2.46l22.59-26.93c.58-.69.71-1.39.46-2.03Z"
        style={{
          fill: "#fff",
          stroke: "#fff",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: "3.84px",
        }}
      />
      <path
        d="m56.54,33.8l-40.81-5.8c-2.86-.41-4.19-1.91-2.97-3.36L30.15,3.91c1.22-1.45,4.52-2.3,7.38-1.89l40.81,5.8c2.86.41,4.19,1.91,2.97,3.36l-17.39,20.73c-1.22,1.45-4.52,2.3-7.38,1.89Z"
        style={{ stroke: "#fff", strokeMiterlimit: 10, strokeWidth: "3.84px" }}
      />
      <path
        d="m48.71,22.83l-10.61-1.51-3.92,2.4-8.28-1.18,23.71-13.6,8.49,1.21-1.64,16.73-8.2-1.17.47-2.89Zm1.37-8.85l-7.18,4.4,6.37.9.81-5.3Z"
        style={{ fill: "#fff" }}
      />
    </svg>
  );
};
