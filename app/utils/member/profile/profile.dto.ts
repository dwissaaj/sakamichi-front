export interface ProfileCardProps {
  member: ProfileType
}
export interface ProfileType {
  $databaseId: string;
  $collectionId: string;
  $id: string;
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
  nickname: string[]
  penlight: string[]
}
