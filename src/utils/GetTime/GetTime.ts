export default function getTime(created_at: string) {
  const date = new Date(created_at);
  const nowDate = new Date();
  const diff = Math.abs(date.getTime() - nowDate.getTime()) / 36e5;

  if (diff < 1) return `${Math.round(diff * 60)} minutes(s) ago`;
  else if (diff < 24) return `${Math.round(diff)} hour(s) ago`;
  return `${Math.round(diff / 24)} day(s) ago`;
}
