const IMI_ENTRY_ID = "IMI";
const SUFFIX = "意味";

chrome.contextMenus.create({
  id: IMI_ENTRY_ID,
  contexts: ["selection"],
  title: "Googleで「%s」の意味を検索する",
}); 

function search4(selectionText, suffix) {
  chrome.tabs.create({
    url: "https://www.google.com/search?q=" + selectionText + "+" + suffix
  }); 
}

function onClick(info, tab) {
  if (info.menuItemId === IMI_ENTRY_ID) search4(info.selectionText, SUFFIX);
}

chrome.contextMenus.onClicked.addListener(onClick);
