import {
  ActionIcon,
  Flex,
  ScrollArea,
  Stack,
  TextInput,
  Title,
} from "@mantine/core";
import { useDebouncedValue, useInputState } from "@mantine/hooks";
import clsx from "clsx";
import SearchIcon from "../icons/search-icon";
import CloseIcon from "../icons/close-icon";
import Conversation from "../components/conversation";

interface Props {
  className?: string;
}

export default function Conversations(props: Props): React.ReactElement {
  const { className = "" } = props;

  const [search, setSearch] = useInputState("");

  const [debouncedSearch] = useDebouncedValue(search, 500);

  console.log(debouncedSearch);

  return (
    <Stack w={320} className={clsx("border-r", className)} gap={0}>
      <Flex direction="column" p={24} gap={24}>
        <Title>Chat</Title>
        <TextInput
          placeholder="Search"
          leftSection={<SearchIcon />}
          rightSection={
            search !== "" ? (
              <ActionIcon variant="transparent" c="gray.6">
                <CloseIcon size={20} />
              </ActionIcon>
            ) : null
          }
          value={search}
          onChange={setSearch}
        />
      </Flex>

      <ScrollArea h="100%">
        <Conversation id="1" />
        <Conversation id="2" />
        <Conversation id="3" />
      </ScrollArea>
    </Stack>
  );
}
