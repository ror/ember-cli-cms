import Ember from 'ember';
/* global Dom2Docx, saveAs */

export default Ember.View.extend({
  actions: {
    download: function () {
      // dom2docx
      // Create instance on Dom2Docx
      var dom2docx = new Dom2Docx(this.$('#jspdf').get(0));

      // Creates the dom to a File Blob object
      var docx = dom2docx.create();

      //var href = (window.URL || window.webkitURL).createObjectURL(docx);

      // Using FileSaver (see vendor/FileSaver.js)
      // include FileSave.js
      saveAs(docx, "example.docx");
    }
  }
});
