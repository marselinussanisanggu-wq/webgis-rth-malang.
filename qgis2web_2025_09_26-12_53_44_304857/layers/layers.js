var wms_layers = [];

// ----------------- Basemap -----------------
var lyr_EsriWorldImagery_0 = new ol.layer.Tile({
    'title': 'Esri.WorldImagery',
    'opacity': 1.000000,
    source: new ol.source.XYZ({
        attributions: ' ',
        url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
    })
});

// ----------------- ADMINISTRASI DESA -----------------
var format_ADMINISTRASIDESA_AR_25K_1 = new ol.format.GeoJSON();
var features_ADMINISTRASIDESA_AR_25K_1 = format_ADMINISTRASIDESA_AR_25K_1.readFeatures(json_ADMINISTRASIDESA_AR_25K_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ADMINISTRASIDESA_AR_25K_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ADMINISTRASIDESA_AR_25K_1.addFeatures(features_ADMINISTRASIDESA_AR_25K_1);
var lyr_ADMINISTRASIDESA_AR_25K_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ADMINISTRASIDESA_AR_25K_1, 
                style: style_ADMINISTRASIDESA_AR_25K_1,
                interactive: true,
                title: '<img src="styles/legend/ADMINISTRASIDESA_AR_25K_1.png" /> ADMINISTRASIDESA_AR_25K'
});

// ----------------- ADMINISTRASI JALAN -----------------
var format_ADMINISTRASI_LN_25K_2 = new ol.format.GeoJSON();
var features_ADMINISTRASI_LN_25K_2 = format_ADMINISTRASI_LN_25K_2.readFeatures(json_ADMINISTRASI_LN_25K_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ADMINISTRASI_LN_25K_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ADMINISTRASI_LN_25K_2.addFeatures(features_ADMINISTRASI_LN_25K_2);
var lyr_ADMINISTRASI_LN_25K_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ADMINISTRASI_LN_25K_2, 
                style: style_ADMINISTRASI_LN_25K_2,
                interactive: true,
                title: '<img src="styles/legend/ADMINISTRASI_LN_25K_2.png" /> ADMINISTRASI_LN_25K'
});

// ----------------- Daftar Layer -----------------
var layersList = [
    lyr_EsriWorldImagery_0,
    lyr_ADMINISTRASIDESA_AR_25K_1,
    lyr_ADMINISTRASI_LN_25K_2
];
