import { Search, TrendingUp } from "lucide-react";
import Link from "next/link";

export function TopicHeader() {
  return (
    <header className="border-b border-border bg-card">
      <div className="container mx-auto px-4 py-4 lg:px-8">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
              <TrendingUp className="h-6 w-6 text-primary-foreground" />
            </div>
            <Link href="/" className="hover:opacity-80 transition-opacity">
              <div>
                <h1 className="text-2xl font-bold text-foreground">
                  TrendingOrbit
                </h1>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
