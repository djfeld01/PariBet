import Link from "next/link";
import { Card, CardHeader, CardTitle, CardContent } from "../ui/card";

export default function SideBar() {
  return (
    <div>
      <Card>
        <CardHeader className="">
          <CardTitle>Popular Event 1</CardTitle>
        </CardHeader>
        <CardContent>
          <Link
            href="http://google.com"
            className="text-foreground transition-colors hover:text-foreground"
          >
            There is some Info about the event here
          </Link>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="">
          <CardTitle>Popular Event 1</CardTitle>
        </CardHeader>
        <CardContent>
          <Link
            href="http://google.com"
            className="text-foreground transition-colors hover:text-foreground"
          >
            There is some Info about the event here
          </Link>
        </CardContent>
      </Card>
    </div>
  );
}
