export interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
  timestamp: Date;
}

export interface PresetPrompt {
  id: string;
  title: string;
  subtitle: string;
  prompt: string;
  category: "creative" | "coding" | "learning" | "writing";
}
