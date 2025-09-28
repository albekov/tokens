import { useMemo } from "react";
// @ts-expect-error
import readability from "text-readability";
import model from "wink-eng-lite-web-model";
import winkNLP from "wink-nlp";
import { WORDS_PER_MINUTE_READING } from "../../../constants";
import { enc } from "../../../lib/tokenizer";
import type { TextAnalysisResult } from "../../../types";
import { formatTime } from "../../../utils";

const nlp = winkNLP(model);
const its = nlp.its;

export function useTextAnalysis(text: string): TextAnalysisResult | undefined {
  return useMemo(() => {
    if (!text.trim()) return undefined;

    const doc = nlp.readDoc(text);
    const wordCount = doc
      .tokens()
      .filter(
        (t) => t.out(its.type) === "word" || t.out(its.type) === "unk", // unk for non-English words
      )
      .length();
    const sentenceCount = doc.sentences().length();

    const fleschReadingEaseScore = readability.fleschReadingEase(text);
    const fleschKincaidGradeScore = readability.fleschKincaidGrade(text);
    const gunningFogScore = readability.gunningFog(text);

    // Time-based metrics
    const readingTimeMinutes = wordCount / WORDS_PER_MINUTE_READING;
    const readingTime = formatTime(readingTimeMinutes);

    // Token counting
    const encodedTokens = enc.encode(text);
    const tokensCount = encodedTokens.length;
    const uniqueTokensCount = new Set(encodedTokens).size;

    return {
      characters: text.length,
      tokens: tokensCount,
      words: wordCount,
      sentences: sentenceCount,
      readingTime: `~${readingTime}`,
      fleschReadingEase: fleschReadingEaseScore,
      fleschKincaidGrade: fleschKincaidGradeScore,
      gunningFog: gunningFogScore,
      uniqueTokens: uniqueTokensCount,
    };
  }, [text]);
}
