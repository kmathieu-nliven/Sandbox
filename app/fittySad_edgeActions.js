/***********************
* Adobe Edge Animate Composition Actions
*
* Edit this file with caution, being careful to preserve 
* function signatures and comments starting with 'Edge' to maintain the 
* ability to interact with these actions from within Adobe Edge Animate
*
***********************/
(function($, Edge, compId){
var Composition = Edge.Composition, Symbol = Edge.Symbol; // aliases for commonly used Edge classes

   //Edge symbol: 'stage'
   (function(symbolName) {
      
      
   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'fittySad_symbol_1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1666, function(sym, e) {
         sym.play(0);

      });
      //Edge binding end

   })("fittySad");
   //Edge symbol end:'fittySad'

})(window.jQuery || AdobeEdge.$, AdobeEdge, "fittySad");