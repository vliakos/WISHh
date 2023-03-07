var wms_layers = [];


        var lyr__0 = new ol.layer.Tile({
            'title': 'Δεδομένα υψομέτρου',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">Kartendaten: © OpenStreetMap-Mitwirkende, SRTM | Kartendarstellung: © OpenTopoMap (CC-BY-SA)</a>',
                url: 'https://a.tile.opentopomap.org/{z}/{x}/{y}.png'
            })
        });

        var lyr__1 = new ol.layer.Tile({
            'title': 'Δορυφορική Εικόνα',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format__2 = new ol.format.GeoJSON();
var features__2 = format__2.readFeatures(json__2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__2.addFeatures(features__2);
var lyr__2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource__2, 
                style: style__2,
                interactive: true,
                title: '<img src="styles/legend/_2.png" /> Συλλήψεις Επισκοπή'
            });
var format__3 = new ol.format.GeoJSON();
var features__3 = format__3.readFeatures(json__3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__3.addFeatures(features__3);
var lyr__3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource__3, 
                style: style__3,
                interactive: true,
                title: '<img src="styles/legend/_3.png" /> Συλλήψεις Σταυρός'
            });
var format__4 = new ol.format.GeoJSON();
var features__4 = format__4.readFeatures(json__4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__4.addFeatures(features__4);
var lyr__4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource__4, 
                style: style__4,
                interactive: true,
                title: '<img src="styles/legend/_4.png" /> Συλλήψεις Δίον'
            });
var format__5 = new ol.format.GeoJSON();
var features__5 = format__5.readFeatures(json__5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__5.addFeatures(features__5);
var lyr__5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource__5, 
                style: style__5,
                interactive: true,
                title: '<img src="styles/legend/_5.png" /> Συλλήψεις Μελίκη'
            });
var format__6 = new ol.format.GeoJSON();
var features__6 = format__6.readFeatures(json__6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__6.addFeatures(features__6);
var lyr__6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource__6, 
                style: style__6,
                interactive: true,
                title: '<img src="styles/legend/_6.png" /> Συλλήψεις Νέα Εφεσος'
            });
var lyr__7 = new ol.layer.Image({
                            opacity: 1,
                            title: "Τοπογραφία Επισκοπή",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/_7.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [2462965.863782, 4966494.593927, 2463533.728350, 4966953.488879]
                            })
                        });
var lyr__8 = new ol.layer.Image({
                            opacity: 1,
                            title: "Τοπογραφία Μελίκη",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/_8.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [2493678.905281, 4941443.493447, 2494389.579663, 4941982.012654]
                            })
                        });
var lyr__9 = new ol.layer.Image({
                            opacity: 1,
                            title: "Τοπογραφία Νέα Έφεσος",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/_9.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [2503175.758502, 4897943.827853, 2504006.449628, 4898426.065331]
                            })
                        });
var lyr__10 = new ol.layer.Image({
                            opacity: 1,
                            title: "Τοπογραφία Δίον",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/_10.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [2503583.702580, 4890555.040244, 2503996.540634, 4890855.859186]
                            })
                        });
var lyr__11 = new ol.layer.Image({
                            opacity: 1,
                            title: "Τοπογραφία Σταυρός",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/_11.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [2483047.489375, 4948038.768244, 2484505.077584, 4948935.373256]
                            })
                        });
var format__12 = new ol.format.GeoJSON();
var features__12 = format__12.readFeatures(json__12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__12.addFeatures(features__12);
var lyr__12 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource__12, 
                style: style__12,
                interactive: true,
                title: '<img src="styles/legend/_12.png" /> Περιοχές Έρευνας'
            });
var format__13 = new ol.format.GeoJSON();
var features__13 = format__13.readFeatures(json__13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__13.addFeatures(features__13);
var lyr__13 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource__13, 
                style: style__13,
                interactive: true,
                title: '<img src="styles/legend/_13.png" /> Όρια αγροκτημάτων'
            });

lyr__0.setVisible(true);lyr__1.setVisible(true);lyr__2.setVisible(true);lyr__3.setVisible(true);lyr__4.setVisible(true);lyr__5.setVisible(true);lyr__6.setVisible(true);lyr__7.setVisible(true);lyr__8.setVisible(true);lyr__9.setVisible(true);lyr__10.setVisible(true);lyr__11.setVisible(true);lyr__12.setVisible(true);lyr__13.setVisible(true);
var layersList = [lyr__0,lyr__1,lyr__2,lyr__3,lyr__4,lyr__5,lyr__6,lyr__7,lyr__8,lyr__9,lyr__10,lyr__11,lyr__12,lyr__13];
lyr__2.set('fieldAliases', {'trap_id': 'trap_id', 'total_haly': 'total_haly', '2021': '2021', '2022': '2022', });
lyr__3.set('fieldAliases', {'Id': 'Id', 'trap_id': 'trap_id', 'total': 'total', '2021': '2021', '2022': '2022', });
lyr__4.set('fieldAliases', {'Id': 'Id', 'POINT_X': 'POINT_X', 'POINT_Y': 'POINT_Y', 'total': 'total', '2021': '2021', '2022': '2022', });
lyr__5.set('fieldAliases', {'Id': 'Id', 'POINT_X': 'POINT_X', 'POINT_Y': 'POINT_Y', 'total': 'total', '2021': '2021', '2022': '2022', });
lyr__6.set('fieldAliases', {'trap_id': 'trap_id', 'total': 'total', '2021': '2021', '2022': '2022', });
lyr__12.set('fieldAliases', {'Location': 'Location', });
lyr__13.set('fieldAliases', {'Date': 'Date', 'Type': 'Type', 'position': 'position', 'L1': 'L1', 'L2': 'L2', 'L3': 'L3', 'L4': 'L4', 'L5': 'L5', 'mature': 'mature', 'small': 'small', 'total': 'total', 'idn': 'idn', 'OID_': 'OID_', 'Name': 'Name', 'FolderPath': 'FolderPath', 'SymbolID': 'SymbolID', 'AltMode': 'AltMode', 'Base': 'Base', 'Clamped': 'Clamped', 'Extruded': 'Extruded', 'Snippet': 'Snippet', 'PopupInfo': 'PopupInfo', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'layer': 'layer', 'path': 'path', });
lyr__2.set('fieldImages', {'trap_id': 'Range', 'total_haly': 'TextEdit', '2021': 'TextEdit', '2022': 'TextEdit', });
lyr__3.set('fieldImages', {'Id': 'Range', 'trap_id': 'Range', 'total': 'TextEdit', '2021': 'TextEdit', '2022': 'TextEdit', });
lyr__4.set('fieldImages', {'Id': 'Range', 'POINT_X': 'TextEdit', 'POINT_Y': 'TextEdit', 'total': 'TextEdit', '2021': 'TextEdit', '2022': 'TextEdit', });
lyr__5.set('fieldImages', {'Id': 'Range', 'POINT_X': 'TextEdit', 'POINT_Y': 'TextEdit', 'total': 'TextEdit', '2021': 'TextEdit', '2022': 'TextEdit', });
lyr__6.set('fieldImages', {'trap_id': 'Range', 'total': 'TextEdit', '2021': 'TextEdit', '2022': 'TextEdit', });
lyr__12.set('fieldImages', {'Location': 'TextEdit', });
lyr__13.set('fieldImages', {'Date': 'DateTime', 'Type': 'TextEdit', 'position': 'Range', 'L1': 'Range', 'L2': 'Range', 'L3': 'Range', 'L4': 'Range', 'L5': 'Range', 'mature': 'Range', 'small': 'Range', 'total': 'Range', 'idn': 'Range', 'OID_': 'TextEdit', 'Name': 'TextEdit', 'FolderPath': 'TextEdit', 'SymbolID': 'TextEdit', 'AltMode': 'Range', 'Base': 'TextEdit', 'Clamped': 'Range', 'Extruded': 'Range', 'Snippet': 'TextEdit', 'PopupInfo': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr__2.set('fieldLabels', {'trap_id': 'no label', 'total_haly': 'no label', '2021': 'inline label', '2022': 'inline label', });
lyr__3.set('fieldLabels', {'Id': 'no label', 'trap_id': 'no label', 'total': 'no label', '2021': 'inline label', '2022': 'inline label', });
lyr__4.set('fieldLabels', {'Id': 'no label', 'POINT_X': 'no label', 'POINT_Y': 'no label', 'total': 'no label', '2021': 'inline label', '2022': 'inline label', });
lyr__5.set('fieldLabels', {'Id': 'no label', 'POINT_X': 'no label', 'POINT_Y': 'no label', 'total': 'no label', '2021': 'inline label', '2022': 'inline label', });
lyr__6.set('fieldLabels', {'trap_id': 'no label', 'total': 'no label', '2021': 'inline label', '2022': 'inline label', });
lyr__12.set('fieldLabels', {'Location': 'inline label', });
lyr__13.set('fieldLabels', {'Date': 'no label', 'Type': 'no label', 'position': 'no label', 'L1': 'no label', 'L2': 'no label', 'L3': 'no label', 'L4': 'no label', 'L5': 'no label', 'mature': 'no label', 'small': 'no label', 'total': 'no label', 'idn': 'no label', 'OID_': 'no label', 'Name': 'no label', 'FolderPath': 'no label', 'SymbolID': 'no label', 'AltMode': 'no label', 'Base': 'no label', 'Clamped': 'no label', 'Extruded': 'no label', 'Snippet': 'no label', 'PopupInfo': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr__13.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});