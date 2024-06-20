import { Box, Image, Paper, Stack, Text } from "@mantine/core";
import clsx from "clsx";
import dayjs from "dayjs";
import AudioPlayer from "./audio-player";
import type { Message } from "../types";

interface Props {
  message: Message;
}

export default function ChatMessage(props: Props): React.ReactElement {
  const { message } = props;

  const currentUser = "1";

  const isCurrentUser = currentUser === message.userId;

  return (
    <Paper
      component={Stack}
      shadow={message.type === "image" ? "none" : "sm"}
      mt="sm"
      w="fit-content"
      withBorder={message.type !== "image"}
      radius={12}
      px={8}
      py={10}
      maw={400}
      miw={85}
      gap={8}
      bg={isCurrentUser && message.type !== "image" ? "blue" : "transparent"}
      className={clsx(
        isCurrentUser ? "rounded-ee-none" : "rounded-es-none",
        isCurrentUser ? "self-end" : ""
      )}
    >
      {message.type === "image" && (
        <Box h={300} w={200}>
          <Image
            src={message.value}
            alt="user media"
            radius={12}
            h={300}
            w={200}
            fallbackSrc="https://placehold.co/200x300?text=Error"
          />
        </Box>
      )}

      {message.type === "text" && (
        <Text size="14px" c={isCurrentUser ? "#fff" : "gray.9"}>
          {message.value}
        </Text>
      )}

      {message.type === "audio" && <AudioPlayer src={message.value} />}

      {message.type === "video" && (
        <Text size="14px" c={isCurrentUser ? "#fff" : "gray.9"}>
          Video
        </Text>
      )}

      {message.type === "file" && (
        <Text size="14px" c={isCurrentUser ? "#fff" : "gray.9"}>
          File
        </Text>
      )}

      <Text
        c={isCurrentUser ? "#fff" : "gray.6"}
        size="12px"
        className="self-end"
      >
        {dayjs(message.createdAt).format("h:mm A")}
      </Text>
    </Paper>
  );
}
