import "./globals.css";
export const metadata = {
  title: "Star Ecommerce",
  description: "Powered by Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
