export function getFleschReadingEaseInterpretation(score: number): string {
  if (score >= 90) return "Very Easy";
  if (score >= 80) return "Easy";
  if (score >= 70) return "Fairly Easy";
  if (score >= 60) return "Standard";
  if (score >= 50) return "Fairly Difficult";
  if (score >= 30) return "Difficult";
  return "Very Confusing";
}

export function getFleschKincaidGradeInterpretation(grade: number): string {
  if (grade <= 1) return "Kindergarten";
  if (grade <= 3) return "1st-2nd Grade";
  if (grade <= 5) return "3rd-5th Grade";
  if (grade <= 8) return "6th-8th Grade";
  if (grade <= 12) return "9th-12th Grade";
  if (grade <= 16) return "College Level";
  return "Graduate Level";
}

export function getGunningFogInterpretation(index: number): string {
  if (index <= 6) return "6th grade or below";
  if (index <= 9) return "9th grade";
  if (index <= 12) return "High school";
  if (index <= 16) return "College level";
  return "Graduate level";
}

export function getSentimentInterpretation(score: number): string {
  if (score > 0.1) return "Positive";
  if (score < -0.1) return "Negative";
  return "Neutral";
}

export function formatTime(minutes: number): string {
  const totalSeconds = Math.round(minutes * 60);
  const mins = Math.floor(totalSeconds / 60);
  const secs = totalSeconds % 60;
  if (mins === 0) return `${secs}s`;
  if (secs === 0) return `${mins}m`;
  return `${mins}m ${secs}s`;
}
