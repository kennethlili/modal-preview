import { Loader } from "lucide-react";

export function PreviewReportBox({
  isLoading,
  previewImage,
}: {
  isLoading: boolean;
  previewImage: string | null;
}) {
  return (
    <div className="sm:col-span-3 bg-gray-100 p-3 sm:mt-0 mt-4 ">
      <h3 className="mb-2">Preview</h3>
      <div className="border p-4 rounded-sm text-center w-full h-[300px] bg-white shadow-md">
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
  );
}
