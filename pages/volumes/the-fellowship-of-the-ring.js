import Link from "next/link.js";
import Image from "next/image";
import { volumes } from "../../lib/data.js";
export default function theFellowshipOfTheRing() {
  const volume = volumes.find(
    ({ slug }) => slug === "the-fellowship-of-the-ring"
  );
  return (
    <>
      <Link href="/">All Volumes</Link>;<h1>The fellowship of the ring</h1>
      <p>{volume.description}</p>
      <ul>
        {volume.books.map((book) => (
          <li key={book.ordinal}>{book.title}</li>
        ))}
      </ul>
      <Image src={volume.cover} alt={volume.title} width={140} height={230} />
      <Link href="/volumes/the-two-towers">next Volume</Link>;
    </>
  );
}
