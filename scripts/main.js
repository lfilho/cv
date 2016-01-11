///////////////////
// Google Analytics
///////////////////

(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
    (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
        m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','http://www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-61383393-1', 'auto');
ga('send', 'pageview');

/////////////////////
// Auto header anchor
/////////////////////

var anchorForId = function (id) {
    var anchor = document.createElement('a');
    anchor.className = 'header-link';
    anchor.href      = '#' + id;
    anchor.innerHTML = '<i class="fa fa-link"><\/i>';
    return anchor;
};

var linkifyAnchors = function () {
    for (var level = 1; level <= 6; level++) {
        var headers = document.getElementsByTagName('h' + level);
        for (var h = 0; h < headers.length; h++) {
            var header = headers[h];

            if (typeof header.id !== 'undefined' && header.id !== '') {
                header.appendChild(anchorForId(header.id));
            }
        }
    }
};

var autoCountListItems = function () {
    var $countSpans = document.getElementsByClassName('auto-count');
    var countSpansLength = $countSpans.length;

    for (var i = 0; i < countSpansLength; i++) {
        var $currentSpan = $countSpans[i];
        var countQuery = $currentSpan.dataset.countQuery;
        var targetElements = document.querySelectorAll(countQuery);
        var targetElementsLength = targetElements.length;
        $currentSpan.innerHTML = targetElementsLength;
    }
}

document.onreadystatechange = function () {
    if (this.readyState === 'complete') {
        linkifyAnchors();
        autoCountListItems();
    }
};
