const puppeteer = require('puppeteer');
const qrcode = require('qrcode');

(async () =>{
    try{
        //qrcode
        const qrcodeURL = await qrcode.toDataURL('letter.pdf');

         // HTML content
        const htmlContent = `
        <html>
            <body>
                <h1>Letter Title</h1>
                <p>lorem fbvfhv vjdvbdvnn dvndv</p>
                <img src="${qrcodeURL}"></img>
            </body>
        </html>
    `;

        const browser = await puppeteer.launch();
        const page = await browser.newPage();
        await page.setContent(htmlContent);
        await page.pdf({ path: 'letter.pdf', format: 'A4'});

        await browser.close();
        console.log('PDF generated successfully');

    }
    catch(error){
        console.error('Error :', error);
    }
}) ();