export interface CoverProfileResponse {
  profile: {
    documents: CoverProfileProps[];
    total: number;
  };
}

export interface CoverProfileProps {
  $id: string;
  name: string;
  profilePic: string;
  group: string;
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
  generation: number;
  graduate: boolean;
  group: string;
  height: number;
  name: string;
  nameKana: string;
  nameKanji: string;
  socialMedias: string | null;
}
