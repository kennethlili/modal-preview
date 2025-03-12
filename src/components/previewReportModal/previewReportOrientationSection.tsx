import { REPORT_ORIENTATIONS } from "@/constants";
import { Button } from "../ui/button";

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
      <div className="flex flex-row ml-1">
        {Object.values(REPORT_ORIENTATIONS).map((ori) => (
          <Button
            key={ori}
            variant={"ghost"}
            className={`justify-start w-fit ${
              orientation === ori ? "border" : ""
            }`}
            onClick={() => setOrientation(ori)}
          >
            {getReportOrientationBtnText(ori)}
          </Button>
        ))}
      </div>
    </div>
  );
}
