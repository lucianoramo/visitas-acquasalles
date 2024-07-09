import { NextApiRequest, NextApiResponse } from 'next'
import puppeteer from 'puppeteer'

interface Data {
      title: string
      content: string
}

const fetchData = async (): Promise<Data> => {
      // Replace with your actual data fetching logic
      return {
            title: 'Sample PDF',
            content: 'This is a sample PDF generated with Puppeteer.',
      }
}

const generatePdf = async (data: Data): Promise<Buffer> => {
      const browser = await puppeteer.launch()
      const page = await browser.newPage()
      await page.setContent(`
    <html>
      <head>
        <title>${data.title}</title>
        <style>
          body { font-family: Arial, sans-serif; }
          .content { margin: 20px; }
        </style>
      </head>
      <body>
        <div class="content">
          <h1>${data.title}</h1>
          <p>${data.content}</p>
        </div>
      </body>
    </html>
  `)
      const pdf = await page.pdf({ format: 'A4' })
      await browser.close()
      return pdf
}

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
      if (req.method !== 'GET') {
            res.status(405).json({ message: 'Method not allowed' })
            return
      }

      try {
            const data = await fetchData()
            const pdfBuffer = await generatePdf(data)
            res.setHeader('Content-Type', 'application/pdf')
            res.setHeader('Content-Disposition', 'attachment; filename=sample.pdf')
            res.send(pdfBuffer)
      } catch (error: any) {
            res.status(500).json({ message: 'Internal Server Error', error: error.message })
      }
}

export default handler
