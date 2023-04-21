import Link from "next/link.js";
import Image from "next/image";
import { volumes } from "../../lib/data.js";
export default function theReturnOfTheKings() {
  const volume = volumes.find(({ slug }) => slug === "the-return-of-the-king");
  return (
    <>
      <Link href="/">All Volumes</Link>;<h1>The Return of the King</h1>
      <p>{volume.description}</p>
      <ul>
        {volume.books.map((book) => (
          <li key={book.ordinal}>{book.title}</li>
        ))}
      </ul>
      <Image src={volume.cover} alt={volume.title} width={140} height={230} />
      <Link href="/volumes/the-fellowship-of-the-ring">next Volume</Link>;
    </>
  );
}
