export function formatDateTime(timestamp) {
  // Create a Date object from the timestamp
  const dateObject = new Date(timestamp);

  // Extract the year, month, and day
  const year = dateObject.getFullYear();
  const month = String(dateObject.getMonth() + 1).padStart(2, "0"); // Months are 0-indexed
  const day = String(dateObject.getDate()).padStart(2, "0");

  // Extract the hours, minutes
  let hours = dateObject.getHours();
  const minutes = String(dateObject.getMinutes()).padStart(2, "0");

  // Determine AM or PM
  const ampm = hours >= 12 ? "PM" : "AM";

  // Convert 24-hour format to 12-hour format
  hours = hours % 12;
  hours = hours ? hours : 12; // If hours = 0, make it 12

  // Format the date as YYYY-MM-DD and the time as HH:MM AM/PM
  const formattedDate = `${year}-${month}-${day}`;
  const formattedTime = `${hours}:${minutes} ${ampm}`;

  return `${formattedDate} ${formattedTime}`; // Combine date and time
}

export const downloadFileFromUrl = async (fileUrl, fileName) => {
  try {
    const response = await fetch(fileUrl);
    const blob = await response.blob();

    const url = window.URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = fileName;
    a.style.display = "none";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);

    window.URL.revokeObjectURL(url);
  } catch (error) {
    console.error("Download failed:", error);
  }
};
