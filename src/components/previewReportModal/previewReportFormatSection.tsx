import { REPORT_FORMATS } from "@/constants";
import { ToggleGroup, ToggleGroupItem } from "../ui/toggle-group";
import { FileText, Image, FileSpreadsheet } from "lucide-react";

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

const getReportFormatBtnIcon = (format: keyof typeof REPORT_FORMATS) => {
  switch (format) {
    case "PDF":
      return <FileText />;
    case "PNG":
      return <Image />;
    case "CSV":
      return <FileSpreadsheet />;
    default: {
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
      <ToggleGroup
        type="single"
        size="lg"
        value={format}
        onValueChange={(value) =>
          setFormat(value as keyof typeof REPORT_FORMATS)
        }
        className="flex flex-col ml-1 items-start"
      >
        {Object.values(REPORT_FORMATS).map((fmt) => (
          <ToggleGroupItem
            key={fmt}
            value={fmt}
            className="w-full justify-start"
          >
            {getReportFormatBtnIcon(fmt)} {getReportFormatBtnText(fmt)}
          </ToggleGroupItem>
        ))}
      </ToggleGroup>
    </div>
  );
}
