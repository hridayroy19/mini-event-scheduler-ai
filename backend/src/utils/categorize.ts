
export function categorizeEvent(title: string, notes?: string): "Work" | "Personal" | "Other" {
  const workKeywords = ["meeting", "client", "project"];
  const personalKeywords = ["birthday", "family", "party"];

  const combined = (title + " " + (notes || "")).toLowerCase();

  if (workKeywords.some((word) => combined.includes(word))) return "Work";
  if (personalKeywords.some((word) => combined.includes(word))) return "Personal";
  return "Other";
}
