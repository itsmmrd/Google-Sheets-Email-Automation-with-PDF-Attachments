function sendEmailsWithPDFAttachment() {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Sheet1'); // Replace 'Sheet1' with your sheet name
  var data = sheet.getDataRange().getValues();
  
  for (var i = 1; i < data.length; i++) {
    var row = data[i];
    var name = row[1];
    var email = row[0];
    var subject = row[3];
    var body = row[2];
    
    // Construct the email body
    var emailBody = "Dear " + name + ",\n\n" + body;
    
    // Retrieve the PDF file from Google Drive
    var pdfFile = DriveApp.getFileById('YOUR_PDF_FILE_ID_ON_GOOGLE_DRIVE'); // Replace 'YOUR_PDF_FILE_ID_ON_GOOGLE_DRIVE' with the ID of your PDF file
    
    // Send the email with PDF attachment
    MailApp.sendEmail({
      to: email,
      subject: subject,
      body: emailBody,
      attachments: [pdfFile.getAs(MimeType.PDF)] // Attach the PDF file
    });
    
    Utilities.sleep(1000); // Add a small delay to avoid rate limits
  }
}
