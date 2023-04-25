import React from 'react';

/**
 * Generates meta tags and a link tag for the favicon.
 *
 * @return {JSX.Element} A React fragment containing the meta and link tags.
 */
export default function GlobalTags() {
  return (
    <>
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <link rel="icon" href="/favicon.ico" />
    </>
  );
}
