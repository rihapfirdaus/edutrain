export interface Training {
  id: string;
  createdAt: string;
  title: string;
  banner: string;
  description: string;
  status: string;
  certificate: string | null;
  syllabus: string | null;
  urlExternalTitle: string | null;
  urlExternal: string | null;
  startTime: string;
  endTime: string;
  eventType: string;
  showPrice: string | null;
  category: Category;
  subCategory: SubCategory;
  isRegistered: boolean;
  lastTrainingHistory: TrainingHistory;
}

interface TrainingHistory {
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
