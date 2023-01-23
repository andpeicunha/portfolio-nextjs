import "./globals.css";
import Nav from "./navigator/page";
import ParticleLogo from "./particles/particles";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <Nav />
        {/* <ParticleLogo /> */}
        {children}
      </body>
    </html>
  );
}
