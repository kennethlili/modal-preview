import { REPORT_ORIENTATIONS } from "@/constants";
import { ToggleGroup, ToggleGroupItem } from "../ui/toggle-group";

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

export function PreviewReportOrientationSection({
  orientation,
  setOrientation,
}: {
  orientation: keyof typeof REPORT_ORIENTATIONS;
  setOrientation: (orientation: keyof typeof REPORT_ORIENTATIONS) => void;
}) {
  return (
    <div className="border-t px-6 pt-2">
      <h3 className="mb-2">Orientation</h3>
      <ToggleGroup
        type="single"
        size="lg"
        value={orientation}
        onValueChange={(value) =>
          setOrientation(value as keyof typeof REPORT_ORIENTATIONS)
        }
        className="flex flex-row ml-1 items-start"
      >
        {Object.values(REPORT_ORIENTATIONS).map((fmt) => (
          <ToggleGroupItem key={fmt} value={fmt} className="justify-start">
            {getReportOrientationBtnText(fmt)}
          </ToggleGroupItem>
        ))}
      </ToggleGroup>
    </div>
  );
}
