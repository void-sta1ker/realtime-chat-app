"use client";
import { Flex, Paper } from "@mantine/core";
import Conversations from "./templates/conversations";
import ChatArea from "./templates/chat-area";

export default function Chat(): React.ReactElement {
  return (
    <Paper shadow="sm" radius="sm" withBorder>
      <Flex h="calc(100vh - 64px - 2px)">
        <Conversations />
        <ChatArea />
      </Flex>
    </Paper>
  );
}
