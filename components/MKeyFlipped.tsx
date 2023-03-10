import { FC } from "react";

interface MKeyFlippedProps {
  className?: string;
  width?: string;
  height?: string;
}

export const MKeyFlipped: FC<MKeyFlippedProps> = ({
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
      <path d="m49.54,7.86c-.04-.67-.27-1.32-.69-1.88-.74-.99-1.99-1.64-3.61-1.87L19.31.43c-2.24-.32-5.38.19-6.96,2.07L1.31,15.67c-.79.95-1.06,2.14-.73,3.25.02.07.04.14.07.21l5.06,13.79s0,.04.02.05c.01.03.03.07.05.1.04.09.08.17.12.26.59,1.11,1.82,1.88,3.44,2.11l19.95,2.83c.33.05.69.07,1.06.07,1.72,0,3.7-.54,4.82-1.87l8.5-10.13c.3-.36.52-.77.66-1.19l5.04-16.02s0-.01,0-.01c0,0,0,0,0-.01l.07-.21c.11-.34.14-.7.1-1.04Zm-33.38-2.1c.3-.22,1.38-.53,2.45-.38l25.55,3.63-3.64,11.57-19.81-2.81c-1.88-.27-4.52.18-5.88,1.79l-6.04,7.2-3.12-8.5,10.49-12.5Z" />
      <path
        d="m47.98,8.01c0-.38-.14-.75-.39-1.09-.49-.65-1.38-1.09-2.58-1.26L19.09,1.98c-2.17-.31-4.55.35-5.54,1.53L2.51,16.68c-.46.55-.61,1.21-.42,1.82,0,.03.02.07.03.1l5.05,13.76s.01.04.02.06c.29.76,1.16,1.3,2.37,1.48l19.95,2.83c.26.04.54.06.83.06,1.34,0,2.87-.41,3.63-1.31l8.5-10.13c.17-.21.29-.43.37-.66l5.04-16h0s0-.01,0-.02c0,0,0,0,0-.01l.07-.21c.04-.14.05-.29.03-.42Z"
        style={{ fill: "#fff" }}
      />
      <path d="m45.88,7.77l-27.37-3.89c-.24-.03-.48-.05-.73-.05-1.38,0-2.35.47-2.52.67L6.38,15.09h0l-2.08,2.47s.08.01.12.02l27.37,3.89c.24.03.48.05.73.05,1.38,0,2.35-.47,2.52-.67l10.97-13.07s-.08-.01-.12-.02Z" />
      <path d="m26.74,11.47c-.63-.13-1.28-.19-1.95-.19-1.98,0-3.43.56-3.85,1.11-.07.1-.07.12-.05.15.13.34.97,1.01,2.67,1.35.63.13,1.28.19,1.95.19,1.98,0,3.43-.56,3.85-1.11.07-.1.07-.12.05-.15-.13-.34-.97-1.01-2.67-1.35Z" />
      <path
        d="m24.41,12.39l-.88,1.05-.95-.13,1.49-1.77.89.13.42.76,1.46-.49.88.13-1.49,1.77-.95-.13.88-1.05-1.29.42-.11-.02-.36-.65Z"
        style={{ fill: "#fff" }}
      />
      <polygon
        points="18.54 17.7 16.79 3.44 16.17 3.52 17.9 17.61 18.54 17.7"
        style={{ fill: "#fff" }}
      />
      <polygon
        points="18.14 19.54 18.24 20.35 18.86 20.27 18.78 19.63 18.14 19.54"
        style={{ fill: "#fff" }}
      />
      <path
        d="m26.99,10.24c-.73-.15-1.47-.21-2.19-.21-2.14,0-4.09.6-4.85,1.61-.26.35-.35.71-.3,1.07v5.15l11.01,1.56v-6.42c.14-1.14-1.3-2.29-3.67-2.76Zm-2.19,1.04c.66,0,1.32.06,1.95.19,1.7.34,2.54,1.01,2.67,1.35,0,0,0,.01,0,.02,0,.01,0,.02,0,.04,0,0,0,0,0,.01,0,.02-.02.04-.05.08-.42.55-1.87,1.11-3.85,1.11-.66,0-1.32-.06-1.95-.19-1.7-.34-2.54-1.01-2.67-1.35,0,0,0-.02,0-.03,0,0,0,0,0-.01,0-.01,0-.03.02-.05h0s.02-.04.04-.06c.42-.55,1.87-1.11,3.85-1.11Z"
        style={{ fill: "#fff" }}
      />
    </svg>
  );
};
