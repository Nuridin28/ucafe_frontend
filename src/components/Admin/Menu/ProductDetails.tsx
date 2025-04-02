"use client";

import type React from "react";

import { useState } from "react";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Product } from "../../../types/types";

interface ProductDetailsProps {
  product: Product;
  onSave: (product: Product) => void;
  onCancel: () => void;
}

export function ProductDetails({
  product,
  onSave,
  onCancel,
}: ProductDetailsProps) {
  const [editedProduct, setEditedProduct] = useState<Product>({ ...product });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setEditedProduct({
      ...editedProduct,
      [name]: name === "price" ? Number.parseFloat(value) : value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(editedProduct);
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-background rounded-lg w-full max-w-md max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-xl font-semibold">Редактирование продукта</h2>
          <Button variant="ghost" size="icon" onClick={onCancel}>
            <X className="h-5 w-5" />
          </Button>
        </div>

        <form onSubmit={handleSubmit} className="p-4 space-y-4">
          <div className="relative h-48 w-full mb-4">
            <img
              src={editedProduct.image || "/placeholder.svg"}
              alt={editedProduct.name}
              className="object-cover rounded-md"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="name">Название</Label>
            <Input
              id="name"
              name="name"
              value={editedProduct.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="price">Цена (₽)</Label>
            <Input
              id="price"
              name="price"
              type="number"
              value={editedProduct.price}
              onChange={handleChange}
              required
              min="0"
              step="0.01"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="description">Описание</Label>
            <Textarea
              id="description"
              name="description"
              value={editedProduct.description}
              onChange={handleChange}
              rows={3}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="image">URL изображения</Label>
            <Input
              id="image"
              name="image"
              value={editedProduct.image}
              onChange={handleChange}
            />
          </div>

          <div className="flex gap-2 pt-4">
            <Button type="submit" className="flex-1">
              Сохранить
            </Button>
            <Button
              type="button"
              variant="outline"
              className="flex-1"
              onClick={onCancel}
            >
              Отмена
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
