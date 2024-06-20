import { rem } from "@mantine/core";
import type { MtIconProps } from "../types";

export default function PaperClipIcon({
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
      <g id="paperclip">
        <path
          id="Icon"
          d="M21.44 11.0499L12.25 20.2399C11.1242 21.3658 9.5972 21.9983 8.00502 21.9983C6.41283 21.9983 4.88586 21.3658 3.76002 20.2399C2.63417 19.1141 2.00168 17.5871 2.00168 15.9949C2.00168 14.4027 2.63417 12.8758 3.76002 11.7499L12.95 2.55992C13.7006 1.80936 14.7186 1.3877 15.78 1.3877C16.8415 1.3877 17.8595 1.80936 18.61 2.55992C19.3606 3.31048 19.7822 4.32846 19.7822 5.38992C19.7822 6.45138 19.3606 7.46936 18.61 8.21992L9.41002 17.4099C9.03473 17.7852 8.52574 17.996 7.99502 17.996C7.46429 17.996 6.9553 17.7852 6.58002 17.4099C6.20473 17.0346 5.9939 16.5256 5.9939 15.9949C5.9939 15.4642 6.20473 14.9552 6.58002 14.5799L15.07 6.09992"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  );
}
