export type Statistic = { label: string; value: string | number };

export type TextAnalysisResult = {
  characters: number;
  tokens: number;
  words: number;
  sentences: number;
  readingTime: string;
  fleschReadingEase: number;
  fleschKincaidGrade: number;
  gunningFog: number;
  uniqueTokens: number;
};
