export interface GiftCode {
  code: string;
  expires: string;
  active: boolean;
}

export const demoCodes: GiftCode[] = [
  {
    code: "COMINGSOON",
    expires: "Waiting for API",
    active: true,
  },
  {
    code: "DEMO2026",
    expires: "Example Code",
    active: true,
  },
  {
    code: "SUMMER2026",
    expires: "Expired",
    active: false,
  },
];