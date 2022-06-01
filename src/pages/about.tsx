import Title from '@/components/Title';
import NavButton from '@/components/NavButton';

export default function About() {
  return (
    <main>
      <NavButton />
      <Title>About Page!</Title>
      <p>This page is all about showing simple navigation in Gatsby!</p>
      <p>
        Follow me on Twitter (
        <a href="https://twitter.com/jpedroschmitz">@jpedroschmitz</a>)
      </p>
    </main>
  );
}
