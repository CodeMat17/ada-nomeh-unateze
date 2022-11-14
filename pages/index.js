import Head from "next/head";
import HeroSection from "../components/HeroSection";
import Overview from "../components/Overview";
import Journey from "../components/Journey";
import { client } from "../contentfulClient";

export const getStaticProps = async () => {
  const hero = await client.getEntries({
    content_type: "heroSection",
  });

  const overview = await client.getEntries({
    content_type: "overview",
  });

  const cleanedHero = hero.items.map((item) => {
    const image = item.fields.image.fields;

    return {
      ...item.fields,
      image,
    };
  });

  const cleanedOverview = overview.items.map((item) => {
    return {
      ...item.fields,
    };
  });

  return {
    props: {
      cleanedHero,
      cleanedOverview,
    },
    revalidate: 2,
  };
};

export default function Home({ cleanedHero, cleanedOverview }) {

  return (
    <div>
      <Head>
        <title>Ada Nomeh Unateze | Home</title>
        <meta
          name='description'
          content='Ada Nomeh Unateze is a beauty pageant show to vote for the Ada-Nomeh queen and the face of Nomeh Unatetze.'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main>
        {cleanedHero &&
          cleanedHero.map((item, index) => (
            <HeroSection key={index} {...item} />
          ))}

        {cleanedOverview &&
          cleanedOverview.map((item, index) => (
            <Overview key={index} {...item} />
          ))}

        <Journey />
        {/* <ApllicationForm /> */}
      </main>
    </div>
  );
}
