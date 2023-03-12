import { FC } from "react";

interface MKeyFlippedLargeProps {
  className?: string;
  width?: string;
  height?: string;
}

export const MKeyFlipped: FC<MKeyFlippedLargeProps> = ({
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
      <path d="m100.42,15.38c-.07-1.37-.56-2.7-1.42-3.85-1.52-2.03-4.08-3.35-7.38-3.82L38.6.18c-4.59-.65-11,.4-14.23,4.24L1.78,31.35c-1.62,1.94-2.17,4.38-1.49,6.65.04.15.09.29.14.44l10.35,28.2s.02.08.03.11c.03.07.07.13.1.2.08.18.16.36.25.53,1.21,2.28,3.72,3.84,7.04,4.31l40.81,5.8c.68.1,1.41.15,2.16.15,3.51,0,7.58-1.1,9.86-3.82l17.39-20.73c.62-.74,1.07-1.57,1.34-2.43l10.31-32.76s0-.02,0-.03c0,0,0-.02,0-.03l.14-.44c.22-.7.28-1.42.19-2.12Zm-68.28-4.29c.61-.44,2.83-1.08,5.02-.77l52.25,7.42-7.45,23.67-40.52-5.76c-3.84-.54-9.25.37-12.02,3.67l-12.35,14.73-6.38-17.39,21.46-25.58Z" />
      <path
        d="m97.23,15.67c-.01-.79-.28-1.54-.79-2.22-1-1.33-2.83-2.22-5.28-2.57L38.15,3.35c-4.44-.63-9.3.71-11.33,3.13L4.23,33.41c-.95,1.13-1.25,2.47-.86,3.72.02.07.04.13.06.2l10.34,28.15s.02.08.03.11c.6,1.56,2.37,2.66,4.86,3.02l40.81,5.8c.54.08,1.11.11,1.7.11,2.74,0,5.87-.83,7.42-2.67l17.39-20.73c.36-.42.6-.88.75-1.36l10.3-32.73h0s0-.02.01-.03c0,0,0-.01,0-.02l.14-.44c.09-.29.11-.58.06-.87Z"
        style={{ fill: "#fff" }}
      />
      <path d="m92.94,15.19l-55.98-7.95c-.49-.07-.99-.1-1.49-.1-2.82,0-4.8.96-5.15,1.36L12.14,30.18h0l-4.25,5.06c.08.01.16.03.25.04l55.98,7.95c.49.07.99.1,1.49.1,2.82,0,4.8-.96,5.15-1.36l22.43-26.74c-.08-.01-.16-.03-.25-.04Z" />
      <path d="m53.79,22.76c-1.29-.26-2.63-.39-3.98-.39-4.05,0-7.02,1.14-7.87,2.27-.15.2-.13.25-.11.31.26.7,1.98,2.06,5.46,2.76,1.29.26,2.63.39,3.98.39,4.05,0,7.02-1.14,7.87-2.27.15-.2.13-.25.11-.31-.26-.7-1.98-2.06-5.46-2.76Z" />
      <path
        d="m49.02,24.64l-1.8,2.15-1.94-.28,3.04-3.63,1.83.26.85,1.56,3-1.01,1.81.26-3.04,3.62-1.94-.28,1.81-2.16-2.64.86-.23-.03-.74-1.33Z"
        style={{ fill: "#fff" }}
      />
      <polygon
        points="37.02 35.5 33.44 6.34 32.17 6.5 35.71 35.31 37.02 35.5"
        style={{ fill: "#fff" }}
      />
      <polygon
        points="36.2 39.26 36.4 40.93 37.67 40.77 37.51 39.45 36.2 39.26"
        style={{ fill: "#fff" }}
      />
      <path
        d="m54.3,20.24c-1.49-.3-3.01-.44-4.49-.44-4.37,0-8.37,1.23-9.92,3.29-.54.71-.72,1.45-.61,2.18v10.54l22.52,3.2v-13.12c.29-2.34-2.66-4.68-7.51-5.65Zm-4.49,2.12c1.36,0,2.7.13,3.98.39,3.48.7,5.2,2.06,5.46,2.76,0,.01,0,.02.01.04,0,.02,0,.05,0,.09,0,0,0,.02,0,.02-.02.04-.05.09-.1.17-.85,1.13-3.83,2.27-7.87,2.27-1.36,0-2.7-.13-3.98-.39-3.48-.7-5.2-2.06-5.46-2.76,0-.02-.01-.04-.01-.06,0,0,0-.01,0-.02,0-.03.01-.06.04-.1h0s.05-.07.08-.13c.85-1.13,3.83-2.27,7.87-2.27Z"
        style={{ fill: "#fff" }}
      />
    </svg>
  );
};
