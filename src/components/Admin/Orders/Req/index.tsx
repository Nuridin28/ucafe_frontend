import { Toaster } from "@/components/ui/toaster";
import { OrderRequest } from "./OrderRequest";

// Sample data
const sampleOrder = {
  orderId: "ORD-1234",
  customerName: "Alex Johnson",
  orderTime: "Today at 10:45 AM",
  status: "pending" as const,
  products: [
    {
      id: "1",
      name: "Cappuccino",
      price: 4.5,
      description: "Espresso with steamed milk and a deep layer of foam",
      image: "/placeholder.svg?height=64&width=64",
    },
    {
      id: "2",
      name: "Croissant",
      price: 3.25,
      description: "Buttery, flaky, French viennoiserie pastry",
      image: "/placeholder.svg?height=64&width=64",
    },
    {
      id: "3",
      name: "Avocado Toast",
      price: 8.75,
      description:
        "Toasted artisan bread topped with avocado, cherry tomatoes, and microgreens",
      image: "/placeholder.svg?height=64&width=64",
    },
  ],
};

export default function RequestOrder() {
  const handleAcceptOrder = (orderId: string) => {
    console.log(`Order ${orderId} accepted`);
  };

  const handleRejectOrder = (orderId: string) => {
    console.log(`Order ${orderId} rejected`);
  };

  return (
    <div className="container py-10">
      <h1 className="text-3xl font-bold mb-8 text-center">Incoming Orders</h1>
      <div className="space-y-6">
        <OrderRequest
          {...sampleOrder}
          onAccept={handleAcceptOrder}
          onReject={handleRejectOrder}
        />

        {/* You can add more orders here */}
        <OrderRequest
          orderId="ORD-1235"
          customerName="Maria Garcia"
          orderTime="Today at 11:15 AM"
          status="pending"
          products={[
            {
              id: "4",
              name: "Latte",
              price: 5.0,
              description:
                "Espresso with steamed milk and a light layer of foam",
              image: "/placeholder.svg?height=64&width=64",
            },
            {
              id: "5",
              name: "Blueberry Muffin",
              price: 3.5,
              description: "Freshly baked muffin filled with blueberries",
              image: "/placeholder.svg?height=64&width=64",
            },
          ]}
          onAccept={handleAcceptOrder}
          onReject={handleRejectOrder}
        />
      </div>
      <Toaster />
    </div>
  );
}
