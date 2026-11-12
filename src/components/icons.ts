import {
  BriefcaseBusiness,
  CalendarDays,
  Clock3,
  EyeOff,
  ListChecks,
  MapPin,
  MessageCircle,
  Plane,
  Repeat,
  Route,
  ShieldCheck,
  Sparkles,
  UserRoundCheck,
  type LucideIcon,
} from 'lucide-react';
import type { IconKey } from '../data/site';

export const icons: Record<IconKey, LucideIcon> = {
  plane: Plane,
  briefcase: BriefcaseBusiness,
  calendar: CalendarDays,
  route: Route,
  repeat: Repeat,
  sparkles: Sparkles,
  clock: Clock3,
  user: UserRoundCheck,
  'eye-off': EyeOff,
  message: MessageCircle,
  shield: ShieldCheck,
  'map-pin': MapPin,
  list: ListChecks,
};
