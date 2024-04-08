interface Preferences {
  // ...
}

interface User {
  preferences: Preferences;
}

interface Database {
  getBy(guid: string): User;
}

declare const db: Database;

function getPreferences(guid: string) {
  const user = db.getBy(guid);
  if (!user) {
    throw new Error(`User '${guid}' not found.`);
  }
  return user.preferences;
}
