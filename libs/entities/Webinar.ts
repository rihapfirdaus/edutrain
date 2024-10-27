export interface Webinar {
  id: string;
  createdAt: string;
  title: string;
  banner: string;
  description: string;
  startTime: string;
  endTime: string;
  eventStatus: string;
  maxAttendees: number;
  eventType: string;
  certificate: string | null;
  isRegistered: boolean;
  lastWebinarHistory: WebinarHistory;
  category: Category;
  subCategory: SubCategory;
}
interface WebinarHistory {
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
