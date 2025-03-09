import { REPORT_NODE_ID } from "@/constants";
import { toPng } from "html-to-image";
import { useEffect, useState } from "react";

export function usePreviewReports(
  isModalOpen: boolean,
  onCloseModal: () => void
) {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [previewImage, setPreviewImage] = useState<string | null>(null);
  useEffect(() => {
    if (isModalOpen) handlePreview();
  }, [isModalOpen]);

  const handlePreview = async () => {
    const node = document.getElementById(REPORT_NODE_ID);
    setIsLoading(true);
    try {
      // Adding a 1 second delay to better illustrate the loading state
      await new Promise((resolve) => setTimeout(resolve, 1000));

      const dataUrl = await toPng(node!);
      setPreviewImage(dataUrl);
    } catch (error) {
      console.error("Error generating preview:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleDownloadPreviewImage = async () => {
    if (!previewImage) {
      alert("No preview image available");
      return;
    }
    const link = document.createElement("a");
    link.href = previewImage;
    link.download = "report.png";
    link.click();
    onCloseModal();
  };
  return { isLoading, previewImage, handleDownloadPreviewImage };
}
