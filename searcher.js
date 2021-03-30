const TOHA_ENTRY_ID = "TOHA";
const IMI_ENTRY_ID = "IMI";
const HURIGANA_ENTRY_ID = "HURIGANA";

function entryId2Suffix(entryId) {
  switch (entryId) {
    case TOHA_ENTRY_ID:
      return "とは";
    case IMI_ENTRY_ID:
      return "意味";
    default:
      return null;
  }
}

function onClick(info, tab) {
  var suffix = entryId2Suffix(info.menuItemId);
  
  if (info.menuItemId === HURIGANA_ENTRY_ID) {
    chrome.tabs.create({
      url: "https://furigana.info/w/" + info.selectionText
    }); 
  } else {
    chrome.tabs.create({
      url: "https://www.google.com/search?q=" + info.selectionText + "+" + suffix
    });
  }
}

function createChildContextMenuWith(entryId) {
  chrome.contextMenus.create({
    id: entryId,
    parentId: "parent",
    contexts: ["selection"],
    title: entryId2Suffix(entryId) + "検索"
  });
}

chrome.contextMenus.create({
  id: "parent",
  contexts: ["selection"],
  title: "What's the Meaning of '%s'?"
});
createChildContextMenuWith(TOHA_ENTRY_ID);
createChildContextMenuWith(IMI_ENTRY_ID);
createChildContextMenuWith(HURIGANA_ENTRY_ID);
chrome.contextMenus.onClicked.addListener(onClick);
