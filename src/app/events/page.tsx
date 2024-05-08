"use client";
import Link from "next/link";

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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import Betform from "@/components/betform";
import { useState } from "react";

const competitors = [
  { name: "wrestler1", school: "penn state" },
  { name: "wrestler2", school: "Ohio State" },
  { name: "wrestler3", school: "Penn State Again" },
  { name: "wrestler4", school: "Iowa" },
];

export default function Competitions() {
  const [competitor, setCompetitor] = useState(competitors[0]);
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
          <Tabs defaultValue="program">
            <TabsList>
              <TabsTrigger value="program">Program</TabsTrigger>
              <TabsTrigger value="pools">Pools</TabsTrigger>
            </TabsList>
            <TabsContent value="program">
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
                      <TableRow
                        key={index}
                        onClick={() => setCompetitor(competitor)}
                      >
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
            </TabsContent>
            <TabsContent value="pools">
              {" "}
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
                      <TableRow
                        key={index}
                        onClick={() => setCompetitor(competitor)}
                      >
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
            </TabsContent>
          </Tabs>
        </Card>
        <Card x-chunk="dashboard-01-chunk-5">
          <CardHeader>
            <CardTitle>Place Bet</CardTitle>
          </CardHeader>
          <CardContent className="grid gap-8">
            <Betform name={competitor.name} school={competitor.school} />
          </CardContent>
        </Card>
        <div>{competitor.name}</div>
      </div>
    </div>
  );
}
