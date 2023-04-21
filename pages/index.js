import Link from "next/link.js";
import { introduction, volumes } from "../lib/data.js";
export default function HomePage() {
  return (
    <div>
      <h1>Lord of The Rings.js</h1>
      <p>{introduction}</p>
      <h2>All volumes</h2>
      <ul volumes>
        {volumes.map((volume) => (
          <li key={volume.slug}>
            <Link href={`/volumes/${volume.slug}`}>{volume.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
