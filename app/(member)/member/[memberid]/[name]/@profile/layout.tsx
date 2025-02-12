export default async function ProfileLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="w-full lg:w-3/4 flex flex-col items-center justify-center">
      {children}
    </section>
  );
}
