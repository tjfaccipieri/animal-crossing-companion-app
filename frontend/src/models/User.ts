export interface User {
  id: number;
  username: string;
  password: string;
  email: string;
  totalDonatedBugs: number;
  totalDonatedFishes: number;
  totalDonatedFossil: number;
  totalDonatedSeaCreatures: number;
  totalDonatedArt: number;
  donatedBugsIds: string[];
  donatedFishesIds: string[];
  donatedArtsIds: string[];
  donatedSeaCreaturesIds: string[];
  donatedFossilsIds: string[];
}
