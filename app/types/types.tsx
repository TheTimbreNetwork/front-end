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

export type ABIEntry = {
  inputs: {
    indexed?: boolean;
    internalType: string;
    name: string;
    type: string;
  }[];
  stateMutability: string;
  type: "constructor" | "function" | "event";
  anonymous?: boolean;
  name?: string;
  outputs?: { internalType: string; name: string; type: string }[];
};
