import { Box, Container, Grid, Text, Textarea } from "@mantine/core";
import { useDebounce } from "@uidotdev/usehooks";
import { Tiktoken } from "js-tiktoken/lite";
import o200k_base from "js-tiktoken/ranks/o200k_base";
import { type ChangeEvent, useMemo, useState } from "react";

const DEBOUNCE_DELAY = 1000;

const enc = new Tiktoken(o200k_base);

function App() {
  const [text, setText] = useState<string>("");

  const handleChangeText = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.currentTarget.value);
  };

  const debouncedText = useDebounce(text, DEBOUNCE_DELAY);

  const textData = useMemo(() => {
    if (!debouncedText) return undefined;
    const tokens = enc.encode(debouncedText);
    const tokensCount = tokens.length;
    const uniqueTokensCount = new Set(tokens).size;
    return {
      length: debouncedText.length,
      tokensCount,
      uniqueTokensCount,
    };
  }, [debouncedText]);

  return (
    <Container style={{ padding: "1rem" }}>
      <Grid>
        <Grid.Col span={{ base: 12, md: 9 }}>
          <Textarea
            autosize
            minRows={10}
            value={text}
            onChange={handleChangeText}
            placeholder="Enter text here..."
          />
        </Grid.Col>

        <Grid.Col span={{ base: 12, md: 3 }}>
          {textData && (
            <>
              <Box mb="sm">
                <Text span fw={700}>
                  Length:
                </Text>{" "}
                <Text span>{textData.length}</Text>
              </Box>
              <Box mb="sm">
                <Text span fw={700}>
                  Tokens:
                </Text>{" "}
                <Text span>{textData.tokensCount}</Text>
              </Box>
              <Box mb="sm">
                <Text span fw={700}>
                  Unique Tokens:
                </Text>{" "}
                <Text span>{textData.uniqueTokensCount}</Text>
              </Box>
            </>
          )}
        </Grid.Col>
      </Grid>
    </Container>
  );
}

export default App;
