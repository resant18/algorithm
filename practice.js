
function pathFinder(directories, targetFile) {
   for (let dirname in directories) {
      // base case
      if (dirname === targetFile) return "/" + dirname;

      let path = pathFinder(directories[dirname], targetFile);

      // if the target is not found in the path
      if (path !== null) {
         return dirname + path;
      }
   }

   return null;
}

let desktop = {
    '/images': {
        'app_academy_logo.svg': null,
        '/parks': {
            'yosemite.jpeg': null,
            'acadia.jpeg': null,
            'yellowstone.png': null
        },
        '/pets': {
            'trixie_lou.jpeg': null,
            'rolo.jpeg': null,
            'opal.jpeg': null,
            'diana.jpeg': null,
        }
    },
    '/music': {
        'hey_programmers.mp3': null,
        '/genres': {
            '/rock': {
                'everlong.flac': null,
                'livin_on_a_prayer.mp3': null
            },
            '/hip_hop': {
                'express_yourself.wav': null,
                'ny_state_of_mind.mp3': null
            }
        }
    }
};

console.log(pathFinder(desktop, "yellowstone.png"));