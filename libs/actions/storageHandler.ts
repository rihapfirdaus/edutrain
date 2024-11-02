export function saveToSessionStorage(key: string, value: any): void {
  try {
    const serializedValue = JSON.stringify(value);
    sessionStorage.setItem(key, serializedValue);
  } catch (error) {
    console.error("Error saving to Session Storage:", error);
  }
}

export function getFromSessionStorage<T>(key: string): T | null {
  try {
    const serializedValue = sessionStorage.getItem(key);
    if (serializedValue === null) {
      return null;
    }
    return JSON.parse(serializedValue) as T;
  } catch (error) {
    console.error("Error getting data from Session Storage:", error);
    return null;
  }
}
