export interface SingleDataType {
  name: string;
  mainCover: string;
  $id: string;
  releaseDate: string;
  totalSales: number;
  isPublished: boolean;
  composer: string;
  writer: string;
  group: string;
  kanji: string;
  kana: string | null;
  $createdAt: string;
  $updatedAt: string;
}

export interface GetSingleResponse {
  total: number;
  documents: SingleDataType[];
}
