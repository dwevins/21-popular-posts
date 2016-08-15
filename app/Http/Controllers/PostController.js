'use strict';
const Post = use('App/Model/Post');

class PostController {
  * index(req, res) {
    const posts = yield Post.with('user').fetch();

    yield res.sendView('post.index', { posts: posts.toJSON() });
  }

  * create(req, res) {
    const isLoggedIn = yield req.auth.check();
    if (isLoggedIn === false) {
      res.redirect('/unauthorized');
    } else {
      yield res.sendView('post.create');
    }
  }

  * store(req, res) {
    const { title, body } = req.all();
    yield req.authUser.posts().create({ title, body });
    yield req.with({ success: 'Post created successfully' })
    .flash();

    res.redirect('/post');
  }
}

module.exports = PostController;
