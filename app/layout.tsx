import './globals.css';

export const metadata = {
  title: 'Grzesiek Portfolio',
  description: 'Grzegorz Ryczkowski Portfolio',
  images: [
    {
      src: '../public/my-portfolio.png',
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
