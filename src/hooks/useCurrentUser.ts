let currentUserId :number|undefined = undefined;

export function useCurrentUser(userId?: number) {
  if (userId) {
    currentUserId = userId;
  }
  return currentUserId;
}
