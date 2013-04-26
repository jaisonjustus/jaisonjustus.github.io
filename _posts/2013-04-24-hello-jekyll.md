---
layout: post
title: "My Introduction to Jekyll"
description: "My first encounter with Jekyll"
category: "Jekyll, Ruby"
tags: [Jekkyll, Ruby]
---

I came across lot of `Jekyl` blog post and talks. At that time i think like whats new in a static site generator. Its static there is no use of static. But last week i came to know that static is powerfull yet than dynamic. same as in electricity so i planned to start the blog on my github using Jekyll. when i started using, its seems so cool. i loving this piece of art. i prefer everybody to try Jekyll. I like to share the steps i made this jekyll blog to up and running in github and finally `jaisonjustus.github.io` voila!!. you can find the copy of the steps in different website, even in the references but i like to just spot down the steps, for further readings please go through the references, and feel free to share more references, feedback, typos etc.

[Jekyll](http://jekyllrb.com/) is a static site generator, seems powerfull and good for me and the tag line of jekyll is apt `convert your text into a monster`. Jekyll is built by Tom Preston-Werner [github@mojombo](https://github.com/mojombo). Jekyll is built on `Ruby` one of the powerfull language. its very easy to setup, customize and use. dependencies required for jekyll is `Ruby`.

install jekyll ruby gem.

    sudo gem install jekyll.

clone the jekyll-bootstrap github handle to your machine. and set the remote url of the clone to you github.io reporistory (before adding remote url create a new repo in ur github like username.github.io. the username will be same as your github handle. my github handle is jaisonjustus, so my repo is jaisonjustus.github.io.)

    $ git clone https://github.com/plusjade/jekyll-bootstrap.git USERNAME.github.com
    $ cd USERNAME.github.com
    $ git remote set-url origin git@github.com:USERNAME/USERNAME.github.com.git
    $ git push origin master

so the jekyll blog is ready. to test your blog locally run

    jekyll --server

by default the server start running at [localhost:4000](http://localhost:4000). now to make a new blog post run

    rake post title="My new post"

now go and check the directory `_posts/` you can find a file `2013-04-24-my-new-post.md` which is your markdown file of your blog post. The file name should be date+postname. so its easy to track the blog post. Next you want to make a new page

    rake page name="mypage.md"

After finishing editing the blog. push the changes to the repository

    git push origin master

you git repo get updated (because we point the remote url of the clone to your repo). then go and check you github.io webpage... you can see the magic.

###References
- [Nettuts blog post by Andrew Burgess](http://net.tutsplus.com/tutorials/other/building-static-sites-with-jekyll/)
- [Daniel Mcgraw Blog post](http://danielmcgraw.com/2011/04/14/The-Ultimate-Guide-To-Getting-Started-With-Jekyll-Part-1/)
- [Publish your blog with dropbox and jekyll](http://clickontyler.com/blog/2011/11/publishing-your-blog-with-dropbox-and-jekyll/)

{% include JB/setup %}
