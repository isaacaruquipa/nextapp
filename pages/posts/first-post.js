import Link from "next/link";

import Image from 'next/image';

import Head from 'next/head';

import Script from 'next/script';


import Layout from '../../components/layout';

const YourComponent = () => (
    <Image
      src="/images/img.jpg" // Route of the image fil // Desired size with correct aspect ratio
      alt="Your Name"
      width={600} // Desired size with correct aspect ratio
      height={700}
    />
  );
export default function FirstPost() {
  return (
     <Layout>
     <Head>
        <title>First Post</title>
        <script src="https://connect.facebook.net/en_US/sdk.js" />
      </Head>

      <Script
        src="https://connect.facebook.net/en_US/sdk.js"
        strategy="lazyOnload"
        onLoad={() =>
          console.log(`script loaded correctly, window.FB has been populated`)
        }
      />
      <h1>First Post</h1>
      <h2>
        <Link href="/">← Back to home</Link>
      </h2>
     </Layout>)
  
}