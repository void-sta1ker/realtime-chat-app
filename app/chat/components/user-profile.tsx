import { Avatar } from "@mantine/core";
import clsx from "clsx";
import UserIcon from "../icons/user-icon";

interface Props {
  img?: string;
  fullName: string;
  subtitle: string;
  action?: React.ReactElement;
  className?: string;
  mainClassName?: string;
  fullNameClassName?: string;
  subtitleClassName?: string;
  long?: boolean;
  onClick?: () => void;
}

export default function UserProfile(props: Props): React.ReactElement {
  const {
    img = "",
    fullName,
    subtitle,
    action = <span />,
    className = "",
    mainClassName = "",
    fullNameClassName = "",
    subtitleClassName = "",
    long = true,
    onClick = () => {
      //
    },
  } = props;

  return (
    <div
      className={clsx(
        "flex items-center",
        (long as boolean) ? "justify-between" : "",
        className
      )}
      onClick={onClick}
      aria-hidden
    >
      <div className={clsx("flex items-center gap-2", mainClassName)}>
        <Avatar src={img} alt="avatar" color="blue">
          <UserIcon />
        </Avatar>

        {(long as boolean) ? (
          <div className="flex flex-col">
            <span
              className={clsx(
                "text-gray-900 text-sm font-semibold",
                fullNameClassName
              )}
            >
              {fullName}
            </span>
            <span className={clsx("text-gray-500 text-sm", subtitleClassName)}>
              {subtitle}
            </span>
          </div>
        ) : null}
      </div>

      {(long as boolean) ? action : null}
    </div>
  );
}
