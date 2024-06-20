import { rem } from "@mantine/core";
import type { MtIconProps } from "../types";

export default function SendIcon({
  size,
  style,
  ...others
}: MtIconProps): React.ReactElement {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ width: rem(size), height: rem(size), ...style }}
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...others}
    >
      <g id="send">
        <path
          id="Icon"
          d="M22 2L11 13M22 2L15 22L11 13M22 2L2 9L11 13"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  );
}
