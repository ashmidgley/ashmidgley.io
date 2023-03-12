import { FC } from "react";

interface AKeyProps {
  className?: string;
  width?: string;
  height?: string;
}

export const AKey: FC<AKeyProps> = ({
  className,
  width = "50",
  height = "37.92",
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
        d="m47,20.03h0s-5.08-13.84-5.08-13.84l-8.76,11.03-14.19-2.02c-1.63-.23-2.04-1.59-2.96-.84l-7.94-.5L3.02,29.91s0,.02,0,.03l-.07.21h.02c-.1.71.71,1.35,2.15,1.56l25.92,3.68c1.81.26,3.91-.28,4.69-1.2l11.05-13.17c.28-.34.35-.68.23-.99Z"
        style={{
          fill: "#fff",
          stroke: "#fff",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: "1.88px",
        }}
      />
      <path
        d="m29.65,18.05l-19.95-2.83c-1.4-.2-2.05-.93-1.45-1.64L16.75,3.44c.6-.71,2.21-1.12,3.61-.93l19.95,2.83c1.4.2,2.05.93,1.45,1.64l-8.5,10.13c-.6.71-2.21,1.12-3.61.93Z"
        style={{ stroke: "#fff", strokeMiterlimit: 10, strokeWidth: "1.88px" }}
      />
      <path
        d="m25.82,12.68l-5.19-.74-1.92,1.17-4.05-.58,11.59-6.65,4.15.59-.8,8.18-4.01-.57.23-1.41Zm.67-4.33l-3.51,2.15,3.11.44.4-2.59Z"
        style={{ fill: "#fff" }}
      />
    </svg>
  );
};
