function designerPdfViewer(h, word) {
    // Write your code here
    let alphabets = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','k','r','s','t','u','v','w','x','y','z'];
    let result = [];
    for(let i=0; i<word.length; i++){
        let index = alphabets.findIndex(a => a=== word[i]);
        if (index !== -1) result.push(h[index]);
    }
    return Math.max(...result) * word.length;
}
