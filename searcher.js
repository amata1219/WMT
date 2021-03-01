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

function search4(selectionText, suffix) {
  chrome.tabs.create({
    url: "https://www.google.com/search?q=" + selectionText + "+" + suffix
  }); 
}

function onClick(info, tab) {
  var suffix = entryId2Suffix(info.menuItemId);
  if (suffix != null) search4(info.selectionText, suffix);
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
  title: "What's the Meaning of '%s'?",
});
createChildContextMenuWith(TOHA_ENTRY_ID);
createChildContextMenuWith(IMI_ENTRY_ID);
chrome.contextMenus.onClicked.addListener(onClick);
