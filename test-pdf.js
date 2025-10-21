const fs = require('fs');
const path = require('path');

// Test if the PDF file exists and can be read
const pdfPath = path.join(__dirname, 'content', 'Fernando_Ibanez_Resume.pdf');

console.log('Testing PDF file access...');
console.log('PDF Path:', pdfPath);
console.log('File exists:', fs.existsSync(pdfPath));

if (fs.existsSync(pdfPath)) {
  const stats = fs.statSync(pdfPath);
  console.log('File size:', stats.size, 'bytes');
  console.log('File is readable:', fs.constants.R_OK);

  try {
    const buffer = fs.readFileSync(pdfPath);
    console.log('Successfully read PDF file, buffer length:', buffer.length);
    console.log(
      'First few bytes (should start with %PDF):',
      buffer.subarray(0, 10).toString()
    );
  } catch (error) {
    console.error('Error reading PDF file:', error.message);
  }
} else {
  console.log('PDF file does not exist!');
}
