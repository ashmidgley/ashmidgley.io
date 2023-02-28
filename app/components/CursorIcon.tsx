import { FC } from "react";

interface CursorIconProps {
  width?: number;
  height?: number;
  fill?: string;
}

export const CursorIcon: FC<CursorIconProps> = ({
  width = "285.97",
  height = "294.57",
  fill = "#00fd35",
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    viewBox={`0 0 ${width} ${height}`}
  >
    <polygon
      className={`fill-[${fill}]`}
      points="0 0 114.54 294.57 143.58 147.91 285.97 117.98 0 0"
    />
  </svg>
);
