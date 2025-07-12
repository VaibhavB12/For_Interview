First we have the DOCTYPE which tells the browser about the version of HTML. Currently we are using the HTML5 which is the latest version of the HTML. In fact writing this DOCTYPE HTML means it is the HTML5 page. 
Remember this is not an actual HTML tag. It's more like a comment which just tells the browser about the version we are using of HTML. It is essential to write this on the top of every HTML page you make. 

HTML tag : Whatever you write or code between these tags means that it will be part of your HTML page. It's more like a container to all the other HTML tags. That means our entire page will fall under the HTML tag. 

head tag : The head tag generally contains the document related information that is metadata. Metadata is nothing but the collection of the data which describes the data. So the head tag is the data about the actual page so it's not the page itself but the information about the page. So we can include many special tags inside this head tag. 

title tag : is used to define the title of the web page. 

body tag : Now the body tag is where you apply the actual content of the web page. Contents like text, images, comment box, check box, drop down list and what not. You will be applying most of your HTML tags here in the body when you are designing your web page. 

You can define tags inside other tags. Like the title is defined inside head and all these tags are defined inside the HTML tag. 

If you are using the VS code that is a shortcut for getting the HTML boilerplate code. If you press exclamation and enter you can see HTML boilerplate code.

paragraph tag : This tag is mainly used to write text messages which can be in paragraph format or even in a single line format. It not only takes text messages but also allows you to wrap an image URL or maybe any other URL inside the paragraph tag. It is mandatory to define the end of paragraph. 

Well the paragraph tag is used to define a paragraph inside HTML document and also it is mandatory to define the start and the end of the tag. 

If you try to give extra spaces that is white spaces and extra lines in the paragraph tag then those spaces and lines will get removed by the web browser while displaying that paragraph. So it's meaningless to give white spaces and extra lines inside a single paragraph tag. 

A tag is an HTML language keyword or command which gives instructions to the browser page. For example the paragraph tag which instructs the browser to make a paragraph on the web page. 
There are various tags available in HTML which are used to define the content of the web page. 
In HTML a tag contains three main parts. Opening the tag, content inside the tag and finally closing the tag. 
Tags can be content for other tags too. For example this paragraph and H1 works as contents inside the div tag. 

Every HTML tag is also called as an element. 
There are also some tags which do not have content. For example HR tag, HR stands for horizontal rule which creates a horizontal line on the page. 
The standard practice is that when we don't have a closing tag we use tag with slash inside the angle bracket itself like this <hr />. This is called as self closing. It closes this HR tag. 

Another example is the break tag used to add new line. When we put <br> tag inside paragraph it will move the text to next line.

The tag in which we do not have content and doesn't need an end or closing tag is called as an empty tag. Because there is no content it is the empty tag. 
Other empty tags are <meta> <link> <img>. 


Well a tag is an HTML language keyword or command which gives instructions to the browser and it is necessary to close the tag as long as that tag contains the content defined in it. But when it comes to empty tags they do not have the closing tag. 

A tag which does not have any content in between. So you can say that it is empty content and that's why they are called as empty tags. Also when we do not have the closing tag we try to self close these tags with the syntax like <hr /> and <br /> 


Attributes in HTML : The attributes are special words which can be used to define additional information to the elements or tags. Generally they are used to define the behavior of the elements. 

For example attribute named style. If we put style attribute with color as red then you can see that the paragraph is in the red color. You can also add color to this HR here as well. 
You can add many properties to a single element with the help of style attribute. 
The other few important attributes which are used widely are id, class, href, src etc. 
You can also have multiple attributes applied on a single element. 
syntax : <tag attribute= "value" attribute= "value"></tag>


Attributes basically change the behavior of the element whenever you want to modify the characteristics of the element you can use attributes.
syntax : <tag attribute= "value" attribute= "value"></tag>
Each attribute separated by a space and the values are always covered in double quotes to make sure you follow these standards. 


div tag and the span tag : The div tag is used to define a division that creates a section in an HTML document. So if you want to put contents like navigation bar, images, text and much more you can insert them inside division tag. 
Also it works as a container for different HTML elements. 
It creates a division or a section in the web document and then you can use that division as a container for other elements as well. 

span tag : The span tag is much like division but span is used to deal with the part of a text. For example if you want to color a specific text of the content of <h2> tag. Then we just put <span> tag around that text & define style attribute with color. 

difference between div and span : 
div tag creates a block with a new line while span does not. So div is called as block element whereas span is an inline element.
When you want to format just few words and you do not want it to disturb then you use the span tag because span does not insert any extra space or extra line. 


div is a block line element that means it is going to create a block and going to enter a new line whereas the span tag doesn't add any line any white space. It is just there and if you want to style or you want to apply some formatting to words then span is the tag which you would be using. 


Heading tags are generally used to define heading inside the web page. There are six different heading tags available which are used to define headings inside HTML document. That is H1, H2, H3, H4, H5, H6. Each of them has their own different purpose. The H1 tag is used to define the most important heading in the HTML document and it also has the size much greater than the rest of the headings as well. Generally we see that H1 is used only for the main title so we don't see H1 repeatedly used in a web page. H2 is used to give the second most important heading inside the HTML document. H3 to H5 heading tags are generally used to define any subtopics or less important things inside the HTML document. And if you want a text or even a sentence to be highlighted, H6 tag is useful in that case. 
The heading tags can also be used with nested elements like using H2 and H3 tags inside the div tag. 


When it comes to highlighting a topic H1 gives the biggest size for the font. You also have other ways to highlight text but H1 is one of the tag which is provided by HTML which you can directly use to give a main title. As long as H2 or H3 tags are concerned looking at their font size you can decide at what place you will need in your web page design. 


unordered list : In HTML list tags are used to display the information in the form of lists. The unordered and ordered list tags are used when you want to display a list of information in HTML document. These are the two most used list tags in HTML. 
UL tag : This tag is also called as an unordered list tag. As the name says this tag is used to display the items which are not in orderly format. And that is displaying just the random list of information with bullets. To define the items inside <ul> tag we use the <li> Tag which represents the list item inside the tag. Use <li> tag to define each item inside the <ul> tag.

You can change the bullet types as well. By defining the type attribute in the <ul> tag. For example <ul type="circle">
The type attribute allows four bullet types which are disk, circle, square and none. 


We have the type attribute and we have four types of values here. The disk, the circle, the square and none. 


 ordered list tag : The OL tag is used to display the list items in orderly format. That is a numbered format. It follows the same syntax like UL tag. The only difference is that you have to define the OL that is ordered list instead of UL that is unordered list. So let's change this here and let's check the output. And the items are displayed in the numeric format. Just like UL we can change the type of numerical order. By default the order will start with one. But if I want to change the numeric format to let's say Roman numerals I can do that by <ol type = "I">. 
The OL allows us five different ordered formats which are 1, i, I, A, a. 

We can also display the items starting from a certain numeric or alphabetical value as well. For this we use attribute "start". 
<ol type="i" start="6">

You can also display this numeric alphabetical values in reverse order. For that we use reversed attribute only with no value.
<ol type="i" reversed>
Remember it won't change the content in reverse order but it will just change the numeric or alphabetical values for the OL tag. 
You can also create a nested list using the list tag. For example <ul><li><ol><li>


OL gives numbers to every list item whereas unordered list will show items with bullets only. The reversed attribute which reverses the number or the alphabetical sequence. It doesn't change the content. It is just the numeric or alphabetical arrangement which is changed. The list item which you have given remains as it is. 
By default the number starts with 1 or maybe a but if you want to start it with let's say 5 or maybe 6 you can certainly do that by using the start attribute. 


anchor tag : is used to define a hyperlink which links from one page to another. 
So if you want to give hyperlink in your HTML document which connects other web pages the anchor tag is used. Syntax : <a href = "/link/path/address/URL"> 
href stands for hypertext reference which takes the address, path or URL of a web page or a file which is displayed as a link in the HTML document. 

If you want to give a link which opens in the new window. For that we use target attribute in anchor tag. The target attribute specifies where to open the linked document. If we set target attribute as _blank. This will open the link in the new window. 

You can nest the anchor tag within other tag like paragraph tag. You can use anchor tag to link an image, an audio file or even a video file as long as the path is valid. 
Anchor tag is the most important tag when it comes to implementing menus. All the menu items are defined inside list items and each list item wraps an anchor tag. 

Anchor tag is the tag which helps you to create menu items or menus on your web page and it's going to be used extensively for user interface or user interaction through menu items. 
If you specify the target attribute with the _blank value it's going to open the link in a new window. 


The majority of internal and external domain linking is achieved by using the HTML anchor tag. In anchor tag there is an href attribute which is used to state the links destination. 
The use of the links are that they take you somewhere inside the web browser. 
When the href attribute has some value with hash  it targets the id of the element available in the current page. 
When the href attribute has only hash (no id) as a value then it refers to the top of the page. When we click on the link it will go to top of the page. 


I will create a link first then I will give a division and inside division I give heading for example and in CSS <style> I will add margin to this division so that the link goes to the bottom of the page. Now in the browser you can see the heading. And when you scroll down to the bottom of the page and will click the link and you see that it comes back to the top. 


<img> tag :  In HTML image tag is used to display the image on a web page. 
Syntax : <img src = "" alt= "">
src is the source or the path or URL of the image. It basically tells the browser where it can find the image on the server. Note that images are not inserted into the web pages they are more like links to the web pages. 

alt attribute used to define alternate text for an image. So it basically describes the text in case the image is not rendered. When the web page can not find the image the alternative text is displayed. It is considered to be a very helpful from search engine optimization perspective. 

You do not store images in the same folder where your HTML files are. Certainly you will have different folders like assets or maybe images where you keep your images. 

Giving the absolute path is not a good practice as generally we use the relative path for image.
width and height attributes are used to give specific dimension to the image. These are not use lately rather applying CSS to resize the image is more effective way. 
To make an image clickable or provide a link to the image, you just have to put this image tag inside the anchor tag. 

When your web page is configured with the search engines that is SEO in those cases when the images have the alt attribute then it really helps it improves the performance while the pages are optimized for search engines. 


difference between relative path and absolute path : When it comes to linking files inside the html document we need to give path to the files which can be relative path or absolute path. 

The absolute path is nothing but the full URL to the file. You must give the correct absolute path every time to display the image on the web page, otherwise image will not display on the web page.
When you give the absolute path that means the path to the file is fixed. So if by any chance the images or files are shifted there will be an issue accessing those files. So giving the absolute path is not an ideal way to display or access any file. 

On the other hand giving the relative path can solve this kind of problems. In relative path the  dot refers to the current folder & double dot means the parent folder. 
Relative paths are URL independent as it refers to the current folder regardless of where the files are. 

difference between relative and absolute path When you give the dot that is the current folder and the rest of the path remains same. So regardless of where you put your files it's going to refer the current folder browser will not have any issue accessing those files when the path is changed. 


input tag : The input tag is used to create input fields inside an HTML document which allows users to input the data. Mainly the input tag is used to create a form with various fields of input like text box, check box, radio button, email, numeric, etc. 
input tag has type attribute, when we set type as text it means you are allowed to type alphanumeric values or any other characters for that matter. 
Normally we use a label tag for more advanced forms. Also the input tag is a self closing tag so you don't need to write the end input like this but you need to end the tag with a slash inside the input itself that is self closing. 

Now for all the input whose type is text it's a good practice to assign them with an additional attribute called placeholder. It displays a gray colored message inside the input text box. This message is for the end user, so user can easily   understand what will be the value one can enter. 
The moment we start typing in the text box the message gets disappeared. So it's a good practice to give a placeholder message for users clarity.
When we use attribute type as a number, it gives spinners to change the age. It force the user to enter numeric values only. The type number has the builtin validation to reject nonnumeric values. 
You can also set limit to the number type by just giving the min and max attribute. If we set min as 15 then age will start from 15 itself & user can not enter age less than 15.
When we use attribute type as a email, it allows you to create a field specifically for email only.
If we try to give an incomplete email address it will show us an alert message when I roll over the mouse on the field. If we write email upto the @ sign only then it will still show me an alert message saying "the part after the add sign is missing". So when we give input type email the input value is validated or checked automatically for the proper email format. 

Well you have various ways to validate the email while you are doing JavaScript programming you have the regular expression to implement that. But in a very simple manner using HTML if you want to implement the validation certainly with input you give type equal to email and that will do the job. 
The place holder attribute basically gives a message inside the input field that is a text box and the moment you start typing some value that automatically vanishes it's a good way to show user friendly messages for entering the values. 


input tag with input types checkbox and radio button : 
If we use input type as checkbox it will create a checkbox inside your HTML document. Checkbox basically allows users to select the true or false option. If you want certain checkboxes to stay selected when the page is loaded, then use attribute checked (without any value). The checked attribute will keep the checkbox selected whenever the page gets loaded in the browser. That is checkbox are selected by default initially. 

radio buttons : Defining radio buttons means you just have to set type equal to radio. With radio button interface only one option(not both options) should be selected at a time and the other should get deselected automatically. For that you have to set the name attribute with the same value in both the radio buttons. This is also known as radio group which means each of the radio button in the group must be given the same name. 
(To set only one radio button selected out of the multiple radios you have to set the name attribute to the same value)

By using the attribute checked you can define checkbox whose value remains selected on the page load. 
Radio group is basically giving the same name to multiple options and if you give the same name that means out of those radios the user is allowed to select only one the rest of the radio from the same group will be automatically deselected. 


select tag : The select tag is used to create a drop down list with various options inside the HTML document. 

Let's say I want to create a drop down list for coding languages. So I will define the text first  Coding Languages suggesting what this drop down is about. Then we will define select tag and inside select tag we use option tag to define each item. On option tag to define each item. 
To nest the list items which creates separate groups of options inside the drop down. For this you have to use optgroup tag with label attribute.The label attribute takes value as group name that we want to create inside the dropdown list. 
By default the interface is drop down but let's say you want to show list items in a scrollable box like this. Then you can use the size attribute of select tag. If we give size attribute to 3 we can see that we have scrollable box with 3 rows displayed at a time instead of dropdown list. The rest of the items are in the scrollable section. The disabled attribute allows you to disable an option from the list. So if we disable HTML option the you cannot select this HTML option as it is disabled. 
The select tag is very commonly used interface when it comes to showing dynamic data list items. 


select tag i used to create a drop down list or a scrollable list with various options inside your HTML document. To create scrollable list use size attribute of select tag. 
For creating a group we use the optgroup that is option group tag with the label attribute. The value of label attribute is group name.
<optgroup label = "myGroup">
To disable the option use disabled attribute inside the option tag.


difference between HTML and XHTML :
XHTML is a strict and a better way of writing HTML. 
As a developer, people or the developers community follow some rules to write the HTML to make it standard and that strict way that standard way is called as XHTML. 
Both HTML & XHTML does not throw error if we write wrong syntax.
XHTML is a kind of standard which programmers follow to write the code. Because it's always good to follow some standards as many programmers are working on the same code. You generally follow standards and rules so that the code is easy to debug or the code is easy to maintain and that's what XHTML does. You have to follow those rules then it is called as XHTML.
XHTML Rules :
Always begin the HTML document with <!DOCTYPE>.
<html> tag is mandatory
Use lowercase for HTML/CSS tags and attributes. 
Attribute values should always be in double quotes.
Empty tags should be self ended. For example <hr /> <br /> <input />

semantic tags : This concept is introduced in the newer version of HTML that is the HTML5. 

For example using address tag instead of div tag makes code more readable & understandable. By looking at the code a developer or a person who is not familiar with HTML can easily understand that the content is address but by reading the div tag one cannot understand it easily. 
Your site should have the accessibility which means that people with visual challenges should also be able to refer to your site. It actually happens by using the screen reader software. These software help people listen to the content of the site. So when the screen reader software tries to speak the content of the site for visually challenged people. If we use div tag it can not be understandable but if we use address tag one can understand it easily.
So the address tag has a meaningful tag name is called as semantic tag. It makes a meaning to the person who is referring to the content. 
So in short semantic tags are nothing but meaningful tag names. 

If you put a div or address it doesn't make any difference to the developer or even to the browser but it does make a difference to the person who is referring the content or in other words it is more organized and readable code as well. 

Other semantic tags : <header><section></section><footer>
Normally a section can be written using a div tag but in a web page we can use header tag for header section and footer tag for footer section of the page. 
IMP : Remember by giving header or footer tag it does not put the content on top or the bottom of the page. The CSS code arranges the position of the header or footer. It's just that you categorize the sections with meaningful tag names that is using the HTML5 semantic tags to design a page. 

A web page may contain multiple footers as well. You can give logo, navbar, links, tags, whatever you want inside this footer tag as well. 

So the main purpose of using the semantic tag or meaningful tag names is to provide better accessibility. 

Semantic tags :
<header>
<section>
<article> 
<details> 
<main> 
<mark> 
<summary>
<nav>
<aside>
<figure>
<time>
<footer>

The semantic tags are the meaningful tag names & we use them to increase the accessibility of the webpage.


==========================================================================================================================CSS :
Cascading style sheets or CSS is a style sheet language popular for making website look pretty. 
It is used to make website look beautiful in a presentable way by adding various styling options like the color, spacing between words or letters, spacing between elements, even modifying the font and its size or adding borders, maybe changing the background and much more. 

CSS can be used to define different stylings and layout variations of your web page. This is why it is known as style sheet. 

how you apply the CSS : 
Inline styles are a type of CSS styling which you can use inside your HTML tags itself. You just need to use style attribute of html tag & the value of the style attribute will be CSS property colon CSS property value.
Syntax : <tag style = "CSS property name: CSS property value" >
Example <h1 style = "color: coral" > CSS Styles</h1>
You can apply CSS styles to the body tag as well

Giving the style attribute along with the tag name is called as the inline style or the inline CSS. 


inline styling :
For multiple elements and you have to give multiple styling to each of the elements. This will make the code look messy and it will be even tough to modify any of those styling attributes. 
So that's why inline styling is not a preferred choice when you want to apply multiple CSS attributes. Only for applying fewer attributes you can go with inline styling. 

internal styling : For this we use <style> tag inside the <head>. Because the <head> tag contains the metadata about the HTML document. So the style tag comes under that category. This kind of styling is also known as embedded styling. 
The style sheet will affect the document they are embedded in. 
Syntax : <style> tagName { property: value, property: value ...} </style>
Internal styling is a better and global way to apply CSS on tags as compared to inline CSS.

external styling : 
In this styling CSS is defined in separate .CSS file and then it is included or imported or embedded with a <link> tag inside your HTML document. 
It's a good practice to divide your CSS code into not only one but several CSS files and then you make those CSS files available to the HTML where you are using it. 
create style.css file in CSS folder. Inside <head> tag use <link> tag which has 2 attributes : first is rel means relationship between the linked file & the HTML document. Second attribute is href where we put the relative path to the style.css file.
Mostly the <linlk> tag is used to embed the CSS file inside the HTML document.

It's the link tag which helps you to embed the CSS inside your HTML document. 

CSS selectors : They are used to target HTML elements on the web pages which we want to style. Selectors are basically the way we apply CSS. 
There are a wide variety of selectors like 
element selector
class selector
id selector
group selector
universal selector

element selector :  Element selector in CSS is used to select HTML elements which are to be styled. 
Syntax for element selector :
element / tagName {
     property: value;
     property: value;
}


When it comes to selecting the element to apply the CSS one of the selector is element selector which basically refers the element that is the HTML element or tag name to apply the CSS like h1, h2, paragraph, li, division, body and so on. 


class selector : 

For example if we have 3 paragraph tags in HTML page, when we apply style using element selector, all the 3 paragraph shares the same styling. If you want to apply different styles to each paragraph then element selector will not work. 
So instead of using element selector we use custom class name with dot. We use dot before class name so browser can understand it is a class.
We define class in style.css & to apply that class we use the class attribute with value as class name in HTML tag. 
Shorthand way to define class : tagName.classname + enter 


When we have bunch of rules to be applied on various types of elements then we use the class. Class is basically the custom style you define on any element with the help of using the class attribute. 


Consider a situation where you have given the same class names to multiple HTML elements but want to select or target only the specific element & apply style to that element only. For this in style.css file add element name before class name & dot.
Syntax : elementName.className{
    property: value;
    property: value;
}

If you open the developer tool here you can see the elements sharing the same class name. When I move to styles you can see it displays the check marks which indicates that the CSS style sheet is applied. Now when I move to the elements sharing the same class name you can see it shows the "user agent style sheet" which is default style sheet provided by the browser itself. So the style sheet won't be applied here despite the fact that they have the same class name. 

So when we give the element dot class selector it tells the browser to select the element which is having that particular class name. 


id selector : id selector is used to apply styling to a unique element on the page. 

When the element is unique throughout the whole html page we assign that element with an id attribute & to access that element we use id selector. 
For that in style.css we define id name starting with "" sign & to access that element in HTML page we use the id attribute with id name as value. 

Remember if you give the same id to multiple elements the browser won't give any error but it is the developer's job to follow the standard practices. 
Shorthand to define id : 
tagNameidName + enter 


The class selector we apply to multiple types of elements id selector we do apply to maybe a paragraph or a division or an h1 or any other element but at a time we prefer to have only one id for each page. 
As I mentioned if you give same id to multiple elements the browser will not give any error but that's not the practice one should follow when you say id that means it has to be a unique id and the id selector css means you are applying few css rules meant only for that unique element. 


Group selector :
Grouping of elements sharing the same styling is made easy with the help of group selector approach. 
Group selector is nothing but to select multiple elements in a group with the element selector and style them together. 
Syntax : 
element1, element2, .className{
   property: value;
   property: value;
}
Grouping of elements is a very effective and time saver approach when you want elements to share the same styling attributes. 

You can group the elements as well as
the class selector.

universal selector : 
There are a few set of rules and styling which you want to define as global setting for the page in such case you can use the universal selector. 
When there is no styling applied to elements styles defined in the universal selector will be applied. 

Universal selector is denoted by an asterisk (*) sign and it is used to select any and all types of elements in an html document. 
Syntax : In style.css
*{
   property: name;
   property: name;
}
When giving only the asterisk sign it will select all the elements of the document as you can see but if we give a particular element with an asterisk sign then it will select only that element.
Syntax : In style.css
* elementName{
   property: name;
   property: name;
}


We use the asterisk (*) to define universal selector. The styles defined inside it will be applied to all non styled elements. Universal selector is very useful to apply CSS rules to all elements by default.

For example in a web page generally we see that there are few padding or margin for all elements by default you want to apply in such case universal selector is also very useful 


CSS specificity : it's all about CSS priority. 
The class selector has higher priority over the element selector.
The id selector has higher priority compared to the class selector & element selector. 
Inline style has higher priority over the id & class selector.
Priority order :
!important
Inline Style
Id Selector
Class Selector
Element Selector
Group Selector
Universal Selector
Rule of "!important" gives more importance to a value/property despite their specificity.

If you still want to give more importance to a value or a property despite their specificity then there is a rule called "!important" this rule will override all the previous styling rules applied on that property and will give more importance to it
Syntax : in style.css
element / idName / .className :{
   property: value;
   property: value !important;
}

Do not use !important unless there are situations when you have a lot of CSS applied in some cases when nothing works and you want to force the CSS to apply specific rule certainly you can go with !important. 


Specificity means the priority of which rule to apply when the rules are clashing.
When there is a clash of rules then there is a priority defined by CSS and that's what CSS specificity is. 

!important makes the property as a highest priority regardless where it is used whether it is in class selector or anywhere the moment it becomes an important that means it is important it will have highest priority but its not a good practice to use important unless you are being forced to use it.


CSS reset file : All the browsers have default rules with properties and values applied to all the pages before loading files A CSS reset file targets all the rules that are different browsers apply defaults to and reset them to their minimum possible value. The ideal goal of the reset style sheet is to reduce browsers inconsistencies in things like default line heights, default margins, default font sizes, default padding etc. 
This is required because every browser has its own default user agent style sheet that it uses to make unstyled websites appear more legible. But many times it creates havoc with the defined style sheets provided by the developer. 
To override default CSS properties used by the browser we use CSS reset file. 
For that first inspect the page check CSS properties & in style.css add those properties inside universal selector
Syntax :
*{
  property: value;
  property: value;
}
You can use element selector to reset browser property for individual element. But using universal selector is the recommended option.

==========================================================================================================================
Combinators  Advanced Selectors (Part 1) :
Combinators :
When it comes to working with selectors, there are also various combinators which come into the picture. 
A combinator is something which shows you the relationship between the selectors by combining multiple CSS selectors. 

There are generally 4 combinators in CSS : 
   1.descendant, selector or combinator, that is a space (" ") 
   2.child selector or combinator which has a greater than sign.  (">")
   3.Adjacent sibling selector where you use the plus sign, ("+")
   4.general sibling selector where we use tild sign. ("~")

All these are unique in a way for dealing with complex styling situations. With the help of combinators, you would be able to alter all the elements which are of the same type rather than just changing one element at a time. 
Another usage is that you will be able to easily target the child elements of a particular element without affecting the parent element and many other things. 

Combinator is something which shows you the relationship between the selector. 
1.descendant combinator or descendant selector : 
So the descendant selector is used to match all the elements which are descendants of a specified element. Think of this as a parent-child relationship. By using descendant selectors, you can target the contents more precisely based on the relationships. 
"So if there are certain child elements residing inside a parent element and you want to apply styling to those child elements, you will use the descendant selector." 

IMP :
div.myStyle{ ... } Styling will be applied to all the element inside the div tag, with the class myStyle.
div.myStyle p{ ... } Styles will be applied to all <p> tags that are inside a div with the class myStyle.
div.myStyle, p{ ... } Styles will be applied to all <p> tags inside the whole document including a div with the class myStyle.
div.myStyle p, h2{ ... } Styles will be applied to all <p> tags that are inside a div with the class myStyle and all the <h2> tags inside the whole document (descendant selector + element selector)


descendant selector is used to match all the elements which are descendants of a specified element as just like a parent child relationship. 

To select all the descendant paragraphs which are inside this div. You'll have to use div then the paragraph with a space that is to select the descendant paragraphs which are inside the division. 

div.mystyle p { }: It will select the paragraph which is inside the division having the class mystyle. So only these paragraphs are selected but not the H1 or other elements. 


2.Child selector : Child selector apply styling to the direct children of a specific element. Does not apply styling to the grand chidren of that element. 
div.myStyle p{ ... } Styles will be applied to all <p> tags that are inside a div with the class myStyle. Including child & grandchild and all the <p>
div.myStyle > p{ ... } Styles will be applied to the <p> tag which is direct children of <div> tag. It does not apply styling to grandchildren of the <div> tag. 
div > p{ ... } Styles will be applied to all the <p> tag which are direct children of <div> tag, Including <div> tag with myStyle class. But it will not apply styles to the <p> tags which are grand childrens of <div> tag. 

The child selector is used to select the elements which are direct children of the given parent element. 
p > span : this will apply styling to the <span> tag which is direct child of <p> tag

3.Adjacent selctor : To apply styling to the element right next to the another element. We could do it using class selector but we have to apply to each element.
adjacent sibling selector (+) selects an element that immediately follows another element provided both elements must share the same parent.
For example <p> tags is coming immediately after every <h3> and we want to apply styling to all the <h3> then we use adjacent selector for it
h3 + p { ... } Styling applied to all the <p> tag that are coming right after (adjacent to) the <h3> tag.

The adjacent selector is very useful for styling the elements which are defined in a proper consistent structure.

If you want only particular section or <div> will get the styling then use class selector along with adjacent selector.
div.myStyle h3 + p { ... } Styling is applied to each <p> tag that is directly adjacent to an <h3> tag within a <div> that has the class myStyle.

IMP : adjacent sibling selector (+) selects an element that immediately follows another element provided both elements must share the same parent.
Means both sibling elements must have the same parent.
IMP : Adjacent means when first tag ends after that second tag begins. 
<h3> is adjacent to <div> :
   <div>
      <p>Paragraph inside div</p>
    </div>
    <h3>Heading adjacent to div</h3>

<h3> is inside <div> NOT adjacent to <div> :
   <div>
      <h3>Heading inside div</h3>
   </div>

div + h3 { ... } : Styling will be applied to all the <h3> tags that are adjacent to <div> tag
div.heading + p { ... } : Styling will be applied to all the <p> tag which are adjacent to <div> tag with heading class only.

4.Attribute selector : Attribute selectors are used in CSS to select elements based on their attributes or attribute values. They provide a way to style elements with specific attributes without needing to add extra classes or IDs.
a[target] {
   colo
}


**Pseudo-classes & Elements - Advanced Selectors (Part 2)**
When you waht to deal with the special states of ah elemeht you have to use Pseudo classes.
When you see ":" in front of class or id in CSS, it means it is pseudo class.
Syntax : class/id/element-selector : state { ... } 
Pseudo classe types :
    1.Linguistic pseudo-classes
    2.Location pseudo-classes
    3.User action pseudo-classes
    4.Time-dimensional pseudo-classes
    5.Resource state pseudo-classes
    6.The input pseudo-classes
    7.Tree-structural pseudo-classes 
1.Linguistic pseudo-classes : Linguistic pseudo classes will help you select the elements based on their language or script direction. 
Linguistic pseudo classes will help you select the elements based on their language or script direction. When you want the elements to be in a specific direction or in a specific language, then this pseudo class is considered. 

dir that is the direction attribute, which has basically three values that is RTL, LTR and auto. The RTL is used for targeting right to left elements or text. The LTR is used for targeting left to right elements or text and the auto actually follows the default. 

The linguistic pseudo class provides us two pseudo classes to deal with. 
:dir() - direction pseudo class and :lang() - language pseudo class 
The direction pseudo class helps you select the elements based on the direction. The direction pseudo class requires one parameter, which represents the text direction. Giving the parameter here is mandatory. You cannot leave it blank. 

While working with pseudo classes, check their compatibility with different browsers first. Also by default, the text direction will be left to right, if not specified. 

The :lang() language pseudo class is used to select the elements based on their language. Some ISO language codes like fr, en, it, zh, ru. Giving parameter is mandatory. The value which you give in Lang attribute will always be in two letter language code or combination of two letter codes
Syntax :
    :dir(rtl/ltr/auto){ ... }
    :lang(en/fr/it/zh/ru){ ... }
    p:dir(rtl){ ... }
    div > p:dir(ltr){ ... }
HTML : 
    <div dir="rtl" lang="fr">
        <span>This is right hand side.</span>
    </div>
    <div dir="ltr" lang="en">
        <span>This is left hand side.</span>
    </div>

2.Location pseudo-classes : 
Location pseudo classes are used when there are hyperlinks involved in the document. 
1.:any link - This pseudo class selector will select the hyperlinks regardless of whether they are visited or not. And it will match all the anchor tags which have href attribute in them. 
    a: { color: coral}
When you search anything on google it will show various links with color blue as default when the browser loads. So this shows that the links are not visited yet. When we select one link and revisit the search page, we can see the color of the link which is visited is changed to violet color. So the link is now in the visited state. 
    a:any-link { color: coral}
any-link will select only those links which have the href attribute or in other words any-link will select only those links which are proper link. 

2.:link - If you want to highlight those links which are not visited by the user, then use the link pseudo class. link pseudo class will select all the anchor tags which are not yet visited. 
3.:visited - The visited pseudo class is used to select those links which are already visited by the user. 
    a:link { color: coral}
    a:visited { color: grey}
4.:target - The target pseudo class is used to target the unique element which has the matching id as the URL. It basically establish the relation between two elements.
    p:target { color:brown; background-color: goldenrod; border: 2px solid darkgoldenrod; border-radius: 3px }
    targetting the paragraph when the links are selected
    p:target span{ color:brown; font-size: 1.5em; font-style: italic }
    to taget specific element in the paragraph
text-decoration: none - this will remove underline below the link

3.User-action psuedo class : 
User action pseudo classes are by far the most important and widely used pseudo classes. As this pseudo class requires some interaction, some activity performed by the user on the elements in order for user-action psuedo class to be applied. Such as the hover effect or the focus effect. These effects will only trigger when the user rolls over the mouse on the element or maybe it receives the cursor or a focus. That's why it is known as user action pseudo classes. 

1.:hover - 

text-transform : by using this property you can specify how your text should look, uppercase, lowercase, capitalized etc. 

=========================================================================================================================
Here’s the cleanedup list without timestamps:  

Here’s the cleaned-up list without timestamps:  

---

**HTML & CSS Fundamentals**  
Introduction  
Inline Styling and Basic CSS Syntax  
Internal Styling with `<style>` Tag  
External Styling - `<link>` Tag  

**CSS Selectors**  
1.Element Selector  
body{
    background-color: #111;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    color: #ccc;
}
h1{
    color: coral;
    font-size: 2.5em;
    text-decoration:underline;
    font-style: italic;
    text-align: center;
}
div{
    color: red;
    font-size: 1.2em;
    padding: 8px;
    font-style: oblique;
}
ul {
    background-color:#333;
    font-size: 1.2em;
    font-style: oblique;
}
li{
    color: #fc0;
    font-size: 1.2em;
    padding: 8px;
    font-style: oblique;
}
h2{
    color: grey;
    font-size: 2em;
    text-align: center;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    text-decoration: underline;
}
2.Class Selector  
body{
    background-color: #111;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    color: #ccc;
}
.myStyle{
    color: rgb(168, 140, 16);
    font-style: oblique;
    font-size: 1em;
    font-weight: bold;
    font-family: cursive;

}
.subTopic{
    font-size: 1em;
    color:darkcyan;
    text-decoration: underline;
    font-weight: bold;
}
3.`element.class` Selector  
body{
    background-color: #111;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    color: #ccc;
}
p.myStyle{
    color: rgb(168, 140, 16);
    font-style: oblique;
    font-size: 1em;
    font-weight: bold;
    font-family: cursive;
}
.subTopic{
    font-size: 1em;
    color:darkcyan;
    text-decoration: underline;
    font-weight: bold;
}
4.ID Selector  
body{
    background-color: #111;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    color: #ccc;
}
#myId{
    border: solid 2px #3399FF;
    padding: 10px;
    text-align: center;
    font-size: 1.25em;
    color: #FF1482;
}
5.Group Selector  
body{
    background-color: #111;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    color: #ccc;
}
article, p, .myDiv{
    font-size: 1.25em;
    font-weight: bold;
    line-height: 2em;
    padding: 10px;
    color: #00ffaa;
}
hr{
    border: dashed 2px #999;
}
6.Universal Selector  
body{
    background-color: #111;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    color: #ccc;
}
* div{
    font-size: 1.25em;
    text-align: center;
    color: #ff9600;
    text-transform: uppercase;
    font-style: italic;
}
7.CSS Specificity  
body{
    background-color: #111;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    color: #ccc;
}
h1{
    color:red;
    font-size: 3em;
    font-family: cursive;
}
.myHeader{
    color: blue;
    font-size: small;
    font-family: 'Courier New', Courier, monospace;
}
#myPara{
    background: #643264;
}
.para{
    background: rgb(100,100,0) !important;
}
p{
    background: rgb(0,100,200);
}
8.Universal Selector & CSS Reset  
* {
  margin: 0;
  padding: 0;
}

body {
  background-color: #111;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  color: white;
  font-size: 12px;
  padding: 20px;
}

div {
  margin: 10px;
  text-align: center;
}

**Advanced CSS Selectors**  
1.Combinators:
div p{
    color: blue;
    font-size: 2em;
}
2.Descendant Selector (space)  
body{
    background-color: #111;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    color: #ccc;
}
div.myStyle p, h2{
    color:#ff9a27;
    font-style: oblique;
    font-size: 1.25em;
    font-weight: bold;
    font-family: cursive;
}
3.Child Selector (`>`)  
body{
    background-color: #111;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    color: #ccc;
}
div > p{
    color: #ffcc22;
    font-style: oblique;
    font-size: 1.5em;
    font-weight: bold;
    font-family: monospace;
}
4.Adjacent Selector (`+`)  
body{
    background-color: #111;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    color: #ccc;
}
div.myStyle h3 + p{
    color: #2df;
    font-style: oblique;
    font-size: 1.5em;
    font-weight: bold;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}
5.Attribute Selector - `element[attribute]`  
body{
    background-color: #111;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    color: #ccc;
}
a.link1{
    color: red;
    font-style: italic;
    font-weight: bold;
}
p[class="para"]{
    color: red;
    font-style: italic;
    font-weight: bold;
}
6.Attribute Spaced Selector (`~`)  
body{
    background-color: #111;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    color: #ccc;
}
p[class~="myStyle"]{
    color: #fc1;
    font-size: 2em;
    font-style: italic;
}
7.Attribute Selector (`^`) - Prefixed Value  
body{
    background-color: #111;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    color: #ccc;
}
a[href^="#"]{
    color: red;
    font-style: italic;
    font-size: 2em;
}
8.Attribute Selector (`$`) - Suffixed Value  
body{
    background-color: #111;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    color: #ccc;
}
[class$="Test"]{
    color: #9f3;
    font-style: italic;
}  
9.Attribute Contains Selector (`*`)  
body{
    background-color: #111;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    color: #ccc;
}
a[href*="yah" i]{
    color: #d0c;
    font-style: oblique;
    font-size: 2em;
}
10.Attribute Hyphenated Selector (`|`)  
body{
    background-color: #111;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    color: #ccc;
}
[class|="my"]{
    color: #fe4;
    font-size: 1.5em;
    font-style: italic;
}

**Pseudo-Classes & Pseudo-Elements**  
1.Introduction
.wrapper{
position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}
.normal-anchor{
    text-align: center;
    font-size: 1.5em;
    margin-top: 10em;
}
.my-css{
    display: block;
    font-size: 20px;
    font-family: sans-serif;
    text-decoration: none;
    color: #333;
    border-top: 2px solid #333;
    border-bottom: 2px solid #333;
    padding: 10px;
    letter-spacing: 2px;
    transition: all .25s;
} 
.my-css:hover {
    letter-spacing: 12px;
    text-shadow:
        0px 14px 10px rgba(0, 0, 0, 0.10),
        0px 24px 2px rgba(0, 0, 0, 0.2),
        0px 34px 30px rgba(0, 0, 0, 0.4);
}
2.Linguistic Pseudo-Classes  
body{
    background-color: #111;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    color: #ccc;
}
:dir(rtl){
    font-size: 1.5em;
    color: red;
}
:lang(fr){
    color: blue;
}
:lang(en){
    color: yellow;
}
3.Location Pseudo-Classes  
body{
    background-color: #111;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    color: #ccc;
}
a:link{
    color: coral;
}
a:visited{
    color: grey;
}
p:target{
    color:brown;
    background-color: goldenrod;
    border: 2px solid darkgoldenrod;
    border-radius: 3px;
}
p:target span{
    color: brown;
    font-size: 1.5em;
    font-style: italic;
}
4.`:hover` - User Action Pseudo-Class  
body{
    background-color: #111;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    color: #ccc;
}
div{
    text-align: center;
    padding: 25px;
}
button{
    width: 200px;
    margin: 5px;
    padding: 20px;
    color: dodgerblue;
    font-weight: 800;
    background-color: transparent;
    border: 3px solid dodgerblue;
    border-radius: 50px;
    text-transform: uppercase;
}
button:hover{
    box-shadow: 0 0 10px 0 dodgerblue inset, 0 0 20px 0 dodgerblue;
    border: 3px solid aqua;
}
5.`:active` - User Action Pseudo-Class  
body{
    background-color: #111;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    color: #ccc;
}
div{
    text-align: center;
    padding: 25px;
}
a{
    width: 200px;
    margin: 5px;
    padding: 20px;
    color: dodgerblue;
    font-weight: 800;
    background-color: transparent;
    border: 3px solid dodgerblue;
    border-radius: 50px;
    text-transform: uppercase;
}
a:active{
    box-shadow: 0 0 10px 0 dodgerblue inset, 0 0 20px 0 dodgerblue;
    border: 3px solid aqua;
}
6.`:focus` - User Action Pseudo-Class  
body{
    background-color: #111;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    color: #ccc;
}
div{
    text-align: center;
    padding: 25px;
}
.focus-class{
    width: 200px;
    margin: 5px;
    padding: 20px;
    color: dodgerblue;
    font-weight: 800;
    background-color: transparent;
    border: 3px solid dodgerblue;
    border-radius: 50px;
    text-transform: uppercase;
}
.focus-class:focus{
    box-shadow: 0 0 10px 0 dodgerblue inset, 0 0 20px 0 dodgerblue;
    border: 3px solid aqua;
}
.active-class{
    width: 200px;
    margin: 5px;
    padding: 20px;
    color: dodgerblue;
    font-weight: 800;
    background-color: transparent;
    border: 3px solid dodgerblue;
    border-radius: 50px;
    text-transform: uppercase;
}
.active-class:active{
    box-shadow: 0 0 10px 0 dodgerblue inset, 0 0 20px 0 dodgerblue;
    border: 3px solid aqua;
}
7.`:focus-within` - User Action Pseudo-Class  
body{
    background-color: #111;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    color: #ccc;
}
.myForm{
    text-align: center;
}
.myDiv{
    margin: 1em;
    padding: 1em 5em;
    border: 1px solid #111;
    border-radius: 15px;
}
.myDiv:focus-within{
    background-color: #0a0a0a;
    border: 1px solid deepskyblue;
}
input:focus{
    background-color: black;
}
8.`:enabled` / `:disabled` - Input Pseudo-Classes  
body{
    background-color: #111;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    color: #ccc;
}
label{    
    margin-left: 2px;
    font-size: 0.75em;
}
input:disabled{
    background-color: black;
    color: goldenrod;
    border: 1px solid goldenrod;
    border-radius: 5px;
    margin: 2px;
    padding: 2px;
}
9.`readonly` / `contenteditable` Attributes  
body{
    background-color: #111;
    font-style: oblique;
    color: #ccc;
}
input{
    display: flex;
    margin: 20px;
    width: 25%;
    border: 1px solid coral;
    border-radius: 3px;
}
div{
    margin: 20px;
    padding: 25px;
    background-color: white;
    border: 1px solid coral;
    color: #333;
    border-radius: 3px;
    font-size: 1.5em;
    width: 40%;
}
10.`:read-only` / `:read-write` - Input Pseudo-Classes  
body{
    background-color: #111;
    font-style: oblique;
    color: #ccc;
}
input{
    display: flex;
    margin: 20px;
    width: 25%;
    border: 1px solid coral;
    border-radius: 3px;
}
div{
    margin: 20px;
    padding: 25px;
    background-color: white;
    border: 1px solid coral;
    color: #333;
    border-radius: 3px;
    font-size: 1.5em;
    width: 40%;
}
input:read-only{
    background-color: #999;
    border: 2px solid #333;
    color: #333;
    font-style: italic;
}
input,div:read-write{
    background-color: khaki;
    border: 1px solid brown;
}
11.`:placeholder-shown` - Input Pseudo-Class  
body{
    background-color: #111;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    color: #ccc;
}
input{
    width: 20%;
    border: 2px solid #111;
    border-radius: 5px;
    font-size: 12px;
}
input:placeholder-shown{
    border: 2px solid goldenrod;
    border-radius: 5px;
}
12.`:valid` / `:invalid` & `:required` - Input Pseudo-Class  
body{
    background-color: #111;
    padding: 3em;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    color: #ccc;
}
.myForm{
    display: inline-block;
    width: 100%;
    border: 1px solid #333;
    border-radius: 10px;
    padding: 15px 0;
}
label{
    display: flex;
    margin: 5px 30px;
}
input{
    padding: 6px;
    margin: 2px 30px 15px;
    border: 2px solid #333;
    border-radius: 5px;
    width: 50%;
    font-size: 1.25em;
}
input:invalid{
    background: orangered;
    color: white;
    border-color: brown;
}
input:valid{
    border-color: #333;
}
13.`:nth-child()` Selector - Tree Structural Pseudo-Class  
body{
    background-color: #111;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    text-align: center;
}
.container{
    display: grid;
    margin: 3em;
    grid-template-columns: 1fr 1fr 1fr;
}
.grid-item{
    background-color: burlywood;
    font-size: 2em;
    padding: 30px 0;
    margin: 5px;
}
.grid-item:nth-child(3n){
    background-color: beige;
}
14.`:nth-child()` Selector - Complex Arguments  
body{
    background-color: #111;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    color: goldenrod;
    text-align: center;
    font-size: 1.25em;
}
h1{
    color: white;
}
div{
    padding: 15px;
}
table{
    width: 100%;
    background-color: #222;
    border-color: #111;
}
td{
    width:33%;
    padding: 10px;
}
tr:nth-child(1){
    background-color: #444;
    color: white;
    font-weight: bold;
}
tr:nth-child(2n){
    background-color: #333;
    color: goldenrod;
}
15.Pseudo-Element vs. Pseudo-Class  

16.`::first-line` - Pseudo-Element  
body{
    background-color: #111;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-size: 1.5em;
}
span{
    color: beige;
    padding: 15px;
    display: inline-block;
}
span::first-line{
    color: goldenrod;
}
17.`::first-letter` - Pseudo-Element  
body{
    background-color: #111;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-size: 1.5em;
}
span{
    color: beige;
    padding: 15px;
    display: inline-block;
}
span::first-letter{
    text-transform: uppercase;
    font-size: 350%;
    padding: 0px 5px;
}
span::first-line{
    text-transform: lowercase;
    font-size: 0.5em;
}
18.`::before` / `::after` - Pseudo-Elements  : Part - 1 
body{
    background-color: #111;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-size: 1.5em;
    color: white;
}
p::before{
    content: '';
    display: block;
    height: 5px;
    background-color: brown;
}
19.`::before` / `::after` - Pseudo-Elements  : Part - 2
body{
    background-color: #111;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-size: 1.5em;
    color: white;
}
p::before{
    content: 'Begin >>';
    color: greenyellow;
}
p::after{
    content: '<< End';
    color: orangered;
}

**CSS Typography**  
1.`font-family`  
body{
    background-color: #111;
    font-size: 1.2em;
    color: white;
}
p{
    font-family: 'Times New Roman', Times, serif;
}
2.`@font-face`  
@font-face {
    font-family: 'headingFont';
    src: url(../fonts/RobotoSlab-Bold.ttf) format('woff');
}
@font-face {
    font-family: 'paragraphFont';
    src: url(../fonts/RobotoSlab-Regular.ttf) format('woff2');
}
body{
    background-color: #111;
    font-size: 1.2em;
    color: white;
}
h1{
    font-family: 'headingFont';
    text-align: center;
    font-size: 3em;
    color: khaki;
}
p{
    font-family: 'paragraphFont';
}
3.`font-weight`  
body {
	background-color: #111;
	font-size: 1.2em;
	color: white;
	text-align: center;
}
p {
	font-size: 1.5em;
	font-weight: 100;
	font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}
4.`line-height`  
body{
    background-color: #111;
    color: white;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}
h1{
    color: burlywood;
    text-align: center;
    font-size: 2.3em;
}
p{
    line-height: 1.7;
    font-size: 1.2em;
}
address{
    line-height: 1.6;
    font-size: 20px;
    color: coral;
}
5.`font-style`  
body{
    background-color: #111;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    color: white;
    font-size: 1.5em;
}
.my-paragraph-1{
    font-style: oblique;
    color: salmon;
}
.my-paragraph-2{
    font-style: normal;
    color: deepskyblue;
}
6.`text-transform`  
body{
    background-color: #111;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    color: white;
    font-size: 1.5em;
}
h1{
    color: burlywood;
    text-transform: capitalize;
}
p{
    text-transform: none;
    text-transform: uppercase;
}
span{
    text-transform: capitalize;
}
7.`font-variant`  
body{
    background-color: #111;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    color: beige;
    font-size: 1.5em;
}
p{
    font-variant-caps: titling-caps;
}
8.`text-decoration`  
body{
    background-color: #111;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    color: beige;
    font-size: 1.5em;
    text-align: center;
}
p{
    margin-top: 10em;
    text-decoration: none;
}
a{
    text-decoration: none;
}
9.`text-alignment`  
body{
    background-color: #111;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    color: goldenrod;
    font-size: 1.5em;
}
p{
    text-align: start;
    direction: rtl;
}
10.Indenting Text  
body{
    background-color: #111;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    color: wheat;
    font-size: 1.5em;
    padding: 25px;
}
p{
    text-indent: 3em;
    direction: rtl;
}
11.color 
body{
    background-color: #111;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    color: white;
    font-size: 1.5em;
}
p{
    color: orange;
}

**CSS Colors & Gradients**  
1.Color Property - Applying Foreground Color  

2.Different Ways to Assign Colors  
3.Using RGB Values  
body{
    background-color: #111;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-size: 1.5em;
    color: white;
}
p{
    color: rgba(218, 165, 32, 40%);
}
4.Hexadecimal Notations  
body{
    background-color: #111;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-size: 1.5em;
    color: white;
}
p{
    color: #31d2a4e4;
}
5.Using HSL Values  
body{
    background-color: #111;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-size: 1.5em;
    color: white;
}
p{
    color: hsla(330, 70%, 50%, 0.7);
}
6.Working with Opacity  
body{
    background-color: #111;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    color: dodgerblue;
}
img{
    opacity: 0.6;
}
p{
    opacity: 0.55;
}
7.CSS Gradients - `linear-gradient()`  
body{
    background-color: #111;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    color: white;
    font-size: 1.5em;
}
article{
    margin: 50px;
    padding: 150px;
    background: linear-gradient(0deg,
    rgb(255, 102, 0) 10%,
    rgb(255, 255, 255) 40%,
    rgb(0, 102, 255) 60%,
    rgb(0, 0, 102) 90%);
}
8.CSS Gradients - `radial-gradient()`  
body{
    background-color: #111;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}
div{
    padding: 130px;
    margin-top: 5em;
    background: radial-gradient(
        circle at top left, #6df 20%,#03a 50%,#6df
    );
}
9.CSS Gradients - `conic-gradient()`  
body{
    background-color: #111;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    color: white;
    font-size: 1.5em;
}
div{
    margin: 3em;
    padding: 10em;
    border-radius: 50%;
    background: conic-gradient(
        #6df,#03a, #6df 100grad
    );
}

**CSS Units & Measurements**  
1.Absolute Units: `px`, `pt`, `cm`, `mm`, `in`, `pc`  
px :
body{
    background-color: #111;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    color: dodgerblue;
}
div{
    background-color: khaki;
    color: brown;
    text-align: center;
    font-size: 50px;
    padding: 110px;
    margin: 30px 50px;
    width: 200px;
    height: 150px;
    border-radius: 50px;
}

pt :
body{
    background-color: #111;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    color: dodgerblue;
}
.pixel-unit{
    font-size: 30px;
    color: goldenrod;
    border: solid 4px;
    padding: 40px;
}
.point-unit{
    font-size: 30pt;
    border: solid 4pt;
    padding: 40pt;
}

cm :
body{
    background-color: #111;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    color: dodgerblue;
}
.centimeter{
    font-size: 1.5cm;
}
.pixel{
    font-size: 56.7px;
}

mm :
body{
    background-color: #111;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    color: dodgerblue;
}
.millimeter{
    font-size: 7mm;
}
.centimeter{
    font-size: 0.7cm;
}
.pixel{
    font-size: 26.46px;
}

in :
body{
    background-color: #111;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    color: goldenrod;
}
.inch{
    font-size: 0.5in;
}
.pixel{
    font-size: 48px;
}

pc :
body{
    background-color: #111;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    color: coral;
}
.pica{
    font-size: 2pc;
}
.pixel{
    font-size: 32px;
}
.point{
    font-size: 24pt;
}


2.Relative Units: `em`, `rem`, `%`, `ex`, `ch`, `vw`, `vh`, `vmin`, `vmax`  
em - 1 :
body{
    background-color: #111;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    color: white;
}
p{
    font-size: 1.25em;
    border: solid 4px salmon;
    text-align: justify;
    padding: 2em;
}
div{
    font-size: 20px;
}

em - 2 :
body{
    background-color: #111;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    color: white;
}
.parent{
    font-size: 20px;
}
.child{
    font-size: 2em;
}

rem :
body{
    background-color: #111;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    color: salmon;
}
.parent{
    font-size: 20px;
}
.child{
    font-size: 24px;
    font-size: 2rem;
}
html{
    font-size: 12px;
}

percentage - 1 :
body{
    background-color: #111;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    color: salmon;
    font-size: 12px;
}
div{
    border: solid 2px salmon;
    font-size: 150%;
    width: 350px;
    margin: 30% 25%;
}
p{
    font-size: 250%;
    border: solid 2px goldenrod;
    width: 80%;
    padding: 5%;
}

percentage - 2 :
body{
    background-color: #111;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    color: salmon;
    font-size: 12px;
}
.fixed-layout{
    border: 2px solid salmon;
    width: 400px;
    padding: 50px;
}
.fluid-layout{
    border: solid goldenrod;
    width: 61.75%;
    padding: 9%;
    border-width: 12px;
}

ex - x height :
body{
    background-color: #111;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    color: deepskyblue;
}
.x-height{
    font-size: 9ex;
}
.pixel{
    font-size: 54px;
}

ch :
body{
    background-color: #111;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    color: coral;
}
input{
    border-radius: 0.6rem;
    font-size: 2em;
    margin: 2rem;
    padding: 0.4rem;
    width: 15ch;
}
p{
    font-size: 1.3rem;
    width: 50ch;
}

vw :
body{
    background-color: #111;
}
.parent-percentage-div{
    background-color: burlywood;
    height: 150px;
    width: 50%;
    padding: 50px 0;
    margin: 30px;
}
.child-percentage-div{
    background-color: chocolate;
    height: 150px;
    width: 80%;
}
.parent-viewport-div{
    background-color: burlywood;
    height: 150px;
    width: 50%;
    padding: 50px 0;
    margin: 30px;
}
.child-viewport-div{
    background-color: chocolate;
    height: 150px;
    width: 80vw;
}

vh :
body{
    background-color: #111;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    color: white;
    height: 100%;
}
html{
    height: 100%;
}
h1{
    display: inline-block;
    font-size: 3rem;
    border: solid burlywood;
    width: 42vw;
    height: 70vh;
    margin: 15vh auto;
}
h2{
    display: inline-block;
    font-size: 3rem;
    border: solid burlywood;
    width: 42vw;
    height: 70%;
    margin: 15vh auto;
}

vmin - vmax :
body{
    background-color: #111;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    color: coral;
}
html{
    font-size: 7px;
}
h1{
    font-size: 10vmin;
    text-align: center;
}
p{
    font-size: 3vmax;
    width: 90%;
}

3.Time Measurement Units: `ms`, `s`  
ms-s :
body{
    background-color: #111;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}
div{
    background-color: seagreen;
    height: 14rem;
    width: 14rem;
    border-radius: 7em;
}
div:hover{
    background-color: orangered;
    transition: 800ms;
}
4.Angle Measurement Units: `deg`, `grad`, `rad`, `turn`  

**CSS Box Model & Layouts**  
1.CSS Box-Model  
body{
    background-color: #111;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    color: white;
}
.container{
    font-size: 4rem;
    text-align: center;
    color: goldenrod;
}
.myHeading{
    margin: 1rem;
    padding: 0.5rem;
    font-size: 3rem;
    color: dodgerblue;
    border: solid;
}
.topic{
    font-size: 2rem;
    color: orangered;
    padding: 0.5rem;
    margin: 1rem;
}

2.Applying Borders  
body{
    background-color: #111;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    color: white;
}
h1{
    border-style: solid;
    border-width: 5px;
    color: burlywood;
    border-color: seagreen;
}
div{
    border-top: 15px solid chocolate;
    border-bottom: 15px solid chocolate;
    border-left: 15px solid orange;
    border-right: 15px solid orange;
}
p{
    border: 5px double dodgerblue;
    margin: 15px;
    padding: 15px;
    border-radius: 15px;
}
3.Applying Padding  
body{
    background-color: #111;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    color: khaki;
}
div{
    border: solid 5px orangered;
    padding: 50px 100px;
    width: 350px;
}
h1{
    border: solid 5px;
    padding: 10%;
    margin: 0;
}

4.Applying Margin  
body{
    background-color: #111;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    color: khaki;
}
div{
    border: solid 5px orangered;
    width: 400px;
    height: 250px;
    margin: auto;
}
p{
    border: solid 5px;
    padding: 10px;
    margin: auto auto;
    width: 300px;
}

5.Collapsing Margins & Negative Margins  
body{
    background-color: #111;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    color: white;
}
h1{
    border: solid 5px dodgerblue;
    margin: 20px -5px 30px -5px;
}
p{
    border: solid 5px;
    margin: -30px -5px 25px -5px;
}

6.Understanding Float  
body{
    background-color: #111;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    color: white;
}
div{
    width: 100px;
    height: 100px;
    margin: 1rem;
    font-size: 1.2rem;
    border: solid 2px white;
    border-radius: 50%;
    text-align: center;
    line-height: 100px;
    float: right;
}
.ele1{
    background-color: darkred;
    float: left;
}
.ele2{
    background-color: darkgoldenrod;
    float: right;
}
.ele3{
    background-color: darkgreen;
    float: left;
}
p{
    padding: 20px 0;
}

7.Clearing Floats  
body{
    background-color: #111;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    color: white;
}
div{
    width: 100px;
    height: 100px;
    margin: 1rem;
    font-size: 1.2rem;
    border: solid 2px white;
    text-align: center;
    line-height: 100px;
}
.ele1{
    background-color: darkred;
    float: right;    
}
.ele2{
    background-color: darkgoldenrod;
    clear: right;    
}
.ele3{
    background-color: darkgreen;
    float: right;
}

8.Container/Float Collapsing  
body {
    background-color: #111;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    color: white;
}
.parent{
    padding: 15px;
    width: 450px;
    border: solid 2px dodgerblue;
    overflow: hidden;
}
div > div{
    padding: 10px;
    margin: 10px;
}
.ele1{
    background-color: darkred;
    float: left;
}
.ele2{
    background-color: darkgoldenrod;
    float: left;
}
.ele3{
    background-color: darkgreen;
    float: left;
}

9.Clearfix - Modern Way to Clear Floats  
body {
    background-color: #111;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    color: white;
}
div{
    border: solid 4px dodgerblue;
}
img{
    margin: 1em;
    float: left;
}
p{
    padding: 1em;
    float: left;
}
.clearfix::after{
    content: "";
    visibility: hidden;
    clear: both;
    display: block;
}

10.Creating Multiple Columns Floated Layout  
body {
    background-color: #111;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    color: white;
    width: 600px;
}
h1{
    background-color: goldenrod;
    text-align: center;
    line-height: 2em;
    text-transform: uppercase;
    letter-spacing: 0.25em;
    margin-bottom: 25px;
}
.firstColumn{
    background-color: #033;
    border: solid 1px seagreen;
    height: 100px;
    width: 136px;
    padding: 1.5em;
    margin-right: 20px;
    float: left;
}
.secondColumn{
    background-color: #033;
    border: solid 1px seagreen;
    height: 100px;
    width: 136px;
    padding: 1.5em;
    float: left;
}
.thirdColumn{
    background-color: #033;
    border: solid 1px seagreen;
    height: 100px;
    width: 136px;
    padding: 1.5em;
    margin-bottom: 25px;
    float: right;
}
footer{
    background-color: goldenrod;
    padding: 10px;
    clear: both;
}

11.`display` Property  
body {
    background-color: #111;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    color: white;
}
.firstDiv{
    width: 10rem;
    height: 10rem;
    background-color: darkgoldenrod;
    visibility: hidden;
}
.secondDiv{
    width: 10rem;
    height: 10rem;
    background-color: chocolate;
    display: none;
}
.thirdDiv{
    width: 10rem;
    height: 10rem;
    background-color: saddlebrown;
}
div{
    display: inline-block;
}

12.Understanding Grids  
body {
    background-color: #111;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    color: white;
}
div{
    background-color: darkgoldenrod;
    text-align: center;
    border: solid 2px khaki;
    padding: 15px;
    font-size: 1.4em;
}
.gridContainer{
    display: grid;
    grid-template-columns: 40% 1fr 1fr 2fr;
    margin: 3rem;
    justify-content: center;
    column-gap: 10px;
    row-gap: 10px;
}

13.Spanning Rows and Columns in Grid 
Part - 1
body {
    background-color: #111;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    color: white;
}
div{
    background-color: darkgoldenrod;
    text-align: center;
    border: solid 2px khaki;
    padding: 15px;
    font-size: 1.4em;
}
.gridContainer{
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    margin: 3rem;
    justify-content: center;
    grid-gap: 10px;
}
.divA{
    grid-column: 1/span 5;
}
.divB{
    grid-row: 2/span 2;
    height: 150px;
}
.divC{
    grid-column: span 3;
}
.divD{
    grid-row: span 2;
}
.divH{
    grid-column: span 5;
}

14.Spanning Rows and Columns in Grid 
Part - 2
body {
    background-color: #111;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    color: white;
}
div{
    background-color: darkgoldenrod;
    text-align: center;
    border: solid 2px khaki;
    padding: 15px;
    font-size: 1.4em;
}
.gridContainer{
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    margin: 3rem;
    justify-content: center;
    grid-gap: 10px;
}
.divA{
    grid-column: 1/span 5;
}
.divB{
    grid-row: 2/span 2;
    height: 150px;
}
.divC{
    grid-column: span 3;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-row: span 2;
}
.divD{
    grid-row: span 2;
}
.divH{
    grid-column: span 5;
}

15.Flex Container Properties
body {
    background-color: #111;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    color: white;
}
.itemA{
    padding: 2rem;
    background-color: coral;
    margin: 10px;
}
.itemB{
    padding: 2rem;
    background-color: dodgerblue;
    margin: 10px;
}
.itemC{
    padding: 2rem;
    background-color: crimson;
    margin: 10px;
}
.itemD{
    padding: 2rem;
    background-color: seagreen;
    margin: 10px;
}
.wrapper{
    display: flex;
    justify-content: space-evenly;
    align-items: baseline;
    border: solid 2px;
    height: 30rem;
    /* flex-direction: row;
    flex-wrap: wrap-reverse; */
    flex-flow: row wrap-reverse;
}

16.Flex Item Properties
body {
    background-color: #111;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    color: white;
}
.itemA{
    padding: 2rem;
    background-color: coral;
    margin: 10px;
    order: 2;
}
.itemB{
    padding: 2rem;
    background-color: dodgerblue;
    margin: 10px;
    order: 3;
}
.itemC{
    padding: 2rem;
    background-color: crimson;
    margin: 10px;
    order: 1;
}
.itemD{
    padding: 2rem;
    background-color: seagreen;
    margin: 10px;
    order: 4;
}
.wrapper{
    display: flex;
    /* justify-content: space-evenly; */
    align-items: flex-start;
    border: solid 2px;
    height: 30rem;
}
div[class^="item"]{
    flex: 0 2 100px;
}

17.@media query - Introduction
body {
    background-color: #111;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    color: white;
}
h1{
    color: dodgerblue;
    font-size: 3rem;
}
button{
    background-color: dodgerblue;
    border: 0;
    color: white;
    padding: 8px;
    width: 100px;
    border-radius: 15px;
}
@media screen and (max-width:450px){
    body{
        text-align: center;
    }
    h1{
        color: goldenrod;
        font-size: 2.5rem;
    }
    button{
        background-color: gold;
        color: black;
    }
    p{
        font-size: 0.8rem;
        font-family: 'Courier New', Courier, monospace;
    }
}
@media screen and (max-width:300px){
    body{
        text-align: right;
    }
    h1{
        color: chocolate;
        font-size: 2rem;
    }
    button{
        background-color: chocolate;
        color: white;
    }
    p{
        font-size: 0.8rem;
        font-family: 'Times New Roman', Times, serif;
    }
}

18.media type - all
body{
    background-color: #111;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    color: white;
}
h1{
    color: olivedrab;
    font-size: 3rem;
    text-align: center;
}
ul{
    list-style: none;
    display: flex;
    justify-content: center;
    padding: 0;
}
a{
    margin: 1rem;
    text-decoration: none;
    color: seagreen;
}
p{
    padding: 1.5rem;
    margin: 30px 15px;
    font-size: 1.2rem;
    background-color: gold;
    color: brown;
}
@media all and (max-width:400px){
    h1{
        color: orange;
        font-size: 2rem;
    }
    p{
        font-family: 'Courier New', Courier, monospace;
        text-align: center;
        font-size: 1rem;
        font-weight: bold;
        background-color: white;
    }
    ul{
        display: inline-block;
    }
    li{
        margin-bottom: 15px;
    }
    div{
        text-align: center;
    }
    a{
        color: white;
    }
}

19.media type - screen
body {
    background-color: #111;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    color: white;
}
.main{
    display: grid;
    grid-template-columns: 1fr 1fr;
}
.column{
    background-color: dodgerblue;
    border-radius: 15px;
    margin: 12px;
    padding: 14px;
}
@media screen and (orientation:portrait){
    .main{
        display: flex;
        flex-direction: column;
    }
    .column{
        background-color: darkgreen;
        margin: 10px;
        padding: 10px;
        text-align: center;
    }
}

20.media type - print
body {
    background-color: #111;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    color: white;
}
h1{
    color: salmon;
    font-size: 45px;
    text-align: center;
}
p{
    font-size: 1.2rem;
}
@media print{
    h1{
        color: grey;
        font-size: 45pt;
        text-align: center;
        font-family: 'Times New Roman', Times, serif;
    }
    p{
        font-size: 16pt;
        font-family: 'Times New Roman', Times, serif;
    }
}

21.Creating a basic responsive form using media query with breakpoint
body {
    background-color: #111;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    color: white;
    font-size: 1.25rem;
}
h2{
    text-align: center;
    color: goldenrod;
    font-size: 35px;
}
.myForm{
    border: solid 2px goldenrod;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    border-radius: 5px;
}
.row{
    display: grid;
    grid-template-columns: auto auto auto auto;
}
.col{
    padding: 0 10px;
    margin: 10px 0;
}
.form-control{
    border: none;
    padding: 10px 25px;
    background-color: #222;
    margin: auto;
    width: 75%;
    color: white;
    font-size: 1.25rem;
}
label{
    display: block;
    color: burlywood;
    margin-bottom: 5px;
}
.submit_btn{
    text-align: center;
    margin: 20px;
}
.btn{
    padding: 5px 20px;
    background-color: chartreuse;
    border: none;
    border-radius: 5px;
    text-transform: uppercase;
    font-weight: 700;
    font-size: 1.25rem;
}
@media only screen and (max-width:900px){
    .row{
        grid-template-columns: auto auto;
    }
    body, .form-control, .btn{
        font-size: 1rem;
    }
}
@media only screen and (max-width:600px){
    .row{
        grid-template-columns: auto;
    }
    .col{
        padding: 0;
        margin: 10px 0;
    }
}

**CSS Transforms**  
1.Move elements with translate() method
body {
    background-color: #111;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    color: white;
}
.transform-2d{
    background-color: brown;
    padding: 25px;
    margin: 15px;
    width: 200px;
    transform: translateX(40px) translateY(40px);
}
.transform-3d{
    background-color: darkgreen;
    padding: 25px;
    margin: 15px;
    width: 200px;
    transform: perspective(200px) translate3d(10px, 10px, -50px);
}

2.Assignment - rotate() Method
body {
    color: chocolate;
    background: #111;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    text-transform: uppercase;
    padding-top: 3em;
    line-height: 62px;
    perspective: 1000px;
}
.front, .back{
    background-color: white;
    border: solid 1px chocolate;
    height: 200px;
    width: 200px;
}
.cube{
    width: 30%;
    text-align: center;
    margin: 0 auto;
    height: 200px;
    transform-style: preserve-3d;
    transition: 1.55s;
}
.back{
    transform: rotateX(-90deg) translateZ(-100px);
}
.front{
    transform: translateZ(100px);
}
h1{
    padding-top: 40px;
}
.cube:hover{
    transform: rotateX(90deg);
}

3.Resizing elements using the scale() function
body {
    background-color: #111;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    color: white;
}
.div1 {
    padding: 25px;
    background: crimson;
    margin: 100px 0 0 200px;
    width: 50px;
    height: 50px;
    transform: scale(2, 2);
}
.div2 {
    padding: 25px;
    background: dodgerblue;
    margin: 100px 0 0 200px;
    width: 50px;
    height: 50px;
    transform: perspective(200px) scale3d(2, 1.5, 2) rotate3d(2, 3, 5, 50deg);
}

4.Transforming Elements Using skew() Function
body {
    background-color: #111;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    color: white;
}
img{
    margin: 110px;
    width: 400px;
    border: solid 10px goldenrod;
    transform: skew(-20deg);
}

5.Assignment - Skew() on Text
body {
    background-color: #111;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    color: white;
    display: grid;
    place-content: center;
    min-height: 100vh;
}
h1{
    font-size: 3rem;
    color: gold;
    padding: 2rem 4rem;
    background-color: midnightblue;
    transform: rotate(-15deg) skew(-15deg);
}
span{
    display: inline-block;
    letter-spacing: -0.2rem;
    text-shadow: 10px 15px 5px rgba(0,0,0,0.5);
    transition: 1s;
}
span:hover{
    letter-spacing: 0rem;
    cursor: pointer;
}

6.matrix() - The all in one method
body {
    background-color: #111;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    color: white;
}
div{
    width: 300px;
    font-size: 1.5rem;
    text-align: center;
    padding: 25px;
    margin: 20px;
    background-color: #2d2d2d;
    border: solid 1px #111;
}
div#myDiv1{
    transform: matrix(1, -0.3, 0, 1, 0, 20);
}
div#myDiv2{
    /* transform: matrix3d(
        1, 0.1, 0, 0.001,
        0,   1, 0, 0.002,
        1,   1, 1,     0,
        0,   0, 0,     1
    ); */
    transform: rotate3d(2, 2, -1, 45deg);
}

7.3D Card Flip Design Using transform Method
body {
    background-color: #111;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    color: white;
}
.container{
    display: flex;
    width: 100%;
    height: 100vh;
    justify-content: center;
    align-items: center;
    perspective: 1000px;
}
.card{
    position: relative;
    width: 6rem;
    height: 6rem;
    margin: 0.5rem;
    text-align: center;
    line-height: 6rem;
    border-radius: 0.8rem;
    transform-style: preserve-3d;
}
.face-front{
    background-color: royalblue;
    font-size: 3rem;
}
.face-back{
    background-color: royalblue;
    font-size: 1rem;
    transform: rotateY(180deg);
}
.face{
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 0.8rem;
    backface-visibility: hidden;
    -webkit-backface-visibility: hidden;
    transition: transform 0.5s ease-in-out;
}
.card:hover .face-front{
    transform: rotateY(-180deg);
}
.card:hover .face-back{
    transform: rotateY(0deg);
}

**CSS Transitions**
1.Introduction to CSS Transitions
body {
    background-color: #111;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    color: white;
}
.box-rotation{
    height: 150px;
    width: 150px;
    background-color: goldenrod;
    margin: 10px;
    cursor: pointer;
    display: flex;
    text-align: center;
    align-items: center;
    font-size: 18px;
    font-weight: 700;
    color: black;
    padding: 10px;
    transition: all 1s;
}
.box-rotation:hover{
    color: white;
    background-color: orangered;
    border-radius: 50%;
    transition: all 1s;
    transform: rotateZ(360deg);
}
.parentDiv{
    display: flex;
    height: 95vh;
    justify-content: center;
    align-items: center;
}

2.Transitioning CSS Properties
body {
    background-color: #111;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    color: white;
}
div{
    background-color: seagreen;
    width: 200px;
    height: 230px;
    font-size: 2.5rem;
    padding: 20px;
    /* transition-property: all; */
    transition-duration: 1s;
}
div:hover{
    width: 450px;
    font-size: 3rem;
    height: 300px;
    background-color: goldenrod;
}

3.Specifying Speed & Curve with transition-timing-function
body {
    background-color: #111;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    color: white;
}
.container{
    width: 85%;
    margin: 30px auto 0;
    border: 3px solid #333;
    border-radius: 70px;
    padding: 15px;
    background-color: #222;
}
.box{
    width: 100px;
    height: 100px;
    border-radius: 50px;
    background-color: darkorange;
    /* transition-timing-function: steps(3);
    transition-duration: 1s; */
    transition: 1s cubic-bezier(1,0,0,1);
}
.container:hover .box{
    margin-left: 80%;
}

4.Delaying the Transition with transition-delay
body {
    background-color: #111;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    color: white;
}
.container{
    width: 85%;
    margin: 30px auto 0;
    border: 3px solid #333;
    border-radius: 70px;
    padding: 15px;
    background-color: #222;
}
.box{
    width: 100px;
    height: 100px;
    border-radius: 50px;
    background-color: darkorange;
    transition: background-color 2s ease-in, width 2s ease;
}
.container:hover .box{
    width: 530px;
    transition-delay: -1s;
    background-color: dodgerblue;
}

5.Combining Transform with Transition
body {
    background-color: #111;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    color: white;
}
.container{
    position: relative;
    margin-top: 50px;
    width: 250px;
    margin: 25px;
    height: 150px;
    display: inline-block;
    text-align: center;
    overflow: hidden;
}
img{
    position: absolute;
    width: 250px;
    height: 150px;
    left: 0;
    background-position: center;
    transition: all 0.7s ease;
}
img:hover{
    transform: scale(1.2);
}
.cardTitle{
    position: absolute;
    width: 170px;
    left: 40px;
    top: 15px;
    font-weight: 700;
    font-size: 25px;
    text-transform: uppercase;
    color: black;
    transition: top 0.4s ease, text-shadow 0.4s linear, color 0.4s ease;
}
.container:hover .cardTitle{
    top: 0px;
    color: white;
    text-shadow: 2px 2px 5px #000;
}
.button{
    position: absolute;
    bottom: 15px;
    left: 80px;
    opacity: 0;
    transition: opacity 0.35s ease, transform 0.4s ease;
    text-shadow: 0px 0px 3px #000;
}
.button a{
    font-size: 12px;
    padding: 5px;
    text-decoration: none;
    color: white;
    border: solid 2px white;
}
.container:hover .button{
    opacity: 1;
    transform: scale(1.2);
}

**CSS Animations**
1.@keyframes Rule
body {
    background-color: #111;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    color: white;
}
.slide{
    background-color: darkolivegreen;
    width: 150px;
    height: 150px;
    margin-top: 50px;
    animation: slideBox 3s infinite;
}
@keyframes slideBox{
    0%{
        transform: translate(0px);
    }
    33%{
        height: 100px;
        width: 1px;
    }
    43%{
        border-radius: 50%;
        background-color: goldenrod;
    }
    100%{
        transform: translate(450px) rotate(90deg);
    }
}

2.animation-name & animation-duration - The First Step
body {
    background-color: #111;
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
    color: white;
}
.myDiv{
    border: solid 2px grey;
    width: 600px;
    height: 50px;
    padding: 10px;
}
.loader{
    background-color: orangered;
    width: 10px;
    height: 50px;
    animation: infinite scale-animation 5s;
}
@keyframes scale-animation{
    50%{
        background-color: goldenrod;
    }
    100%{
        width: 600px;
        background-color: darkgreen;
    }
}

3.animation-delay
body {
    background-color: #111;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    color: white;
}
.myDiv{
    background-color: firebrick;
    width: 150px;
    height: 150px;
    margin: 100px 230px;
}
.myDiv:hover{
    animation: 800ms 2s myAnimation;
}
@keyframes myAnimation{
    45%{
        border-radius: 50%;
    }
    100%{
        transform: rotate(180deg) scale(2);
        background-color: goldenrod;
    }
}

4.Controlling Iterations with animation-iteration-count property
body {
    background-color: #111;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    color: white;
}
img{
    position: relative;
    width: 150px;
    margin: 35px;
    animation-name: myAnimation, scale, rotate;
    animation-duration: 3s, 3s, 3s;
    animation-iteration-count: infinite, infinite, infinite;
    animation-timing-function: linear;
}
@keyframes myAnimation{
    0%{
        left: 0px;
        top: 150px;
        animation-timing-function: ease-in;
    }
    20%{
        left: 125px;
        top: 50px;
    }
    50%{
        left: 250px;
        top: 150px;
    }
    80%{
        left: 125px;
        top: 250px;
    }
    100%{
        left: 0px;
        top: 150px;
        animation-timing-function: ease-out;
    }
}
@keyframes scale{
    0%{
        transform: scale(0.5);
        width: 100px;
    }
    20%{
        width: 150px;
    }
    50%{
        transform: scale(2);
        width: 300px;
    }
    80%{
        width: 150px;
    }
    100%{
        transform: scale(0.5);
        width: 100px;
    }
}
@keyframes rotate{
    0%{
        transform: rotate(0deg);
        animation-timing-function: ease-in;
    }
    50%{
        transform: rotate(360deg);
    }
    100%{
        transform: rotate(720deg);
        animation-timing-function: ease-out;
    }
}

5.Assignment - Controlling Iterations
body {
    background-color: #111;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    color: white;
}
.file{
    position: relative;
    width: 80px;
    margin: 100px 0 0 50px;
    animation-name: myAnimation;
    animation-duration: 2s;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
}
.folder1, .folder2{
    position: absolute;
    margin-top: 100px;
    width: 150px;
}
.folder1{
    left: 0;
}
.folder2{
    right: 0;
}
@keyframes myAnimation{
    0%{
        transform: translate(0px);
    }
    25%{
        transform: translate(120px,-75px) rotate(90deg) scaleX(50%);
    }
    50%{
        transform: translate(240px,-100px) rotate(180deg) scaleX(1%);
    }
    75%{
        transform: translate(360px, -75px) rotate(270deg) scaleX(50%);
    }
    100%{
        transform: translate(480px) rotate(360deg) scaleX(100%);
    }
}

6.Changing Animation Direction with animation-direction property
body {
    background-color: #111;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    color: white;
}
.elem{
    width: 100px;
    height: 100px;
    margin: 100px 50px;
    border-radius: 50%;
    position: relative;
    top: 0;
    left: 0;
    background-color: goldenrod;
    animation: zigzag 3s alternate infinite;
}
@keyframes zigzag{
    0%{
        left: 0;
        top: 0;
    }
    15%{
        left: 60px;
        top: -50px;
    }
    30%{
        left: 120px;
        top: 0;
    }
    45%{
        left: 180px;
        top: -50px;
    }
    60%{
        left: 240px;
        top: 0;
    }
    75%{
        left: 300px;
        top: -50px;
    }
    100%{
        left: 360px;
        top: 0;
    }
}

7.Defining Speed Curve with animation-timing-function property
body {
    background-color: #111;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    color: white;
}
.elem{
    width: 100px;
    height: 100px;
    margin: 100px 50px;
    border-radius: 50%;
    position: relative;
    top: 0;
    left: 0;
    background-color: goldenrod;
    animation: zigzag 3s alternate infinite cubic-bezier(0.1, 0.8, 0.1, 0.8);
}
@keyframes zigzag{
    0%{
        left: 0;
        top: 0;
    }
    15%{
        left: 60px;
        top: -50px;
    }
    30%{
        left: 120px;
        top: 0;
    }
    45%{
        left: 180px;
        top: -50px;
    }
    60%{
        left: 240px;
        top: 0;
    }
    75%{
        left: 300px;
        top: -50px;
    }
    100%{
        left: 360px;
        top: 0;
    }
}

8.Assignment - Creating Background Animation
*{
    margin: 0;
    padding: 0;
}
body {
    background-color: #111;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    color: white;
}
.myHeading{
    width: 100%;
    position: absolute;
    bottom: 0;
}
.myHeading h1{
    text-align: center;
    color: lightcoral;
    font-size: 40px;
}
.area{
    background: linear-gradient(lightcoral 0%, bisque 100%);
    width: 100%;
    height: 100vh;
}
.circles{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
}
.circles li{
    position: absolute;
    display: block;
    list-style: none;
    width: 20px;
    height: 20px;
    bottom: -150px;
    background: lightcoral;
    animation: bg-animate 10s linear infinite;
}
.circles li:nth-child(1){
    left: 25%;
    width: 80px;
    height: 80px;
    animation-delay: 0s;
}
.circles li:nth-child(2){
    left: 10%;
    width: 20px;
    height: 20px;
    animation-delay: 2s;
    animation-duration: 12s;
}
.circles li:nth-child(3){
    left: 70%;
    width: 20px;
    height: 20px;
    animation-delay: 4s;
}
.circles li:nth-child(4){
    left: 40%;
    width: 60px;
    height: 60px;
    animation-delay: 0s;
    animation-duration: 18s;
}
.circles li:nth-child(5){
    left: 65%;
    width: 20px;
    height: 20px;
    animation-delay: 0s;
}
.circles li:nth-child(6){
    left: 75%;
    width: 110px;
    height: 110px;
    animation-delay: 3s;
}
.circles li:nth-child(7){
    left: 35%;
    width: 150px;
    height: 150px;
    animation-delay: 7s;
}
.circles li:nth-child(8){
    left: 50%;
    width: 25px;
    height: 25px;
    animation-delay: 15s;
    animation-duration: 45s;
}
.circles li:nth-child(9){
    left: 20%;
    width: 15px;
    height: 15px;
    animation-delay: 2s;
    animation-duration: 35s;
}
.circles li:nth-child(10){
    left: 85%;
    width: 150px;
    height: 150px;
    animation-delay: 0s;
    animation-duration: 11s;
}
@keyframes bg-animate{
    0%{
        transform: translateY(0);
        opacity: 1;
        border-radius: 50%;
    }
    100%{
        transform: translateY(-1000px);
        opacity: 0;
        border-radius: 50%;
    }
}

9.animation-fill-mode property
body {
    background-color: #111;
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
    color: white;
}
.myDiv{
    position: relative;
    padding: 50px;
    margin: 60px;
    width: 0px;
    border: solid 20px goldenrod;
    background-color: khaki;
    animation: animate 2s ease-in-out 3s forwards;
}
@keyframes animate{
    from{
        left: 0%;
        background-color: orangered;
    }
    to{
        left: 55%;
        background-color: darkgreen;
        transform: rotate(180deg);
    }
}

10.Assignment - Sunset Animation
*{
    margin: 0;
    padding: 0;
}
body {
    background-color: #111;
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
    color: white;
    animation: sky linear 5s forwards;
}
img{
    position: relative;
    top: 340px;
}
.sun{
    position: absolute;
    background-color: orange;
    height: 100px;
    width: 100px;
    border-radius: 50%;
    top: 4%;
    left: 15%;
    box-shadow: 0 0 20px 5px orange;
    animation: sunset 5s ease-in forwards;
}
@keyframes sky{
    0%{
        background-color: #d60;
    }
    35%{
        background-color: #c40;
    }
    55%{
        background-color: #b20;
    }
    90%{
        background-color: #004;
    }
    100%{
        background-color: #002;
    }
}
@keyframes sunset{
    0%{
        opacity: 1;
    }
    50%{
        opacity: 1;
    }
    100%{
        transform: translateY(450px);
        opacity: 0;
    }
}
.moon{
    position: absolute;
    border-radius: 50%;
    height: 100px;
    width: 100px;
    background-color: transparent;
    box-shadow: -20px 10px 2px #fff;
    right: 10%;
    bottom: 2%;
    opacity: 0;
    animation: night 5s ease-out 4s forwards;
}
@keyframes night{
    100%{
        transform: translateY(-450px);
        opacity: 1;
    }
}


**Sass (CSS Preprocessor)**  
1.Configuring Sass in Project  
2.Sass Variables  
3.Nesting in Sass  
4.Sass Partials  
5.Sass Modules - @use
6.Sass Mixins  
7.Inheritance with Sass - `@extend` Rule  
8.Sass Operators  
9.Assignment - Responsive Sidebar with Sass

**Bootstrap (CSS Framework)**  
Introduction to Bootstrap  
Configuring Bootstrap  
Containers  
Utilities / Helper Classes  
Buttons  
Grouped Buttons & Spinners  
Grid System Layout  
Login Form Using Bootstrap  
Pagination  
Modals  
Navigation Bar  
