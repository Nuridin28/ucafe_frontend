"use client";

import { useState } from "react";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Product } from "@/types/types";

interface AddProductFormProps {
  onAdd: (product: Product) => void;
  onCancel: () => void;
}

export function AddProductForm({ onAdd, onCancel }: AddProductFormProps) {
  const [newProduct, setNewProduct] = useState<Omit<Product, "id">>({
    name: "",
    price: 0,
    description: "",
    image: "/placeholder.svg?height=200&width=200",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setNewProduct({
      ...newProduct,
      [name]: name === "price" ? parseFloat(value) : value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Generate a unique ID for the new product
    const id = Date.now().toString();
    onAdd({ id, ...newProduct });
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-background rounded-lg w-full max-w-md max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-xl font-semibold">Добавление нового продукта</h2>
          <Button variant="ghost" size="icon" onClick={onCancel}>
            <X className="h-5 w-5" />
          </Button>
        </div>

        <form onSubmit={handleSubmit} className="p-4 space-y-4">
          <div className="relative h-48 w-full mb-4">
            <img
              src={newProduct.image || "/placeholder.svg"}
              alt="Предпросмотр изображения"
              className="object-cover rounded-md"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="name">Название</Label>
            <Input
              id="name"
              name="name"
              value={newProduct.name}
              onChange={handleChange}
              placeholder="Введите название продукта"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="price">Цена (₽)</Label>
            <Input
              id="price"
              name="price"
              type="number"
              value={newProduct.price || ""}
              onChange={handleChange}
              placeholder="0"
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
              value={newProduct.description}
              onChange={handleChange}
              placeholder="Введите описание продукта"
              rows={3}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="image">URL изображения</Label>
            <Input
              id="image"
              name="image"
              value={newProduct.image}
              onChange={handleChange}
              placeholder="https://example.com/image.jpg"
            />
          </div>

          <div className="flex gap-2 pt-4">
            <Button type="submit" className="flex-1">
              Добавить
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
