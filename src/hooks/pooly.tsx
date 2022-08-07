import { useNftBalanceOf } from "./useNftBalanceOf";

export const usePoolySupporterBalanceOf = (usersAddress: string) => {
  return useNftBalanceOf(
    usersAddress,
    "0x90B3832e2F2aDe2FE382a911805B6933C056D6ed"
  );
};

export const usePoolyLawyerBalanceOf = (usersAddress: string) => {
  return useNftBalanceOf(
    usersAddress,
    "0x3545192b340F50d77403DC0A64cf2b32F03d00A9"
  );
};

export const usePoolyJudgeBalanceOf = (usersAddress: string) => {
  return useNftBalanceOf(
    usersAddress,
    "0x5663e3E096f1743e77B8F71b5DE0CF9Dfd058523"
  );
};
