"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { CategoryData } from "@/types/types";

interface CategoryFilterProps {
  categories: CategoryData[];
  selectedCategory: string | undefined;
  onCategoryChange: (category: string | undefined) => void;
}

export function CategoryFilter({
  categories,
  selectedCategory,
  onCategoryChange,
}: CategoryFilterProps) {
  const toggleCategory = (name: string) => {
    if (selectedCategory === name) {
      onCategoryChange(undefined);
      return;
    }
    onCategoryChange(name);
  };

  return (
    <Card className="bg-card">
      <CardHeader>
        <CardTitle className="text-foreground">Categories</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {categories?.map((category, index) => (
          <div key={index} className="flex items-center gap-3">
            <Checkbox
              id={category.id}
              checked={selectedCategory === category?.name}
              onCheckedChange={() => toggleCategory(category.name ?? "")}
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
