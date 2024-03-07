require([
    "esri/config",
    "esri/Map",
    "esri/views/MapView",
    "esri/Graphic",
    "esri/layers/GraphicsLayer"
  ], function(esriConfig, Map, MapView, Graphic, GraphicsLayer) {
    
    esriConfig.apiKey = "AAPK7a7ab4389a5d49e6baa08b2db7987c36t7-xSeM7W_C_4WgjNwvZHp-6iY2m0a50YtOBjTaD2LqDhdvOH-tzFAsITV2yCxlQ"; // Make sure to use your actual API key
    
    const map = new Map({
      basemap: "arcgis-topographic" // Basemap layer service
    });
    
    const view = new MapView({
      map: map,
      center: [-97.750689, 30.263098], // Longitude, latitude
      zoom: 13, // Zoom level
      container: "viewDiv" // Div element
    });
    
    const graphicsLayer = new GraphicsLayer();  
    map.add(graphicsLayer);
    
    const point = { //Create a point  
      type: "point",  
      longitude: -97.750689,    //long lat of Stevie Ray Vaughan Statue
      latitude: 30.263098
    };
    
    const simpleMarkerSymbol = {  
      type: "simple-marker",  
      color: [226, 119, 40],  // Orange
      style: "diamond",
      outline: {  
        color: [255, 255, 255], // White
        width: 1  
      }  
    };
    
    const pointGraphic = new Graphic({  
      geometry: point,  
      symbol: simpleMarkerSymbol  
    });
    
    graphicsLayer.add(pointGraphic);
  });