import html2canvas from "html2canvas-pro";
import type { RefObject } from "react";

export default async function saveHTMLToImg(
  ref: RefObject<HTMLElement | null>
) {
  if (!ref.current) {
    console.error("Ref is not defined");
    return;
  }
  // Create a container for the element to have a background
  const screenshotContainer = document.createElement("div");
  screenshotContainer.classList.add(
    "flex",
    "justify-center",
    "items-center",
    "bg-linear-to-r/decreasing",
    "from-indigo-500",
    "to-teal-400",
    "p-8",
    "min-w-[480px]",
    "min-h-[240px]",
  );
  screenshotContainer.appendChild(ref.current.cloneNode(true));
  screenshotContainer.style.zIndex = "-1";
  screenshotContainer.style.position = "absolute";
  document.body.appendChild(screenshotContainer);

  const canvas = await html2canvas(screenshotContainer, {scale: 5});
  const link = canvas.toDataURL("image/png");
  const a = document.createElement("a");
  a.href = link;
  a.download = "screenshot.png";
  a.click();
  a.remove();

  screenshotContainer.remove(); // Remove the container after taking the screenshot
}
