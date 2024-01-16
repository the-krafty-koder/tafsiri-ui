const downloadSubtitle = (title:string, url: string) => {
    fetch(url, {
        method: 'GET',
        headers: {
            'Content-Type': 'text/plain',
        }
    }).then(response => response.blob()).then(
        (blob) => {
            const url = window.URL.createObjectURL(new Blob([blob]))
            const link = document.createElement('a')
            link.href = url;
            link.download = title;

            document.body.appendChild(link);
            link.click();
            link.parentNode?.removeChild(link);
        }
    )
}

export default downloadSubtitle;