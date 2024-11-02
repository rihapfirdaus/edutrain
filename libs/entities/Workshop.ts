export interface Workshop {
  id: string;
  createdAt: string;
  title: string;
  banner: string;
  description: string;
  instructor: string;
  status: string;
  startTime: string;
  endTime: string;
  eventType: string;
  certificate: string | null;
  playbackUrl: string | null;
  isRegistered: boolean;
  isVerified: boolean;
  lastWorkshopHistory: WorkshopHistory;
  category: Category;
  subCategory: SubCategory;
}
interface WorkshopHistory {
  price: string;
  discount: string | null;
}
interface Category {
  id: string;
  name: string;
}
interface SubCategory {
  id: string;
  name: string;
}
