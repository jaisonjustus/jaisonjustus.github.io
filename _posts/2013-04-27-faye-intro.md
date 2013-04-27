---
layout: post
title: "Faye, The Pub/Sub Rockstart"
description: "Faye simple Pub/Sub Library"
category: "Pub-Sub, Javascript, NodeJS, Ruby"
tags: ["Pub-Sub","Javascript","NodeJS","Ruby"]
---
{% include JB/setup %}

Faye is a simple and elegant _publish-subscribe_ messaging library. Faye is build based on _Bayeux_. Bayeux is a protocol for transfering data asynchronously between server-client with lower latency. Protocol is meant to support responsive bidirectional interaction between server-client, client-client through server. Bayeux is based on publish subscribe routing semantics. Delivery of asynchronous messages from the server to a web client is often described as server-push.
The combination of server push techniques with an Ajax web application has been called Comet.
CometD is a project by the Dojo Foundation to provide multiple implementation of the Bayeux protocol in several programming languages.

Before talking about Faye, just take a lookup on publish-subscribe. _What is publish-subcribe, simply pub-sub?_ Publish-Subscribe or Pub-Sub is a software architectural messaging pattern. Based on the architecure, the senders of data are called publishers and the listeners for the data are called subscribers. simply conside a javascript newsletter site. every week the release or _publish_ new newsletters with interesting javascript news and tweaks. and the person who is very much interested in knowing more on javascript, he can go to the website and _subscribe_ the newsletter. so when ever the community publish a newsletter the person or the subscriber get the notification and the information mail. This is the underlying concept of Pub-Sub Architecture. here in this example *publisher - the javascript newsletter community, subsriber - the person interested in knowing more on javascript and the channel/medium - simply say internet/email*.

Faye library is available on the most widely used server languages _ruby_ and _node_.

####Using Faye in Node

To use Faye in Node install the faye node package by
    
    npm install -g faye

To use Faye in you server file

    var http = require('http'),
        faye = require('faye');

    var pubSubAdapter = new faye.NodeAdapter({mount: '/', timeout: 45});
    pubSubAdapter.listen(3000);


    pubSubAdapter.getClient().subscribe('/channel/music', function(response) {
      pubSubAdapter.getClient().publish('/channel/music/details', response );
    });

and write some Faye client implementation.

    <script type="text/javascript" src="http://localhost:3000/faye/client.js"></script>
    <script type="text/javascript">
      function pubSubTesting() {
        client.publish('/channel/music', { 'track' : 'Bille Jean' });
      }
    </script>

run the server and try to call the pubSubTest() you can see the magic.