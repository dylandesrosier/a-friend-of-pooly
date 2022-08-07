import classNames from "classnames";
import type { NextPage } from "next";
import Head from "next/head";
import { useMemo, useState } from "react";
import { Header } from "../components/Header";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>A Friend of Pooly</title>
        <meta name="description" content="A Friend of Pooly" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header className="absolute top-0 inset-x-0" />
      <main className="relative h-screen px-2 flex flex-col justify-center items-center overflow-hidden">
        <div className="flex flex-col items-center font-bold">
          <h1 className="text-6xl leading-none">A Friend of</h1>
          <h1 className="text-9xl leading-none">Pooly</h1>
        </div>
        <Pooly />
      </main>
    </>
  );
};

export default Home;

const Pooly = () => {
  const [effect, setEffect] = useState(false);
  const [count, setCount] = useState(0);

  return (
    <>
      <div
        className={classNames(
          "absolute flex inset-x-0 ml-0 sm:ml-12 -bottom-1/4",
          "transition-transform animate-slide-up"
        )}
      >
        <img
          src={"/assets/pooly/chibi-basic.png"}
          className={classNames("w-full sm:w-1/2 h-auto cursor-pointer", {
            "animate-wiggle": effect,
          })}
          onClick={() => {
            setCount(count + 1);
            setEffect(true);
          }}
          onAnimationEnd={() => setEffect(false)}
        />
      </div>

      {[...Array(count)].map((_, i) => (
        <RandomText key={i} i={i} />
      ))}
    </>
  );
};

const RandomText = (props) => {
  const { i } = props;
  const color = useMemo(() => getClassName(i, colors), [i]);
  const fontStyle = useMemo(() => getFontStyle(i), [i]);
  const [x, y] = useMemo(() => getPosition(i), [i]);
  const copy = useMemo(() => getClassName(i, randomText), [i]);
  const opacity = useMemo(() => getOpacity(i), [i]);

  return (
    <div
      className={classNames("absolute", color, fontStyle)}
      style={{
        width: "max-content",
        height: "max-content",
        top: `${y}%`,
        left: `${x}%`,
        opacity: `${opacity}%`,
      }}
    >
      {copy}
    </div>
  );
};

const getPosition = (n) => {
  const a = ((n + 1) * Math.random() * 100) % 90;
  const b = ((n + 2) * Math.random() * 100) % 90;

  return [a, b];
};

const getFontStyle = (n) => {
  const font = getClassName(n, fonts);
  const fontSize = getClassName(n, fontSizes);
  const fontFamily = n % 5 === 0 ? "font-serif" : "font-sans";
  return classNames(font, fontSize, fontFamily);
};

const getClassName = (n, arr) => arr[mod(n, arr)];
const mod = (n, arr) => n % arr.length;

const colors = [
  "text-gray-lighter",
  "text-gray-darker",
  "text-orange-800",
  "text-red-800",
  "text-blue-800",
  "text-gray-300",
  "text-green-800",
  "text-brown-800",
  "text-white",
];

const fonts = [
  "font-bold",
  "font-extrabold",
  "font-thin",
  "font-extrabold",
  "font-extrabold",
  "font-bold",
  "font-light",
  "font-extrabold",
  "font-thin",
  "font-thin",
  "font-light",
  "font-thin",
  "font-extrabold",
  "font-extrabold",
];

const fontSizes = [
  "text-xl",
  "text-2xl",
  "text-sm",
  "text-3xl",
  "text-2xl",
  "font-extrabold",
];

const randomText = [
  "Pooly",
  "Birb",
  "PoolTogether",
  "Pooly",
  "Pooly",
  "PoolyDAO",
  "🤝",
];
const getOpacity = (i) => ((i + 6) % 7) * 10 + 40;
