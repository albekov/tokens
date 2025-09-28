import { Container, Grid, Textarea } from "@mantine/core";
import { useDebounce } from "@uidotdev/usehooks";
import { type ChangeEvent, useState } from "react";
import { TextStatistics } from "@/components/TextStatistics";
import { DEBOUNCE_DELAY } from "@/constants";
import { useTextAnalysis } from "@/hooks";

function App() {
  const [text, setText] = useState<string>("");

  const handleChangeText = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.currentTarget.value);
  };

  const debouncedText = useDebounce(text, DEBOUNCE_DELAY);

  const textData = useTextAnalysis(debouncedText);

  return (
    <Container style={{ padding: "1rem" }} strategy="grid" size="lg">
      <Grid>
        <Grid.Col span={{ base: 12, md: 9 }}>
          <Textarea
            autosize
            minRows={10}
            maxRows={40}
            value={text}
            onChange={handleChangeText}
            placeholder="Enter text here..."
          />
        </Grid.Col>

        <Grid.Col span={{ base: 12, md: 3 }}>
          {textData && <TextStatistics textData={textData} />}
        </Grid.Col>
      </Grid>
    </Container>
  );
}

export default App;
