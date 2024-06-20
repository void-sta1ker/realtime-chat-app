import { useRef, useState } from "react";
import {
  ActionIcon,
  FileButton,
  Group,
  ScrollArea,
  Stack,
  Textarea,
} from "@mantine/core";
import { useInputState } from "@mantine/hooks";
import UserProfile from "../components/user-profile";
import ArrowLeftIcon from "../icons/arrow-left-icon";
import useChatStore from "../hooks/use-chat-store";
import EmptyArea from "../components/empty-area";
import MicIcon from "../icons/mic-icon";
import PaperClipIcon from "../icons/paper-clip-icon";
import SendIcon from "../icons/send-icon";
import ChatHistory from "../components/chat-history";
import type { Message } from "../types";

export default function ChatArea(): React.ReactElement {
  const { activeChat, setActiveChat } = useChatStore();

  const [text, setText] = useInputState("");

  const [files, setFiles] = useState<File[]>([]);

  const scrollAreaRef = useRef<HTMLDivElement>(null);

  console.log(files);

  if (activeChat === "") {
    return <EmptyArea />;
  }

  const onSend = (): void => {
    setText("");

    if (
      typeof scrollAreaRef.current !== "undefined" &&
      scrollAreaRef.current !== null
    ) {
      const scrollAreaViewport = scrollAreaRef.current
        .firstElementChild as HTMLDivElement;
      scrollAreaViewport.scrollTop = scrollAreaViewport.scrollHeight;
    }
  };

  const onKeyDown = (e: React.KeyboardEvent): void => {
    if (e.key === "Enter") {
      e.preventDefault();
      onSend();
    }
  };

  return (
    <Stack bg="gray.0" className="flex-1 " gap={0}>
      <Group bg="white" className="border-b" px="8px" pt="12px" pb="11px">
        <ActionIcon
          variant="white"
          c="gray.9"
          onClick={() => {
            setActiveChat("");
          }}
        >
          <ArrowLeftIcon />
        </ActionIcon>

        <UserProfile fullName="Rosalee Melvin" subtitle="Online" />
      </Group>

      <ScrollArea h="100%" px="16px" ref={scrollAreaRef}>
        <ChatHistory data={chatHistory} />
      </ScrollArea>

      <Group justify="space-between" align="end" gap={0} className="border-t">
        <Group className="flex-1" align="end" gap={0}>
          <FileButton
            onChange={setFiles}
            accept="image/png,image/jpeg"
            multiple
          >
            {(fileBtnProps) => (
              <ActionIcon variant="white" c="gray.6" m={10} {...fileBtnProps}>
                <PaperClipIcon />
              </ActionIcon>
            )}
          </FileButton>

          <Textarea
            placeholder="Type something..."
            className="flex-1"
            classNames={{
              input: "border-none overflow-hidden px-0",
            }}
            my={4}
            minRows={1}
            maxRows={4}
            autosize
            value={text}
            onChange={setText}
            onKeyDown={onKeyDown}
          />
        </Group>

        {text !== "" ? (
          <ActionIcon variant="white" c="blue" m={10} onClick={onSend}>
            <SendIcon />
          </ActionIcon>
        ) : (
          <ActionIcon variant="white" c="gray.6" m={10}>
            <MicIcon />
          </ActionIcon>
        )}
      </Group>
    </Stack>
  );
}

const chatHistory = [
  {
    id: "1",
    userId: "2",
    type: "text",
    value: "Hi, how can I help you?",
    createdAt: new Date("2024-02-01").toISOString(),
  },
  {
    id: "2",
    userId: "1",
    type: "text",
    value: "I need some help with my taxes. Can you help me?",
    createdAt: new Date("2024-02-21").toISOString(),
  },
  {
    id: "3",
    userId: "2",
    type: "text",
    value: "Sure, what documents do you need?",
    createdAt: new Date().toISOString(),
  },
  {
    id: "4",
    userId: "1",
    type: "text",
    value: "I need a copy of my tax return.",
    createdAt: new Date().toISOString(),
  },
  {
    id: "5",
    userId: "2",
    type: "image",
    value: "https://picsum.photos/id/237/200/300",
    createdAt: new Date().toISOString(),
  },
  {
    id: "6",
    userId: "1",
    type: "audio",
    value: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
    createdAt: new Date().toISOString(),
  },
  {
    id: "7",
    userId: "2",
    type: "video",
    value: "https://www.youtube.com/watch?v=JGz7Ou0Nwo8",
    createdAt: new Date().toISOString(),
  },
  {
    id: "8",
    userId: "1",
    type: "file",
    value:
      "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
    createdAt: new Date().toISOString(),
  },
] as Message[];
