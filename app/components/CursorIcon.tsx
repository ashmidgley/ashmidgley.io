import { FC } from "react";

interface CursorIconProps {
  width?: string;
  height?: string;
  fill?: string;
}

export const CursorIcon: FC<CursorIconProps> = ({
  width = "23.54",
  height = "24.24",
  fill = "#00fd35",
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    viewBox={`0 0 ${width} ${height}`}
  >
    <polygon
      points="0 0 9.43 24.24 11.82 12.17 23.54 9.71 0 0"
      style={{ fill: fill }}
    />
  </svg>
);
