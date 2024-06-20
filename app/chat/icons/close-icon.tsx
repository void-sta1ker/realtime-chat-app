import { rem } from "@mantine/core";
import type { MtIconProps } from "../types";

export default function CloseIcon({
  size,
  style,
  ...others
}: MtIconProps): React.ReactElement {
  return (
    <svg
      width="24"
      height="25"
      viewBox="0 0 24 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ width: rem(size), height: rem(size), ...style }}
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...others}
    >
      <g id="x">
        <path
          id="Icon"
          d="M18 6.5L6 18.5M6 6.5L18 18.5"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  );
}
