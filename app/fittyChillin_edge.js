/*jslint */
/*global AdobeEdge: false, window: false, document: false, console:false, alert: false */
(function (compId) {

    "use strict";
    var im='images/',
        aud='media/',
        vid='media/',
        js='js/',
        fonts = {
        },
        opts = {
            'gAudioPreloadPreference': 'auto',
            'gVideoPreloadPreference': 'auto'
        },
        resources = [
        ],
        scripts = [
        ],
        symbols = {
            "stage": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "horizontal",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'background',
                            type: 'image',
                            rect: ['-3px', '117px', '556px', '283px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"background.png",'0px','0px']
                        },
                        {
                            id: 'fittyChillin_body',
                            symbolName: 'fittyChillin',
                            type: 'rect',
                            rect: ['48px', '96px', '453px', '207px', 'auto', 'auto']
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: [undefined, undefined, '550px', '400px'],
                            overflow: 'hidden',
                            fill: ["rgba(255,255,255,1)"]
                        }
                    }
                },
                timeline: {
                    duration: 1666.6666666667,
                    autoPlay: true,
                    data: [
                        [
                            "eid70",
                            "left",
                            0,
                            0,
                            "linear",
                            "${fittyChillin_body}",
                            '48px',
                            '48px'
                        ],
                        [
                            "eid71",
                            "top",
                            0,
                            0,
                            "linear",
                            "${fittyChillin_body}",
                            '96px',
                            '96px'
                        ]
                    ]
                }
            },
            "fittyChillin": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'fittyChillin',
                            type: 'image',
                            rect: ['0px', '0px', '2048px', '4096px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/fittyChillin.png', '0px', '0px', '2048px', '4096px', 'no-repeat']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '453px', '207px']
                        }
                    }
                },
                timeline: {
                    duration: 1666,
                    autoPlay: true,
                    data: [
                        [
                            "eid6",
                            "left",
                            125,
                            0,
                            "linear",
                            "${fittyChillin}",
                            '0px',
                            '1px'
                        ],
                        [
                            "eid12",
                            "left",
                            250,
                            0,
                            "linear",
                            "${fittyChillin}",
                            '1px',
                            '2px'
                        ],
                        [
                            "eid17",
                            "left",
                            375,
                            0,
                            "linear",
                            "${fittyChillin}",
                            '2px',
                            '3px'
                        ],
                        [
                            "eid20",
                            "left",
                            416,
                            0,
                            "linear",
                            "${fittyChillin}",
                            '3px',
                            '2px'
                        ],
                        [
                            "eid25",
                            "left",
                            541,
                            0,
                            "linear",
                            "${fittyChillin}",
                            '2px',
                            '1px'
                        ],
                        [
                            "eid32",
                            "left",
                            708,
                            0,
                            "linear",
                            "${fittyChillin}",
                            '1px',
                            '0px'
                        ],
                        [
                            "eid50",
                            "left",
                            1208,
                            0,
                            "linear",
                            "${fittyChillin}",
                            '0px',
                            '1px'
                        ],
                        [
                            "eid53",
                            "left",
                            1250,
                            0,
                            "linear",
                            "${fittyChillin}",
                            '1px',
                            '0px'
                        ],
                        [
                            "eid3",
                            "background-position",
                            0,
                            0,
                            "linear",
                            "${fittyChillin}",
                            [0,0],
                            [-0,-0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid4",
                            "background-position",
                            41,
                            0,
                            "linear",
                            "${fittyChillin}",
                            [-0,-0],
                            [-452,-0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid5",
                            "background-position",
                            83,
                            0,
                            "linear",
                            "${fittyChillin}",
                            [-452,-0],
                            [-904,-0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid8",
                            "background-position",
                            125,
                            0,
                            "linear",
                            "${fittyChillin}",
                            [-904,-0],
                            [-1356,-0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid10",
                            "background-position",
                            166,
                            0,
                            "linear",
                            "${fittyChillin}",
                            [-1356,-0],
                            [-0,-207],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid11",
                            "background-position",
                            208,
                            0,
                            "linear",
                            "${fittyChillin}",
                            [-0,-207],
                            [-452,-207],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid14",
                            "background-position",
                            250,
                            0,
                            "linear",
                            "${fittyChillin}",
                            [-452,-207],
                            [-904,-207],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid15",
                            "background-position",
                            291,
                            0,
                            "linear",
                            "${fittyChillin}",
                            [-904,-207],
                            [-1355,-207],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid16",
                            "background-position",
                            333,
                            0,
                            "linear",
                            "${fittyChillin}",
                            [-1355,-207],
                            [-0,-414],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid19",
                            "background-position",
                            375,
                            0,
                            "linear",
                            "${fittyChillin}",
                            [-0,-414],
                            [-451,-414],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid22",
                            "background-position",
                            416,
                            0,
                            "linear",
                            "${fittyChillin}",
                            [-451,-414],
                            [-901,-414],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid23",
                            "background-position",
                            458,
                            0,
                            "linear",
                            "${fittyChillin}",
                            [-901,-414],
                            [-1352,-414],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid24",
                            "background-position",
                            500,
                            0,
                            "linear",
                            "${fittyChillin}",
                            [-1352,-414],
                            [-0,-621],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid27",
                            "background-position",
                            541,
                            0,
                            "linear",
                            "${fittyChillin}",
                            [-0,-621],
                            [-451,-621],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid28",
                            "background-position",
                            583,
                            0,
                            "linear",
                            "${fittyChillin}",
                            [-451,-621],
                            [-903,-621],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid29",
                            "background-position",
                            625,
                            0,
                            "linear",
                            "${fittyChillin}",
                            [-903,-621],
                            [-1355,-621],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid31",
                            "background-position",
                            666,
                            0,
                            "linear",
                            "${fittyChillin}",
                            [-1355,-621],
                            [-0,-828],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid34",
                            "background-position",
                            708,
                            0,
                            "linear",
                            "${fittyChillin}",
                            [-0,-828],
                            [-451,-828],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid35",
                            "background-position",
                            750,
                            0,
                            "linear",
                            "${fittyChillin}",
                            [-451,-828],
                            [-903,-828],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid36",
                            "background-position",
                            791,
                            0,
                            "linear",
                            "${fittyChillin}",
                            [-903,-828],
                            [-0,-0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid38",
                            "background-position",
                            833,
                            0,
                            "linear",
                            "${fittyChillin}",
                            [-0,-0],
                            [-1355,-828],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid39",
                            "background-position",
                            875,
                            0,
                            "linear",
                            "${fittyChillin}",
                            [-1355,-828],
                            [-0,-1035],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid40",
                            "background-position",
                            916,
                            0,
                            "linear",
                            "${fittyChillin}",
                            [-0,-1035],
                            [-451,-1035],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid42",
                            "background-position",
                            958,
                            0,
                            "linear",
                            "${fittyChillin}",
                            [-451,-1035],
                            [-902,-1035],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid43",
                            "background-position",
                            1000,
                            0,
                            "linear",
                            "${fittyChillin}",
                            [-902,-1035],
                            [-1352,-1035],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid45",
                            "background-position",
                            1041,
                            0,
                            "linear",
                            "${fittyChillin}",
                            [-1352,-1035],
                            [-0,-1242],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid46",
                            "background-position",
                            1083,
                            0,
                            "linear",
                            "${fittyChillin}",
                            [-0,-1242],
                            [-449,-1242],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid48",
                            "background-position",
                            1125,
                            0,
                            "linear",
                            "${fittyChillin}",
                            [-449,-1242],
                            [-898,-1242],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid49",
                            "background-position",
                            1166,
                            0,
                            "linear",
                            "${fittyChillin}",
                            [-898,-1242],
                            [-1346,-1242],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid52",
                            "background-position",
                            1208,
                            0,
                            "linear",
                            "${fittyChillin}",
                            [-1346,-1242],
                            [-0,-1449],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid55",
                            "background-position",
                            1250,
                            0,
                            "linear",
                            "${fittyChillin}",
                            [-0,-1449],
                            [-446,-1449],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid56",
                            "background-position",
                            1291,
                            0,
                            "linear",
                            "${fittyChillin}",
                            [-446,-1449],
                            [-894,-1449],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid58",
                            "background-position",
                            1333,
                            0,
                            "linear",
                            "${fittyChillin}",
                            [-894,-1449],
                            [-1342,-1449],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid59",
                            "background-position",
                            1375,
                            0,
                            "linear",
                            "${fittyChillin}",
                            [-1342,-1449],
                            [-0,-1656],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid60",
                            "background-position",
                            1416,
                            0,
                            "linear",
                            "${fittyChillin}",
                            [-0,-1656],
                            [-449,-1656],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid62",
                            "background-position",
                            1458,
                            0,
                            "linear",
                            "${fittyChillin}",
                            [-449,-1656],
                            [-898,-1656],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid63",
                            "background-position",
                            1500,
                            0,
                            "linear",
                            "${fittyChillin}",
                            [-898,-1656],
                            [-1348,-1656],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid65",
                            "background-position",
                            1541,
                            0,
                            "linear",
                            "${fittyChillin}",
                            [-1348,-1656],
                            [-0,-1863],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid66",
                            "background-position",
                            1583,
                            0,
                            "linear",
                            "${fittyChillin}",
                            [-0,-1863],
                            [-451,-1863],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid67",
                            "background-position",
                            1625,
                            0,
                            "linear",
                            "${fittyChillin}",
                            [-451,-1863],
                            [-902,-1863],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid69",
                            "background-position",
                            1666,
                            0,
                            "linear",
                            "${fittyChillin}",
                            [-902,-1863],
                            [-0,-0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid1",
                            "height",
                            0,
                            0,
                            "linear",
                            "${fittyChillin}",
                            '0px',
                            '207px'
                        ],
                        [
                            "eid2",
                            "width",
                            0,
                            0,
                            "linear",
                            "${fittyChillin}",
                            '0px',
                            '452px'
                        ],
                        [
                            "eid7",
                            "width",
                            125,
                            0,
                            "linear",
                            "${fittyChillin}",
                            '452px',
                            '451px'
                        ],
                        [
                            "eid9",
                            "width",
                            166,
                            0,
                            "linear",
                            "${fittyChillin}",
                            '451px',
                            '452px'
                        ],
                        [
                            "eid13",
                            "width",
                            250,
                            0,
                            "linear",
                            "${fittyChillin}",
                            '452px',
                            '451px'
                        ],
                        [
                            "eid18",
                            "width",
                            375,
                            0,
                            "linear",
                            "${fittyChillin}",
                            '451px',
                            '450px'
                        ],
                        [
                            "eid21",
                            "width",
                            416,
                            0,
                            "linear",
                            "${fittyChillin}",
                            '450px',
                            '451px'
                        ],
                        [
                            "eid26",
                            "width",
                            541,
                            0,
                            "linear",
                            "${fittyChillin}",
                            '451px',
                            '452px'
                        ],
                        [
                            "eid30",
                            "width",
                            666,
                            0,
                            "linear",
                            "${fittyChillin}",
                            '452px',
                            '451px'
                        ],
                        [
                            "eid33",
                            "width",
                            708,
                            0,
                            "linear",
                            "${fittyChillin}",
                            '451px',
                            '452px'
                        ],
                        [
                            "eid37",
                            "width",
                            833,
                            0,
                            "linear",
                            "${fittyChillin}",
                            '452px',
                            '451px'
                        ],
                        [
                            "eid41",
                            "width",
                            958,
                            0,
                            "linear",
                            "${fittyChillin}",
                            '451px',
                            '450px'
                        ],
                        [
                            "eid44",
                            "width",
                            1041,
                            0,
                            "linear",
                            "${fittyChillin}",
                            '450px',
                            '449px'
                        ],
                        [
                            "eid47",
                            "width",
                            1125,
                            0,
                            "linear",
                            "${fittyChillin}",
                            '449px',
                            '448px'
                        ],
                        [
                            "eid51",
                            "width",
                            1208,
                            0,
                            "linear",
                            "${fittyChillin}",
                            '448px',
                            '446px'
                        ],
                        [
                            "eid54",
                            "width",
                            1250,
                            0,
                            "linear",
                            "${fittyChillin}",
                            '446px',
                            '448px'
                        ],
                        [
                            "eid57",
                            "width",
                            1333,
                            0,
                            "linear",
                            "${fittyChillin}",
                            '448px',
                            '449px'
                        ],
                        [
                            "eid61",
                            "width",
                            1458,
                            0,
                            "linear",
                            "${fittyChillin}",
                            '449px',
                            '450px'
                        ],
                        [
                            "eid64",
                            "width",
                            1541,
                            0,
                            "linear",
                            "${fittyChillin}",
                            '450px',
                            '451px'
                        ],
                        [
                            "eid68",
                            "width",
                            1666,
                            0,
                            "linear",
                            "${fittyChillin}",
                            '451px',
                            '452px'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("fittyChillin_edgeActions.js");
})("fittyChillin");
