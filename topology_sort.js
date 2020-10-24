class JobGraph {
   constructor(jobs) {
      // [ JobNode { job: 1, prereqs: [], visited: false, visiting: false },
      //   JobNode { job: 2, prereqs: [Array], visited: false, visiting: false }, ...]
      this.nodes = []; 
      // { '1':
       //    JobNode { job: 1, prereqs: [], visited: false, visiting: false },
      //   '2':
      //    JobNode { job: 2, prereqs: [Array], visited: false, visiting: false },... }           
      this.graph = {}; 

      // Create the JobNode and the represented graph
      for (const job of jobs) {
         this.addNode(job);
      }
   }

   addNode(job) {
      this.graph[job] = new JobNode(job);
      this.nodes.push(this.graph[job]);
   }

   getJobNode(job) {
      if (!(job in this.graph)) this.addNode(job);
      return this.graph[job];
   }

   // Add a prereq to a job
   addPrereq(prereq, job) {
      const jobNode = this.getJobNode(job);
      const prereqNode = this.getJobNode(prereq);
      jobNode.prereqs.push(prereqNode);
   }
}

class JobNode {
   constructor(job) {
      this.job = job;
      this.prereqs = [];
      this.visitState = '';      
   }
}

// Create a graph data structure to represents the jobs and its dependencies
// params: 
// jobs: List of jobs: array
// deps: List of job dependencies: 2D array 
const createJobGraph = (jobs, deps) => {
   const jobGraph = new JobGraph(jobs);
   for (const [prereq, job] of deps) {
      jobGraph.addPrereq(prereq, job);
   }
   return jobGraph;
}

/** 

/** Logic to create ordered jobs  */ 
/*
Method 1: 
For each of the job, traverse back the prereqs. If while traversing,
it came back to the previous job that is in the process (visited = 'visiting'), 
then there's a cycle. Return early in this case. 
Otherwise add that job to the result and keep traversing the rest.
*/
const createOrderedJobs = (jobGraph) => {   
   let orderedJobs = [];

   for (const NodeJob of jobGraph.nodes) {
      containCycle = dfsJobGraph(NodeJob, orderedJobs);
      if (containCycle) return [];    // return early if there is a cycle  
   }
   return orderedJobs;
}

const dfsJobGraph = (NodeJob, orderedJobs) => {
   if (NodeJob.visitState === 'visited') return false;
   // if while travering the prereq, it came back to previous visiting job, 
   // that means there is a cycle
   if (NodeJob.visitState === 'visiting') return true;

   NodeJob.visitState = 'visiting';
   for (const prereq of NodeJob.prereqs) {
      let containCycle = dfsJobGraph(prereq, orderedJobs);
      if (containCycle) return true;
      
   }
   orderedJobs.push(NodeJob.job);
   NodeJob.visitState = 'visited';
   return false;
}

const topologySortJobs = (jobs, deps) => {
   const jobGraph = createJobGraph(jobs, deps);
   return createOrderedJobs(jobGraph);
}

let jobs = [1, 2, 3, 4];
let deps = [
   [1, 2],
   [1, 3],
   [3, 2],
   [4, 2],
   [4, 3],
];

console.log(topologySortJobs(jobs, deps));
