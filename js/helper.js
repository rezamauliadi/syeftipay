(function ( $ ) {
 
    $.fn.formatPriceNumber = function() {
      this.each(function(){
        var thisPrice = $( this );
        thisPrice.text(thisPrice.text().toString().replace(/\B(?=(\d{3})+(?!\d))/g, "."));
      });
      return this;
    };

    $.fn.toInteger = function(attr) {
      var value = 0;
      if(attr != null){
        value = this.attr(attr);
      } else {
        value = this.filter('input').length != 0 ? this.val() : this.text();
      }
      return parseInt(value.replace(/[^0-9]/g,''), 10);
    };
 
}( jQuery ));