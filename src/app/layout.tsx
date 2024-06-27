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
import {Navbar} from "@/components/navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
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
        <body className={inter.className}>
          <div className="w-full p-8 flex justify-center items-center ">
            <Navbar />
          </div>
          {children}
        </body>
      </DynamicContextProvider>
    </html>
  );
}
