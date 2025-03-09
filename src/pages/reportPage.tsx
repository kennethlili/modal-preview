import { Reports } from "@/components/reports";
import { REPORTS } from "@/constants";

function ReportPage() {
  return (
    <div className="flex flex-col items-start space-y-4">
      <h1>My Report</h1>
      <Reports reports={REPORTS} />
    </div>
  );
}

export default ReportPage;
