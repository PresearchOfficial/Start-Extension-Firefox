browser.tabs.getCurrent(tab => {
  browser.tabs.create({ url : 'https://www.presearch.com/?utm_source=extff'}, () => {
    browser.tabs.remove(tab.id);
  });
})
