import classNames from "classnames";
import { ExternalLink } from "react-feather";
import { ethers } from "ethers";
import type { NextPage } from "next";
import Head from "next/head";
import { useMemo, useState } from "react";
import { useAccount } from "wagmi";
import { HeaderWithWallet } from "../../components/HeaderWithWallet";
import {
  usePoolyJudgeBalanceOf,
  usePoolyLawyerBalanceOf,
  usePoolySupporterBalanceOf,
} from "../../hooks/pooly";

const ChibiStickers: NextPage = () => {
  const { data } = useAccount();
  const { data: supporterBalanceOf, isFetched: isSupporterFetched } =
    usePoolySupporterBalanceOf(data?.address);
  const { data: lawyerBalanceOf, isFetched: isLawyerFetched } =
    usePoolyLawyerBalanceOf(data?.address);
  const { data: judgeBalanceOf, isFetched: isJudgeFetched } =
    usePoolyJudgeBalanceOf(data?.address);

  const isFetched = isSupporterFetched && isLawyerFetched && isJudgeFetched;
  const hasBalance =
    !!data?.address &&
    isFetched &&
    (!supporterBalanceOf?.isZero() ||
      !lawyerBalanceOf?.isZero() ||
      !judgeBalanceOf?.isZero());

  return (
    <>
      <Head>
        <title>A Friend of Pooly - Chibi Stickers</title>
        <meta name="description" content="A Friend of Pooly" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <HeaderWithWallet className="absolute top-0 inset-x-0" />
      <main className="relative h-screen px-2 flex flex-col justify-center items-center overflow-hidden space-y-4 text-center">
        <div className="flex flex-col items-center font-extrabold leading-none">
          <h1 className="text-4xl sm:text-6xl">Chibi</h1>
          <h1 className="text-6xl sm:text-9xl">Pooly</h1>
          <h1 className="font-light text-2xl sm:text-4xl">iOS Stickers</h1>
        </div>
        {!data?.address && (
          <>
            <img
              src={"/assets/pooly/chibi-researcher.png"}
              className={"w-20 h-20 sm:w-48 sm:h-48 "}
            />
            <p className="opacity-50">
              Connect a wallet holding a Pooly NFT to get access
            </p>
          </>
        )}
        {!!data?.address && (
          <>
            {!isFetched && <p className="opacity-50">Loading...</p>}
            {hasBalance && (
              <>
                <img
                  src={"/assets/pooly/chibi-happy.png"}
                  className={"w-20 h-20 sm:w-48 sm:h-48 "}
                />
                <a
                  className="animate-rainbow underline flex space-x-2 items-center"
                  href="https://testflight.apple.com/join/2kNPRoUx"
                >
                  <span>Get access!</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </>
            )}
            {isFetched && !hasBalance && (
              <>
                <p className="opacity-50">
                  Get a Pooly NFT to get early access
                </p>
                <img
                  src={"/assets/pooly/chibi-godzilla.png"}
                  className={"w-20 h-20 sm:w-48 sm:h-48 "}
                />
                <a
                  className="underline flex space-x-2 items-center"
                  href="https://opensea.io/collection/pooly-supporter"
                >
                  <span>OpenSea</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </>
            )}
          </>
        )}
      </main>
    </>
  );
};

export default ChibiStickers;
