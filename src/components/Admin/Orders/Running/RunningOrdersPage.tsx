import { Toaster } from "@/components/ui/toaster";
import { RunningOrdersList } from "./RunningOrder";

// Sample data
const runningOrders = [
  {
    id: "1234",
    customerName: "Alex Johnson",
    receivedTime: "10:45 AM",
    elapsedTime: "12 min",
    products: [
      {
        id: "1",
        name: "Cappuccino",
        price: 4.5,
        description: "Espresso with steamed milk and foam",
        image: "/placeholder.svg?height=48&width=48",
        quantity: 1,
      },
      {
        id: "2",
        name: "Croissant",
        price: 3.25,
        description: "Buttery, flaky pastry",
        image: "/placeholder.svg?height=48&width=48",
        quantity: 2,
      },
    ],
  },
  {
    id: "1235",
    customerName: "Maria Garcia",
    receivedTime: "11:02 AM",
    elapsedTime: "8 min",
    products: [
      {
        id: "3",
        name: "Latte",
        price: 5.0,
        description: "Espresso with steamed milk",
        image: "/placeholder.svg?height=48&width=48",
        quantity: 1,
      },
      {
        id: "4",
        name: "Avocado Toast",
        price: 8.75,
        description: "Toast with avocado and toppings",
        image: "/placeholder.svg?height=48&width=48",
        quantity: 1,
      },
    ],
  },
  {
    id: "1236",
    customerName: "John Smith",
    receivedTime: "11:15 AM",
    elapsedTime: "5 min",
    products: [
      {
        id: "5",
        name: "Americano",
        price: 3.5,
        description: "Espresso with hot water",
        image: "/placeholder.svg?height=48&width=48",
        quantity: 2,
      },
      {
        id: "6",
        name: "Blueberry Muffin",
        price: 3.75,
        description: "Freshly baked muffin with blueberries",
        image: "/placeholder.svg?height=48&width=48",
        quantity: 1,
      },
    ],
  },
  {
    id: "1237",
    customerName: "Emily Wilson",
    receivedTime: "11:20 AM",
    elapsedTime: "3 min",
    products: [
      {
        id: "7",
        name: "Chai Latte",
        price: 4.75,
        description: "Spiced tea with steamed milk",
        image: "/placeholder.svg?height=48&width=48",
        quantity: 1,
      },
      {
        id: "8",
        name: "Chocolate Brownie",
        price: 4.25,
        description: "Rich chocolate brownie",
        image: "/placeholder.svg?height=48&width=48",
        quantity: 1,
      },
    ],
  },
];

export default function RunningOrdersPage() {
  const handleOrderReady = (orderId: string) => {
    console.log(`Order ${orderId} is ready for pickup`);
    // In a real application,   you would update your database or state management here
  };

  return (
    <div className="container py-8 px-4">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Running Orders</h1>
        <p className="text-muted-foreground">
          {runningOrders.length} active orders
        </p>
      </div>

      <RunningOrdersList
        orders={runningOrders}
        onOrderReady={handleOrderReady}
      />

      <Toaster />
    </div>
  );
}
