export enum LEADERBOARD_VERSION {
  CLOSED_BETA_1 = "closedBeta1",
  CLOSED_BETA_2 = "closedBeta2",
  OPEN_BETA = "openBeta",
  LIVE = "live",
}

type FameLeague = {
  fame: number;
  name: string;
};

const CLOSED_BETA_ONE_LEAGUES = [
  { fame: 0, name: "Bronze" },
  { fame: 500, name: "Silver" },
  { fame: 1_000, name: "Gold" },
  { fame: 5_000, name: "Diamond" },
] satisfies FameLeague[];

const CLOSED_BETA_TWO_LEAGUES = [
  { fame: 0, name: "Bronze 4" },
  { fame: 1_250, name: "Bronze 3" },
  { fame: 2_500, name: "Bronze 2" },
  { fame: 3_750, name: "Bronze 1" },

  { fame: 5_000, name: "Silver 4" },
  { fame: 6_250, name: "Silver 3" },
  { fame: 7_500, name: "Silver 2" },
  { fame: 8_750, name: "Silver 1" },

  { fame: 10_000, name: "Gold 4" },
  { fame: 11_250, name: "Gold 3" },
  { fame: 12_500, name: "Gold 2" },
  { fame: 13_750, name: "Gold 1" },

  { fame: 15_000, name: "Platinum 4" },
  { fame: 16_250, name: "Platinum 3" },
  { fame: 17_500, name: "Platinum 2" },
  { fame: 18_750, name: "Platinum 1" },

  { fame: 20_000, name: "Diamond 4" },
  { fame: 21_250, name: "Diamond 3" },
  { fame: 22_500, name: "Diamond 2" },
  { fame: 23_750, name: "Diamond 1" },
] satisfies FameLeague[];

// TODO: Values from https://twitter.com/Party_Rooster - Will still chase with Embark
const LIVE_LEAGUES = [
  { fame: 0, name: "Bronze 4" },
  { fame: 250, name: "Bronze 3" },
  { fame: 500, name: "Bronze 2" },
  { fame: 1_000, name: "Bronze 1" },

  { fame: 1_750, name: "Silver 4" },
  { fame: 2_500, name: "Silver 3" },
  { fame: 3_500, name: "Silver 2" },
  { fame: 4_500, name: "Silver 1" },

  { fame: 6_500, name: "Gold 4" },
  { fame: 8_500, name: "Gold 3" },
  { fame: 10_500, name: "Gold 2" },
  { fame: 12_500, name: "Gold 1" },

  { fame: 15_500, name: "Platinum 4" },
  { fame: 18_500, name: "Platinum 3" },
  { fame: 21_500, name: "Platinum 2" },
  { fame: 24_500, name: "Platinum 1" },

  { fame: 28_500, name: "Diamond 4" },
  { fame: 32_750, name: "Diamond 3" },
  { fame: 37_250, name: "Diamond 2" },
  { fame: 42_250, name: "Diamond 1" },
] satisfies FameLeague[];

export const VERSION_LEAGUES = {
  [LEADERBOARD_VERSION.CLOSED_BETA_1]: CLOSED_BETA_ONE_LEAGUES,
  [LEADERBOARD_VERSION.CLOSED_BETA_2]: CLOSED_BETA_TWO_LEAGUES,
  [LEADERBOARD_VERSION.OPEN_BETA]: CLOSED_BETA_TWO_LEAGUES,
  [LEADERBOARD_VERSION.LIVE]: LIVE_LEAGUES,
} satisfies Record<LEADERBOARD_VERSION, FameLeague[]>;
