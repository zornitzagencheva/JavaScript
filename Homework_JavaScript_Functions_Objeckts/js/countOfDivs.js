function countDivs(html) {
    var res = html.match(/<div/g);
    console.log(res.length);
}