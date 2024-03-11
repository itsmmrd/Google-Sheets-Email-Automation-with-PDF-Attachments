# Google Sheets Email Script with PDF Attachment

This Google Apps Script is designed to send emails with PDF attachments using data from a Google Sheet.

## Introduction

This script automates the process of sending emails with PDF attachments based on data in a Google Sheet. It's particularly useful for sending personalized emails with individualized PDFs attached.

## Prerequisites

Before using this script, make sure you have the following:

1. A Google Sheet with the necessary data.
2. The PDF file you want to attach stored in Google Drive.

## Setup

1. Open your Google Sheet.
2. Open the script editor by clicking on `Extensions` -> `Apps Script`.
3. Paste the provided script into the script editor.
4. Replace `Sheet1` with the name of your sheet.
5. Replace `YOU_PDF_ID_UPLOADED_ON_GOOGLE_DRIVE` with the ID of your PDF file.
6. Save the script.

## Usage

1. Ensure your Google Sheet has the required data columns: Name, Email, Body, and Subject.
2. Run the script by clicking on the play button in the script editor.
3. The script will send personalized emails to the recipients with PDF attachments.

Note: Add a small delay using `Utilities.sleep(1000);` to avoid rate limits.

## Contributing

Contributions are welcome! If you find any issues or have improvements to suggest, feel free to open an issue or create a pull request.

## License

This project is licensed under the [MIT License](LICENSE).
