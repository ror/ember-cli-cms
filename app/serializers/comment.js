import DS from 'ember-data';

export default DS.RESTSerializer.extend({
  extractSingle: function (store, type, payload, id) {
    var comment = {};

    comment.id = payload.id;
    comment.body = payload.content; //修改，防止与系统content冲突
    comment.blog_id = payload.blog_id;
    comment.account_id = payload.account_id;
    comment.brief_content = payload.brief_content;
    comment.md_content = payload.md_content;
    comment.created_at = payload.created_at;

    var post_payload = {comment: comment};

    return this._super(store, type, post_payload, id);
  }
});
