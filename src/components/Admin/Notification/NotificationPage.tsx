import { Toaster } from "@/components/ui/toaster";
import { Notifications } from "./Notification";

// Sample notification data
const sampleNotifications = [
  {
    id: "1",
    type: "order" as const,
    title: "New Order Received",
    message: "Order #1234 has been placed for $32.50",
    time: "Just now",
    isRead: false,
    link: "/orders/1234",
  },
  {
    id: "2",
    type: "alert" as const,
    title: "Low Inventory Alert",
    message: "Coffee beans (Dark Roast) are running low. Please restock soon.",
    time: "10 minutes ago",
    isRead: false,
  },
  {
    id: "3",
    type: "order" as const,
    title: "Order Ready for Pickup",
    message: "Order #1230 has been prepared and is ready for pickup.",
    time: "25 minutes ago",
    isRead: true,
    link: "/orders/1230",
  },
  {
    id: "4",
    type: "info" as const,
    title: "Weekly Report Available",
    message: "Your weekly sales and performance report is now available.",
    time: "2 hours ago",
    isRead: true,
    link: "/reports/weekly",
  },
  {
    id: "5",
    type: "alert" as const,
    title: "Payment Failed",
    message: "Payment for order #1228 failed. Please check payment settings.",
    time: "3 hours ago",
    isRead: false,
    link: "/orders/1228",
  },
  {
    id: "6",
    type: "info" as const,
    title: "System Maintenance",
    message: "Scheduled maintenance will occur tonight from 2 AM to 4 AM.",
    time: "Yesterday",
    isRead: true,
  },
  {
    id: "7",
    type: "order" as const,
    title: "Order Canceled",
    message: "Order #1225 has been canceled by the customer.",
    time: "Yesterday",
    isRead: true,
    link: "/orders/1225",
  },
];

export default function NotificationsPage() {
  return (
    <div className="container py-8 margin-x-auto px-4">
      <h1 className="text-3xl font-bold mb-6">Notifications</h1>
      <Notifications initialNotifications={sampleNotifications} />
      <Toaster />
    </div>
  );
}
