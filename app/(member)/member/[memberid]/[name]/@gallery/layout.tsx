export default function GalleryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="min-h-screen w-full overflow-x-hidden">
      {children}
    </section>
  );
}
