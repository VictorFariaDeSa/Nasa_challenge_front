import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import Image from "next/image";

interface DashboardHeaderProps {
  searchTerm: string;
  onSearchChange: (value: string) => void;
}

export function DashboardHeader({
  searchTerm,
  onSearchChange,
}: DashboardHeaderProps) {
  return (
    <header className="border-b border-border bg-card">
      <div className="container mx-auto px-4 py-4 lg:px-8">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                stroke="#FFD369"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <path
                    d="M8 5.07026C9.17669 4.38958 10.5429 4 12 4C16.4183 4 20 7.58172 20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12C4 10.5429 4.38958 9.17669 5.07026 8"
                    stroke="#FFD369"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  ></path>{" "}
                  <path
                    d="M13.8309 14.9264C8.40242 17.8185 3.18203 18.8529 2.17085 17.2367C1.63758 16.3844 2.38148 14.9651 4 13.3897M17.8486 6.19085C19.8605 5.81929 21.3391 5.98001 21.8291 6.76327C22.6266 8.03781 20.5682 10.5801 17 13.0164"
                    stroke="#FFD369"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>{" "}
                </g>
              </svg>
              {/* <TrendingUp className="h-6 w-6 text-primary-foreground" /> */}
            </div>
            <Link href="/" className="hover:opacity-80 transition-opacity">
              <div>
                <h1 className="text-2xl font-bold text-foreground">
                  TrendingOrbit
                </h1>
              </div>
            </Link>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <div className="relative w-full sm:w-64">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search"
                className="pl-9 bg-background"
                value={searchTerm}
                onChange={(e) => onSearchChange(e.target.value)}
              />
            </div>

            {/* <Select defaultValue="2year">
              <SelectTrigger className="w-full sm:w-32 bg-background">
                <SelectValue placeholder="TimeFrame" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1year">1 Year</SelectItem>
                <SelectItem value="2year">2 Year</SelectItem>
                <SelectItem value="5year">5 Year</SelectItem>
                <SelectItem value="all">All Time</SelectItem>
              </SelectContent>
            </Select> */}
          </div>
        </div>
      </div>
    </header>
  );
}
