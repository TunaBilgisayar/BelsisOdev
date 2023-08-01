const raster = new ol.layer.Tile({
    source: new ol.source.OSM({}),
});
const source = new ol.source.Vector();
const vector = new ol.layer.Vector({
    source: source,
    style: new ol.style.Style({
        fill: new ol.style.Fill({ //polygon icin
            color: 'rgba(255, 255, 255, 0.5)',
        }),
        stroke: new ol.style.Stroke({ //dis cizgiler icin
            color: 'red',
            width: 2,
        }),
        image: new ol.style.Circle({
            radius: 7,
            fill: new ol.style.Fill({ //point icin
                color: '#ffcc33',
            }),
        }),
    }),
});
var map = new ol.Map({
    layers: [raster, vector],
    target: 'map',
    view: new ol.View({
        center: ol.proj.fromLonLat([0, 0]),
        zoom: 2
    })
});



let draw;
const typeSelect = "Point";
function addInteractions() {
    draw = new ol.interaction.Draw({
        source: source,
        type: typeSelect,
    });
    map.addInteraction(draw);


}
addInteractions();
let draw1;
const newtypeSelect = "Circle";
function addInteractions() {
    draw1 = new ol.interaction.Circle({
        source: source,
        type: newtypeSelect,
    });
    map.addInteraction(draw1);
}

addInteractions();
/*tuna*/