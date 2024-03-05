const downloadSubtitle = (title: string, url: string) => {
    const headers = new Headers();
    headers.set("X-User-Agent", "Tafsiri V1");
    headers.set("Content-Type", "text/plain");

    fetch(url, {
        method: "GET",
        headers: headers,
    })
        .then((response) => response.blob())
        .then((blob) => {
            const url = window.URL.createObjectURL(new Blob([blob]));
            const link = document.createElement("a");
            link.href = url;
            link.download = `${title}.srt`;

            document.body.appendChild(link);
            link.click();
            link.parentNode?.removeChild(link);
        });
};

export default downloadSubtitle;
