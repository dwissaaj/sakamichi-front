export interface SocialType {
  instagram: string;
  website: string;
  showroom: string;
  blog: string;
  other: string;
  $id: string;
  $createdAt: string;
  $updatedAt: string;
}
export interface SocialResponse {
  social: {
    total: number;
    documents: SocialType[];
  };
}

export interface SocialCardProps {
  instagram: string;
  website: string;
  showroom: string;
  blog: string;
  other: string;
  key: string;
}
