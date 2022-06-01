import Title from '@/components/Title';
import NavButton from '@/components/NavButton';

export default function Home() {
  return (
    <main>
      <NavButton path={`/about`}>About</NavButton>
      <Title>Hello TypeScript!</Title>
      <p>A TypeScript starter for Gatsby. Great for advanced users.</p>
      <p>
        Follow me on Twitter (
        <a href="https://twitter.com/jpedroschmitz">@jpedroschmitz</a>)
      </p>
    </main>
  );
}
