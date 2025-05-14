import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import type { LanguageKey } from "./CodeEditor";

const LanguageOptions: Array<{ value: LanguageKey; label: string }> = [
  { value: "javascript", label: "JavaScript" },
  { value: "typescript", label: "TypeScript" },
  { value: "python", label: "Python" },
  { value: "html", label: "HTML" },
  { value: "java", label: "Java" },
  { value: "php", label: "PHP" },
  { value: "css", label: "CSS" },
];

export default function LanguageSelector({
  onChange,
}: {
  onChange: (language: LanguageKey) => void;
}) {
  return (
    <Select onValueChange={onChange}>
      <SelectTrigger className="w-[240px]">
        <SelectValue placeholder="Select a language" />
      </SelectTrigger>
      <SelectContent>
        {LanguageOptions.map((option) => (
          <SelectItem key={option.value} value={option.value}>
            {option.label}
          </SelectItem>
        ))}
        {/* You can add more languages here */}
      </SelectContent>
    </Select>
  );
}
