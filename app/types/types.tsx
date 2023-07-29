export type Review = {
  reviewer: string;
  id: string;
  existingReviewableAddress: string;
  _reviewDecentralizedStorageURL: string;
  currentBlockTime?: string;
};

export type SelectMenuProps = {
  menuDescription: string;
  menuTitle: string;
  menuDefaultValue: string;
  menuOptions: string[];
  setter: (value: string) => void;
};
