var Chance = require('chance');
var chance = new Chance();

module.exports = function (app) {
  var express = require('express');
  var appRouter = express.Router();

  users = [];
  avatars = [];
  for (i = 0; i < 50; i++) {
    avatars.push({
      id: i,
      thumb_url: 'http://media-cache-ak0.pinimg.com/236x/0c/e6/7f/0ce67fa7c94da77ab90877e65f3fda87.jpg',
      url: 'http://www.londra.us/Bristol_Castle.jpg'
    });
    users.push(
      {
        "id": i,
        "name": "test" + i,
        "role": "admin",
        "surname": "",
        "blogs_count": 2,
        "provider": null,
        "comments_count": 9,
        "profile_url": null,
        "profile_image_url": null,

        lat: 50, long: 40, zoom: 3, avatar_id: i, birthdate: new Date()
      });
  }
  users[0].email = 'test@example.com';

  appRouter.get('/users', function (req, res) {
    if (req.query.q) {
      return res.send({users: [users[0]], meta: {total: 1}, avatars: [avatars[0]]});
    }
    var perPage = +req.query.perPage;
    var page = +req.query.page;
    usersArray = users.slice((page - 1) * perPage, page * perPage);
    if (req.query.sort) {
      usersArray.sort(function (prev, next) {
        if (prev[req.query.sort] < next[req.query.sort]) {
          return -1
        } else if (prev[req.query.sort] == next[req.query.sort]) {
          return 0
        } else {
          return 1
        }
      });
      if (!JSON.parse(req.query.orderAscending)) {
        usersArray.reverse();
      }
    }
    avatarsArray = avatars.slice((page - 1) * perPage, page * perPage);
    res.send({users: usersArray, meta: {total: 50}, avatars: avatarsArray});
  });

  appRouter.get('/users/autocomplete', function (req, res) {
    res.send(users);
  });

  appRouter.delete('/users/:id', function (req, res) {
    res.send({});
  });

  appRouter.get('/users/:id', function (req, res) {
    res.send({user: {id: req.params.id, name: 'testuser', lat: 50, long: 40, zoom: 3}});
  });

  appRouter.put('/users/:id', function (req, res) {
    res.send({
      user: {
        id: req.params.id,
        name: req.body.user.name,
        lat: req.body.user.lat,
        long: req.body.user.long,
        zoom: req.body.user.zoom
      }
    });
  });

  // api/v1/categories
  var category = {
    id: 1,
    name: 'announcement',
    role: 'test',
    description: chance.paragraph({sentences: 10}),
    is_menu: true
  };

  appRouter.get('/categories', function (req, res) {
    res.send({categories: [category]});
  });

  appRouter.post('/categories', function (req, res) {
    var errors = {};
    if (req.body.category.email === null) {
      errors.email = ["can't be blank"];
      return res.status(422).json(errors);
    }
    else {
      return res.send({categories: [category]});
    }
  });

  appRouter.delete('/categories/:id', function (req, res) {
    res.send({});
  });

  appRouter.get('/categories/:id', function (req, res) {
    res.send({category: category, avatars: avs});
  });

  appRouter.put('/categories/:id', function (req, res) {
    res.send({
      category: {
        id: req.params.id,
        name: req.body.category.name,
        is_menu: req.body.category.is_menu,
        role: req.body.category.role
      }
    });
  });

  appRouter.get('/catalogues', function (req, res) {
    var catalogues = [{id: 1, name: 'Tree #1', parent_id: null, catalogue_ids: [2, 3]},
      {id: 2, name: 'Tree #2', parent_id: 1, catalogue_ids: [4]},
      {id: 3, name: 'Tree #3', parent_id: 1, catalogue_ids: [5]},
      {id: 4, name: 'Tree #4', parent_id: 2, catalogue_ids: []},
      {id: 5, name: 'Tree #5', parent_id: 3, catalogue_ids: []}
    ];
    res.send({catalogues: catalogues});
  });


  appRouter.post('/catalogues', function (req, res) {
    res.send({});
  });

  appRouter.post('/avatars', function (req, res) {
//    req.on('data', function(chunk){ console.log(chunk)});
    res.send({
      avatar: {
        id: 1,
        thumb_url: 'http://media-cache-ak0.pinimg.com/236x/0c/e6/7f/0ce67fa7c94da77ab90877e65f3fda87.jpg',
        url: 'http://www.londra.us/Bristol_Castle.jpg'
      }
    });
  });
  appRouter.put('/avatars/:id', function (req, res) {
    res.send({
      avatar: {
        id: req.params.id,
        position: req.body.avatar.position,
        url: req.body.avatar.url,
        thumb_url: req.body.avatar.thumb_url
      }
    });
  });

  // comments
  var comment = {
    "id": 1,
    "blog_id": 1,
    "account_id": 1,
    "brief_content": "hello world, this is a content",
    "md_content": "<p>hello world, this is a content</p>\n",
    "created_at": new Date(),
    "user": "admin",
    "body": "hello world, this is a content"
  };

  appRouter.get('/comments', function (req, res) {
    res.send({comments: [comment]});
  });

  appRouter.delete('/comments/:id', function (req, res) {
    res.send({});
  });

  appRouter.get('/comments/:id', function (req, res) {
    res.send({comment: comment});
  });

  appRouter.put('/comments/:id', function (req, res) {
    res.send({comment: {id: req.params.id, name: req.body.car.title}});
  });

  //blogs
  var blog = {
    "id": 1,
    "title": "Hello, this is my first blog.",
    "slug_url": "first-blog",
    "view_count": 0,
    "commentable": true,
    "has_i18n": null,
    "comments_count": 1,
    "cached_tags": ["first"],
    "content_updated_at": new Date(),
    "created_at": new Date(),
    "body": {"content": "Hello, this is my first blog."},
    "body_en": null,
    "user": users[0],
    "category": "announcement",
    "comments": [1]
  };

  appRouter.get('/blogs', function (req, res) {
    res.send({
      blogs: [blog]
    });
  });

  appRouter.get('/blogs/:id', function (req, res) {
    res.send({blog: blog});
  });

  // onecoiners
  appRouter.get('/onecoiners', function (req, res) {
    res.send({
      counter: 10000
    });
  });

  var page = {
    "id": 1,
    "slug_url": "about",
    "body": "<p>hello world</p>",
    "view_count": 0,
    "updated_at": new Date(),
    "created_at": new Date(),
    "user": {
      "id": 1,
      "name": "admin",
      "email": "admin@onecoin.im",
      "role": "admin",
      "surname": "",
      "blogs_count": 2,
      "provider": null,
      "comments_count": 9,
      "profile_url": null,
      "profile_image_url": null
    }
  };

  appRouter.get('/pages', function (req, res) {
    res.send({
      page: [page]
    });
  });
  app.use('/api/v1', appRouter);
};
