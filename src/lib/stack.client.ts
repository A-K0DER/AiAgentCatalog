export const STACK_STORAGE_KEY = "mcp-stack:v1";
export const STACK_CHANGE_EVENT = "stack:change";

export function getStack(): string[] {
  try {
    const parsed = JSON.parse(localStorage.getItem(STACK_STORAGE_KEY) ?? "[]");
    return Array.isArray(parsed) ? parsed.filter((x): x is string => typeof x === "string") : [];
  } catch {
    return [];
  }
}

function setStack(ids: string[]) {
  try {
    localStorage.setItem(STACK_STORAGE_KEY, JSON.stringify(ids));
  } catch {
    /* localStorage unavailable — in-memory only for this call */
  }
  window.dispatchEvent(new CustomEvent(STACK_CHANGE_EVENT, { detail: { ids } }));
}

export function isInStack(id: string): boolean {
  return getStack().includes(id);
}

export function addToStack(id: string) {
  const stack = getStack();
  if (!stack.includes(id)) setStack([...stack, id]);
}

export function removeFromStack(id: string) {
  setStack(getStack().filter((x) => x !== id));
}

export function toggleStack(id: string): boolean {
  const wasInStack = isInStack(id);
  if (wasInStack) removeFromStack(id);
  else addToStack(id);
  return !wasInStack;
}

export function clearStack() {
  setStack([]);
}

if (typeof window !== "undefined") {
  window.addEventListener("storage", (e) => {
    if (e.key === STACK_STORAGE_KEY) {
      window.dispatchEvent(new CustomEvent(STACK_CHANGE_EVENT, { detail: { ids: getStack() } }));
    }
  });
}
