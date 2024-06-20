import { rem } from "@mantine/core";
import type { MtIconProps } from "../types";

export default function ArrowLeftIcon({
  size,
  style,
  ...others
}: MtIconProps): React.ReactElement {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ width: rem(size), height: rem(size), ...style }}
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...others}
    >
      <g id="arrow-left">
        <path
          id="Icon"
          d="M15.8334 10H4.16675M4.16675 10L10.0001 15.8333M4.16675 10L10.0001 4.16667"
          stroke="currentColor"
          strokeWidth="1.67"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  );
}
