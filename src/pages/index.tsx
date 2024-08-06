import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import Navbar from "@/components/layouts/navbar";
import styles from "@/styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <Head>
        <title>Aplikasi saya</title>
      </Head>
      <div>
        <h1>Hello World 2</h1>
      </div>
    </div>
  );
}
