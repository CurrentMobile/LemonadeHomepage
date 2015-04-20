var map;
jQuery(document).ready(function(){

    map = new GMaps({
        div: '#map',
        lat: 41.8971275,
        lng: -87.6333831,
    });
    map.addMarker({
        lat: 41.8971275,
        lng: -87.6333831,
        title: 'Address',      
        infoWindow: {
            content: '<h5 class="subtitle">Lemonade Studios</h5><p><span class="region">213 West Institute pl.<br>Chicago, IL</span><br><span class="postal-code">60610</span><br><span class="country-name">U.S</span></p>'
        }
        
    });

});