import "./globals.css";

export const metadata = {
  title: "StudyBuddy — Um novo jeito de estudar!",
  description: "Um novo jeito de estudar!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
