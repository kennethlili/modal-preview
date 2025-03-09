import { Card, CardHeader, CardTitle, CardContent } from "./ui/card";

export type ReportItemProps = {
  title: string;
  content: string;
};

function ReportItem({ title, content }: ReportItemProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p>{content}</p>
      </CardContent>
    </Card>
  );
}

export function Reports({ reports }: { reports: ReportItemProps[] }) {
  return (
    <div className="grid grid-cols-2 w-full gap-2">
      {reports.map((report, i) => (
        <ReportItem key={i} {...report} />
      ))}
    </div>
  );
}
