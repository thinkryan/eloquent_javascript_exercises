/**
 * Measure the robots footsteps between 2 different robots.
 */

const roads = [
    "Alice's House-Bob's House", "Alice's House-Cabin",
    "Alice's House-Post Office", "Bob's House-Town Hall",
    "Daria's House-Ernie's House", "Daria's House-Town Hall",
    "Ernie's House-Grete's House", "Grete's House-Farm",
    "Grete's House-Shop", "Marketplace-Farm",
    "Marketplace-Post Office", "Marketplace-Shop",
    "Marketplace-Town Hall", "Shop-Town Hall"
];

/**
 * Build our graph based on locations
 */
function buildGraph(edges) {
    let graph = Object.create(null);

    function addEdge(from, to) {
        if (graph[from] == null) {
            graph[from] = [to];
        } else {
            graph[from].push(to);
        }
    }

    /**
     * Loop through the edges array, map to a new array with a split on the - (from , to)
     */
    for (let [from, to] of edges.map(r => r.split("-"))) {
        addEdge(from, to);
        addEdge(to, from);
    }

    return graph;
}

/**
 * Build our destinations for the robot to walk through
 * @type {null}
 */
const roadGraph = buildGraph(roads);
console.log(roadGraph);

/**
 * Create our VillageState
 */
const VillageState = class VillageState {
    constructor(place, parcels) {
        this.place = place;
        this.parcels = parcels;
    }

    move(destination) {
        /**
         * If it doesn't include our destination, exit out
         */
        if (!roadGraph[this.place].includes(destination)) {
            return this;
        } else {
            let parcels = this.parcels.map(p => {
                if (p.place != this.place) return p;
                /**
                 * Count footsteps?
                 */
                return {place: destination, address: p.address};
            })
        }


    }
}

/**
 * @param state
 * @param robot
 * @param memory
 */
function runRobot(state, robot, memory) {
    for (let turn = 0; ; turn++) {
        if (state.parcels.length == 0) {
            console.log(`Done in ${turn} turns`);
            break;
        }
        let action = robot(state, memory);
        state = state.move(action.direction);
        memory = action.memory;
        console.log(`Moved to ${action.direction}`);
    }
}

/**
 * @param array
 * @returns {*}
 */
function randomPick(array) {
    let choice = Math.floor(Math.random() * array.length);
    return array[choice];
}

/**
 * @param state
 * @returns {{direction: *}}
 */
function randomRobot(state) {
    return {direction: randomPick(roadGraph[state.place])};
}

/**
 * @param parcelCount
 * @returns {VillageState}
 */
VillageState.random = function (parcelCount = 5) {
    let parcels = [];
    for (let i = 0; i < parcelCount; i++) {
        let address = randomPick(Object.keys(roadGraph));
        let place;
        do {
            place = randomPick(Object.keys(roadGraph));
        } while (place == address);
        parcels.push({place, address});
    }
    return new VillageState("Post Office", parcels);
};

const mailRoute = [
    "Alice's House", "Cabin", "Alice's House", "Bob's House",
    "Town Hall", "Daria's House", "Ernie's House",
    "Grete's House", "Shop", "Grete's House", "Farm",
    "Marketplace", "Post Office"
];

/**
 * @param state
 * @param memory
 * @returns {{memory: any[] | BigUint64Array | Uint8ClampedArray | Uint32Array | Blob | Int16Array | Float64Array | SharedArrayBuffer | string | Uint16Array | ArrayBuffer | Int32Array | Float32Array | BigInt64Array | Uint8Array | Int8Array, direction: *}}
 */
function routeRobot(state, memory) {
    if (memory.length == 0) {
        memory = mailRoute;
    }
    return {direction: memory[0], memory: memory.slice(1)};
}

/**
 * @param graph
 * @param from
 * @param to
 * @returns {*[]}
 */
function findRoute(graph, from, to) {
    let work = [{at: from, route: []}];
    for (let i = 0; i < work.length; i++) {
        let {at, route} = work[i];
        for (let place of graph[at]) {
            if (place == to) return route.concat(place);
            if (!work.some(w => w.at == place)) {
                work.push({at: place, route: route.concat(place)});
            }
        }
    }
}

/**
 * @param place
 * @param parcels
 * @param route
 * @returns {{memory: any[] | BigUint64Array | Uint8ClampedArray | Uint32Array | Blob | Int16Array | Float64Array | SharedArrayBuffer | string | Uint16Array | ArrayBuffer | Int32Array | Float32Array | BigInt64Array | Uint8Array | Int8Array, direction: *}}
 */
function goalOrientedRobot({place, parcels}, route) {
    if (route.length == 0) {
        let parcel = parcels[0];
        if (parcel.place != place) {
            route = findRoute(roadGraph, place, parcel.place);
        } else {
            route = findRoute(roadGraph, place, parcel.address);
        }
    }
    return {direction: route[0], memory: route.slice(1)};
}

/**
 * Count the steps a robot takes when delivering parcels
 * @param state
 * @param robot
 * @param memory
 * @returns {number}
 */
function countSteps(state, robot, memory) {
    for (let steps = 0; ; steps++) {
        if (state.parcels.length == 0) return steps;
        let action = robot(state, memory);
        state = state.move(action.direction);
        memory = action.memory;
    }
}

/**
 * Compare 2 different robots' footsteps
 * @param robot1
 * @param memory1
 * @param robot2
 * @param memory2
 */
function compareRobots(robot1, memory1, robot2, memory2) {
    let total1 = 0, total2 = 0;
    for (let i = 0; i < 100; i++) {
        let state = VillageState.random();
        total1 += countSteps(state, robot1, memory1);
        total2 += countSteps(state, robot2, memory2);
    }

    console.log(`Robot 1 walked ${total1 / 100} steps per task..`);
    console.log(`Robot 2 walked ${total2 / 100} steps per task..`);

}

// Run our comparison
console.log(compareRobots(routeRobot, [], goalOrientedRobot, []));