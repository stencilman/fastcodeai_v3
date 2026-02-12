// Handles CSS render-blocking for dynamic (SSR) pages.
// Static pages are handled by scripts/postbuild.mjs which rewrites the HTML.
// This component uses a MutationObserver to catch any <link rel="stylesheet">
// tags React adds during hydration and defers them via the media="print" swap.
export default function CriticalCSS() {
  return (
    <script
      dangerouslySetInnerHTML={{
        __html: `(function(){function d(l){if(l.dataset.d)return;l.dataset.d="1";l.media="print";l.onload=function(){this.media="all"}}if(typeof MutationObserver!=="undefined"){new MutationObserver(function(m){for(var i=0;i<m.length;i++){var a=m[i].addedNodes;for(var j=0;j<a.length;j++){var n=a[j];if(n.tagName==="LINK"&&n.rel==="stylesheet"&&n.dataset&&!n.dataset.d)d(n)}}}).observe(document.documentElement,{childList:true,subtree:true})}})();`,
      }}
    />
  );
}
