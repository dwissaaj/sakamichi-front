export interface SingleResponse {
  name: string;
  url: string;
  numberCover: number;
  mainTrack: string;
  $id: string;
  $createdAt: string;
  $updatedAt: string;
}

export interface GetSingleResponse {
  single: {
    total: number;
    documents: SingleResponse[];
  };
}
