import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import {
  DynamicContextProvider,
  DynamicWidget,
} from "@dynamic-labs/sdk-react-core";
import { EthereumWalletConnectors } from "@dynamic-labs/ethereum";
import Bg from "@/components/bg";
import { IsBrowser } from "@dynamic-labs/sdk-react-core";
import { Navbar } from "@/components/navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "DeQuiz3",
  description: "Decentralized platform offering AI-generated quizzes on Web3",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <DynamicContextProvider
        settings={{
          environmentId: "b9824ce4-ba83-4d05-a8d2-404de8fb2eb4",
          walletConnectors: [EthereumWalletConnectors],
        }}
      >
        <IsBrowser>{/* <Bg /> */}</IsBrowser>
        <body
          className={
            inter.className + " dark:bg-dot-white/[0.2] bg-dot-black/[0.2]"
          }
        >
          <div className="w-full p-8 flex justify-center items-center fixed top-3 z-20">
            <Navbar />
          </div>
          <div className="pt-10">{children}</div>
        </body>
      </DynamicContextProvider>
    </html>
  );
}
