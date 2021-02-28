chrome.runtime.onInstalled.addListener(function() {
  chrome.contextMenus.create({
    id: 'parent',
    type: 'normal',
    contexts: ['selection'],
    title: 'What\'s the meaning of this?'
  });
  
  chrome.contextMenus.create({
    id: 'toha',
    parentId: 'parent',
    title: 'とは検索'
  });
  
  chrome.contextMenus.create({
    id: 'imi',
    parentId: 'parent',
    title: '意味検索'
  });
});

chrome.contextMenus.onClicked.addListener(function(item) {
  var append;
  switch (item) {
    case 'toha':
      append = 'とは';
      break;
    case 'imi':
      append = '意味';
      break;
    default:
      break;
  }
  
  chrome.tabs.create({
    item + ' '+ append,
    active: true
  }, (tab) => { });
});
