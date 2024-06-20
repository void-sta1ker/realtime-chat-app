import { Center, Image, Stack, Text } from "@mantine/core";
import mouseIcon from "../assets/mouse-pointer-click.svg";

export default function EmptyArea(): React.ReactElement {
  return (
    <Center className="flex-1">
      <Stack gap={24} align="center">
        <Center w={64} h={64} bg="blue.1" className="rounded-full">
          <Image src={mouseIcon.src} alt="mouse icon" />
        </Center>

        <Text fw={500} c="gray.9">
          Select a chat to start messaging
        </Text>
      </Stack>
    </Center>
  );
}
