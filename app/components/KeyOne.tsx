import { FC } from "react";

interface KeyOneProps {
  className?: string;
  width?: string;
  height?: string;
}

export const KeyOne: FC<KeyOneProps> = ({
  className,
  width = "97.91",
  height = "73.43",
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
        d="m97.41,39.08h0s-11.19-30.49-11.19-30.49l-19.3,24.29-31.26-4.44c-3.6-.51-4.49-3.51-6.51-1.84l-17.48-1.1L.54,60.85s-.01.04-.02.06l-.15.47.05-.02c-.23,1.58,1.56,3,4.73,3.45l57.1,8.11c4,.57,8.62-.62,10.32-2.65l24.33-29c.62-.74.76-1.5.5-2.18Z"
        style={{
          fill: "#fff",
          stroke: "#fff",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: ".75px",
        }}
      />
      <path
        d="m59.19,34.71l-43.95-6.24c-3.08-.44-4.51-2.06-3.2-3.62L30.78,2.52c1.31-1.56,4.87-2.48,7.95-2.04l43.95,6.24c3.08.44,4.51,2.06,3.2,3.62l-18.73,22.32c-1.31,1.56-4.87,2.48-7.95,2.04Z"
        style={{ stroke: "#fff", strokeMiterlimit: 10, strokeWidth: ".75px" }}
      />
      <path
        d="m50.77,22.89l-11.43-1.62-4.23,2.59-8.92-1.27,25.53-14.65,9.15,1.3-1.77,18.02-8.83-1.25.51-3.11Zm1.47-9.53l-7.74,4.74,6.86.97.88-5.71Z"
        style={{ fill: "#fff" }}
      />
    </svg>
  );
};
