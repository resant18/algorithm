const util = require("./util");
const chai = require("chai");
const { expect } = chai;

const {
   lucasNumberMemo,
   sumArray,
   reverseString,
   pow,
   flatten,
   fileFinder,
   pathFinder,
   minChange
} = require("../lib/problems");

describe("lucasNumberMemo(n)", () => {
   it("should calculate the n-th number of the lucas sequence", () => {
      util.catchStackOverflow(lucasNumberMemo, 10);

      expect(lucasNumberMemo(0)).to.equal(2);
      expect(lucasNumberMemo(1)).to.equal(1);
      expect(lucasNumberMemo(5)).to.equal(11);
      expect(lucasNumberMemo(9)).to.equal(76);
   });

   it("should use memoization", () => {
      util.catchStackOverflow(lucasNumberMemo, 10);

      let memo = { key: "value" };
      expect(lucasNumberMemo("key", memo)).to.equal("value");
   });

   context("when the input is large", () => {
      it("runtime should not grow exponentially", () => {
         util.catchStackOverflow(lucasNumberMemo, 10);

         expect(lucasNumberMemo(40)).to.equal(228826127);
         expect(lucasNumberMemo(41)).to.equal(370248451);
         expect(lucasNumberMemo(42)).to.equal(599074578);
      });
   });
});

describe("sumArray(array)", () => {
   it("should return the sum of the elements in the array", () => {
      util.catchStackOverflow(sumArray, [5, 2]);

      expect(sumArray([])).to.equal(0);
      expect(sumArray([5])).to.equal(5);
      expect(sumArray([5, 2])).to.equal(7);
      expect(sumArray([4, 10, -1, 2])).to.equal(15);
   });
});

describe("reverseString(str)", () => {
   it("should return string with the characters in reverse order", () => {
      util.catchStackOverflow(reverseString, "abc");

      expect(reverseString("")).to.equal("");
      expect(reverseString("c")).to.equal("c");
      expect(reverseString("internet")).to.equal("tenretni");
      expect(reverseString("friends")).to.equal("sdneirf");
   });
});

describe("pow(base, exponent)", () => {
   it("should return 1 when the exponent is 0", () => {
      util.catchStackOverflow(pow, 2, 0);

      expect(pow(2, 0)).to.equal(1);
      expect(pow(7, 0)).to.equal(1);
   });

   it("should calculate `base` raised to the `exponent` power", () => {
      util.catchStackOverflow(pow, 2, 5);

      expect(pow(2, 5)).to.equal(32);
      expect(pow(5, 2)).to.equal(25);
      expect(pow(2, 4)).to.equal(16);
   });

   it("should correctly calculate negative exponents", () => {
      util.catchStackOverflow(pow, 2, -5);

      expect(pow(2, -5)).to.equal(0.03125);
      expect(pow(4, -3)).to.equal(0.015625);
   });
});

describe("flatten(data)", () => {
   it("should return the array in 1-dimensional flattened form", () => {
      array_1 = [
         1,
         2,
         [
            [3, 4],
            [5, [6]]
         ],
         [7, 8]
      ];
      util.catchStackOverflow(flatten, array_1);

      expect(flatten(array_1)).to.eql([1, 2, 3, 4, 5, 6, 7, 8]);

      array_2 = ["this", ["problem", "is"], [["pretty", "tough"], [[":)"]]]];
      expect(flatten(array_2)).to.eql(["this", "problem", "is", "pretty", "tough", ":)"]);
   });
});

describe("fileFinder(directories, targetFile)", () => {
   let desktop = {
      "/images": {
         "app_academy_logo.svg": null,
         "/parks": {
            "yosemite.jpeg": null,
            "acadia.jpeg": null,
            "yellowstone.png": null
         },
         "/pets": {
            "trixie_lou.jpeg": null,
            "rolo.jpeg": null,
            "opal.jpeg": null,
            "diana.jpeg": null
         }
      },
      "/music": {
         "hey_programmers.mp3": null,
         "/genres": {
            "/rock": {
               "everlong.flac": null,
               "livin_on_a_prayer.mp3": null
            },
            "/hip_hop": {
               "express_yourself.wav": null,
               "ny_state_of_mind.mp3": null
            }
         }
      }
   };

   let curriculum = {
      "/javascript": {
         "/week_1": {
            "/day_1": {
               "/readings": {
                  "intro_to_recursion.md": null,
                  "fibonacci_example.txt": null
               },
               "/projects": {
                  "/recursion_project": {
                     "/lib": {
                        "problems.js": null
                     },
                     "/test": {
                        "test.js": null
                     }
                  }
               }
            }
         }
      }
   };

   context("when the file is found in the directories", () => {
      it("should return true", () => {
         expect(fileFinder(desktop, "app_academy_logo.svg")).to.equal(true);
         expect(fileFinder(desktop, "everlong.flac")).to.equal(true);
         expect(fileFinder(curriculum, "problems.js")).to.equal(true);
         expect(fileFinder(curriculum, "intro_to_recursion.md")).to.equal(true);
      });
   });

   context("when the file is not found in the directories", () => {
      it("should return false", () => {
         expect(fileFinder(desktop, "never_gonna_give_you_up.flac")).to.equal(false);
         expect(fileFinder(curriculum, "recursion_project.js")).to.equal(false);
      });
   });
});

describe("pathFinder(directories, targetFile)", () => {
   let desktop = {
      "/images": {
         "app_academy_logo.svg": null,
         "/parks": {
            "yosemite.jpeg": null,
            "acadia.jpeg": null,
            "yellowstone.png": null
         },
         "/pets": {
            "trixie_lou.jpeg": null,
            "rolo.jpeg": null,
            "opal.jpeg": null,
            "diana.jpeg": null
         }
      },
      "/music": {
         "hey_programmers.mp3": null,
         "/genres": {
            "/rock": {
               "everlong.flac": null,
               "livin_on_a_prayer.mp3": null
            },
            "/hip_hop": {
               "express_yourself.wav": null,
               "ny_state_of_mind.mp3": null
            }
         }
      }
   };

   let curriculum = {
      "/javascript": {
         "/week_1": {
            "/day_1": {
               "/readings": {
                  "intro_to_recursion.md": null,
                  "fibonacci_example.txt": null
               },
               "/projects": {
                  "/recursion_project": {
                     "/lib": {
                        "problems.js": null
                     },
                     "/test": {
                        "test.js": null
                     }
                  }
               }
            }
         }
      }
   };

   context("when the file is found in the directories", () => {
      it("should return the path", () => {
         expect(pathFinder(desktop, "app_academy_logo.svg")).to.equal("/images/app_academy_logo.svg");
         expect(pathFinder(desktop, "everlong.flac")).to.equal("/music/genres/rock/everlong.flac");
         expect(pathFinder(curriculum, "problems.js")).to.equal(
            "/javascript/week_1/day_1/projects/recursion_project/lib/problems.js"
         );
         expect(pathFinder(curriculum, "intro_to_recursion.md")).to.equal(
            "/javascript/week_1/day_1/readings/intro_to_recursion.md"
         );
      });
   });

   context("when the file is not found in the directories", () => {
      it("should return null", () => {
         expect(pathFinder(desktop, "never_gonna_give_you_up.flac")).to.equal(null);
         expect(pathFinder(curriculum, "recursion_project.js")).to.equal(null);
      });
   });
});

describe("minChange(coins, amount)", () => {
   it("it should return the minimum number of coins needed to make the amount", () => {
      util.catchStackOverflow(minChange, [1, 2, 5], 11);

      expect(minChange([1, 2, 5], 11)).to.equal(3);
      expect(minChange([1, 4, 5], 8)).to.equal(2);
      expect(minChange([1, 5, 10, 25], 15)).to.equal(2);
      expect(minChange([1, 2, 5], 0)).to.equal(0);
      expect(minChange([83, 186, 408, 419], 6249)).to.equal(20);
   });

   context("when the input is large", () => {
      it("runtime should not grow exponentially", () => {
         util.catchStackOverflow(minChange, [1, 2, 5], 11);

         expect(minChange([1, 5, 10, 25], 100)).to.equal(4);
      });
   });
});

describe("Leet Code #518 - Coin Change 2", () => {
   it("https://leetcode.com/problems/coin-change-2/");
});
