const CURRENT_DOC_VERSION = 4;

/* eslint no-fallthrough: "off" */
export function Doc(doc = { version: CURRENT_DOC_VERSION, data: {} }) {
  this._loadDocument(doc.version, doc.data);
}

Doc.prototype = {
  _loadDocument(docVersion, data) {
    // TODO: Update document based on version
    let nameParts = (data.name || '').split(/\s/g);
    switch (docVersion) {
      case 1:
        data.firstName = nameParts[0];
        data.lastName =
          nameParts.length > 1 ? nameParts[nameParts.length - 1] : '';
        data.location = 'Earth';
      case 2:
        data.email = 'nobody@example.com';
      case 3:
        data.middleName = nameParts.slice(1, nameParts.length - 1).join(' ');
      case 4:
    }
    this._data = data;
  },
  get data() {
    return { ...this._data };
  }
};

Doc.fromFile = function fromFile(filename) {
  let doc = require(`../docs/${filename}`);
  return new Doc(doc);
};
