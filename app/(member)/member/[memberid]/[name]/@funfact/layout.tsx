export default function FunfactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="flex justify-center items-start">
      {children}
    </section>
  );
}
