/*
Two pointer strategy
Move j until the char at index j is not the same as char at index i
*/

using System;
using System.Collections.Generic;

static void LargeGroupPositions(string s)
{
   IList<IList<int>> result = new List<IList<int>>();
   int i = 0; // start pointer              
   int j = 0; // end pointer

   while (j < s.Length)
   {
      // j == s.Length - 1 has to be the first condition 
      // to prevent out of range with index j
      if (j == s.Length - 1 || s[j] != s[j + 1])
      {
         if (j - i + 1 >= 3) result.Add(new int[] { i, j });
         i = j + 1;
      }

      j++;
   }

   foreach (var list in result)
   {      
      Console.Write("{");
      foreach (var element in list)
      {
         Console.Write(element + ", ");   
      }
      Console.Write("}, ");
   }
   Console.WriteLine();
}

LargeGroupPositions("a");
LargeGroupPositions("aaa");
LargeGroupPositions("aaabxxxcyy");   
