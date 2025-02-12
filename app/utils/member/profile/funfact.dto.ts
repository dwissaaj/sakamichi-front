export interface FunfactType {
  funfact: string[];
  variety: string[];
  $id: string;
  $createdAt: string;
  $updatedAt: string;
}
export interface FunfactResponse {
  trivia: {
    total: number;
    documents: FunfactType[];
  };
}
