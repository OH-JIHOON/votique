export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true} className="geistSans.variable geistMono.variable antialiased">
        {children}
      </body>
    </html>
  );
}