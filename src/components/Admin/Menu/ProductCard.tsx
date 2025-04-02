"use client";

import { Edit, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Product } from "../../../types/types";

interface ProductCardProps {
  product: Product;
  onEdit: (product: Product) => void;
  onDelete: (id: string) => void;
}

export function ProductCard({ product, onEdit, onDelete }: ProductCardProps) {
  return (
    <Card className="overflow-hidden">
      <div className="relative h-48 w-full">
        <img
          src={product.image || "/placeholder.svg"}
          alt={product.name}
          className="object-cover"
        />
      </div>
      <CardHeader>
        <div className="flex justify-between items-start">
          <h3 className="text-xl font-semibold">{product.name}</h3>
          <span className="font-bold text-primary">{product.price} ₽</span>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground">{product.description}</p>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline" size="sm" onClick={() => onEdit(product)}>
          <Edit className="h-4 w-4 mr-2" />
          Изменить
        </Button>
        <Button
          variant="destructive"
          size="sm"
          onClick={() => onDelete(product.id)}
        >
          <Trash2 className="h-4 w-4 mr-2" />
          Удалить
        </Button>
      </CardFooter>
    </Card>
  );
}
