import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"

// Sample order data
const orders = [
  {
    id: "ORD-001",
    customer: "Rahul Sharma",
    date: "2023-05-15",
    total: 1250,
    status: "Delivered",
    items: 3,
  },
  {
    id: "ORD-002",
    customer: "Priya Patel",
    date: "2023-05-16",
    total: 850,
    status: "Processing",
    items: 2,
  },
  {
    id: "ORD-003",
    customer: "Amit Kumar",
    date: "2023-05-17",
    total: 1500,
    status: "Pending",
    items: 4,
  },
  {
    id: "ORD-004",
    customer: "Sneha Gupta",
    date: "2023-05-18",
    total: 650,
    status: "Delivered",
    items: 1,
  },
]

export function FarmerOrderList() {
  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Order ID</TableHead>
            <TableHead>Customer</TableHead>
            <TableHead>Date</TableHead>
            <TableHead>Items</TableHead>
            <TableHead>Total</TableHead>
            <TableHead>Status</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {orders.map((order) => (
            <TableRow key={order.id}>
              <TableCell className="font-medium">{order.id}</TableCell>
              <TableCell>{order.customer}</TableCell>
              <TableCell>{order.date}</TableCell>
              <TableCell>{order.items}</TableCell>
              <TableCell>₹{order.total.toFixed(2)}</TableCell>
              <TableCell>
                <Badge
                  variant="outline"
                  className={
                    order.status === "Delivered"
                      ? "border-green-500 text-green-500"
                      : order.status === "Processing"
                        ? "border-blue-500 text-blue-500"
                        : "border-orange-500 text-orange-500"
                  }
                >
                  {order.status}
                </Badge>
              </TableCell>
              <TableCell className="text-right">
                <Button variant="outline" size="sm">
                  View Details
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
