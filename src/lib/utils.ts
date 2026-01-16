export function cn(
  ...classes: Array<string | number | false | null | undefined>
): string {
  return classes
    .flatMap((value) => {
      if (typeof value === "string" || typeof value === "number") {
        return String(value);
      }

      return value ? String(value) : [];
    })
    .join(" ")
    .trim();
}
