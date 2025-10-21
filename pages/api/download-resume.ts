import fs from 'fs';
import MarkdownIt from 'markdown-it';
import type { NextApiRequest, NextApiResponse } from 'next';
import path from 'path';

function generatePdfHtml(content: string): string {
  // Configure markdown-it with GitHub Flavored Markdown support
  const md = new MarkdownIt({
    html: true,
    linkify: true,
    typographer: true,
    breaks: false
  });

  const htmlContent = md.render(content);
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="UTF-8">
      <title>Fernando Ibanez - Resume</title>
      <style>
        body {
          font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
          font-size: 12px;
          line-height: 1.4;
          color: #333;
          max-width: 800px;
          margin: 0 auto;
          padding: 20px;
        }
        h1 {
          font-size: 24px;
          color: #2c5aa0;
          border-bottom: 2px solid #2c5aa0;
          padding-bottom: 10px;
          margin-bottom: 20px;
        }
        h2 {
          font-size: 18px;
          color: #2c5aa0;
          margin-top: 25px;
          margin-bottom: 10px;
        }
        h3 {
          font-size: 14px;
          color: #444;
          margin-top: 15px;
          margin-bottom: 8px;
        }
        ul {
          margin: 10px 0;
          padding-left: 20px;
        }
        li {
          margin-bottom: 4px;
        }
        strong {
          color: #2c5aa0;
        }
        table {
          width: 100%;
          border-collapse: collapse;
          margin: 15px 0;
          font-size: 11px;
        }
        th, td {
          border: 1px solid #ddd;
          padding: 8px 12px;
          text-align: left;
          vertical-align: top;
        }
        th {
          background-color: #f8f9fa;
          font-weight: bold;
          color: #2c5aa0;
        }
        td {
          line-height: 1.3;
        }
        tr:nth-child(even) {
          background-color: #f9f9f9;
        }
        @media print {
          body { margin: 0; padding: 15px; }
          @page { margin: 1cm; }
          table { page-break-inside: avoid; }
        }
      </style>
    </head>
    <body>
      ${htmlContent}
    </body>
    </html>
  `;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> {
  if (req.method !== 'GET') {
    res.setHeader('Allow', ['GET']);
    res.status(405).json({ message: 'Method not allowed' });
    return;
  }

  const { format = 'md' } = req.query;

  if (format !== 'md' && format !== 'pdf' && format !== 'html') {
    res
      .status(400)
      .json({ message: 'Invalid format. Use "md", "pdf", or "html"' });
    return;
  }

  try {
    if (format === 'pdf') {
      // Serve existing PDF file
      const pdfPath = path.join(
        process.cwd(),
        'content',
        'Fernando_Ibanez_Resume.pdf'
      );

      if (!fs.existsSync(pdfPath)) {
        res.status(404).json({ message: 'PDF resume file not found' });
        return;
      }

      const pdfBuffer = fs.readFileSync(pdfPath);
      res.setHeader('Content-Type', 'application/pdf');
      res.setHeader(
        'Content-Disposition',
        'attachment; filename="Fernando_Ibanez_Resume.pdf"'
      );
      res.setHeader('Content-Length', pdfBuffer.length);
      res.status(200).send(pdfBuffer);
    } else {
      // Handle MD and HTML formats
      const resumePath = path.join(
        process.cwd(),
        'content',
        'Fernando_Ibanez_Resume.md'
      );

      if (!fs.existsSync(resumePath)) {
        res.status(404).json({ message: 'Markdown resume file not found' });
        return;
      }

      const resumeContent = fs.readFileSync(resumePath, 'utf-8');

      if (format === 'md') {
        // Serve markdown file
        res.setHeader('Content-Type', 'text/markdown');
        res.setHeader(
          'Content-Disposition',
          'attachment; filename="Fernando_Ibanez_Resume.md"'
        );
        res.setHeader(
          'Content-Length',
          Buffer.byteLength(resumeContent, 'utf-8')
        );
        res.status(200).send(resumeContent);
      } else if (format === 'html') {
        // Serve HTML page for viewing
        const htmlContent = generatePdfHtml(resumeContent);
        res.setHeader('Content-Type', 'text/html');
        res.status(200).send(htmlContent);
      }
    }
  } catch (error) {
    console.error('Error serving resume file:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
}
