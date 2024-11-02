import {
  MessageCircleQuestion as QuestionIcon,
  Ban as BanIcon,
  CreditCard as CreditCardIcon,
  DollarSign as DollarSignIcon,
  Mail as MailIcon,
  Tag as TagIcon,
  Truck as TruckIcon,
} from "lucide-react";
import CardBase from "./CardBase";

interface MiniFaqProps {
  data: any;
}

export default function MiniFaq({ data }: MiniFaqProps) {
  let Icon;

  switch (data.icon) {
    case "Ban":
      Icon = BanIcon;
      break;
    case "CreditCard":
      Icon = CreditCardIcon;
      break;
    case "DollarSign":
      Icon = DollarSignIcon;
      break;
    case "Mail":
      Icon = MailIcon;
      break;
    case "Tag":
      Icon = TagIcon;
      break;
    case "Truck":
      Icon = TruckIcon;
      break;
    default:
      Icon = QuestionIcon;
  }

  return (
    <CardBase className="flex-col min-w-72 max-w-80 p-4 h-fit">
      <Icon size={40} className="bg-primary text-white p-2 rounded-full" />
      <h3 className="font-bold text-xl">{data.question}</h3>
      <p>{data.answer}</p>
    </CardBase>
  );
}
