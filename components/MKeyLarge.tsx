import { FC } from "react";

interface MKeyLargeProps {
  className?: string;
  width?: string;
  height?: string;
}

export const MKey: FC<MKeyLargeProps> = ({
  className,
  width = "100.46",
  height = "77.68",
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
        d="m95.22,41.06h0s-10.39-28.31-10.39-28.31l-17.92,22.56-29.03-4.12c-3.34-.47-4.17-3.26-6.05-1.71l-16.23-1.03L5.28,61.27s-.01.04-.02.06l-.14.44.05-.02c-.21,1.47,1.45,2.78,4.39,3.2l53.02,7.53c3.71.53,8-.57,9.59-2.46l22.59-26.93c.58-.69.71-1.39.46-2.03Z"
        style={{
          fill: "#fff",
          stroke: "#000",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: "10.24px",
        }}
      />
      <path
        d="m59.74,37l-40.81-5.8c-2.86-.41-4.19-1.91-2.97-3.36L33.35,7.11c1.22-1.45,4.52-2.3,7.38-1.89l40.81,5.8c2.86.41,4.19,1.91,2.97,3.36l-17.39,20.73c-1.22,1.45-4.52,2.3-7.38,1.89Z"
        style={{ stroke: "#000", strokeMiterlimit: 10, strokeWidth: "10.24px" }}
      />
      <path
        d="m95.22,41.06h0s-10.39-28.31-10.39-28.31l-17.92,22.56-29.03-4.12c-3.34-.47-4.17-3.26-6.05-1.71l-16.23-1.03L5.28,61.27s-.01.04-.02.06l-.14.44.05-.02c-.21,1.47,1.45,2.78,4.39,3.2l53.02,7.53c3.71.53,8-.57,9.59-2.46l22.59-26.93c.58-.69.71-1.39.46-2.03Z"
        style={{
          fill: "#fff",
          stroke: "#fff",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: "3.84px",
        }}
      />
      <path
        d="m59.74,37l-40.81-5.8c-2.86-.41-4.19-1.91-2.97-3.36L33.35,7.11c1.22-1.45,4.52-2.3,7.38-1.89l40.81,5.8c2.86.41,4.19,1.91,2.97,3.36l-17.39,20.73c-1.22,1.45-4.52,2.3-7.38,1.89Z"
        style={{ stroke: "#fff", strokeMiterlimit: 10, strokeWidth: "3.84px" }}
      />
      <path
        d="m44.13,18.76l-7.21,8.6-7.78-1.11,12.2-14.55,7.33,1.04,3.42,6.25,12.01-4.04,7.24,1.03-12.18,14.52-7.78-1.11,7.25-8.64-10.58,3.45-.92-.13-2.98-5.33Z"
        style={{ fill: "#fff" }}
      />
    </svg>
  );
};
