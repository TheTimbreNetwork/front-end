const chainIdToProductMap: {
  [key: number]: {
    name: string;
    id: number;
    imageSrc: string;
    floorPrice: number;
    contractAddress: string;
  }[];
} = {
  137: [
    {
      name: "The Starbucks Siren Collection",
      id: 0,
      imageSrc:
        "https://i.seadn.io/gcs/files/65766e8c4bd426f23ec34c8ff55d3546.png?auto=format&dpr=1&w=2048",
      floorPrice: 0.398,
      contractAddress: "0x1fF052Df592FFCf42Fe6A4173975d351Dcc99d45",
    },
    {
      name: "y00ts",
      id: 1,
      imageSrc:
        "https://i.seadn.io/gcs/files/ce85ffa4aab75e4024e70f18160bbf9f.png?auto=format&dpr=1&w=2048",
      floorPrice: 1.7,
      contractAddress: "0x670fd103b1a08628e9557cd66b87ded841115190",
    },
    {
      name: ".SWOOSH ID",
      id: 2,
      imageSrc:
        "https://i.seadn.io/gcs/files/b93d28a10595170d4745abaa9be3ecf6.png?auto=format&dpr=1&w=3840",
      floorPrice: 0,
      contractAddress: "0xF4e9CeC411Ad8F99eaf02D5952D24c791C78E6d7",
    },
  ],
};

export function getTrendingProducts(
  chainId: number
): {
  name: string;
  id: number;
  imageSrc: string;
  floorPrice: number;
  contractAddress: string;
}[] {
  return chainIdToProductMap[chainId];
}
