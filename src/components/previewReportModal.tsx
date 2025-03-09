import { Button } from "./ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";
import { Loader } from "lucide-react"; // Import a spinner icon from lucide-react
import { usePreviewReports } from "@/hooks/usePreviewReports";

function PreviewReportFormatSection() {
  return (
    <div>
      <h3>Format</h3>
      <div className="flex flex-col ml-1">
        <Button variant={"ghost"} disabled className="justify-start">
          PDF Download
        </Button>
        <Button variant={"ghost"} className="justify-start">
          Image (PNG)
        </Button>
        <Button variant={"ghost"} disabled className="justify-start">
          Spreadsheet (CSV)
        </Button>
      </div>
    </div>
  );
}
function PreviewReportOrientationSection() {
  return (
    <div className="border-t">
      <h3>Orientation</h3>
      <div className="flex flex-row gap-1 flex-wrap">
        <Button variant={"outline"}>Portrait</Button>
        <Button variant={"outline"} disabled>
          Landscape
        </Button>
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

  const { isLoading, previewImage, handleDownloadPreviewImage } =
    usePreviewReports(isOpen, onClose);

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="sm:w-full sm:max-w-[50vw] ">
        <DialogHeader>
          <DialogTitle>Print Report</DialogTitle>
        </DialogHeader>
        <div className="grid grid-cols-1 sm:grid-cols-5 gap-2">
          <div className="sm:col-span-2 flex flex-col gap-2">
            <PreviewReportFormatSection />
            <PreviewReportOrientationSection />
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
        </div>

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
