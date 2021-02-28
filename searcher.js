chrome.runtime.onInstalled.addListener(function() {
  chrome.contextMenus.create({
    id: 'parent',
    type: 'normal',
    contexts: ['selection'],
    title: 'What\'s the Meaning of %s?'
  });
  
  chrome.contextMenus.create({
    id: 'toha',
    parentId: 'parent',
    title: '「%s とは」を検索',
    onclick: function(info, tab) {
      search4(info.selectionText, 'とは');
    }
  });
  
  chrome.contextMenus.create({
    id: 'imi',
    parentId: 'parent',
    title: '「%s 意味」を検索',
    onclick: function(info, tab) {
      search4(info.selectionText, '意味');
    }
  });
});

function search4(selectionText, append) {
  chrome.tabs.create({
    url: 'https://www.google.com/search?q=' + selectionText + '+' + append
  });
}
