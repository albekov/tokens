import { Grid } from "@mantine/core";
import type { TextAnalysisResult } from "@/types";
import {
  getFleschKincaidGradeInterpretation,
  getFleschReadingEaseInterpretation,
  getGunningFogInterpretation,
} from "@/utils";
import { BaseCard } from "./BaseCard";

interface TextStatisticsProps {
  textData: TextAnalysisResult;
}

export function TextStatistics({ textData }: TextStatisticsProps) {
  return (
    <Grid gutter="md">
      <BaseCard title="Reading Time" mainText={textData.readingTime} />
      <BaseCard
        title="Tokens"
        mainText={textData.tokens}
        secondaryText={`${textData.uniqueTokens} unique`}
      />
      <BaseCard
        title="Sentences / Words / Characters"
        mainText={`${textData.sentences} / ${textData.words} / ${textData.characters}`}
      />
      <BaseCard
        title="Flesch Reading Ease"
        mainText={textData.fleschReadingEase.toFixed(1)}
        secondaryText={getFleschReadingEaseInterpretation(
          textData.fleschReadingEase,
        )}
      />
      <BaseCard
        title="Flesch-Kincaid Grade"
        mainText={textData.fleschKincaidGrade.toFixed(1)}
        secondaryText={getFleschKincaidGradeInterpretation(
          textData.fleschKincaidGrade,
        )}
      />
      <BaseCard
        title="Gunning Fog Index"
        mainText={textData.gunningFog.toFixed(1)}
        secondaryText={getGunningFogInterpretation(textData.gunningFog)}
      />
    </Grid>
  );
}
