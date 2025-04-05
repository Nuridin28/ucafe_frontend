"use client";

import { useState } from "react";
import { Clock, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { toast } from "@/hooks/use-toast";

export interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  image: string;
  quantity: number;
}

export interface Order {
  id: string;
  customerName: string;
  receivedTime: string;
  products: Product[];
  elapsedTime?: string;
}

interface RunningOrderProps {
  order: Order;
  onOrderReady: (orderId: string) => void;
}

export function RunningOrder({ order, onOrderReady }: RunningOrderProps) {
  const [isReady, setIsReady] = useState(false);

  const handleOrderReady = () => {
    setIsReady(true);
    onOrderReady(order.id);
    toast({
      title: "Order Ready",
      description: `Order #${order.id} has been marked as ready for pickup.`,
    });
  };

  return (
    <Card className={`w-full ${isReady ? "opacity-50" : ""}`}>
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <div>
            <CardTitle className="text-lg">Order #{order.id}</CardTitle>
            <p className="text-sm text-muted-foreground">
              {order.customerName}
            </p>
          </div>
          <div className="flex flex-col items-end">
            <div className="flex items-center text-amber-600">
              <Clock className="h-4 w-4 mr-1" />
              <span className="text-sm font-medium">{order.elapsedTime}</span>
            </div>
            <p className="text-xs text-muted-foreground">
              Received: {order.receivedTime}
            </p>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          {order.products.map((product) => (
            <div key={product.id} className="flex items-center gap-3">
              <div className="relative h-12 w-12 overflow-hidden rounded-md flex-shrink-0">
                <img
                  src={product.image || "/placeholder.svg?height=48&width=48"}
                  alt={product.name}
                  className="object-cover"
                />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex justify-between">
                  <p className="font-medium truncate">{product.name}</p>
                  <p className="text-sm font-medium ml-2">
                    x{product.quantity}
                  </p>
                </div>
                <p className="text-xs text-muted-foreground truncate">
                  {product.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        <Separator className="my-3" />
        <div className="text-sm">
          <span className="font-medium">Total Items:</span>{" "}
          {order.products.reduce((sum, product) => sum + product.quantity, 0)}
        </div>
      </CardContent>
      <CardFooter>
        <Button
          className="w-full"
          variant={isReady ? "outline" : "default"}
          onClick={handleOrderReady}
          disabled={isReady}
        >
          <CheckCircle2 className="mr-2 h-4 w-4" />
          {isReady ? "Completed" : "Mark as Ready"}
        </Button>
      </CardFooter>
    </Card>
  );
}

export function RunningOrdersList({
  orders,
  onOrderReady,
}: {
  orders: Order[];
  onOrderReady: (orderId: string) => void;
}) {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {orders.map((order) => (
        <RunningOrder
          key={order.id}
          order={order}
          onOrderReady={onOrderReady}
        />
      ))}
    </div>
  );
}
