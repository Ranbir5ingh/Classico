import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../ui/table'
import { Button } from '../ui/button'

export default function AdminOrdersView() {
  return (
    <Card>
          <CardHeader>
            <CardTitle>
              All Orders
            </CardTitle>
          </CardHeader>
          <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Order ID</TableHead>
                        <TableHead>Order Date</TableHead>
                        <TableHead>Order Status</TableHead>
                        <TableHead>Order Price</TableHead>
                        <TableHead className="sr-only">Details</TableHead>
                      </TableRow>
          
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell>759374</TableCell>
                        <TableCell>7/11/2025</TableCell>
                        <TableCell>In Procress</TableCell>
                        <TableCell>$100</TableCell>
                        <TableCell>
                          <Button>
                            View Details
                          </Button>
                        </TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </CardContent>
        </Card>
  )
}
