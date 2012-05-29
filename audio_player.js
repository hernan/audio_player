(function( $ ) {
  $.fn.audioPlayer = function(options) {
    var settings = $.extend( {
          'playbtn': '.btn',
          'progress': '.progress'
        }, options);


    return this.each(function(){
      var $this = $(this),
          audio = $this.find('audio'),
          audio_el = audio.get(0),
          playbtn = $this.find(settings.playbtn),
          progress = $this.find(settings.progress);
          
      audio.bind('timeupdate', function(ev){
        var percent = (audio_el.currentTime / audio_el.duration) * 100;
        progress.css('width', parseInt(percent, 10) + '%');
        
      });
      
      playbtn.on('click', function(ev){
        ev.preventDefault();
        
        if(audio_el.paused){
          audio_el.play();
        }
        else{
          audio_el.pause();
        }
        
      });
    });

  };
})( jQuery );
