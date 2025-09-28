import { useMemo } from "react";
// @ts-expect-error
import readability from "text-readability";
import model from "wink-eng-lite-web-model";
import winkNLP from "wink-nlp";
import {
  WORDS_PER_MINUTE_READING,
  WORDS_PER_MINUTE_SPEAKING,
} from "../../../constants";
import { enc } from "../../../lib/tokenizer";
import type { TextAnalysisResult } from "../../../types";
import { formatTime } from "../../../utils";

const nlp = winkNLP(model);

export function useTextAnalysis(text: string): TextAnalysisResult | undefined {
  return useMemo(() => {
    if (!text.trim()) return undefined;

    const doc = nlp.readDoc(text);
    const tokens = doc.tokens();
    const wordCount = tokens.length();
    const sentenceCount = doc.sentences().length();

    const fleschReadingEaseScore = readability.fleschReadingEase(text);
    const fleschKincaidGradeScore = readability.fleschKincaidGrade(text);
    const gunningFogScore = readability.gunningFog(text);

    // Time-based metrics
    const readingTimeMinutes = wordCount / WORDS_PER_MINUTE_READING;
    const speakingTimeMinutes = wordCount / WORDS_PER_MINUTE_SPEAKING;
    const readingTime = formatTime(readingTimeMinutes);
    const speakingTime = formatTime(speakingTimeMinutes);

    // Token counting
    const encodedTokens = enc.encode(text);
    const tokensCount = encodedTokens.length;
    const uniqueTokensCount = new Set(encodedTokens).size;

    return [
      { label: "Characters", value: text.length },
      { label: "Tokens", value: tokensCount },
      { label: "Words", value: wordCount },
      { label: "Sentences", value: sentenceCount },
      { label: "Reading Time", value: `~${readingTime}` },
      { label: "Speaking Time", value: `~${speakingTime}` },
      {
        label: "Flesch Reading Ease",
        value: fleschReadingEaseScore.toFixed(1),
      },
      {
        label: "Flesch-Kincaid Grade",
        value: fleschKincaidGradeScore.toFixed(1),
      },
      { label: "Gunning Fog Index", value: gunningFogScore.toFixed(1) },
      { label: "Unique Tokens", value: uniqueTokensCount },
    ];
  }, [text]);
}
