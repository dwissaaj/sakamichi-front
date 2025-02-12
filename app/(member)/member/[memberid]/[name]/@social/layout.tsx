export default function SocialLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="w-full flex flex-col items-center justify-center">
      {children}
    </section>
  );
}
