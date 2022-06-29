/**
 * Build Order:
 * You are given a list of projects and a list of dependencies
 * (which is a list of pairs of projects, where the second project is dependent on the first project).
 * All of a project's dependencies must be built before the project is.
 * Find a build order that will allow the projects to be built. If there is no valid build order,
 * return an error.
 * EXAMPLE
 * Input:
 * - projects: a, b, c, d, e, f
 * - dependencies: (a, d), (f, b), (b, d), (f, a), (d, c)
 * Output: f, e, a, b, d, c
 */

const projects = ['a', 'b', 'c', 'd', 'e', 'f'];
const dependencies= [['a','d'], ['f', 'b'], ['b','d'], ['f','a'], ['d','c']];

const dependencyTree = new Map();

function addNode (value) {
    dependencyTree.set(value, []);
}

function addChild (child, parent) {
    dependencyTree.get(parent).push(child);
}

projects.forEach((project) => addNode(project));
dependencies.forEach((dependencie) => addChild(...dependencie));

console.log('Dependency Tree: ', dependencyTree);

const buildOrder = [];

while (projects.length) {
    let project = projects.pop();

    dependencyTree
        .get(project)
        .forEach((dependency) => {
            if (!dependency) return;
            if (!buildOrder.includes(dependency)) {
                buildOrder.push(dependency);
            }
        });

    if (!buildOrder.includes(project)) {
        buildOrder.push(project);
    }
}

console.log('Build Order: ', buildOrder);