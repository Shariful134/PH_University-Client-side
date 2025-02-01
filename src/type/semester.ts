export type TSemesterData = {
  value: string;
  label: string;
};
export const status = ["UPCOMING", "ONGOING", "ENDED"];

export const statusOptions = status.map((item) => ({
  value: item,
  label: item,
}));
