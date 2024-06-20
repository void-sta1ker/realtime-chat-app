import { Center, Stack, Text } from "@mantine/core";
import Ripples from "react-ripples";
import clsx from "clsx";
import UserProfile from "../components/user-profile";
import useChatStore from "../hooks/use-chat-store";

interface Props {
  id: string;
}

export default function Conversation(props: Props): React.ReactElement {
  const { id } = props;

  const { activeChat, setActiveChat } = useChatStore();

  return (
    <Ripples placeholder={null}>
      <UserProfile
        fullName="Loki Bright"
        subtitle="Hi there can you help me with taxes?"
        className={clsx(
          "p-4 max-w-[319px] cursor-pointer border-b",
          activeChat === id ? "bg-gray-100" : ""
        )}
        subtitleClassName="w-[200px] truncate"
        action={
          <Stack align="end" gap={8}>
            <Center w={22} h={22} bg="blue.1" className="rounded-full">
              <Text size="12px" fw={500} c="blue">
                1
              </Text>
            </Center>

            <Text c="gray.6" size="10px">
              00:08
            </Text>
          </Stack>
        }
        onClick={() => {
          setActiveChat(id);
        }}
      />
    </Ripples>
  );
}
