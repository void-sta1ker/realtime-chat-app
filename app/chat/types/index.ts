interface Conversation {
  id: string;
}

interface Message {
  id: string;
  userId: string;
  type: "text" | "audio" | "image" | "video" | "file";
  value: string;
  createdAt: string;
}

interface MtIconProps extends React.ComponentPropsWithoutRef<"svg"> {
  size?: number | string;
}

export type { Conversation, Message, MtIconProps };
