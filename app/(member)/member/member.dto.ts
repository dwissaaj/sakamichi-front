export interface CoverResponse {
  cover: {
    documents: CoverMemberType[];
    total: number;
  };
}

export interface CoverMemberType {
  $databaseId: string;
  $collectionId: string;
  $id: string;
  $permissions: string[];
  $updatedAt: string;
  $createdAt: string;
  date: string;
  isProfile: boolean;
  name: string;
  url: string;
  galleryOfMember: MemberType;
}

export interface MemberType {
  $databaseId: string;
  $collectionId: string;
  $id: string;
  $permissions: string[];
  $updatedAt: string;
  $createdAt: string;
  agency: string;
  birthdate: string;
  birthplace: string;
  bloodtype: string | null;
  debut: string;
  funfact: string[];
  gallery: string[];
  generation: number;
  graduate: boolean;
  group: string;
  height: number;
  name: string;
  nameKana: string;
  nameKanji: string;
  nickname: string[];
  penlight: string[];
  singles: string[];
  socialMedias: string | null;
}
