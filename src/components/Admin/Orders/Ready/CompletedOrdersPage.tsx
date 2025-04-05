import { CompletedOrder, CompletedOrdersList } from "./CompletedOrders";

// Sample data
const completedOrders: CompletedOrder[] = [
  {
    id: "ord-001",
    orderNumber: "42",
    customerName: "Alex Johnson",
    completedTime: "11:15 AM",
    products: [
      {
        id: "1",
        name: "Cappuccino",
        price: 4.5,
        description: "Espresso with steamed milk and foam",
        image: "/placeholder.svg?height=40&width=40",
        quantity: 1,
      },
      {
        id: "2",
        name: "Croissant",
        price: 3.25,
        description: "Buttery, flaky pastry",
        image: "/placeholder.svg?height=40&width=40",
        quantity: 2,
      },
    ],
  },
  {
    id: "ord-002",
    orderNumber: "43",
    customerName: "Maria Garcia",
    completedTime: "11:22 AM",
    products: [
      {
        id: "3",
        name: "Latte",
        price: 5.0,
        description: "Espresso with steamed milk",
        image: "/placeholder.svg?height=40&width=40",
        quantity: 1,
      },
      {
        id: "4",
        name: "Avocado Toast",
        price: 8.75,
        description: "Toast with avocado and toppings",
        image: "/placeholder.svg?height=40&width=40",
        quantity: 1,
      },
    ],
  },
  {
    id: "ord-003",
    orderNumber: "44",
    customerName: "John Smith",
    completedTime: "11:30 AM",
    products: [
      {
        id: "5",
        name: "Americano",
        price: 3.5,
        description: "Espresso with hot water",
        image: "/placeholder.svg?height=40&width=40",
        quantity: 2,
      },
    ],
  },
  {
    id: "ord-004",
    orderNumber: "45",
    customerName: "Emily Wilson",
    completedTime: "11:35 AM",
    products: [
      {
        id: "7",
        name: "Chai Latte",
        price: 4.75,
        description: "Spiced tea with steamed milk",
        image: "/placeholder.svg?height=40&width=40",
        quantity: 1,
      },
      {
        id: "8",
        name: "Chocolate Brownie",
        price: 4.25,
        description: "Rich chocolate brownie",
        image: "/placeholder.svg?height=40&width=40",
        quantity: 1,
      },
    ],
  },
  {
    id: "ord-005",
    orderNumber: "46",
    customerName: "David Lee",
    completedTime: "11:40 AM",
    products: [
      {
        id: "9",
        name: "Espresso",
        price: 3.0,
        description: "Strong black coffee",
        image: "/placeholder.svg?height=40&width=40",
        quantity: 1,
      },
      {
        id: "10",
        name: "Cinnamon Roll",
        price: 4.5,
        description: "Sweet pastry with cinnamon",
        image: "/placeholder.svg?height=40&width=40",
        quantity: 1,
      },
    ],
  },
  {
    id: "ord-006",
    orderNumber: "47",
    customerName: "Sarah Brown",
    completedTime: "11:45 AM",
    products: [
      {
        id: "11",
        name: "Green Tea",
        price: 3.25,
        description: "Japanese green tea",
        image: "/placeholder.svg?height=40&width=40",
        quantity: 1,
      },
      {
        id: "12",
        name: "Fruit Salad",
        price: 6.5,
        description: "Fresh seasonal fruits",
        image: "/placeholder.svg?height=40&width=40",
        quantity: 1,
      },
    ],
  },
];

export default function CompletedOrdersPage() {
  return (
    <div className="container py-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Ready for Pickup</h1>
        <div className="bg-muted px-3 py-1 rounded-md">
          <p className="text-sm font-medium">
            {completedOrders.length} orders ready
          </p>
        </div>
      </div>

      <CompletedOrdersList orders={completedOrders} />

      <div className="mt-8 p-4 bg-muted/30 rounded-lg">
        <h2 className="text-lg font-medium mb-2">Customer Instructions</h2>
        <p className="text-sm text-muted-foreground">
          Please look for your order number displayed on the screen. When your
          number is called or appears, approach the counter with your receipt or
          order confirmation to collect your order.
        </p>
      </div>
    </div>
  );
}
