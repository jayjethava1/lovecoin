import {
  benefitIcon1,
  benefitIcon2,
  benefitIcon3,
  benefitIcon4,
  benefitImage2,
  chromecast,
  disc02,
  discord,
  discordBlack,
  facebook,
  figma,
  file02,
  framer,
  homeSmile,
  instagram,
  notification2,
  notification3,
  notification4,
  notion,
  photoshop,
  plusSquare,
  protopie,
  raindrop,
  recording01,
  recording03,
  roadmap1,
  roadmap2,
  roadmap3,
  roadmap4,
  searchMd,
  slack,
  sliders04,
  telegram,
  twitter,
  yourlogo,
} from "../assets";

export const navigation = [
  {
    id: "0",
    title: "Features",
    url: "#features",
  },
  {
    id: "1",
    title: "Pricing",
    url: "#pricing",
  },
  {
    id: "2",
    title: "How to use",
    url: "#how-to-use",
  },
  {
    id: "3",
    title: "Roadmap",
    url: "#roadmap",
  },
  {
    id: "4",
    title: "New account",
    url: "#signup",
    onlyMobile: true,
  },
  {
    id: "5",
    title: "Sign in",
    url: "#login",
    onlyMobile: true,
  },
];

export const heroIcons = [homeSmile, file02, searchMd, plusSquare];

export const notificationImages = [notification4, notification3, notification2];

export const companyLogos = [yourlogo, yourlogo, yourlogo, yourlogo, yourlogo];

export const loveFeatures = [
  "Dating Seamless",
  "No Bias Algorithms",
  "Holders right to Vote",
];

export const loveServiceIcons = [
  recording03,
  recording01,
  disc02,
  chromecast,
  sliders04,
];

export const roadmap = [
  
  {
    id: "1",
    title: "Integration with APIs",
    text: "Front-End integration with APIs",
    date: "Jan 2025",
    status: "done",
    imageUrl: roadmap4,
  },
  {
    id: "0",
    title: "Love App customization",
    text: "Allow users to customize the Love App's appearance and behavior, making it more engaging and fun to interact with.",
    date: "March 2025",
    status: "done",
    imageUrl: roadmap3,
  },
  {
    id: "3",
    title: "AI Recommendation System",
    text: "Train the Love App Recommendation AI model to understand and do an unbiased matches with the interested profiles using the preferences and other parameters to voice commands, making it easier for users to interact with the app hands-free.",
    date: "June 2025",
    status: "progress",
    imageUrl: roadmap1,
    colorful: true,
  },
  {
    id: "4",
    title: "Launch worldwide with Internationalization languages support",
    text: "Launch the App world wide in different languages support like en, fr, br etc.,",
    date: "Sept 2025",
    status: "progress",
    imageUrl: roadmap2,
  },
];

export const collabText =
  "In Collaboration with: ";

export const collabContent = [
  {
    id: "0",
    title: "See who Liked your profile",
  },
  {
    id: "1",
    title: "Send Compliments",
  },
  {
    id: "2",
    title: "See likes given",
  },
  
  {
    id: "3",
    title: "Send messages",
  },
  
  {
    id: "4",
    title: "Unlimited Likes",
  },
  
  {
    id: "5",
    title: "Many more premium features",
  },
];

export const collabApps = [
  {
    id: "0",
    title: "Figma",
    icon: figma,
    width: 26,
    height: 36,
  },
  {
    id: "1",
    title: "Notion",
    icon: notion,
    width: 34,
    height: 36,
  },
  {
    id: "2",
    title: "Discord",
    icon: discord,
    width: 36,
    height: 28,
  },
  {
    id: "3",
    title: "Slack",
    icon: slack,
    width: 34,
    height: 35,
  },
  {
    id: "4",
    title: "Photoshop",
    icon: photoshop,
    width: 34,
    height: 34,
  },
  {
    id: "5",
    title: "Protopie",
    icon: protopie,
    width: 34,
    height: 34,
  },
  {
    id: "6",
    title: "Framer",
    icon: framer,
    width: 26,
    height: 34,
  },
  {
    id: "7",
    title: "Raindrop",
    icon: raindrop,
    width: 38,
    height: 32,
  },
];

export const pricing = [
  {
    id: "0",
    title: "Silver",
    description: "Basic App Features",
    price: "0",
    features: [
      "Likes a day - limited",
    ],
  },
  {
    id: "1",
    title: "Gold",
    description: "Premium App Features",
    price: "0",
    features: [
      "Likes a day - unlimited",
      "See who likes you",
    ],
  },
  {
    id: "2",
    title: "Platinum",
    description: "Most Premium App Features",
    price: "0",
    features: [
      "Likes a day - unlimited",
      "See who likes you",
      "See whom you liked",
    ],
  },
  {
    id: "2",
    title: "Titanium",
    description: "Most Premium App Features",
    price: "0",
    features: [
      "Likes a day - unlimited",
      "See who likes you",
      "Send Compliments",
      "See whom you liked",
      "See whom you disliked"
    ],
  },
];

export const benefits = [
  {
    id: "0",
    title: "Decentralized Governance through Love Coin:",
    text: "Love Coin holders can propose and vote on platform developments, updates, and policy changes. By giving users a voice, Love fosters a community where decisions align with user needs, ensuring a more inclusive and transparent platform experience.",
    backgroundUrl: "./src/assets/benefits/card-1.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
  },
  {
    id: "1",
    title: "Proof of Stake (PoS) Rewards System",
    text: "The platform’s PoS mechanism rewards users who stake their Love Coins, providing them with daily or monthly staking rewards based on the amount and duration of their commitment. This system encourages long-term engagement and supports network stability.",
    backgroundUrl: "./src/assets/benefits/card-2.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "2",
    title: "Enhanced Security and Data Privacy",
    text: "We do not sell any of your information to anyone, that's a promise we will always keep. Additionally, your most sensitive data is heavily encrypted and will be safe even if a data breach were to occur.",
    backgroundUrl: "./src/assets/benefits/card-3.svg",
    iconUrl: benefitIcon3,
    imageUrl: benefitImage2,
  },
  {
    id: "3",
    title: "Rewarding Platform Participation",
    text: "Users can earn Love Coins for various activities, such as completing profiles, verifying identities, initiating conversations, and participating in governance. This incentivizes active participation and improves user engagement, making Love a rewarding social ecosystem.",
    backgroundUrl: "./src/assets/benefits/card-4.svg",
    iconUrl: benefitIcon4,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "4",
    title: "Flexible Staking Options",
    text: "The staking feature allows users to lock their Love Coins for set durations, with varying rewards based on the commitment length. This offers flexibility for both short-term users and long-term investors, creating a dynamic and versatile staking ecosystem.",
    backgroundUrl: "./src/assets/benefits/card-5.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
  },
  {
    id: "5",
    title: "Community-Centric Ecosystem",
    text: "Love creates a social space where users feel ownership and are motivated to support the platform’s growth. This community-driven model encourages organic interactions, honest feedback, and a collaborative approach to platform improvement.",
    backgroundUrl: "./src/assets/benefits/card-6.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
  },
];

export const socials = [
  {
    id: "1",
    title: "Twitter",
    iconUrl: twitter,
    url: "https://x.com/lovecoin_online",
  },
  {
    id: "3",
    title: "Telegram",
    iconUrl: telegram,
    url: "https://t.co/OKmlFUAEkB",
  },
];
