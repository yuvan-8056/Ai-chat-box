import { PresetPrompt } from "../types";

export const PRESET_PROMPTS: PresetPrompt[] = [
  {
    id: "quantum",
    title: "Explain Quantum Physics",
    subtitle: "In simple terms for a 10-year-old",
    prompt: "Explain quantum computing or quantum physics in simple, engaging terms that a 10-year-old would easily understand. Use a relatable analogy!",
    category: "learning",
  },
  {
    id: "palindrome",
    title: "Write a TS function",
    subtitle: "To check for palindromes",
    prompt: "Write a highly optimized TypeScript function to check if a string is a palindrome. Include comprehensive JSDoc comments, edge case handling, and 3 example test cases.",
    category: "coding",
  },
  {
    id: "coffee-brand",
    title: "Brainstorm Coffee Names",
    subtitle: "For an organic, fair-trade brand",
    prompt: "Brainstorm 5 creative, unique, and memorable name ideas for a new organic, fair-trade coffee brand. Explain the vibe or meaning behind each name.",
    category: "creative",
  },
  {
    id: "feedback-email",
    title: "Draft a feedback email",
    subtitle: "To a manager after a talk",
    prompt: "Draft a highly professional and polite email to my team manager asking for constructive feedback on my recent product presentation. Keep it concise.",
    category: "writing",
  },
];
