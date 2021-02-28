const TOHA_ENTRY_ID = "TOHA";
const IMI_ENTRY_ID = "IMI";

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

function createContextMenu(entryId) {
  var suffix = entryId2Suffix(entryId);
  chrome.contextMenus.create({
    id: entryId,
    contexts: ["selection"],
    title: "Googleで「%s　" + suffix + "」を検索",
  }); 
}

createContextMenu(TOHA_ENTRY_ID);
createContextMenu(IMI_ENTRY_ID);

function search4(selectionText, suffix) {
  chrome.tabs.create({
    url: "https://www.google.com/search?q=" + selectionText + "+" + suffix
  }); 
}

function onClick(info, tab) {
  var suffix = entryId2Suffix(info.menuItemId);
  if (suffix != null) search4(info.selectionText, suffix);
}

chrome.contextMenus.onClicked.addListener(onClick);
