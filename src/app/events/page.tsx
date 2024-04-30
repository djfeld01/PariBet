import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table";
import { Breadcrumb } from "@/components/ui/breadcrumb";

const competitors = [
  { name: "wrestler1", school: "penn state" },
  { name: "wrestler2", school: "Ohio State" },
  { name: "wrestler3", school: "Penn State Again" },
  { name: "wrestler4", school: "Iowa" },
];

export default function Competitions() {
  return (
    <div>
      <div className="grid gap-4 md:gap-8 lg:grid-cols-3 xl:grid-cols-3">
        <Card className="lg:col-span-2" x-chunk="dashboard-01-chunk-4">
          <CardHeader className="flex flex-row items-center">
            <div className="grid gap-2">
              <CardTitle>Event</CardTitle>
              <CardDescription>2024 NCAA Wrestling 125</CardDescription>
            </div>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Seed</TableHead>
                  <TableHead>Odds</TableHead>
                  <TableHead>Wrestler</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {competitors.map((competitor, index) => (
                  <TableRow key={index}>
                    <TableCell>
                      <div className="font-medium">1</div>
                    </TableCell>
                    <TableCell>
                      <div className="font-medium">3:1</div>
                    </TableCell>
                    <TableCell>
                      <div className="font-medium">{competitor.name}</div>
                      <div className="hidden text-sm text-muted-foreground md:inline">
                        {competitor.school}
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
        <Card x-chunk="dashboard-01-chunk-5">
          <CardHeader>
            <CardTitle>Place Bet</CardTitle>
          </CardHeader>
          <CardContent className="grid gap-8"></CardContent>
        </Card>
      </div>
    </div>
  );
}
