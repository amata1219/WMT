chrome.runtime.onInstalled.addListener(function() {
  chrome.contextMenus.create({
    id: 'parent',
    type: 'normal',
    contexts: ['selection'],
    title: 'What\'s the Meaning of This?'
  });
  
  chrome.contextMenus.create({
    id: 'toha',
    parentId: 'parent',
    title: 'とは検索',
    onclick: search4('とは')
  });
  
  chrome.contextMenus.create({
    id: 'imi',
    parentId: 'parent',
    title: '意味検索',
    onclick: search4('意味')
  });
});

function search4(append, info, tab) {
  chrome.tabs.create({
    url: 'https://www.google.com/search?q=' + info.selectionText + '+' + append,
    active: true
  }, (tab) => { });
});
