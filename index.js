function autoMint() {
   if(document.querySelector("#ob-continue-mint")) {
      document.querySelector("#ob-continue-mint").click()
      document.querySelector("#ob-donation-continue").click()
      document.querySelector("#ob-mint-note").value = "https://github.com/MoskalykA"
      document.querySelector("#ob-mint-nft").click()
      document.querySelector("#ob-modal-close").click() 
   } else {
      document.querySelector("#ob-initial-mint").click()
      document.querySelector("#ob-connect-wallet").click() 
      document.querySelector("#ob-continue-mint").click()
      document.querySelector("#ob-donation-continue").click()
      document.querySelector("#ob-mint-note").value = "https://github.com/MoskalykA"
      document.querySelector("#ob-mint-nft").click()
      document.querySelector("#ob-modal-close").click() 
   }
}

function getXPathForElement(element) {
   const idx = (sib, name) => sib 
       ? idx(sib.previousElementSibling, name||sib.localName) + (sib.localName == name)
       : 1;
   const segs = elm => !elm || elm.nodeType !== 1 
       ? ['']
       : elm.id && document.getElementById(elm.id) === elm
           ? [`id("${elm.id}")`]
           : [...segs(elm.parentNode), elm instanceof HTMLElement
               ? `${elm.localName}[${idx(elm)}]`
               : `*[local-name() = "${elm.localName}"][${idx(elm)}]`];
   return segs(element).join('/');
}

let xPathList = []
document.querySelectorAll(".row1").forEach(function(element) {
   element.querySelectorAll(".big").forEach(function(element2) {
      element2.querySelectorAll(".r-c").forEach(function(element3) {
         xPathList.push(getXPathForElement(element3))
      })
   })
})

for (let index = 0; index < xPathList.length; index++) {
   const element = xPathList[index]
   setTimeout(() => {
      const allParagraphs = document.evaluate(
         element,
         document,
         null,
         XPathResult.FIRST_ORDERED_NODE_TYPE,
         null,
       ).singleNodeValue
      allParagraphs.querySelector("img").click()
      
      autoMint()
   }, 1000 * index)
}
