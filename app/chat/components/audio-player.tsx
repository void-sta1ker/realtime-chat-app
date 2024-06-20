import { useRef, useState } from "react";
import {
  ActionIcon,
  Center,
  Group,
  Image,
  Slider,
  Stack,
  Text,
} from "@mantine/core";
import { useInputState } from "@mantine/hooks";
import pauseIcon from "../assets/pause.svg";
import playIcon from "../assets/play.svg";

interface Props {
  src: string;
}

export default function AudioPlayer(props: Props): React.ReactElement {
  const { src } = props;

  const audioRef = useRef<HTMLAudioElement>(null);

  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  const [sliderValue, setSliderValue] = useInputState(0);

  const togglePlay = (): void => {
    if (isPlaying) {
      audioRef.current?.pause();
    } else {
      void audioRef.current?.play();
    }

    setIsPlaying((prev) => !prev);
  };

  const handleTimeUpdate = (): void => {
    if (!isDragging) {
      const currTime = audioRef.current?.currentTime ?? 0;
      setCurrentTime(currTime);
      setSliderValue(Math.floor(currTime));
    }
  };

  const handleSeek = (val: number): void => {
    setIsDragging(true);
    setSliderValue(val);
    setCurrentTime(val);
  };

  const handleSeekEnd = (val: number): void => {
    setIsDragging(false);

    if (typeof audioRef.current !== "undefined" && audioRef.current !== null) {
      audioRef.current.currentTime = val;
    }
  };

  return (
    <Group>
      <audio ref={audioRef} src={src} onTimeUpdate={handleTimeUpdate} />

      <Group>
        <ActionIcon
          onClick={togglePlay}
          variant="white"
          className="rounded-full"
        >
          {isPlaying ? (
            <Center bg="white" className="rounded-full">
              <Image src={pauseIcon.src} alt="pause" />
            </Center>
          ) : (
            <Center bg="white" className="rounded-full">
              <Image src={playIcon.src} alt="play" />
            </Center>
          )}
        </ActionIcon>

        <Stack gap={4}>
          <Slider
            value={sliderValue}
            onChange={handleSeek}
            onChangeEnd={handleSeekEnd}
            min={0}
            max={Math.floor(audioRef.current?.duration ?? 0)}
            label={null}
            color="white"
            w="214px"
          />

          <Text c="#fff" size="12px">
            {formatTime(currentTime)}
          </Text>
        </Stack>
      </Group>
    </Group>
  );
}

const formatTime = (timeInSeconds: number): string => {
  const minutes = Math.floor(timeInSeconds / 60);
  const seconds = Math.floor(timeInSeconds % 60);
  return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
};
