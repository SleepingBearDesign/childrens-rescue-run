function initialize() {
      	
      	var windowLatLng = new google.maps.LatLng(42.9637675, -85.8883517);
	    
      	var mapCanvas = document.getElementById('map-location');
      	
        var mapOptions = {
	        center: windowLatLng,
	        zoom: 15,
	        scrollwheel: false,
			navigationControl: false,
			mapTypeControl: false,
			scaleControl: false,
	        mapTypeId: google.maps.MapTypeId.ROADMAP
        }
        
        var map = new google.maps.Map(mapCanvas, mapOptions);
        
        var contentString = '<div class="info-window">'+
        	'<h3>Location</h3>'+
        	'<span>Where you can find us</span>'+
        	'<p>GVSU, 1 Campus Dr, Allendale, MI 49401</p>'+
        	'</div>';
	
		var infowindow = new google.maps.InfoWindow({
			content: contentString,
			maxWidth: 240
		});
		
        var marker = new google.maps.Marker({
		    position: windowLatLng,
		    map: map,
		    title: 'Hello World!',
		    show: true
		});
		
		google.maps.event.addListener(marker, 'click', function() {
			infowindow.open(map, marker);
		});
		
		google.maps.event.trigger(marker, 'click')
		
		marker.setVisible(false)
		
      }
      
      google.maps.event.addDomListener(window, 'load', initialize);
            