import { FC } from "react";

interface MKeyProps {
  className?: string;
  width?: string;
  height?: string;
}

export const MKey: FC<MKeyProps> = ({
  className,
  width = "50",
  height = "38.69",
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
        d="m47,20.42h0s-5.08-13.84-5.08-13.84l-8.76,11.03-14.19-2.02c-1.63-.23-2.04-1.59-2.96-.84l-7.94-.5L3.02,30.3s0,.02,0,.03l-.07.21h.02c-.1.71.71,1.35,2.15,1.56l25.92,3.68c1.81.26,3.91-.28,4.69-1.2l11.05-13.17c.28-.34.35-.68.23-.99Z"
        style={{
          fill: "#fff",
          stroke: "#000",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: "5.01px",
        }}
      />
      <path
        d="m29.65,18.43l-19.95-2.83c-1.4-.2-2.05-.93-1.45-1.64L16.75,3.82c.6-.71,2.21-1.12,3.61-.93l19.95,2.83c1.4.2,2.05.93,1.45,1.64l-8.5,10.13c-.6.71-2.21,1.12-3.61.93Z"
        style={{ stroke: "#000", strokeMiterlimit: 10, strokeWidth: "5.01px" }}
      />
      <path
        d="m47,20.42h0s-5.08-13.84-5.08-13.84l-8.76,11.03-14.19-2.02c-1.63-.23-2.04-1.59-2.96-.84l-7.94-.5L3.02,30.3s0,.02,0,.03l-.07.21h.02c-.1.71.71,1.35,2.15,1.56l25.92,3.68c1.81.26,3.91-.28,4.69-1.2l11.05-13.17c.28-.34.35-.68.23-.99Z"
        style={{
          fill: "#fff",
          stroke: "#fff",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: "1.88px",
        }}
      />
      <path
        d="m29.65,18.43l-19.95-2.83c-1.4-.2-2.05-.93-1.45-1.64L16.75,3.82c.6-.71,2.21-1.12,3.61-.93l19.95,2.83c1.4.2,2.05.93,1.45,1.64l-8.5,10.13c-.6.71-2.21,1.12-3.61.93Z"
        style={{ stroke: "#fff", strokeMiterlimit: 10, strokeWidth: "1.88px" }}
      />
      <path
        d="m22.02,9.51l-3.53,4.2-3.81-.54,5.97-7.11,3.58.51,1.67,3.06,5.87-1.98,3.54.5-5.96,7.1-3.81-.54,3.54-4.23-5.17,1.69-.45-.06-1.46-2.6Z"
        style={{ fill: "#fff" }}
      />
    </svg>
  );
};
