function getYoutubeId(url) {
    if (!url) return null;
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
    const match = url.match(regExp);
    return (match && match[2].length === 11) ? match[2] : null;
}

const testUrls = [
    "https://www.youtube.com/watch?v=7_pL7XlS_lU",
    "https://youtu.be/7_pL7XlS_lU",
    "https://www.youtube.com/embed/7_pL7XlS_lU",
    "https://www.youtube.com/watch?v=7_pL7XlS_lU&t=60s",
    "https://www.youtube.com/watch?v=v=7_pL7XlS_lU", // Malformed but should work
    "http://www.youtube.com/v/7_pL7XlS_lU?version=3&hl=en_US"
];

console.log('Testing getYoutubeId function:');
testUrls.forEach(url => {
    const id = getYoutubeId(url);
    console.log(`URL: ${url} -> ID: ${id} (${id === '7_pL7XlS_lU' ? '✅ PASS' : '❌ FAIL'})`);
});
