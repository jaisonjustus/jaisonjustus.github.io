---
layout: page
title: I/O of a Developer.
tagline: Supporting tagline
---
{% include JB/setup %}

![My Identity](https://si0.twimg.com/profile_images/1416687499/jaakfussion.jpg)

“I love the WEB. Respect every Programming language. I used to write poetry mainly in JS. Designing is also my passion. I love my Planet and each and every folks”

"Life is pretty simple: You do some stuff. Most fails. Some works.
You do more of what works. If it works big, others quickly copy it. 
Then you do something else. 
`The trick is the doing something else.`" - `Leonardo da Vinci`

____

<ul class="posts">
  {% for post in site.posts %}
    <li><span>{{ post.date | date_to_string }}</span> &raquo; <a href="{{ BASE_PATH }}{{ post.url }}">{{ post.title }}</a></li>
  {% endfor %}
</ul>