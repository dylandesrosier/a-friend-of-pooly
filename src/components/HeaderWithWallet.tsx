import { ConnectButton } from "@rainbow-me/rainbowkit";
import classNames from "classnames";

export const HeaderWithWallet: React.FC<{ className?: string }> = (props) => {
  return (
    <div
      className={classNames(
        "py-2 w-full flex justify-center z-20",
        props.className
      )}
    >
      <div className="px-4 flex max-w-7xl justify-between items-center w-full h-10">
        <div>
          <span className="font-bold">
            <img src={"/assets/pooly/chibi-basic.png"} className={"w-8 h-8 "} />
          </span>
        </div>
        <div className="flex space-x-4 xs:space-x-8 items-center text-xs sm:text-base">
          <a
            href="https://twitter.com/FriendsofPooly"
            target="_blank"
            rel="noreferrer"
            className="hover:opacity-70 active:opacity-50 transition-opacity cursor-pointer"
          >
            Twitter
          </a>
          <a
            href="https://discord.com/invite/dJqRzUWfa7"
            target="_blank"
            rel="noreferrer"
            className="hover:opacity-70 active:opacity-50 transition-opacity cursor-pointer"
          >
            Discord
          </a>
          <ConnectButton
            accountStatus="address"
            chainStatus="icon"
            showBalance={false}
          />
        </div>
      </div>
    </div>
  );
};
