import { PreviewReportModal } from "@/components/previewReportModal";
import { Reports } from "@/components/reports";
import { Button } from "@/components/ui/button";

import { REPORTS } from "@/constants";
import { useState } from "react";

function ReportPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);

  return (
    <div className="flex flex-col items-start space-y-4">
      <div className="flex flex-row justify-between w-full">
        <h1>My Reports</h1>
        <Button onClick={openModal}>Preview Report</Button>
        <PreviewReportModal
          isOpen={isModalOpen}
          onOpenChange={setIsModalOpen}
        />
      </div>
      <Reports reports={REPORTS} />
    </div>
  );
}

export default ReportPage;
