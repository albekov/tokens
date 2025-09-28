import { Grid } from "@mantine/core";
import type { TextAnalysisResult } from "../../../types";
import { StatisticCard } from "./StatisticCard";

interface TextStatisticsProps {
  textData: TextAnalysisResult;
}

export function TextStatistics({ textData }: TextStatisticsProps) {
  return (
    <Grid gutter="md">
      {textData.map((stat) => (
        <StatisticCard key={stat.label} label={stat.label} value={stat.value} />
      ))}
    </Grid>
  );
}
