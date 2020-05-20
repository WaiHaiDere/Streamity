export function setPersistentItem(name, value) {
  sessionStorage.setItem(name, JSON.stringify(value));
}

export function getPersistentItem(name) {
  return JSON.parse(sessionStorage.getItem(name));
}

export function removePersistentItem(name) {
  sessionStorage.removeItem(name);
}

export function clearPersistenceStore() {
  sessionStorage.clear();
}
