import { Printer } from "lucide-react";
import { usePreviewReports } from "@/hooks/usePreviewReports";
import { Button } from "../ui/button";
import {
  DialogHeader,
  DialogBody,
  DialogFooter,
  DialogTitle,
  Dialog,
  DialogContent,
} from "../ui/dialog";
import { PreviewReportFormatSection } from "./previewReportFormatSection";
import { PreviewReportOrientationSection } from "./PreviewReportOrientationSection";
import { PreviewReportBox } from "./previewReportBox";

export function PreviewReportModal({
  isOpen,
  onOpenChange,
}: {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
}) {
  const onClose = () => onOpenChange(false);

  const {
    isLoading,
    previewImage,
    handleDownloadPreviewImage,
    format,
    orientation,
    setFormat,
    setOrientation,
  } = usePreviewReports(isOpen, onClose);

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="sm:w-full sm:max-w-[50vw] overflow-y-auto max-h-screen">
        <DialogHeader className="pb-2 ">
          <div className="flex flex-row gap-1 items-center">
            <Printer className="h-5 w-5" />
            <DialogTitle>Print Report</DialogTitle>
          </div>
        </DialogHeader>
        <DialogBody className="grid grid-cols-1 sm:grid-cols-5">
          <div className="sm:col-span-2 flex flex-col gap-2 px-1 pt-3">
            <PreviewReportFormatSection format={format} setFormat={setFormat} />
            <PreviewReportOrientationSection
              orientation={orientation}
              setOrientation={setOrientation}
            />
          </div>
          <PreviewReportBox isLoading={isLoading} previewImage={previewImage} />
        </DialogBody>

        <DialogFooter>
          <Button variant={"outline"} onClick={onClose}>
            Cancel
          </Button>
          <Button onClick={handleDownloadPreviewImage}>Print Report</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
