"use client";

import { Package2, User } from "lucide-react";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";

export interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  image: string;
  quantity: number;
}

export interface CompletedOrder {
  id: string;
  orderNumber: string;
  customerName: string;
  completedTime: string;
  products: Product[];
}

interface CompletedOrderCardProps {
  order: CompletedOrder;
}

export function CompletedOrderCard({ order }: CompletedOrderCardProps) {
  return (
    <Card className="w-full">
      <CardHeader className="pb-2 flex flex-row items-center justify-between">
        <div className="flex items-center gap-2">
          <Badge
            variant="outline"
            className="text-2xl font-bold px-3 py-1.5 border-2"
          >
            #{order.orderNumber}
          </Badge>
          <div className="flex flex-col">
            <p className="text-xs text-muted-foreground">Completed at</p>
            <p className="text-sm font-medium">{order.completedTime}</p>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          {order.products.map((product) => (
            <div key={product.id} className="flex items-center gap-3">
              <div className="relative h-10 w-10 overflow-hidden rounded-md flex-shrink-0">
                <img
                  src={product.image || "/placeholder.svg?height=40&width=40"}
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
              </div>
            </div>
          ))}
        </div>
        <Separator className="my-3" />
        <div className="flex items-center gap-2 text-sm">
          <User className="h-4 w-4 text-muted-foreground" />
          <span className="font-medium">For:</span> {order.customerName}
        </div>
      </CardContent>
      <CardFooter className="bg-muted/30 py-2">
        <div className="flex items-center gap-2 text-sm w-full">
          <Package2 className="h-4 w-4 text-muted-foreground" />
          <span className="font-medium">Items:</span>{" "}
          {order.products.reduce((sum, product) => sum + product.quantity, 0)}
        </div>
      </CardFooter>
    </Card>
  );
}

export function CompletedOrdersList({ orders }: { orders: CompletedOrder[] }) {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {orders.map((order) => (
        <CompletedOrderCard key={order.id} order={order} />
      ))}
    </div>
  );
}
