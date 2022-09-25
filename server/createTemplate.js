export const createTemplate = ({ clientBundleScript, clientBundleStyle, content }) => `
        <!DOCTYPE html>
        <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>My SSR App</title>
                ${clientBundleStyle} 
            </head>
            <body>
                <div id='ssr-app'>${content}</div>
                ${clientBundleScript}
            </body>
        </html>
    `;
