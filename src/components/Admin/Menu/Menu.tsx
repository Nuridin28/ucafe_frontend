"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Product } from "@/types/types";
import { ProductCard } from "./ProductCard";
import { ProductDetails } from "./ProductDetails";
import { AddProductForm } from "../AddMenuItem/AddMenuItemForm";

export function Menu() {
  const [products, setProducts] = useState<Product[]>([
    {
      id: "1",
      name: "Классический бургер",
      price: 299,
      description:
        "Сочная говяжья котлета, свежие овощи, фирменный соус на булочке с кунжутом",
      image:
        "https://www.allrecipes.com/thmb/5JVfA7MxfTUPfRerQMdF-nGKsLY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/25473-the-perfect-basic-burger-DDMFS-4x3-56eaba3833fd4a26a82755bcd0be0c54.jpg",
    },
    {
      id: "2",
      name: "Цезарь салат",
      price: 249,
      description:
        "Свежий салат ромэн, куриное филе, гренки, сыр пармезан и соус цезарь",
      image:
        "https://www.allrecipes.com/thmb/5JVfA7MxfTUPfRerQMdF-nGKsLY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/25473-the-perfect-basic-burger-DDMFS-4x3-56eaba3833fd4a26a82755bcd0be0c54.jpg",
    },
    {
      id: "3",
      name: "Пицца Маргарита",
      price: 399,
      description:
        "Традиционная итальянская пицца с томатным соусом, моцареллой и базиликом",
      image:
        "https://www.allrecipes.com/thmb/5JVfA7MxfTUPfRerQMdF-nGKsLY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/25473-the-perfect-basic-burger-DDMFS-4x3-56eaba3833fd4a26a82755bcd0be0c54.jpg",
    },
  ]);

  const [isDetailsOpen, setIsDetailsOpen] = useState(false);
  const [isAddFormOpen, setIsAddFormOpen] = useState(false);
  const [currentProduct, setCurrentProduct] = useState<Product | null>(null);

  const handleEdit = (product: Product) => {
    setCurrentProduct(product);
    setIsDetailsOpen(true);
  };

  const handleDelete = (id: string) => {
    setProducts(products.filter((product) => product.id !== id));
  };

  const handleSave = (updatedProduct: Product) => {
    setProducts(
      products.map((product) =>
        product.id === updatedProduct.id ? updatedProduct : product
      )
    );
    setIsDetailsOpen(false);
    setCurrentProduct(null);
  };

  const handleAdd = (newProduct: Product) => {
    setProducts([...products, newProduct]);
    setIsAddFormOpen(false);
  };

  const handleCancel = () => {
    setIsDetailsOpen(false);
    setIsAddFormOpen(false);
    setCurrentProduct(null);
  };

  return (
    <div className="p-12">
      <div className="flex flex-wrap justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold">Список продуктов</h2>
        <Button
          onClick={() => setIsAddFormOpen(true)}
          className="bg-primary hover:bg-primary/90"
        >
          <Plus className="h-5 w-5 mr-2" />
          Добавить продукт
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onEdit={handleEdit}
            onDelete={handleDelete}
          />
        ))}
      </div>

      {isDetailsOpen && currentProduct && (
        <ProductDetails
          product={currentProduct}
          onSave={handleSave}
          onCancel={handleCancel}
        />
      )}

      {isAddFormOpen && (
        <AddProductForm onAdd={handleAdd} onCancel={handleCancel} />
      )}
    </div>
  );
}
