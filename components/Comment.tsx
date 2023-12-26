export function Comment({
  id,
  author,
  text,
  dateTime,
}: {
  author: { name: string };
  text: string;
  dateTime: string;
  id: number;
}) {
  return (
    <div className="comment">
      <strong>{author.name}: </strong>
      {dateTime}
      <p>{text}</p>
    </div>
  );
}
