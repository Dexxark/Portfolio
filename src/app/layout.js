import "./globals.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";

config.autoAddCss = false;

export const metadata = {
  title: "Mathieu Etcheverry - Portfolio",
  description:
    "Je suis Mathieu Etcheverry, développeur front-end",
  themeColor: "black",
  icons: {
    icon: "./favicon.ico",
    shortcut: "./favicon.ico",
  },
  metadataBase: new URL("https://mathieu-etcheverry.vercel.app"),
  openGraph: {
    title: "Mathieu Etcheverry - Portfolio",
    description:
      "Je suis Mathieu Etcheverry, développeur front-end",
    url: "https://mathieu-etcheverry.vercel.app",
    siteName: "Mathieu Etcheverry - Portfolio",
    images: [
      {
        url: "/img/img-main-rs.png",
        width: 800,
        height: 600,
      },
      {
        url: "/img/img-main-rs.png",
        width: 1800,
        height: 1600,
      },
    ],
    locale: "fr_FR",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr" className="scroll-smooth">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1" />
      </head>
      <body className={`overflow-x-hidden bg-off-white text-gray-global`} >
        <main>{children}</main>
      </body>
    </html>
  );
}