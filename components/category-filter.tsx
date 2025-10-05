"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { CategoryData } from "@/types/types";

export function CategoryFilter({ categories }: { categories: CategoryData[] }) {
  const [selected, setSelected] = useState<string>("plants");

  const toggleCategory = (id: string) => {
    setSelected(id);
  };

  return (
    <Card className="bg-card">
      <CardHeader>
        <CardTitle className="text-foreground">Categories</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {categories?.map((category) => (
          <div key={category.id} className="flex items-center gap-3">
            <Checkbox
              id={category.id}
              checked={selected.includes(category.id)}
              onCheckedChange={() => toggleCategory(category.id)}
              className="data-[state=checked]:bg-primary data-[state=checked]:border-primary"
            />
            <Label
              htmlFor={category.id}
              className="text-sm font-medium leading-none cursor-pointer text-foreground peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              {category.name}
            </Label>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
