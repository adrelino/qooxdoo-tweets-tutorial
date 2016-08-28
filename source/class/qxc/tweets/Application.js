/* ************************************************************************

   Copyright:

   License:

   Authors:

************************************************************************ */

/**
 * This is the main application class of your custom application "qxc.tweets"
 */
qx.Class.define('qxc.tweets.Application', {
  extend: qx.application.Standalone,

/*
*****************************************************************************
   MEMBERS
*****************************************************************************
*/

  members:
  {
  /**
   * This method contains the initial application code and gets called
   * during startup of the application
   *
   * @lint ignoreDeprecated(alert)
   */
    main: function () {
    // Call super class
      this.base(arguments);

      // Enable logging in debug variant
      if (qx.core.Environment.get('qx.debug')) {
        /* eslint-disable no-unused-expressions */
        // support native logging capabilities, e.g. Firebug for Firefox
        qx.log.appender.Native;
        // support additional cross-browser console. Press F7 to toggle visibility
        qx.log.appender.Console;
        /* eslint-enable no-unused-expressions */
      }

      qxc.promise.Rest.getInstance().init();
      qxc.promise.Init.getInstance().init();

      var service = new qxc.tweets.service.Identica();
      service.addListener('changeTweets', function (e) {
        this.debug(qx.dev.Debug.debugProperties(e.getData()));
      }, this);

      var main = new qxc.tweets.window.Main();
      main.moveTo(50, 30);

      main.addListener('reload', function () {
        service.fetchTweets();
      }, this);

      main.addListener('post', function (e) {
        this.debug('post: ' + e.getData());
      }, this);

      // setup list binding
      var list = main.getList();
      list.setItemHeight(68);
      list.setLabelPath('text');
      list.setIconPath('user.profile_image_url');
      list.setDelegate({
        createItem: function () {
          return new qxc.tweets.widget.Tweet();
        },

        bindItem: function (controller, item, id) {
          controller.bindProperty('text', 'post', null, item, id);
          controller.bindProperty('user.profile_image_url', 'icon', null, item, id);
          controller.bindProperty('created_at', 'time', {
            converter: function (data) {
              return new Date(data);
            }
          }, item, id);
        },

        configureItem: function (item) {
          item.getChildControl('icon').setWidth(48);
          item.getChildControl('icon').setHeight(48);
          item.getChildControl('icon').setScale(true);
          item.setMinHeight(52);
        }
      });

      service.bind('tweets', list, 'model', {
        converter: function (value) {
          return value || new qx.data.Array();
        }
      });

      this.__loginWindow = new qxc.tweets.window.Login();
      this.__loginWindow.moveTo(320, 30);
      this.__loginWindow.open();

      this.__loginWindow.addListener('changeLoginData', function (ev) {
        var loginData = ev.getData();
        service.fetchTweets(loginData.username, loginData.password);
      });

      main.open();

      this.addPromiseTable();
    },

    addPromiseTable: function () {
      var apiLoader = qxc.promise.Rest.getApi('https://jsonplaceholder.typicode.com');
      var postApiPromise = apiLoader.then(function (api) {
        return api.all('photos');
      });
      var tableModel = new qxc.promise.widget.table.model.Simple(postApiPromise, [
        {
          field: 'id',
          name: 'ID',
          sortable: true,
          editable: false
        },
        {
          field: 'albumId',
          name: 'Album ID',
          sortable: true,
          editable: false
        },
        {
          field: 'title',
          name: 'Title',
          sortable: true,
          editable: true
        },
        {
          field: 'url',
          name: 'Url',
          sortable: true,
          editable: false
        },
        {
          field: 'thumbnailUrl',
          name: 'Thumbnail URL',
          sortable: true,
          editable: false
        }],
        'id'
      );
      var table = new qx.ui.table.Table(tableModel);
      var win = new qx.ui.window.Window('QxC.Promise Demo');
      win.setLayout(new qx.ui.layout.Grow());
      win.add(table);
      win.moveTo(800, 30);
      win.open();
    }
  }
});
