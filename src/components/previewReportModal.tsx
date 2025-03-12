import { Button } from "./ui/button";
import {
  Dialog,
  DialogBody,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";
import { Loader, Printer } from "lucide-react";
import { usePreviewReports } from "@/hooks/usePreviewReports";
import { REPORT_FORMATS, REPORT_ORIENTATIONS } from "@/constants";

const getReportFormatBtnText = (format: keyof typeof REPORT_FORMATS) => {
  switch (format) {
    case "PDF":
      return "PDF Download";
    case "PNG":
      return "Image (PNG)";
    case "CSV":
      return "Spreadsheet (CSV)";
    default: {
      // to prevent unhandled cases and throw error on typescript level
      const _exhaustiveCheck: never = format;
      return _exhaustiveCheck;
    }
  }
};

function PreviewReportFormatSection({
  format,
  setFormat,
}: {
  format: keyof typeof REPORT_FORMATS;
  setFormat: (format: keyof typeof REPORT_FORMATS) => void;
}) {
  return (
    <div>
      <h3>Format</h3>
      <div className="flex flex-col ml-1">
        {Object.values(REPORT_FORMATS).map((fmt) => (
          <Button
            key={fmt}
            variant={"ghost"}
            className={`justify-start ${format === fmt ? "border" : ""}`}
            onClick={() => setFormat(fmt)}
          >
            {getReportFormatBtnText(fmt)}
          </Button>
        ))}
      </div>
    </div>
  );
}

const getReportOrientationBtnText = (ori: keyof typeof REPORT_ORIENTATIONS) => {
  switch (ori) {
    case "LANDSCAPE":
      return "Landscape";
    case "PORTRAIT":
      return "Portrait";
    default: {
      // to prevent unhandled cases and throw error on typescript level
      const _exhaustiveCheck: never = ori;
      return _exhaustiveCheck;
    }
  }
};

function PreviewReportOrientationSection({
  orientation,
  setOrientation,
}: {
  orientation: keyof typeof REPORT_ORIENTATIONS;
  setOrientation: (orientation: keyof typeof REPORT_ORIENTATIONS) => void;
}) {
  return (
    <div className="border-t">
      <h3>Orientation</h3>
      <div className="flex flex-col ml-1">
        {Object.values(REPORT_ORIENTATIONS).map((ori) => (
          <Button
            key={ori}
            variant={"ghost"}
            className={`justify-start ${orientation === ori ? "border" : ""}`}
            onClick={() => setOrientation(ori)}
          >
            {getReportOrientationBtnText(ori)}
          </Button>
        ))}
      </div>
    </div>
  );
}

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
      <DialogContent className="sm:w-full sm:max-w-[50vw] ">
        <DialogHeader className="pb-2 ">
          <div className="flex flex-row gap-1 items-center">
            <Printer className="h-5 w-5" />

            <DialogTitle>Print Report</DialogTitle>
          </div>
        </DialogHeader>
        <DialogBody className="grid grid-cols-1 sm:grid-cols-5 gap-2">
          <div className="sm:col-span-2 flex flex-col gap-2">
            <PreviewReportFormatSection format={format} setFormat={setFormat} />
            <PreviewReportOrientationSection
              orientation={orientation}
              setOrientation={setOrientation}
            />
          </div>
          <div className="sm:col-span-3 bg-gray-100 p-3 rounded-lg sm:mt-0 mt-4">
            <div>Preview</div>
            <div className="mt-4 border p-4 rounded-lg text-center w-full h-[300px]">
              {isLoading ? (
                <div className="flex items-center justify-center h-32">
                  <Loader className="h-8 w-8 animate-spin text-gray-500" />
                </div>
              ) : previewImage ? (
                <img
                  src={previewImage}
                  alt="Preview"
                  className="w-full h-full rounded-lg"
                />
              ) : (
                <div className="text-red-600">Error on Preview Report</div>
              )}
            </div>
          </div>
        </DialogBody>

        <DialogFooter>
          <Button variant={"ghost"} onClick={onClose}>
            Cancel
          </Button>
          <Button onClick={handleDownloadPreviewImage}>Print Report</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
