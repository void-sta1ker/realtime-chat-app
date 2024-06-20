import { Fragment } from "react";
import { Stack, Text } from "@mantine/core";

import dayjs from "dayjs";
import isToday from "dayjs/plugin/isToday";
import isYesterday from "dayjs/plugin/isYesterday";

dayjs.extend(isToday);
dayjs.extend(isYesterday);

import ChatMessage from "./chat-message";
import type { Message } from "../types";

interface Props {
  data: Message[];
}

export default function ChatHistory(props: Props): React.ReactElement {
  const { data } = props;

  return (
    <Stack gap={8}>
      {data.map((message, index) => {
        const prev = data[index - 1]?.createdAt ?? "";
        const prevDate = new Date(prev).toDateString();
        const date = new Date(message.createdAt).toDateString();

        const day = dayjs(message.createdAt);
        const isToday = day.isToday();
        const isYesterday = day.isYesterday();
        const isNotBoth = !isToday && !isYesterday;

        return (
          <Fragment key={message.id}>
            {(date !== prevDate || index === 0) && (
              <Text
                size="12px"
                c="gray.9"
                fw={500}
                px={8}
                py={6}
                mt={8}
                bg="gray.3"
                className="self-center rounded-[200px]"
              >
                {isToday ? "Today" : null}
                {isYesterday ? "Yesterday" : null}
                {isNotBoth ? day.format("MMM D, YYYY") : null}
              </Text>
            )}

            <ChatMessage message={message} />
          </Fragment>
        );
      })}
    </Stack>
  );
}
