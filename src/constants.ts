import { ReportItemProps } from "@/components/reports";

export const REPORT_NODE_ID = "report-node";

export const REPORTS: ReportItemProps[] = [
  {
    title: "First Report",
    content: "This is the first report.",
  },
  {
    title: "Second Report",
    content: "This is the second report.",
  },
  {
    title: "Third Report",
    content: "This is the third report.",
  },
  {
    title: "Fourth Report",
    content: "This is the fourth report.",
  },
  {
    title: "Fifth Report",
    content: "This is the fifth report.",
  },
  {
    title: "Sixth Report",
    content: "This is the sixth report.",
  },
  {
    title: "Seventh Report",
    content: "This is the seventh report.",
  },
];

export const REPORT_FORMATS = {
  PDF: "PDF",
  PNG: "PNG",
  CSV: "CSV",
} as const;

export const REPORT_ORIENTATIONS = {
  PORTRAIT: "PORTRAIT",
  LANDSCAPE: "LANDSCAPE",
} as const;
