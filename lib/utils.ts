export const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

type ClassValue = string | undefined | null | false | ClassValue[];

function toVal(mix: ClassValue): string {
  if (!mix) return "";
  if (typeof mix === "string") return mix;
  if (Array.isArray(mix)) return mix.map(toVal).filter(Boolean).join(" ");
  return "";
}

export function cn(...inputs: ClassValue[]): string {
  return inputs.map(toVal).filter(Boolean).join(" ");
}
