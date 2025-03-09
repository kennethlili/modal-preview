import { Button } from "./ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";

function PreviewReportFormatSection() {
  return (
    <div>
      <h3>Format</h3>
      <div className="flex flex-col ml-2">
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
    <div>
      <h3>Orientation</h3>
      <div className="flex flex-row gap-1">
        <Button variant={"outline"}>Portrait</Button>
        <Button variant={"outline"} disabled>
          Landscape
        </Button>
      </div>
    </div>
  );
}

export function PreviewReportModal() {
  return (
    <>
      <Dialog>
        <DialogTrigger>
          <Button>Preview Report</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Print Report</DialogTitle>
          </DialogHeader>
          <div className="grid grid-cols-5 gap-4">
            <div className="col-span-2">
              <PreviewReportFormatSection />
              <PreviewReportOrientationSection />
            </div>
            <div className="col-span-3">
              <div>Preview</div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
