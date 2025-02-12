export default function SocialLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="my-2">
      {children}
    </section>
  );
}
