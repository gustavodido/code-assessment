const InitialState = {
    Questions: [
        { id: 1, label: 'Does the code have a build tool?', value: 0, category: "Operationalness" } ,
        { id: 2, label: 'Is bad inputs correctly validated?', value: 0, category: "Operationalness" }
    ],
    Categories: [
        "Operationalness",
        "Technical Depth",
        "Technical Breath",
        "Design",
        "Readability"
    ]
};

export default InitialState