import Head from "next/head";
import ApllicationForm from "../components/ApllicationForm";
import HeroSection from "../components/HeroSection";
import NavHeader from "../components/NavHeader";
import Overview from "../components/Overview";
import PastWinners from "../components/PastWinners";

export default function Home() {
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
        {/* <NavHeader /> */}
        <HeroSection />
        <Overview />
        <PastWinners />
        <ApllicationForm />
      </main>
    </div>
  );
}
