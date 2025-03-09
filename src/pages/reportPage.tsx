import { PreviewReportModal } from "@/components/previewReportModal";
import { Reports } from "@/components/reports";

import { REPORTS } from "@/constants";

function ReportPage() {
  return (
    <div className="flex flex-col items-start space-y-4">
      <div className="flex flex-row justify-between w-full">
        <h1>My Reports</h1>
        <PreviewReportModal />
      </div>
      <Reports reports={REPORTS} />
    </div>
  );
}

export default ReportPage;
