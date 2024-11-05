import { Href } from "expo-router";

type MenuItem = {
  href: Href<string>;
  text: string;
};

export const MainMenuMap : MenuItem[] = [
  { href: '/artists', text: 'Artists' },
  { href: '/albums', text: 'Albums' },
  { href: '/songs', text: 'Songs' },
];
