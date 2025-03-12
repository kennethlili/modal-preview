import { REPORT_FORMATS } from "@/constants";
import { Button } from "../ui/button";

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

export function PreviewReportFormatSection({
  format,
  setFormat,
}: {
  format: keyof typeof REPORT_FORMATS;
  setFormat: (format: keyof typeof REPORT_FORMATS) => void;
}) {
  return (
    <div className="px-6">
      <h3 className="mb-2">Format</h3>
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
