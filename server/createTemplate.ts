interface IcreateTemplate {
  clientBundleScript: string;
  styleTags: string;
  content: string;
}

export const createTemplate = ({ clientBundleScript, styleTags, content }: IcreateTemplate) => `
        <!DOCTYPE html>
        <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>My SSR App</title>
                ${styleTags} 
            </head>
            <body>
                <div id='ssr-app'>${content}</div>
                ${clientBundleScript}
            </body>
        </html>
    `;
