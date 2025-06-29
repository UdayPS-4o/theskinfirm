import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gallery | The Skin Firm - Before and After Treatment Results",
  description: "Browse our gallery of before and after treatment images showcasing the remarkable results of our skincare treatments at The Skin Firm.",
};

export default function GalleryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      {children}
    </section>
  );
}