export interface GalleryType {
  name: string;
  date: string;
  isProfile: boolean;
  url: string;
  $id: string;
  $createdAt: string;
  $updatedAt: string;
}
export interface GalleryResponse {
  gallery: {
    total: number;
    documents: GalleryType[];
  };
}

export interface GalleryCardProps {
  url: string;
  name: string;
  date: string;
}
