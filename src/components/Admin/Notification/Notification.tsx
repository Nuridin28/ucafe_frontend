"use client";

import { useState } from "react";
import {
  Bell,
  ShoppingCart,
  AlertTriangle,
  Info,
  Check,
  Trash2,
  Filter,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { toast } from "@/hooks/use-toast";

export type NotificationType = "order" | "alert" | "info";

export interface Notification {
  id: string;
  type: NotificationType;
  title: string;
  message: string;
  time: string;
  isRead: boolean;
  link?: string;
}

interface NotificationsProps {
  initialNotifications?: Notification[];
}

export function Notifications({
  initialNotifications = [],
}: NotificationsProps) {
  const [notifications, setNotifications] =
    useState<Notification[]>(initialNotifications);
  const [activeTab, setActiveTab] = useState<string>("all");

  const unreadCount = notifications.filter((n) => !n.isRead).length;

  const filteredNotifications =
    activeTab === "all"
      ? notifications
      : notifications.filter(
          (n) => n.type === activeTab || (activeTab === "unread" && !n.isRead)
        );

  const handleMarkAsRead = (id: string) => {
    setNotifications(
      notifications.map((n) => (n.id === id ? { ...n, isRead: true } : n))
    );
    toast({
      description: "Notification marked as read",
    });
  };

  const handleMarkAllAsRead = () => {
    setNotifications(notifications.map((n) => ({ ...n, isRead: true })));
    toast({
      description: "All notifications marked as read",
    });
  };

  const handleDeleteNotification = (id: string) => {
    setNotifications(notifications.filter((n) => n.id !== id));
    toast({
      description: "Notification deleted",
    });
  };

  const handleClearAll = () => {
    setNotifications([]);
    toast({
      description: "All notifications cleared",
    });
  };

  const getNotificationIcon = (type: NotificationType) => {
    switch (type) {
      case "order":
        return <ShoppingCart className="h-5 w-5" />;
      case "alert":
        return <AlertTriangle className="h-5 w-5" />;
      case "info":
        return <Info className="h-5 w-5" />;
      default:
        return <Bell className="h-5 w-5" />;
    }
  };

  const getNotificationColor = (type: NotificationType) => {
    switch (type) {
      case "order":
        return "text-green-500";
      case "alert":
        return "text-red-500";
      case "info":
        return "text-blue-500";
      default:
        return "text-gray-500";
    }
  };

  return (
    <Card className="w-full">
      <CardHeader className="pb-3">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Bell className="h-5 w-5" />
            <CardTitle>Notifications</CardTitle>
            {unreadCount > 0 && (
              <Badge variant="secondary" className="ml-2">
                {unreadCount} unread
              </Badge>
            )}
          </div>
          <div className="flex gap-2">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="icon">
                  <Filter className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={handleMarkAllAsRead}>
                  Mark all as read
                </DropdownMenuItem>
                <DropdownMenuItem onClick={handleClearAll}>
                  Clear all notifications
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
        <CardDescription>
          Stay updated with your cafe's activity
        </CardDescription>
      </CardHeader>
      <Tabs defaultValue="all" value={activeTab} onValueChange={setActiveTab}>
        <div className="px-6">
          <TabsList className="grid grid-cols-4">
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="order">Orders</TabsTrigger>
            <TabsTrigger value="alert">Alerts</TabsTrigger>
            <TabsTrigger value="unread">Unread</TabsTrigger>
          </TabsList>
        </div>
        <TabsContent value={activeTab} className="m-0">
          <CardContent className="pt-6">
            {filteredNotifications.length === 0 ? (
              <div className="flex flex-col items-center justify-center py-8 text-center">
                <Bell className="h-12 w-12 text-muted-foreground mb-4" />
                <h3 className="text-lg font-medium">No notifications</h3>
                <p className="text-sm text-muted-foreground mt-1">
                  {activeTab === "all"
                    ? "You don't have any notifications yet"
                    : `You don't have any ${
                        activeTab === "unread" ? "unread" : activeTab
                      } notifications`}
                </p>
              </div>
            ) : (
              <div className="space-y-4">
                {filteredNotifications.map((notification) => (
                  <div
                    key={notification.id}
                    className={`p-4 rounded-lg border ${
                      !notification.isRead ? "bg-muted/50" : ""
                    }`}
                  >
                    <div className="flex items-start gap-4">
                      <div
                        className={`mt-0.5 ${getNotificationColor(
                          notification.type
                        )}`}
                      >
                        {getNotificationIcon(notification.type)}
                      </div>
                      <div className="flex-1 space-y-1">
                        <div className="flex items-center justify-between">
                          <p className="font-medium">{notification.title}</p>
                          <p className="text-xs text-muted-foreground">
                            {notification.time}
                          </p>
                        </div>
                        <p className="text-sm text-muted-foreground">
                          {notification.message}
                        </p>
                      </div>
                    </div>
                    <div className="flex justify-end gap-2 mt-2">
                      {!notification.isRead && (
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => handleMarkAsRead(notification.id)}
                        >
                          <Check className="h-4 w-4 mr-1" />
                          Mark as read
                        </Button>
                      )}
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() =>
                          handleDeleteNotification(notification.id)
                        }
                      >
                        <Trash2 className="h-4 w-4 mr-1" />
                        Delete
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </CardContent>
          {filteredNotifications.length > 0 && (
            <CardFooter className="flex justify-between border-t px-6 py-4">
              <p className="text-sm text-muted-foreground">
                Showing {filteredNotifications.length}{" "}
                {filteredNotifications.length === 1
                  ? "notification"
                  : "notifications"}
              </p>
              <Button variant="outline" size="sm" onClick={handleMarkAllAsRead}>
                Mark all as read
              </Button>
            </CardFooter>
          )}
        </TabsContent>
      </Tabs>
    </Card>
  );
}
