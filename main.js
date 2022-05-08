/*global
 document
 window
 */
var art = {

    "d6": [
        "<figure><img id=d61 class=radius src=img/go-around.png height=100px width=200px alt=Freeway Data. Pass on the inside lane.  Title='Simple and original artwork. In this case freeway data shows okay to pass on the left.'><figure><figcaption>Artwork for slide set</figcaption><figcaption>ok to pass</figcaption></figure>",
        "<figure><img id=d62 class=radius src=img/dev-test.png height=100px width=200px title='Simple and original artwork. In this case diagram for testing code.'><figure><figcaption>Artwork for slide set</figcaption><figcaption>Test relaease</figcaption></figure>",
        "<figure><img id=d63 class=radius src=img/face.png height=100px width=200px title='Simple and original artwork. In this case a nice shining face of approval.'><figure><figcaption>Artwork for slide set</figcaption><figcaption>Smile of approval</figcaption></figure>",
        "<figure><img id=d64 class=radius src=img/fast-foods.png height=100px width=200px title='Simple and original artwork. In this case drive by the fast food places.'><figure><figcaption>Artwork for slide set</figcaption><figcaption>Drive by fast foods</figcaption></figure>",
        "<figure><img id=d65 class=radius src=img/happy-client-1.png height=100px width=200px title='Simple and original artwork. In this case a ppy client.'><figure><figcaption>Artwork for slide set</figcaption><figcaption>Happy Client</figcaption></figure>",
        "<figure><img id=d66 class=radius src=img/sick.png height=100px width=200px title='Simple and original artwork. In this case two diverse food digesting differently causing upset stomach.'><figure><figcaption>Artwork for slide set</figcaption><figcaption>Fish/beef don't mix</figcaption></figure>",
        "<figure><img id=d67 class=radius src=img/time-on-page-1.png height=100px width=200px title='Simple and original artwork. In this case - time on page.'><figure><figcaption>Artwork for slide set</figcaption><figcaption>Time on Page</figcaption></figure>",
        "<figure><img id=d68 class=radius src=img/test-code.png height=100px width=200px title='Simple and original artwork. In this case two flow diagrams for code test.'><figure><figcaption>Artwork for slide set</figcaption><figcaption>Test release process</figcaption></figure>",
        "<figure><img id=d69 class=radius src=img/headache.png height=100px width=200px title='Simple and original artwork. In this case a visual for headache symptom in allergy.'><figure><figcaption>Artwork for slide set</figcaption><figcaption>Headache</figcaption></figure>",
        "<figure><img id=d70 class=radius src=img/train-10.png height=100px width=200px title='Simple and original artwork. In this case a visual for train.'><figure><figcaption>Artwork for slide set</figcaption><figcaption>Train</figcaption></figure>",
        "<figure><img id=d71 class=radius src=img/lotto.png height=100px width=200px title='Simple and original artwork. In this case a visual for headache symptom in allergy.'><figure><figcaption>Artwork for slide set</figcaption><figcaption>Lotto</figcaption></figure>",
        "<figure><img id=d691 class=radius src=img/miserable.png height=100px width=200px title='Simple and original artwork. In this case visual for being miserable symptom in allergy.'><figure><figcaption>Artwork for slide set</figcaption><figcaption>Allergy - misearble</figcaption></figure>",
        "<figure><img id=d692 class=radius src=img/pollen.png height=100px width=200px title='Simple and original artwork. In this case two a visual for pollen symptom in allergy.'><figure><figcaption>Artwork for slide set</figcaption><figcaption>Allergy - pollen</figcaption></figure>",
        "<figure><img id=d693 class=radius src=img/runny-nose.png height=100px width=200px title='Simple and original artwork. In this case a visual for runny nose symptom in allergy.'><figure><figcaption>Artwork for slide set</figcaption><figcaption>Allergy - runny nose</figcaption></figure>",
        "<figure><img id=d694 class=radius src=img/beer.png height=100px width=200px title='Simple and original artwork. In this case beer gives headache.'><figure><figcaption>Artwork for slide set</figcaption><figcaption>Beer headache</figcaption></figure>"

    ]
};

var getId = function (id) {
    "use strict";
    return document.getElementById(id);
};

// expand the image with a click

var expand = function (e) {
    "use strict";
    var d = e.target.id;
    // return if click target is empty string
    // this happens if click is inside li but not on image
    if (d === "") {
        return
    }
    var dd = getId(d);
    dd.style.borderRadius = 10 + "px";
    dd.style.height = dd.clientHeight * 1.25 + "px";
    dd.style.width = dd.clientWidth * 1.25 + "px";
    dd.style.transition = "all 1s ease-in";
};

var demo = function (e) {
    "use strict";
    var t = e.target.id;
    var op = document.getElementById("dem");
    var zz = document.querySelectorAll("section");

    zz.forEach(function (value) {
        value.style.display = "none";
    });
    // clear last render first
    op.innerHTML = "";
    art[t].forEach(function (value) {
        var li = document.createElement("li");
        li.innerHTML = value;
        li.style.border = "1px white dashed"
        li.addEventListener("click", expand, false);
        op.appendChild(li);
    });
    window.scrollTo(0, 0);
};
// click event on Artwork (li) starts the demo function
// the for each method creates element li and appends the list to the ul id='dem' element
var action = function (e) {
    "use strict";
    var getEl = e.target.tagName;
    var y = e.target.id;
    if (getEl !== "BUTTON" || getEl === undefined) {
        return;
    }
    if (y.length > 1) {
        demo(e);
    }
};

var addEv = function () {
    "use strict";
    return document.addEventListener("click", action, false);
};

var listeners = function () {
    "use strict";
    addEv();
};
window.onload = listeners;
