"use client";

import { useState } from "react";
import {
  LogOut,
  Store,
  Phone,
  Mail,
  Clock,
  Edit,
  Settings,
  Bell,
  Users,
  Coffee,
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
import { Separator } from "@/components/ui/separator";
import { toast } from "@/hooks/use-toast";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Switch } from "@/components/ui/switch";

interface BusinessHour {
  day: string;
  hours: string;
  isOpen: boolean;
}

interface CafeProfileProps {
  cafeName: string;
  logo: string;
  description: string;
  phone: string;
  email: string;
  businessHours: BusinessHour[];
  onLogout: () => void;
}

export function CafeProfile({
  cafeName = "Cafe Serenity",
  logo = "/placeholder.svg?height=120&width=120",
  description = "A cozy cafe serving specialty coffee, pastries, and light meals in a relaxing atmosphere.",
  phone = "(555) 123-4567",
  email = "info@cafeserenity.com",
  businessHours = [
    { day: "Monday", hours: "7:00 AM - 6:00 PM", isOpen: true },
    { day: "Tuesday", hours: "7:00 AM - 6:00 PM", isOpen: true },
    { day: "Wednesday", hours: "7:00 AM - 6:00 PM", isOpen: true },
    { day: "Thursday", hours: "7:00 AM - 6:00 PM", isOpen: true },
    { day: "Friday", hours: "7:00 AM - 8:00 PM", isOpen: true },
    { day: "Saturday", hours: "8:00 AM - 8:00 PM", isOpen: true },
    { day: "Sunday", hours: "8:00 AM - 5:00 PM", isOpen: true },
  ],
  onLogout,
}: CafeProfileProps) {
  const [isOnline, setIsOnline] = useState(true);

  const handleLogout = () => {
    onLogout();
    toast({
      title: "Logged out",
      description: "You have been successfully logged out.",
    });
  };

  const handleToggleOnline = () => {
    setIsOnline(!isOnline);
    toast({
      title: isOnline ? "Cafe is now offline" : "Cafe is now online",
      description: isOnline
        ? "Customers will not be able to place new orders."
        : "Customers can now place orders.",
    });
  };

  return (
    <div className="container py-8 px-4">
      <div className="flex justify-between items-start mb-6">
        <h1 className="text-3xl font-bold">Cafe Profile</h1>
        <Button variant="destructive" onClick={handleLogout}>
          <LogOut className="mr-2 h-4 w-4" />
          Logout
        </Button>
      </div>

      <Tabs defaultValue="profile" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="profile">Profile</TabsTrigger>
          <TabsTrigger value="hours">Business Hours</TabsTrigger>
          <TabsTrigger value="settings">Settings</TabsTrigger>
        </TabsList>

        <TabsContent value="profile">
          <Card>
            <CardHeader>
              <CardTitle>Cafe Information</CardTitle>
              <CardDescription>
                Manage your cafe's profile information
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-shrink-0">
                  <div className="relative h-32 w-32 overflow-hidden rounded-lg border">
                    <img
                      src={logo || "/placeholder.svg"}
                      alt={cafeName}
                      className="object-cover"
                    />
                    <div className="absolute bottom-0 right-0 p-1 bg-background rounded-tl-lg border-l border-t">
                      <Edit className="h-4 w-4 text-muted-foreground" />
                    </div>
                  </div>
                </div>

                <div className="flex-1 space-y-4">
                  <div>
                    <h3 className="text-xl font-bold flex items-center">
                      <Store className="mr-2 h-5 w-5" />
                      {cafeName}
                    </h3>
                    <p className="text-muted-foreground mt-1">{description}</p>
                  </div>

                  <div className="grid gap-2">
                    <div className="flex items-center">
                      <Phone className="h-5 w-5 mr-2 text-muted-foreground" />
                      <span>{phone}</span>
                    </div>
                    <div className="flex items-center">
                      <Mail className="h-5 w-5 mr-2 text-muted-foreground" />
                      <span>{email}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <div
                    className={`h-3 w-3 rounded-full ${
                      isOnline ? "bg-green-500" : "bg-red-500"
                    }`}
                  ></div>
                  <span className="font-medium">
                    {isOnline ? "Online" : "Offline"}
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-sm text-muted-foreground">
                    {isOnline ? "Accepting orders" : "Not accepting orders"}
                  </span>
                  <Switch
                    checked={isOnline}
                    onCheckedChange={handleToggleOnline}
                  />
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full">
                <Edit className="mr-2 h-4 w-4" />
                Edit Profile
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="hours">
          <Card>
            <CardHeader>
              <CardTitle>Business Hours</CardTitle>
              <CardDescription>Set your cafe's operating hours</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {businessHours.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between"
                  >
                    <div className="flex-1">
                      <p className="font-medium">{item.day}</p>
                      <p className="text-sm text-muted-foreground">
                        {item.hours}
                      </p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="text-sm text-muted-foreground">
                        {item.isOpen ? "Open" : "Closed"}
                      </span>
                      <Switch checked={item.isOpen} />
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full">
                <Clock className="mr-2 h-4 w-4" />
                Update Hours
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="settings">
          <Card>
            <CardHeader>
              <CardTitle>Cafe Settings</CardTitle>
              <CardDescription>
                Manage your cafe's settings and preferences
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Bell className="h-5 w-5 text-muted-foreground" />
                  <div>
                    <p className="font-medium">Order Notifications</p>
                    <p className="text-sm text-muted-foreground">
                      Receive notifications for new orders
                    </p>
                  </div>
                </div>
                <Switch defaultChecked />
              </div>

              <Separator />

              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Users className="h-5 w-5 text-muted-foreground" />
                  <div>
                    <p className="font-medium">Staff Management</p>
                    <p className="text-sm text-muted-foreground">
                      Manage staff accounts and permissions
                    </p>
                  </div>
                </div>
                <Button variant="outline" size="sm">
                  Manage
                </Button>
              </div>

              <Separator />

              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Coffee className="h-5 w-5 text-muted-foreground" />
                  <div>
                    <p className="font-medium">Menu Management</p>
                    <p className="text-sm text-muted-foreground">
                      Update your cafe's menu items
                    </p>
                  </div>
                </div>
                <Button variant="outline" size="sm">
                  Edit Menu
                </Button>
              </div>

              <Separator />

              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Settings className="h-5 w-5 text-muted-foreground" />
                  <div>
                    <p className="font-medium">Advanced Settings</p>
                    <p className="text-sm text-muted-foreground">
                      Configure system preferences
                    </p>
                  </div>
                </div>
                <Button variant="outline" size="sm">
                  Configure
                </Button>
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="destructive" className="w-full">
                <LogOut className="mr-2 h-4 w-4" />
                Logout
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
