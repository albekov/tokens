import { Grid, Textarea } from "@mantine/core";
import { useDebounce } from "@uidotdev/usehooks";
import { type ChangeEvent, useState } from "react";
import { Layout } from "./components/Layout";
import { DEBOUNCE_DELAY } from "./constants";
import { TextStatistics } from "./features/text-analyzer/components/TextStatistics";
import { useTextAnalysis } from "./features/text-analyzer/hooks/useTextAnalysis";

function App() {
  const [text, setText] = useState<string>("");

  const handleChangeText = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.currentTarget.value);
  };

  const debouncedText = useDebounce(text, DEBOUNCE_DELAY);

  const textData = useTextAnalysis(debouncedText);

  return (
    <Layout>
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
        {textData && <TextStatistics textData={textData} />}
      </Grid.Col>
    </Layout>
  );
}

export default App;
