##How to write good css using BEM

BEM is a Methodology deals with the modularised development of Web Front-Ends. This methodology is developed by a search engine giant company called __Yandex__ based on Russia and widely used across in Russia and Post-Soviet States. The methodology helps to avoid common issues we face during front-end development. BEM stands for Block-Element-Modifier.  BEM defines its own style of writing css and js, which is very easy to adopt. Simply saying a good practice.

####Common issues during Front-End Development.
Its A.D. 2013 Front-end development became a crucial part in product development. Each products coming into market having better user experience and stunning interfaces. These stunning products having a huge stylesheet base. Most of the stylesheet bases are huge and very hard to maintain it. Bug Fixing on a particular element may cause change in the other element presentation. This thing occurs frequently if multiple developer work on a stylesheet. While writing css selectors most of the developers have their on convention on writing names. So that it will degrade the readability of HTML.

####What is BEM, Block - Element - Modifier
As in the introduction BEM is methodology deals with modularised development of Web Front-Ends. What BEM says is take you web app identify the main presentation blocks and write css separately for each block. Each Block consist of multiple elements and each element have multiple modifiers. modifiers are the different presentational styles of an element or a block.

- __Block__ : A decoupled building block of your web application, which consists of multiple elements. Blocks are the subset of your web application. Blocks can have other blocks inside. _(eg : friends list, articles, login form, search box, accordian etc)_
- __Element__ : An element is a part of Block. It can be a control or text or image or any thing. _(eg : text box, image, paragraphs, list etc)_
- __Modifier__ : Modifier is capable of changing the presentational behaviour of and element or a block.

See the images given below. It show how we can dissect a web page component with respect to BEM Methodology _(eg : a discussion thread web component)_.

![BEM BLOCK](images/bem-block.png "Bem Block")

First identify the elements in the block. elements can be anything like image, heading, paragraph, text etc. The main elements in this discussion block are marked in red boxes.

![BEM ELEMENT](images/bem-element.png "Bem Element")

Next identify the reusable element by changing limited properties.

![BEM MODIFIER](images/bem-modifier.png "Bem Modifier")

Lets __- TALK + CODE__

```
    /* Block. */
    .discussion	{}

    /* Elements. */
    .discussion__round-icon {}
    .discussion__content {}
    .discussion__textarea {}
    .discussion__button {}

    /* Modifiers. */
    .discussion__round-icon_big {}
    .discussion__round-icon_small {}
    .discussion__content_thread {}
    .discussion__content_topic {}
    .discussion__content_name	{}
    .discussion__content_date	{}


```

__Lets Fill the CSS.__

```
/* Block. */
.discussion {
  width: 900px;
  height: auto;
  overflow: hidden;
}

/* Elements. */
.discussion__round-icon {
  position: absolute;
  top: 0px;
}

.discussion__content {
  font-family: "Source Sans Pro";
  color: #171817;
}

.discussion__textarea {
  width : 100%;
  height: 60px;
}

.discussion__button {
  font: 200 12px "Source Sans Pro";
  color: #171817;
}

/* Modifiers. */
.discussion__round-icon_big {
  width: 60px;
  height: 52px;
  border-radius: 60px;
  background-color: #3498db;
  left:-30px;
}

.discussion__round-icon_small {
  width: 30px;
  height: 30px;
  border-radius: 30px;
  background-color: #dddddd;
  left:-15px;
}

.discussion__content_name {
  font-weight: 300;
  font-size: 12px;
}

.discussion__content_date {
  font-weight: 300;
  font-size: 10px;
}

.discussion__content_thread {
  font-weight: 500;
  font-size: 16px;
}

.discussion__content_topic {
  font-weight: 400;
  font-size: 14px;
}

```