interface MemberResponse {
  name: string;
  birthdate: string;
  penlight: any[]; // Replace with a more specific type if needed
  nickname: string;
  debut: string;
  graduate: boolean;
  bloodtype: string;
  agency: string;
  nameKana: string;
  nameKanji: string;
  generation: number;
  group: string;
  birthplace: string;
  height: number;
  $id: string;
  $createdAt: string;
  $updatedAt: string;
  $permissions: string[];
  singles: any[];
  socialMedia: any;
  galleries: any[];
  $databaseId: string;
  $collectionId: string;
}

interface MemberResponse {
  total: number;
  documents: MemberResponse[];
}
