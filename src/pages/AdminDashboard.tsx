import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Users, MessageSquare, CreditCard, MoreHorizontal } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

// Static data
const users = [
  { id: 1, name: "John Doe", email: "john@example.com", status: "Active", joinDate: "2024-01-15", credits: 5 },
  { id: 2, name: "Sarah Smith", email: "sarah@example.com", status: "Active", joinDate: "2024-01-20", credits: 8 },
  { id: 3, name: "Mike Johnson", email: "mike@example.com", status: "Inactive", joinDate: "2024-01-10", credits: 0 },
  { id: 4, name: "Emma Wilson", email: "emma@example.com", status: "Active", joinDate: "2024-02-01", credits: 12 },
  { id: 5, name: "David Brown", email: "david@example.com", status: "Suspended", joinDate: "2024-01-25", credits: 3 },
];

const interviews = [
  { id: 1, userId: 1, userName: "John Doe", role: "Software Engineer", company: "Google", date: "2024-02-15", duration: "25 min", score: 85 },
  { id: 2, userId: 2, userName: "Sarah Smith", role: "Product Manager", company: "Microsoft", date: "2024-02-14", duration: "30 min", score: 92 },
  { id: 3, userId: 1, userName: "John Doe", role: "Frontend Developer", company: "Amazon", date: "2024-02-13", duration: "22 min", score: 78 },
  { id: 4, userId: 4, userName: "Emma Wilson", role: "Data Scientist", company: "Netflix", date: "2024-02-12", duration: "35 min", score: 88 },
  { id: 5, userId: 2, userName: "Sarah Smith", role: "UX Designer", company: "Apple", date: "2024-02-11", duration: "28 min", score: 95 },
];

const transactions = [
  { id: 1, userId: 2, userName: "Sarah Smith", amount: "₹30", credits: 10, status: "Completed", date: "2024-02-14", method: "Card" },
  { id: 2, userId: 4, userName: "Emma Wilson", amount: "₹30", credits: 10, status: "Completed", date: "2024-02-10", method: "UPI" },
  { id: 3, userId: 1, userName: "John Doe", amount: "₹30", credits: 10, status: "Failed", date: "2024-02-08", method: "Card" },
  { id: 4, userId: 5, userName: "David Brown", amount: "₹30", credits: 10, status: "Completed", date: "2024-02-05", method: "Wallet" },
  { id: 5, userId: 2, userName: "Sarah Smith", amount: "₹30", credits: 10, status: "Pending", date: "2024-02-15", method: "Card" },
];

const AdminDashboard = () => {
  const getStatusBadge = (status: string) => {
    const variants = {
      Active: "default",
      Inactive: "secondary",
      Suspended: "destructive",
      Completed: "default",
      Failed: "destructive",
      Pending: "secondary"
    };
    return <Badge variant={variants[status] as any}>{status}</Badge>;
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">Admin Dashboard</h1>
          <p className="text-muted-foreground">Manage users, monitor interviews, and track payments</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Users</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{users.length}</div>
              <p className="text-xs text-muted-foreground">+12% from last month</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Interviews</CardTitle>
              <MessageSquare className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{interviews.length}</div>
              <p className="text-xs text-muted-foreground">+8% from last week</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Revenue</CardTitle>
              <CreditCard className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">₹{transactions.filter(t => t.status === "Completed").length * 30}</div>
              <p className="text-xs text-muted-foreground">+15% from last month</p>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="users" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="users">User Management</TabsTrigger>
            <TabsTrigger value="interviews">AI Interviews</TabsTrigger>
            <TabsTrigger value="payments">Payments</TabsTrigger>
          </TabsList>

          <TabsContent value="users">
            <Card>
              <CardHeader>
                <CardTitle>Users List</CardTitle>
                <CardDescription>Manage and monitor user accounts</CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Name</TableHead>
                      <TableHead>Email</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Join Date</TableHead>
                      <TableHead>Credits</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {users.map((user) => (
                      <TableRow key={user.id}>
                        <TableCell className="font-medium">{user.name}</TableCell>
                        <TableCell>{user.email}</TableCell>
                        <TableCell>{getStatusBadge(user.status)}</TableCell>
                        <TableCell>{user.joinDate}</TableCell>
                        <TableCell>{user.credits}</TableCell>
                        <TableCell>
                          <Button variant="ghost" size="sm">
                            <MoreHorizontal className="h-4 w-4" />
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="interviews">
            <Card>
              <CardHeader>
                <CardTitle>AI Interview Sessions</CardTitle>
                <CardDescription>Monitor interview sessions and performance</CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>User</TableHead>
                      <TableHead>Role</TableHead>
                      <TableHead>Company</TableHead>
                      <TableHead>Date</TableHead>
                      <TableHead>Duration</TableHead>
                      <TableHead>Score</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {interviews.map((interview) => (
                      <TableRow key={interview.id}>
                        <TableCell className="font-medium">{interview.userName}</TableCell>
                        <TableCell>{interview.role}</TableCell>
                        <TableCell>{interview.company}</TableCell>
                        <TableCell>{interview.date}</TableCell>
                        <TableCell>{interview.duration}</TableCell>
                        <TableCell>
                          <Badge variant={interview.score >= 85 ? "default" : interview.score >= 70 ? "secondary" : "destructive"}>
                            {interview.score}%
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <Button variant="ghost" size="sm">
                            <MoreHorizontal className="h-4 w-4" />
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="payments">
            <Card>
              <CardHeader>
                <CardTitle>Payment Transactions</CardTitle>
                <CardDescription>Track user payments and credits</CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>User</TableHead>
                      <TableHead>Amount</TableHead>
                      <TableHead>Credits</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Date</TableHead>
                      <TableHead>Method</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {transactions.map((transaction) => (
                      <TableRow key={transaction.id}>
                        <TableCell className="font-medium">{transaction.userName}</TableCell>
                        <TableCell>{transaction.amount}</TableCell>
                        <TableCell>{transaction.credits}</TableCell>
                        <TableCell>{getStatusBadge(transaction.status)}</TableCell>
                        <TableCell>{transaction.date}</TableCell>
                        <TableCell>{transaction.method}</TableCell>
                        <TableCell>
                          <Button variant="ghost" size="sm">
                            <MoreHorizontal className="h-4 w-4" />
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
      <Footer />
    </div>
  );
};

export default AdminDashboard;