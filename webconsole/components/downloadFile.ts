/** @format */

export const downloadFile = (fileContent: object, filename: string) => {
  const blob = new Blob([JSON.stringify(fileContent, null, "  ")], {
    type: "application/json",
  });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  link.click();
  URL.revokeObjectURL(url);
};
