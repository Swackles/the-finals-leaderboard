export type RawUser = {
  /** The user's rank. */
  r: number;
  /** The user's name. */
  name: string;
  /** The user's fame. */
  f: number;
  /** Also the user's fame? */
  of: number;
  /** The user's change in rank. */
  or: number;
  /** The user's cashouts. */
  c: number;
  /** The user's XP. Available in versions 1 and 2. */
  x?: number;
  /** The user's level. Available in versions 1 and 2. */
  mx?: number;
  /** The user's Steam name. */
  steam?: string;
  /** The user's Xbox name. */
  xbox?: string;
  /** The user's PSN name. */
  psn?: string;
};

export type User = {
  key: string;
  rank: number;
  change: number;
  name: string;
  steamName?: string;
  xboxName?: string;
  psnName?: string;
  xp?: number;
  level?: number;
  cashouts: number;
  fame: number;
};

export enum Platforms {
  Crossplay = "crossplay",
  Steam = "steam",
  Xbox = "xbox",
  PSN = "psn",
}

export enum Panels {
  Table = "table",
  Stats = "stats",
}
