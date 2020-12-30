using System;
using System.Collections.Generic;

namespace Fibonacci
{
    class Program
    {      
        static void Main(string[] args)
        {
            Fibonacci(20);
        }

        static void Fibonacci(int n)
        {
            var fiboNums = new List<int> { 1, 1 };
            int count = fiboNums.Count;
            while (count < n)
            {
                fiboNums.Add(fiboNums[count - 2] + fiboNums[count - 1]);
                count = fiboNums.Count;
            }

            foreach (int num in fiboNums)
            {
                Console.WriteLine(num);
            }
        }
    }
}
