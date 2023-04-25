import GlobalTags from "./___globalTags";

export default function Head() {
  return (
    <>
      <GlobalTags/>
      <title>André Peixoto | Front End Developer</title>
      <meta name="description" content="André Peixoto | Front End Developer" />
      <meta property="og:title" content="Front-End Developer | André Peixoto" />
      <meta
        property="og:description"
        content="Um desenvolvedor apaixonado por design, responsividade e performance."
      />
      <meta property="og:type" content="website" />
    </>
  );
}
