import GalleryLayout from "./@gallery/layout"

export default async function MemberLayout({
    children,
    gallery,
    social,
    funfact
  }: {
    children: React.ReactNode;
    gallery: React.ReactNode;
    social: React.ReactNode;
    funfact: React.ReactNode;
  }) {
   
    return (
      <div>
       {children}
       {gallery}
       {funfact}
       {social}
      </div>
    )
  }