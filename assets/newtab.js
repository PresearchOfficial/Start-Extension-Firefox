browser.tabs.getCurrent(tab => {
  browser.tabs.create({ url : 'https://www.presearch.org/?utm_source=extff'}, () => {
    browser.tabs.remove(tab.id);
  });
})
