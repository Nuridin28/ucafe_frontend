"use client";

import { useState } from "react";
import { Check, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { toast } from "@/hooks/use-toast";

export interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  image: string;
}

interface OrderRequestProps {
  orderId: string;
  customerName: string;
  orderTime: string;
  products: Product[];
  status: "pending" | "accepted" | "rejected";
  onAccept: (orderId: string) => void;
  onReject: (orderId: string) => void;
}

export function OrderRequest({
  orderId,
  customerName,
  orderTime,
  products,
  status = "pending",
  onAccept,
  onReject,
}: OrderRequestProps) {
  const [orderStatus, setOrderStatus] = useState(status);

  const totalPrice = products.reduce((sum, product) => sum + product.price, 0);

  const handleAccept = () => {
    setOrderStatus("accepted");
    onAccept(orderId);
    toast({
      title: "Order Accepted",
      description: `Order #${orderId} has been accepted.`,
    });
  };

  const handleReject = () => {
    setOrderStatus("rejected");
    onReject(orderId);
    toast({
      title: "Order Rejected",
      description: `Order #${orderId} has been rejected.`,
    });
  };

  return (
    <Card className="w-full max-w-3xl mx-auto">
      <CardHeader className="flex flex-row items-center justify-between">
        <div>
          <CardTitle className="text-xl">Order #{orderId}</CardTitle>
          <CardDescription>
            {customerName} • {orderTime}
          </CardDescription>
        </div>
        <Badge
          variant={
            orderStatus === "accepted"
              ? "default"
              : orderStatus === "rejected"
              ? "destructive"
              : "outline"
          }
        >
          {orderStatus === "accepted"
            ? "Accepted"
            : orderStatus === "rejected"
            ? "Rejected"
            : "Pending"}
        </Badge>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {products.map((product) => (
            <div key={product.id} className="flex items-center gap-4">
              <div className="relative h-16 w-16 overflow-hidden rounded-md">
                <img
                  src={product.image || "/placeholder.svg?height=64&width=64"}
                  alt={product.name}
                  className="object-cover"
                />
              </div>
              <div className="flex-1">
                <h3 className="font-medium">{product.name}</h3>
                <p className="text-sm text-muted-foreground line-clamp-1">
                  {product.description}
                </p>
              </div>
              <div className="font-medium">${product.price.toFixed(2)}</div>
            </div>
          ))}
        </div>
        <Separator className="my-4" />
        <div className="flex justify-between font-medium">
          <span>Total</span>
          <span>${totalPrice.toFixed(2)}</span>
        </div>
      </CardContent>
      <CardFooter className="flex justify-end gap-2">
        {orderStatus === "pending" && (
          <>
            <Button variant="outline" onClick={handleReject}>
              <X className="mr-2 h-4 w-4" />
              Reject Order
            </Button>
            <Button onClick={handleAccept}>
              <Check className="mr-2 h-4 w-4" />
              Accept Order
            </Button>
          </>
        )}
      </CardFooter>
    </Card>
  );
}
