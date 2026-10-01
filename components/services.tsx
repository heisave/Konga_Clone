import Link from "next/link";
import { ReactNode } from "react";
import { Briefcase, Truck, ShoppingBasket, Tv, Wallet, Activity } from "lucide-react";
import services from "./data/services.json";

const PINK = "text-[#E4007C]";

function EBadge() {
  return (
    <span className="flex h-4 w-4 items-center justify-center rounded-full bg-[#F68B1E] text-[10px] font-bold text-white">
      e
    </span>
  );
}

// Logo/visual for each service, keyed by id (JSX can't live in JSON).
function renderLogo(id: string): ReactNode {
  switch (id) {
    case "travel":
      return (
        <span className="flex items-center gap-2">
          <Briefcase className="h-5 w-5 text-[#F68B1E]" />
          <span className="text-[15px] tracking-wide text-gray-900">TRAVEL</span>
        </span>
      );
    case "kongapay":
      return (
        <span className="flex items-center gap-1.5">
          <Wallet className={`h-5 w-5 ${PINK}`} />
          <span className="text-[15px] font-medium text-gray-900">KongaPay</span>
        </span>
      );
    case "corporate":
      return (
        <span className="flex flex-col items-center leading-none">
          <span className="flex items-center gap-0.5 text-[15px] font-extrabold italic text-[#E4007C]">
            <EBadge />
            konga
          </span>
          <span className="text-[10px] font-bold text-gray-900">Corporate</span>
        </span>
      );
    case "health":
      return (
        <span className="flex flex-col items-center leading-none">
          <span className="text-[14px] font-extrabold italic text-[#E4007C]">
            KongaHealth
          </span>
          <Activity className="h-3 w-16 text-[#1E5BD8]" />
        </span>
      );
    case "logistics":
      return (
        <span className="flex items-center gap-2">
          <Truck className={`h-5 w-5 ${PINK}`} />
          <span className="text-[15px] tracking-wide text-gray-900">LOGISTICS</span>
        </span>
      );
    case "groceries":
      return (
        <span className="flex items-center gap-2">
          <ShoppingBasket className={`h-5 w-5 ${PINK}`} />
          <span className="text-[14px] tracking-wide text-gray-900">GROCERIES</span>
        </span>
      );
    case "kongatv":
      return (
        <span className="flex items-center gap-1.5">
          <Tv className={`h-5 w-5 ${PINK}`} />
          <span className="text-[15px] font-extrabold italic text-[#E4007C]">
            Konga<span className="text-[#F68B1E]">TV</span>
          </span>
        </span>
      );
    case "konganow":
      return (
        <span className="flex items-center gap-0.5">
          <EBadge />
          <span className="text-[15px] font-extrabold italic text-gray-900">
            konga<span className="text-[13px] not-italic">NOW</span>
          </span>
        </span>
      );
    default:
      return null;
  }
}

export default function ServicesBar() {
  return (
    <div className="w-full bg-[#F2F2F2] px-4 py-2">
      <div className="mx-auto flex h-[50px] w-full max-w-[1044px] items-center justify-between rounded-lg bg-white px-6 shadow-sm">
        {services.map((service) => (
          <Link
            key={service.id}
            href={service.href}
            aria-label={service.label}
            className="flex items-center justify-center transition-opacity hover:opacity-70"
          >
            {renderLogo(service.id)}
          </Link>
        ))}
      </div>
    </div>
  );
}