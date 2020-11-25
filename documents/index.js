module.exports = ({ value }) => {
    const today = new Date();
    return `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>PDF Export</title>
            <style>
                @media print {
                    body, html {
                        height: 100%;
                    }
                    .title {
                        text-align: center;
                    }
                    .container {
                        color: #f00;
                        width: 100%;
                        height: 300px;
                        position: relative;
                        background: #f3f3f3
                    }
                    .day {
                        position: absolute;
                        background: #000;
                        color: #fff;
                        bottom: 20px;
                        right: 10px;
                        font-size: 12px;
                    }
                    .value {
                        font-size: 32px;
                    }
                    .break-page {
                        page-break-after: always;
                    }
                    .break-page::after {
                        content: "page 1";
                        position: absolute;
                        bottom: 0
                    }
                }
            </style>
        </head>
        <body>
            <h1 class="title">Hello there</h1>
            <div class="container">
                <div class="day">Hôm nay: ${today}</div>
                <div class="value">Giá trị: ${value}</div>
            </div>
            <div class="break-page">&p</div>
            <div class="container">
                <div class="day">Hôm nay: ${today}</div>
                <div class="value">Giá trị: ${value}</div>
            </div>
            <div class="break-page">&p</div>
            <div class="container">
                <div class="day">Hôm nay: ${today}</div>
                <div class="value">Giá trị: ${value}</div>
            </div>
            <div class="break-page">&p</div>
            <div class="container">
                <div class="day">Hôm nay: ${today}</div>
                <div class="value">Giá trị: ${value}</div>
            </div>
            <div class="break-page">&p</div>
            <div class="container">
                <div class="day">Hôm nay: ${today}</div>
                <div class="value">Giá trị: ${value}</div>
            </div>
        </body>
        </html>
    `
}