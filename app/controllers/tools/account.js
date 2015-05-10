import Ember from 'ember';

//todo 这应该是很好的方式，是不是有冲突和隐患？
import pinyin from "npm:pinyin";

//fixme 验证没有运行
import EmberValidations from 'ember-validations';

export default Ember.ObjectController.extend(EmberValidations, {
  name: '',
  telephone: '',
  sponsor: '',
  isNoSponsor: false,
  isShowing: false,

  validations: {
    telephone: {
      presence: true,
      numericality: true,
      length: 11
    }
  },

  optionsHost: function () {
    return {
      all: ['163.com', '126.com', 'yeah.com'],
      selected: '163.com'
    };
  }.property(),

  optionsPinyin: function () {
    return {
      all: [
        {name: this.t('tools.account.base.setting.options_pinyin.all'), id: 1},
        {name: this.t('tools.account.base.setting.options_pinyin.first'), id: 2}],
      selected: 1
    };
  }.property(),

  optionsLetter: function () {
    return {
      all: [
        {name: this.t('tools.account.base.setting.options_letter.capitalize'), id: 1},
        {name: this.t('tools.account.base.setting.options_letter.uppercase'), id: 2}],
      selected: 1
    };
  }.property(),

  optionsDigital: function () {
    return {
      all: [
        {name: this.t('tools.account.base.setting.options_digital.last8'), id: 1},
        {name: this.t('tools.account.base.setting.options_digital.last4'), id: 2},
        {name: this.t('tools.account.base.setting.options_digital.center'), id: 3}],
      selected: 1
    };
  }.property(),

  //类型：简拼还是全拼 用于帐号设置
  pinyinStyle: function () {
    var option = this.get('optionsPinyin.selected');
    var result = {};

    switch (option) {
      case 1:
        result.style = pinyin.STYLE_NORMAL;        // 设置拼音风格 `中心` [ [ 'zhong' ], [ 'xin' ] ]);
        break;
      case 2:
        result.style = pinyin.STYLE_FIRST_LETTER;  // 设置拼音风格 `中心` [ [ 'z' ], [ 'x' ] ]);
        break;
    }

    return result;
  }.property('optionsPinyin.selected'),

  //字母：大写还是小写 用于密码混合
  pinyinLetter: function () {
    var option = this.get('optionsLetter.selected');
    var letter = '';

    switch (option) {
      case 1:
        letter = this.get('pinyinOfName').capitalize();  //首字母大写
        break;
      case 2:
        letter = this.get('pinyinOfName').toUpperCase();
        break;
    }

    return letter;
  }.property('pinyinOfName', 'optionsLetter.selected'),

  //数字：中间或最后的4位 用于密码混合
  pinyinDigital: function () {
    var option = this.get('optionsDigital.selected');
    var letter = '';

    switch (option) {
      case 1:
        letter = this.get('telephone').substr(3, 8);  //末尾8位
        break;
      case 2:
        letter = this.get('telephone').substr(7, 4);//末尾4位
        break;
      case 3:
        letter = this.get('telephone').substr(2, 4);//中间4位
        break;
      case 4:
        letter = Math.random().toString(8);//随机产生
        break;
    }

    return letter;
  }.property('telephone', 'optionsDigital.selected'),

  pinyinOfName: function () {
    var nameArray = pinyin(this.get('name'), this.get('pinyinStyle'));
    var name = '';

    nameArray.forEach(function (n) {
      name += n[0];
    });

    return name;
  }.property('name', 'pinyinStyle'),

  emailAccount: function () {
    return this.get('pinyinOfName');
  }.property('pinyinOfName'),

  onecoinAccount: function () {
    var email = '';

    if (this.get('emailAccount') !== '') {
      email = this.get('emailAccount') + '@' + this.get('optionsHost.selected');
    }

    return email;
  }.property('emailAccount', 'optionsHost.selected'),

  onepayAccount: function () {
    return this.get('onecoinAccount');
  }.property('onecoinAccount'),

  //密码设置
  emailPassword: function () {
    return this.get('pinyinLetter') + this.get('pinyinDigital');
  }.property('pinyinLetter', 'pinyinDigital'),

  onecoinPasswordBinding: 'emailPassword',
  onepayPasswordBinding: 'emailPassword',

  onecoinSignupUrl: function () {
    var url = "http://onecoin.eu/signup/";
    if (this.get('isNoSponsor')) {
      url += "onecoinjr";
    } else {
      url += this.get('sponsor');
    }
    return url;
  }.property('sponsor', 'isNoSponsor'),

  clickNoSponsor: function () {
    var txt = this.t('tools.account.click_here');

    if (this.get('isNoSponsor')) {
      txt = this.t('tools.account.onecoin.clicknosponsor');
    }

    return txt;
  }.property('sponsor', 'isNoSponsor'),

  showClickMe: function () {
    if (this.get('isNoSponsor') || this.get('sponsor').length > 0) {
      this.set('isShowing', true);
    } else {
      this.set('isShowing', false);
    }
  }.observes('sponsor', 'isNoSponsor'),

  pdf: function () {
    //return new jsPDF('p','pt','a4');
  }.property(),

  actions: {
    preview: function () {
      //this.get('pdf').addHTML(document.body, function() {
      //  var string = this.get('pdf').output('datauristring');
      //  this.$('#preview-pane').attr('src', string);
      //});
    },

    download: function () {
      var docDefinition = { content: 'This is an sample PDF printed with pdfMake 你好，我来了' };
      pdfMake.createPdf(docDefinition).download();

      //this.get('pdf').save(this.get('name') + '.pdf');

      //var doc = new jsPDF();
      //var specialElementHandlers = {
      //  'body': function(element, renderer){
      //    return true;
      //  }
      //};

      //doc.fromHTML($('#jspdf').get(0), 15, 15, {
      //  'width': 170
      //});
      //doc.text(20, 20, 'Hello world.');

    }
  }
});
