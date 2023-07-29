export type ProductMap = {
  name: string;
  id: number;
  imageSrc: string;
  floorPrice: number;
  averageReview: number;
  totalReviews: number;
  contractAddress: string;
  description: string;
};

type ChainIdtoProductMap = {
  [id: string]: ProductMap[];
};

const chainIdToProductMap: ChainIdtoProductMap = {
  137: [
    {
      name: "The Starbucks Siren Collection",
      id: 0,
      imageSrc:
        "https://i.seadn.io/gcs/files/65766e8c4bd426f23ec34c8ff55d3546.png?auto=format&dpr=1&w=2048",
      floorPrice: 0.398,
      averageReview: 4,
      totalReviews: 4,
      contractAddress: "0x1fF052Df592FFCf42Fe6A4173975d351Dcc99d45",
      description:
        "As Starbucks has grown over the years, the Siren has been right there with us, adapting and evolving to reflect the brand and the culture. This collection — inspired by five of our most memorable Siren expressions and drawing on our deep coffee stamp archives — consists of 2,000 unique pieces tracing her journey from local Seattle celebrity to revered global icon. This collection will only be available to current Starbucks Odyssey members. If you are not already a member, join the waitlist now. Available while supplies last. This offer may be withdrawn, amended, or canceled at any time."
    },
    {
      name: "y00ts",
      id: 1,
      imageSrc:
        "https://i.seadn.io/gcs/files/ce85ffa4aab75e4024e70f18160bbf9f.png?auto=format&dpr=1&w=2048",
      floorPrice: 1.7,
      averageReview: 5,
      totalReviews: 1,
      contractAddress: "0x670fd103b1a08628e9557cd66b87ded841115190",
      description:
        "y00ts is a generative art project of 15,000 NFTs. y00topia is a curated community of builders and creators. Each y00t was designed by De Labs in Los Angeles, CA."
    },
    {
      name: ".SWOOSH ID",
      id: 2,
      imageSrc:
        "https://i.seadn.io/gcs/files/b93d28a10595170d4745abaa9be3ecf6.png?auto=format&dpr=1&w=3840",
      floorPrice: 0,
      averageReview: -1,
      totalReviews: 0,
      contractAddress: "0xF4e9CeC411Ad8F99eaf02D5952D24c791C78E6d7",
      description:
        "The .SWOOSH ID secures your place in the .SWOOSH community, where you'll meet other members, collect virtual creations, get special access to physical and virtual collections, and have the chance to co-create with Nike.You can design and obtain your own .SWOOSH ID from Nike by registering at swoosh.nike.Each .SWOOSH ID is uniquely created with input from you and can be used as part of your digital identity for access to services, features, and functionality provided through the .SWOOSH Platform. Certain rights and features require the .SWOOSH ID to be held in a supported third-party digital wallet linked to your Nike Account on the .SWOOSH Platform."
    }
  ],
  1101: [
    {
      name: "The Starbucks Siren Collection",
      id: 0,
      imageSrc:
        "https://i.seadn.io/gcs/files/65766e8c4bd426f23ec34c8ff55d3546.png?auto=format&dpr=1&w=2048",
      floorPrice: 0.398,
      averageReview: -1,
      totalReviews: 0,
      contractAddress: "0x1fF052Df592FFCf42Fe6A4173975d351Dcc99d45",
      description:
        "As Starbucks has grown over the years, the Siren has been right there with us, adapting and evolving to reflect the brand and the culture. This collection — inspired by five of our most memorable Siren expressions and drawing on our deep coffee stamp archives — consists of 2,000 unique pieces tracing her journey from local Seattle celebrity to revered global icon. This collection will only be available to current Starbucks Odyssey members. If you are not already a member, join the waitlist now. Available while supplies last. This offer may be withdrawn, amended, or canceled at any time."
    },
    {
      name: "y00ts",
      id: 1,
      imageSrc:
        "https://i.seadn.io/gcs/files/ce85ffa4aab75e4024e70f18160bbf9f.png?auto=format&dpr=1&w=2048",
      floorPrice: 1.7,
      averageReview: -1,
      totalReviews: 0,
      contractAddress: "0x670fd103b1a08628e9557cd66b87ded841115190",
      description:
        "y00ts is a generative art project of 15,000 NFTs. y00topia is a curated community of builders and creators. Each y00t was designed by De Labs in Los Angeles, CA."
    },
    {
      name: ".SWOOSH ID",
      id: 2,
      imageSrc:
        "https://i.seadn.io/gcs/files/b93d28a10595170d4745abaa9be3ecf6.png?auto=format&dpr=1&w=3840",
      floorPrice: 0,
      averageReview: -1,
      totalReviews: 0,
      contractAddress: "0xF4e9CeC411Ad8F99eaf02D5952D24c791C78E6d7",
      description:
        "The .SWOOSH ID secures your place in the .SWOOSH community, where you'll meet other members, collect virtual creations, get special access to physical and virtual collections, and have the chance to co-create with Nike.You can design and obtain your own .SWOOSH ID from Nike by registering at swoosh.nike.Each .SWOOSH ID is uniquely created with input from you and can be used as part of your digital identity for access to services, features, and functionality provided through the .SWOOSH Platform. Certain rights and features require the .SWOOSH ID to be held in a supported third-party digital wallet linked to your Nike Account on the .SWOOSH Platform."
    }
  ],
  100: [
    {
      name: "The Starbucks Siren Collection",
      id: 0,
      imageSrc:
        "https://i.seadn.io/gcs/files/65766e8c4bd426f23ec34c8ff55d3546.png?auto=format&dpr=1&w=2048",
      floorPrice: 0.398,
      averageReview: -1,
      totalReviews: 0,
      contractAddress: "0x1fF052Df592FFCf42Fe6A4173975d351Dcc99d45",
      description:
        "As Starbucks has grown over the years, the Siren has been right there with us, adapting and evolving to reflect the brand and the culture. This collection — inspired by five of our most memorable Siren expressions and drawing on our deep coffee stamp archives — consists of 2,000 unique pieces tracing her journey from local Seattle celebrity to revered global icon. This collection will only be available to current Starbucks Odyssey members. If you are not already a member, join the waitlist now. Available while supplies last. This offer may be withdrawn, amended, or canceled at any time."
    },
    {
      name: "y00ts",
      id: 1,
      imageSrc:
        "https://i.seadn.io/gcs/files/ce85ffa4aab75e4024e70f18160bbf9f.png?auto=format&dpr=1&w=2048",
      floorPrice: 1.7,
      averageReview: -1,
      totalReviews: 0,
      contractAddress: "0x670fd103b1a08628e9557cd66b87ded841115190",
      description:
        "y00ts is a generative art project of 15,000 NFTs. y00topia is a curated community of builders and creators. Each y00t was designed by De Labs in Los Angeles, CA."
    },
    {
      name: ".SWOOSH ID",
      id: 2,
      imageSrc:
        "https://i.seadn.io/gcs/files/b93d28a10595170d4745abaa9be3ecf6.png?auto=format&dpr=1&w=3840",
      floorPrice: 0,
      averageReview: -1,
      totalReviews: 0,
      contractAddress: "0xF4e9CeC411Ad8F99eaf02D5952D24c791C78E6d7",
      description:
        "The .SWOOSH ID secures your place in the .SWOOSH community, where you'll meet other members, collect virtual creations, get special access to physical and virtual collections, and have the chance to co-create with Nike.You can design and obtain your own .SWOOSH ID from Nike by registering at swoosh.nike.Each .SWOOSH ID is uniquely created with input from you and can be used as part of your digital identity for access to services, features, and functionality provided through the .SWOOSH Platform. Certain rights and features require the .SWOOSH ID to be held in a supported third-party digital wallet linked to your Nike Account on the .SWOOSH Platform."
    }
  ]
};

export function getTrendingProducts(chainId: number): ProductMap[] {
  return chainIdToProductMap[chainId];
}
