var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_c_shp_1 = new ol.format.GeoJSON();
var features_c_shp_1 = format_c_shp_1.readFeatures(json_c_shp_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_c_shp_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_c_shp_1.addFeatures(features_c_shp_1);
var lyr_c_shp_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_c_shp_1, 
                style: style_c_shp_1,
                interactive: true,
                title: '<img src="styles/legend/c_shp_1.png" /> c_shp'
            });
var lyr_DEMHUACHOCOLPA_2 = new ol.layer.Image({
                            opacity: 1,
                            title: "DEM-HUACHOCOLPA",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/DEMHUACHOCOLPA_2.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-8390556.526409, -1514416.463051, -8305239.339211, -1430508.912452]
                            })
                        });
var lyr_acc_3 = new ol.layer.Image({
                            opacity: 1,
                            title: "acc",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/acc_3.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-8390556.526409, -1514416.463051, -8305239.339211, -1430508.912452]
                            })
                        });
var lyr_c_acc_4 = new ol.layer.Image({
                            opacity: 1,
                            title: "c_acc",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/c_acc_4.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-8356522.018747, -1456316.526886, -8334454.043796, -1441338.384058]
                            })
                        });
var format_c_curvas_5 = new ol.format.GeoJSON();
var features_c_curvas_5 = format_c_curvas_5.readFeatures(json_c_curvas_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_c_curvas_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_c_curvas_5.addFeatures(features_c_curvas_5);
var lyr_c_curvas_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_c_curvas_5, 
                style: style_c_curvas_5,
                interactive: true,
                title: '<img src="styles/legend/c_curvas_5.png" /> c_curvas'
            });
var lyr_c_fill_6 = new ol.layer.Image({
                            opacity: 1,
                            title: "c_fill",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/c_fill_6.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-8356522.018747, -1456316.526886, -8334454.043796, -1441338.384058]
                            })
                        });
var lyr_c_reclass_7 = new ol.layer.Image({
                            opacity: 1,
                            title: "c_reclass",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/c_reclass_7.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-8356522.018747, -1456316.526886, -8334454.043796, -1441338.384058]
                            })
                        });
var format_c_rios_8 = new ol.format.GeoJSON();
var features_c_rios_8 = format_c_rios_8.readFeatures(json_c_rios_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_c_rios_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_c_rios_8.addFeatures(features_c_rios_8);
var lyr_c_rios_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_c_rios_8, 
                style: style_c_rios_8,
                interactive: true,
                title: '<img src="styles/legend/c_rios_8.png" /> c_rios'
            });
var lyr_dir_9 = new ol.layer.Image({
                            opacity: 1,
                            title: "dir",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/dir_9.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-8390556.526409, -1514416.463051, -8305239.339211, -1430508.912452]
                            })
                        });
var lyr_fill_10 = new ol.layer.Image({
                            opacity: 1,
                            title: "fill",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/fill_10.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-8390556.526409, -1514416.463051, -8305239.339211, -1430508.912452]
                            })
                        });
var lyr_c_cauce_11 = new ol.layer.Image({
                            opacity: 1,
                            title: "c_cauce",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/c_cauce_11.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-8356522.018747, -1456316.526886, -8334454.043796, -1441338.384058]
                            })
                        });

lyr_GoogleSatellite_0.setVisible(true);lyr_c_shp_1.setVisible(true);lyr_DEMHUACHOCOLPA_2.setVisible(true);lyr_acc_3.setVisible(true);lyr_c_acc_4.setVisible(true);lyr_c_curvas_5.setVisible(true);lyr_c_fill_6.setVisible(true);lyr_c_reclass_7.setVisible(true);lyr_c_rios_8.setVisible(true);lyr_dir_9.setVisible(true);lyr_fill_10.setVisible(true);lyr_c_cauce_11.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_c_shp_1,lyr_DEMHUACHOCOLPA_2,lyr_acc_3,lyr_c_acc_4,lyr_c_curvas_5,lyr_c_fill_6,lyr_c_reclass_7,lyr_c_rios_8,lyr_dir_9,lyr_fill_10,lyr_c_cauce_11];
lyr_c_shp_1.set('fieldAliases', {'ID': 'ID', 'VALUE': 'VALUE', 'NAME': 'NAME', });
lyr_c_curvas_5.set('fieldAliases', {'fid': 'fid', 'ID': 'ID', 'CONTOUR': 'CONTOUR', 'LENGTH': 'LENGTH', });
lyr_c_rios_8.set('fieldAliases', {'SEGMENT_ID': 'SEGMENT_ID', 'NODE_A': 'NODE_A', 'NODE_B': 'NODE_B', 'BASIN': 'BASIN', 'ORDER': 'ORDER', 'ORDER_CELL': 'ORDER_CELL', 'LENGTH': 'LENGTH', });
lyr_c_shp_1.set('fieldImages', {'ID': '', 'VALUE': '', 'NAME': '', });
lyr_c_curvas_5.set('fieldImages', {'fid': '', 'ID': '', 'CONTOUR': '', 'LENGTH': '', });
lyr_c_rios_8.set('fieldImages', {'SEGMENT_ID': '', 'NODE_A': '', 'NODE_B': '', 'BASIN': '', 'ORDER': '', 'ORDER_CELL': '', 'LENGTH': '', });
lyr_c_shp_1.set('fieldLabels', {'ID': 'no label', 'VALUE': 'no label', 'NAME': 'no label', });
lyr_c_curvas_5.set('fieldLabels', {'fid': 'no label', 'ID': 'no label', 'CONTOUR': 'no label', 'LENGTH': 'no label', });
lyr_c_rios_8.set('fieldLabels', {'SEGMENT_ID': 'no label', 'NODE_A': 'no label', 'NODE_B': 'no label', 'BASIN': 'no label', 'ORDER': 'no label', 'ORDER_CELL': 'no label', 'LENGTH': 'no label', });
lyr_c_rios_8.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});