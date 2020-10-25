/**
 * Method 2:
 * - This method traverse arbitrarily based on nodes that does not have prereqs.
 * - Track the dependencies and num of prereqs
 * 
 * Pseudocode:
 * - Store any node that does not have prereq to the a variable (noPrereqsNode).
 * - For each node in noPrereqsNode:
 *   - Pop it out and remove the dependencies of the node.
 *     - While remove each node from the dependencies list:
 *       - Remove the node from dependencies list
 *       - Decrease the depNode's prereqs, with note if the depNode has no prereqs, push it to noPrereqsNode
 * - Check cycle: if there is node in the graph that has edges (numPrereqs > 0), there's a cycle.
 * @class JobGraph
 */
class JobGraph {
   constructor(jobs) {
      this.nodes = [];
      this.graph = {};

      for (const job of jobs) {
         this.addJobNode(job);
      }
   }

   addJobNode(job) {
      let jobNode = new JobNode(job);
      this.nodes.push(jobNode);
      this.graph[job] = jobNode;
   }

   getJobNode(job) {
      if (!(job in this.graph)) this.addJobNode(job);
      return this.graph[job];
   }

   addDep(job, dep) {
      let jobNode = this.getJobNode(job);
      let depNode = this.getJobNode(dep);
      jobNode.deps.push(depNode);
      depNode.numOfPrereqs++;
   }   
}

class JobNode {
   constructor(job) {
      this.job = job;
      this.deps = [];
      this.numOfPrereqs = 0;
   }
}

const createJobGraph = (jobs, deps) => {
   let jobGraph = new JobGraph(jobs);
   for (const [job, dep] of deps) {
      jobGraph.addDep(job, dep);
   }
   return jobGraph;
}

const createOrderedJobs = (jobGraph) => {
   let orderedJobs = [];
   let noPrereqJobs = jobGraph.nodes.filter((jobNode) => jobNode.numOfPrereqs === 0);

   while (noPrereqJobs.length) {
      let noPrereqJob = noPrereqJobs.pop();
      orderedJobs.push(noPrereqJob.job);
      removeDeps(noPrereqJob, noPrereqJobs);
   }

   // If graph still has edges (indicated by prereqs > 0)
   // that means there is a cycle
   // The some() method tests whether at least one element in the array 
   // passes the test implemented by the provided function
   let jobGraphHasEdges = jobGraph.nodes.some((jobNode) => jobNode.numOfPrereqs > 0);

   // if jobGraphHasEdges has value meaning there is a cycle, return []
   // otherwise orderedJobs is the valid answer
   return jobGraphHasEdges ? [] : orderedJobs;
}

const removeDeps = (noPrereqJob, noPrereqJobs) => {
   while (noPrereqJob.deps.length) {
      let depNode = noPrereqJob.deps.pop();
      depNode.numOfPrereqs--;
      if (depNode.numOfPrereqs === 0) noPrereqJobs.push(depNode);
   }
};

const topologySortJobs = (jobs, deps) => {
   const jobGraph = createJobGraph(jobs, deps);
   return createOrderedJobs(jobGraph);
};

let jobs = [1, 2, 3, 4];
let deps = [
   [1, 2],
   [1, 3],
   [3, 2],
   [4, 2],
   [4, 3],
];

console.log(topologySortJobs(jobs, deps));