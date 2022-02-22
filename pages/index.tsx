import type { NextPage } from "next";
import Head from "next/head";
import { QuestionLayout } from "../components/QuestionLayout";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>誰でもできる多面待ち判別法-覚えておくべき基本多面構成-</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <main>
        <QuestionLayout />
      </main>
    </div>
  );
};

export default Home;
