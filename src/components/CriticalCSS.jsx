// Inlines critical above-fold CSS and defers non-critical stylesheets
// to eliminate render-blocking CSS requests
export default function CriticalCSS() {
  return (
    <>
      {/* Critical above-fold CSS inlined to prevent FOUC when deferring stylesheets */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
            :root {
              --theme-bg: #00081f;
              --theme-fg: #ffffff;
              --theme-muted: rgba(255, 255, 255, 0.7);
              --theme-border: rgba(255, 255, 255, 0.18);
              --theme-accent: #23f0c3;
              --theme-card: rgba(255, 255, 255, 0.06);
              --theme-card-bg: linear-gradient(360deg, #13224F 0%, #13224F 0%, #0C1C46 51%, #020F3B 100%);
              --theme-card-border: rgba(255, 255, 255, 0.12);
            }
            html[data-theme="dark"] {
              --theme-bg: #00081f;
              --theme-fg: #ffffff;
            }
            body {
              background-color: var(--theme-bg);
              color: var(--theme-fg);
              margin: 0;
            }
            *,::before,::after { box-sizing: border-box; border-width: 0; border-style: solid; }
            img, video { max-width: 100%; height: auto; }
          `,
        }}
      />
      {/* 
        Defer non-critical CSS: runs IMMEDIATELY on existing <link> tags 
        (which appear before this script in the HTML) and watches for new ones.
        Uses the media="print" swap technique recommended by Google.
      */}
      <script
        dangerouslySetInnerHTML={{
          __html: `
            (function(){
              function d(l){
                if(l.dataset.d) return;
                l.dataset.d='1';
                l.media='print';
                l.onload=function(){this.media='all'};
              }
              // Immediately process existing CSS links (they appear before this script in <head>)
              var l=document.querySelectorAll('link[rel="stylesheet"][href*="_next/static/css"]');
              for(var i=0;i<l.length;i++) d(l[i]);
              // Watch for any new CSS links added later (e.g. by React hydration or route changes)
              if(typeof MutationObserver!=='undefined'){
                new MutationObserver(function(m){
                  for(var i=0;i<m.length;i++){
                    var a=m[i].addedNodes;
                    for(var j=0;j<a.length;j++){
                      var n=a[j];
                      if(n.tagName==='LINK'&&n.rel==='stylesheet'&&n.href&&n.href.indexOf('_next/static/css')!==-1) d(n);
                    }
                  }
                }).observe(document.documentElement,{childList:true,subtree:true});
              }
            })();
          `,
        }}
      />
    </>
  );
}
