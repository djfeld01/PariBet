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
  {
    team: "MAR",
    name: "TARIK B.",
    seed: 5,
    pool: { win: 150, place: 18, show: 3 },
  },
  {
    team: "USA",
    name: "LEE S.",
    seed: 6,
    pool: { win: 200, place: 9, show: 56 },
  },
  {
    team: "VEN",
    name: "MEJIAS RODRI P.",
    seed: 7,
    pool: { win: 100, place: 10, show: 45 },
  },
  {
    team: "MKD",
    name: "EGOROV V.",
    seed: 8,
    pool: { win: 100, place: 25, show: 24 },
  },
  {
    team: "HKG",
    name: "LEUNG T.",
    seed: 9,
    pool: { win: 10, place: 15, show: 12 },
  },
  {
    team: "SUI",
    name: "EPP T.",
    seed: 10,
    pool: { win: 14, place: 25, show: 14 },
  },
  {
    team: "KAZ",
    name: "KALZHAN R.",
    seed: 12,
    pool: { win: 12, place: 30, show: 90 },
  },
  {
    team: "TKM",
    name: "MATJANOV K.",
    seed: 13,
    pool: { win: 13, place: 15, show: 15 },
  },
  {
    team: "IRI",
    name: "SARLAK A.",
    seed: 14,
    pool: { win: 100, place: 20, show: 24 },
  },
  {
    team: "ITA",
    name: "PIRODDU S.",
    seed: 15,
    pool: { win: 90, place: 25, show: 55 },
  },
  {
    team: "GER",
    name: "LEHR H.",
    seed: 16,
    pool: { win: 88, place: 10, show: 44 },
  },
  {
    team: "FRA",
    name: "MUKHTAROV I.",
    seed: 17,
    pool: { win: 77, place: 10, show: 12 },
  },
  {
    team: "PRK",
    name: "HAN C.",
    seed: 18,
    pool: { win: 13, place: 20, show: 35 },
  },
  {
    team: "CRC",
    name: "HAMMER CUDE P.",
    seed: 19,
    pool: { win: 15, place: 24, show: 24 },
  },
  {
    team: "ECU",
    name: "REA VILLARRO G.",
    seed: 20,
    pool: { win: 15, place: 23, show: 15 },
  },
  {
    team: "SLE",
    name: "BUNDUKA I.",
    seed: 21,
    pool: { win: 200, place: 30, show: 25 },
  },
  {
    team: "MGL",
    name: "ZANDANBUD Z.",
    seed: 22,
    pool: { win: 150, place: 2, show: 25 },
  },
  {
    team: "ESP",
    name: "METREVELI L.",
    seed: 23,
    pool: { win: 100, place: 2, show: 10 },
  },
  {
    team: "UKR",
    name: "YATSENKO A.",
    seed: 24,
    pool: { win: 20, place: 3, show: 25 },
  },
  {
    team: "CAN",
    name: "CAPELLAN D.",
    seed: 25,
    pool: { win: 50, place: 4, show: 9 },
  },
  {
    team: "BUL",
    name: "VANGELOV G.",
    seed: 26,
    pool: { win: 120, place: 5, show: 23 },
  },
  {
    team: "KOR",
    name: "KIM S.",
    seed: 27,
    pool: { win: 250, place: 1, show: 60 },
  },
  {
    team: "CHN",
    name: "ZOU W.",
    seed: 1,
    pool: { win: 900, place: 5, show: 150 },
  },
  {
    team: "ROU",
    name: "KOVACS R.",
    seed: 11,
    pool: { win: 500, place: 3, show: 10 },
  },
  {
    team: "GEO",
    name: "DINGASHVILI R.",
    seed: 4,
    pool: { win: 550, place: 35, show: 25 },
  },
  {
    team: "TUR",
    name: "KARAVUS M.",
    seed: 3,
    pool: { win: 600, place: 40, show: 95 },
  },
  {
    team: "IND",
    name: "AMAN A.",
    seed: 2,
    pool: { win: 650, place: 40, show: 150 },
  },
];
const sortedBySeed = competitors.sort((a, b) => a.seed - b.seed);
const winPoolTotal = competitors.reduce(
  (accumulator, currentCompetitor) => accumulator + currentCompetitor.pool.win,
  0
);
const placePoolTotal = competitors.reduce(
  (accumulator, currentCompetitor) =>
    accumulator + currentCompetitor.pool.place,
  0
);
const showPoolTotal = competitors.reduce(
  (accumulator, currentCompetitor) => accumulator + currentCompetitor.pool.show,
  0
);
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
                          <div className="font-medium">{competitor.seed}</div>
                        </TableCell>
                        <TableCell>
                          <div className="font-medium">3:1</div>
                        </TableCell>
                        <TableCell>
                          <div className="font-medium">{competitor.name}</div>
                          <div className="hidden text-sm text-muted-foreground md:inline">
                            {competitor.team}
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </TabsContent>
            <TabsContent value="pools">
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Seed</TableHead>
                      <TableHead>Win Odds</TableHead>
                      <TableHead>Wrestler</TableHead>
                      <TableHead>Place Odds</TableHead>
                      <TableHead>Show Odds</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {sortedBySeed.map((competitor, index) => (
                      <TableRow
                        key={index}
                        onClick={() => setCompetitor(competitor)}
                      >
                        <TableCell>
                          <div className="font-medium">{competitor.seed}</div>
                        </TableCell>
                        <TableCell>
                          <div className="font-medium">
                            {Math.trunc(winPoolTotal / competitor.pool.win - 1)}
                            :1
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="font-medium">{competitor.name}</div>
                          <div className="hidden text-sm text-muted-foreground md:inline">
                            {competitor.team}
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="font-medium">
                            {Math.trunc(
                              placePoolTotal / 2 / competitor.pool.place - 1
                            )}
                            :1
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="font-medium">
                            {Math.trunc(
                              showPoolTotal / 3 / competitor.pool.show - 1
                            )}
                            :1
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
          <Card>
            <CardHeader>
              <CardTitle>Place Bet</CardTitle>
            </CardHeader>
            <CardContent className="grid gap-8">
              <Betform name={competitor.name} team={competitor.team} />
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Pools</CardTitle>
            </CardHeader>
            <CardContent className="grid gap-8">
              <Table>
                <TableHeader>
                  <TableHead>Seed</TableHead>
                  <TableHead>Win</TableHead>
                  <TableHead>Place</TableHead>
                  <TableHead>Show</TableHead>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell>Totals:</TableCell>
                    <TableCell>${winPoolTotal}</TableCell>
                    <TableCell>${placePoolTotal}</TableCell>
                    <TableCell>${showPoolTotal}</TableCell>
                  </TableRow>
                  {sortedBySeed.map((competitor, index) => {
                    return (
                      <TableRow key={index}>
                        <TableCell>{competitor.seed}</TableCell>
                        <TableCell>${competitor.pool.win}</TableCell>
                        <TableCell>${competitor.pool.place}</TableCell>
                        <TableCell>${competitor.pool.show}</TableCell>
                      </TableRow>
                    );
                  })}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </Card>
        <div>Win Pool Total: {winPoolTotal}</div>
        <div>Place Pool Total: {placePoolTotal}</div>
        <div>Show Pool Total: {showPoolTotal}</div>
      </div>
    </div>
  );
}
