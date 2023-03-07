import { FC } from "react";

interface KeyTwoProps {
  className?: string;
  width?: string;
  height?: string;
}

export const KeyTwo: FC<KeyTwoProps> = ({
  className,
  width = "99.16",
  height = "74.68",
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
        d="m98.03,39.71h0s-11.19-30.49-11.19-30.49l-19.3,24.29-31.26-4.44c-3.6-.51-4.49-3.51-6.51-1.84l-17.48-1.1L1.17,61.47s-.01.04-.02.06l-.15.47.05-.02c-.23,1.58,1.56,3,4.73,3.45l57.1,8.11c4,.57,8.62-.62,10.32-2.65l24.33-29c.62-.74.76-1.5.5-2.18Z"
        style={{
          fill: "#fff",
          stroke: "#000",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: "2px",
        }}
      />
      <path
        d="m59.82,35.33l-43.95-6.24c-3.08-.44-4.51-2.06-3.2-3.62L31.4,3.15c1.31-1.56,4.87-2.48,7.95-2.04l43.95,6.24c3.08.44,4.51,2.06,3.2,3.62l-18.73,22.32c-1.31,1.56-4.87,2.48-7.95,2.04Z"
        style={{ stroke: "#000", strokeMiterlimit: 10, strokeWidth: "2px" }}
      />
      <path
        d="m98.03,39.71h0s-11.19-30.49-11.19-30.49l-19.3,24.29-31.26-4.44c-3.6-.51-4.49-3.51-6.51-1.84l-17.48-1.1L1.17,61.47s-.01.04-.02.06l-.15.47.05-.02c-.23,1.58,1.56,3,4.73,3.45l57.1,8.11c4,.57,8.62-.62,10.32-2.65l24.33-29c.62-.74.76-1.5.5-2.18Z"
        style={{
          fill: "#fff",
          stroke: "#fff",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: ".75px",
        }}
      />
      <path
        d="m59.82,35.33l-43.95-6.24c-3.08-.44-4.51-2.06-3.2-3.62L31.4,3.15c1.31-1.56,4.87-2.48,7.95-2.04l43.95,6.24c3.08.44,4.51,2.06,3.2,3.62l-18.73,22.32c-1.31,1.56-4.87,2.48-7.95,2.04Z"
        style={{ stroke: "#fff", strokeMiterlimit: 10, strokeWidth: ".75px" }}
      />
      <path
        d="m43.01,15.69l-7.77,9.26-8.38-1.19,13.14-15.66,7.89,1.12,3.68,6.74,12.93-4.35,7.8,1.11-13.12,15.64-8.38-1.19,7.81-9.31-11.39,3.71-.99-.14-3.21-5.74Z"
        style={{ fill: "#fff" }}
      />
    </svg>
  );
};
