import Ember from 'ember';

export function tabTitleHelper(slug_url) {
  var t = this.container.lookup('utils:t');
  var txt = !!slug_url ?  slug_url : "title";
  return t("pages." + slug_url);
}

export default Ember.HTMLBars.makeBoundHelper(tabTitleHelper);
